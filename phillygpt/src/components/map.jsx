import React from 'react';
import DeckGL from '@deck.gl/react';
import { LineLayer } from '@deck.gl/layers';
import { MapView, FirstPersonView } from '@deck.gl/core';
import { Map } from 'react-map-gl';



function PhillyMap() {
        const MAPBOX_ACCESS_TOKEN = 'Enter token here';
        const INITIAL_VIEW_STATE = {
                longitude: -122.41669,
                latitude: 37.7853,
                zoom: 13,
                pitch: 0,
                bearing: 0
        };

        // Data to be used by the LineLayer
        const data = [
                { sourcePosition: [-122.41669, 37.7853], targetPosition: [-122.41669, 37.781] }
        ];
        const layers = [
                new LineLayer({ id: 'line-layer', data })
        ];
        return (
                
                        <DeckGL
                                initialViewState={INITIAL_VIEW_STATE}
                                controller={true}
                                layers={layers}
                        >
                                <MapView id="map" width="50%" controller={true}>
                                        <Map mapboxAccessToken={MAPBOX_ACCESS_TOKEN} />
                                </MapView>

                        </DeckGL>
        );
}

export default PhillyMap;