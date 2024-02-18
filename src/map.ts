import maplibregl from 'maplibre-gl';
import { Deck } from '@deck.gl/core/typed';
import {
  BASEMAP,
  CartoLayer,
  setDefaultCredentials,
  MAP_TYPES
} from '@deck.gl/carto/typed';

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
const accessToken = import.meta.env.VITE_API_ACCESS_TOKEN;
setDefaultCredentials({ apiBaseUrl, accessToken });

export function createMap() {
  const INITIAL_VIEW_STATE = {
    latitude: 39.8097343,
    longitude: -98.5556199,
    zoom: 4,
    bearing: 0,
  }

  const deck = new Deck({
    canvas: 'deck-canvas',
    initialViewState: INITIAL_VIEW_STATE,
    controller: true,
    layers: []
  })

  const retailLayer = new CartoLayer({
    id: 'retails',
    connection: 'carto_dw',
    type: MAP_TYPES.QUERY,
    data: `SELECT * FROM \`carto-demo-data\`.demo_tables.retail_stores WHERE city = 'BOSTON'`,
    pointRadiusMinPixels: 4,
    getFillColor: [200, 0, 80],
  })

  const basemap = new maplibregl.Map({
    container: 'map',
    style: BASEMAP.VOYAGER,
    center: [-74.5, 40],
    zoom: 15
  })

  deck.setProps({
    layers: [retailLayer],
    onViewStateChange: ({ viewState }) => {
      const { longitude, latitude, ...rest } = viewState;
      basemap.jumpTo({ center: [longitude, latitude], ...rest });
    }
  });
}
