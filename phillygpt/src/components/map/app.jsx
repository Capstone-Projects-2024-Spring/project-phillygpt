import React, { useState, useEffect, useCallback } from 'react';
import { responseCtx } from '../contex/responseCtx';
import { useContext } from 'react';

require('dotenv').config()


import {
  useJsApiLoader,
  InfoWindow,
  GoogleMap,
  InfoWindowF,
  MarkerF,
} from '@react-google-maps/api';

var marker = {
  longitude: number,
  latitude: number,
  text: string
}

const mapContainerStyle = {
  width: '900px',
  height: '600px',
};

const center = {
  lat: 39.9526, // default latitude for philadelphia
  lng: -75.1652, // default longitude for philadelphia
};

const createMarker = (record) => {
  let marker = {
        latitude : record['Y'] ?? 91,
        longitude : record['X'] ?? 181,
        text : "Here is additional textional information about the record: " + JSON.stringify(record)
  };
  return marker
};

const MapPage = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {

    map.setZoom(10)

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])


  const { responseDataSQL, resultDataSQL } = useContext(responseCtx); // Destructure resultDataSQL directly from context
  return isLoaded ? (
    <>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <div>
          {resultDataSQL?.map((createMarker)).map((marker) => <MarkerWithInfowindow longitude={marker.longitude} latitude={marker.latitude} text={marker.text} />)}
        </div>
      </GoogleMap>
    </>
  ) : <></>
};

export default MapPage;


const MarkerWithInfowindow = (props) => {
  const [infowindowOpen, setInfowindowOpen] = useState(false);
  const [activeMarker, setActiveMarker] = useState(null);

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };
  return (
    <>
      <MarkerF
        onClick={() => setInfowindowOpen(true)}
        position={{ lat: props.latitude, lng: props.longitude }}
        title={'AdvancedMarker that opens an Infowindow when clicked.'}
      >
        {infowindowOpen && (<InfoWindowF
          //  position={{lat: props.latitude, lng: props.longitude}}
          onCloseClick={() => setInfowindowOpen(false)
          }>
          <>
            {props.text}
          </>
        </InfoWindowF>)}
      </MarkerF>
    </>
  );
};