import React, {useState} from 'react';
import {
  MarkerF,
  //AdvancedMarker,
  InfoWindow,
  //useAdvancedMarkerRef
} from '@react-google-maps/api';

export const MarkerWithInfowindow = (props: { latitude: number; longitude: number; text: string }) => {
  const [infowindowOpen, setInfowindowOpen] = useState(true);
  // const [markerRef, marker] = useAdvancedMarkerRef();

  return (
    <>
      <MarkerF
        onClick={() => setInfowindowOpen(true)}
        position={{lat: props.latitude, lng: props.longitude}}
        title={'AdvancedMarker that opens an Infowindow when clicked.'}
      >
      {infowindowOpen && (
        <InfoWindow
          onCloseClick={() => setInfowindowOpen(false)}>
          {props.text}
        </InfoWindow>
      )}
      </MarkerF>
    </>
  );
};
