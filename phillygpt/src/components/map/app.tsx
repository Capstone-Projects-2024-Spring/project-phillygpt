import React, {useState, useEffect, useCallback} from 'react';
import {createRoot} from 'react-dom/client';
//import { useLocation } from 'react-router-dom';
import Title from '../title';


import {
  useJsApiLoader,
  InfoWindow,
  GoogleMap,
  InfoWindowF,
  MarkerF,
} from '@react-google-maps/api';





interface marker{
  longitude:number
  latitude:number 
  text: string
}

const mapContainerStyle = {
  width: '100vw',
  height: '100vh',
};
const center = {
  lat: 40, // default latitude
  lng: -75, // default longitude
};

const createMarker = (record) => {
  // Assuming record structure: [id, longitude, latitude, marketName, address, zipCode]
  const [id, longitude, latitude, marketName, address, zipCode] = record;
  return {
    longitude,
    latitude,
    text: `${marketName}, ${address}, ZIP: ${zipCode}`
  };
};

const MapPage = () => {
  const [apiResponse, setApiResponse] = useState(null);
  fetch('http://127.0.0.1:5000/data')
        .then(response => response.json())
        .then(data => {
          setApiResponse(data);
        })
        .catch(error => {
          console.error('Error fetching data: ', error);
          setApiResponse(null);
        });
  




  //const location = useLocation();
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBa9H1h96caf0tMY0ICdlVpj9f92ePeCpk"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])
  
//   let Markers: marker[] = [
//     { "longitude": -82, "latitude":34, "text": "This worked"},
//     { "longitude": -90, "latitude":34, "text": "This worked"},
//     { "longitude": -95, "latitude":34, "text": "This worked"},
//     { "longitude": -100, "latitude":34, "text": "This worked"}
// ];

//let Markers: marker[] = []; // Initialize with an empty array

const Markers: marker[] = (apiResponse as unknown as marker[])?.map(createMarker) ?? [];

  return isLoaded ? (
    <>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        
        
        <div>
        {Markers.map((marker) => <MarkerWithInfowindow longitude = {marker.longitude} latitude = {marker.latitude} text = {marker.text}/>)}
        </div>
       {/* <MarkerWithInfowindow longitude = {-80} latitude = {20} text = {"TEST"}/> */}

      </GoogleMap>
    </>
  ) : <></>
};

export default MapPage;

// export function renderToDom(container: HTMLElement) {
//   const root = createRoot(container);

//   root.render(
//     <React.StrictMode>
//       <MapPage />
//     </React.StrictMode>
//   );
// }

function CreateMarkers(Markers: any): JSX.Element {
  return <>{
    Markers.map((marker: marker) => <MarkerWithInfowindow longitude = {marker.longitude} latitude = {marker.latitude} text = {marker.text}/>)
}
</>
}

const MarkerWithInfowindow = (props: { latitude: number; longitude: number; text: string }) => {
  const [infowindowOpen, setInfowindowOpen] = useState(false);
  // const [markerRef, marker] = useAdvancedMarkerRef();
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
        position={{lat: props.latitude, lng: props.longitude}}
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