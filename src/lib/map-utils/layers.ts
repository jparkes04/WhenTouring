import type {LayerProps} from 'react-map-gl/maplibre';

export const clusterLayer: LayerProps = {
  id: 'clusters',
  type: 'circle',
  source: 'events',
  filter: ['has', 'point_count'],
  paint: {
    'circle-color': ['step', ['get', 'point_count'], '#fd9a00', 20, '#fd810c', 100, '#fc661a', 250, '#fc4a28', 1000, '#fb2c36'],
    'circle-radius': ['step', ['get', 'point_count'], 12, 100, 18, 250, 24, 1000, 36]
  }
};

export const clusterCountLayer: LayerProps = {
  id: 'cluster-count',
  type: 'symbol',
  source: 'events',
  filter: ['has', 'point_count'],
  layout: {
    'text-field': '{point_count_abbreviated}',
    'text-size': 12
  }
};

export const unclusteredPointLayer: LayerProps = {
  id: 'unclustered-point',
  type: 'circle',
  source: 'events',
  filter: ['!', ['has', 'point_count']],
  paint: {
    'circle-color': '#fd9a00',
    'circle-radius': 5,
  }
};