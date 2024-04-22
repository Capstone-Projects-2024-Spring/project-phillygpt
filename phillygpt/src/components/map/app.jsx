import React, { useState, useEffect, useCallback } from 'react';
import { responseCtx } from '../contex/responseCtx';
import { useContext } from 'react';
import axios from 'axios';

//require('dotenv').config()


import {
  useJsApiLoader,
  InfoWindow,
  GoogleMap,
  InfoWindowF,
  MarkerF,
} from '@react-google-maps/api';


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
  const {userInputQuery} = useContext(responseCtx); 
  return isLoaded ? (
    <>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <div>
          {resultDataSQL?.map((createMarker)).map((marker) => <MarkerWithInfowindow longitude={marker.longitude} latitude={marker.latitude} text={marker.text} user_input={userInputQuery} />)}
        </div>
      </GoogleMap>
    </>
  ) : <></>
};

export default MapPage;


const MarkerWithInfowindow = (props) => {

  const [clickedOnce, setClickedOnce] = useState(false); // Flag to track clicks
  const [myString, setMyString] = useState(props.text);
  const [infowindowOpen, setInfowindowOpen] = useState(false);

  const handleClick = () => {
    if (!clickedOnce) {
      setInfowindowOpen(true); // Call the original onClick handler (e.g., open infowindow)
      get_openai_summary(myString, props.user_input); // Set the text only on the first click
      setClickedOnce(true); // Set the flag to prevent further text updates
    }
    else{
      setInfowindowOpen(true);
    }
  };

  const get_openai_summary = async (marker_text, user_input) => {
    try {
      setMyString("...loading");
      const response = await axios.post('http://127.0.0.1:5000/process_input_map', {
        user_input: user_input,
        marker_text: marker_text,
      });
      setMyString(response.data.OPENAI_RESPONSE);
      
    }
    catch (error) {
      console.error('Error:', error);
      setMyString(props.text);
    }
  }

  return (
    <>
      <MarkerF
        onClick={() => handleClick()}
        position={{ lat: props.latitude, lng: props.longitude }}
        title={'AdvancedMarker that opens an Infowindow when clicked.'}
      >
        {infowindowOpen && (<InfoWindowF
          onCloseClick={() => setInfowindowOpen(false)
          }>
          <>
            {myString}
          </>
        </InfoWindowF>)}
      </MarkerF>
    </>
  );
};