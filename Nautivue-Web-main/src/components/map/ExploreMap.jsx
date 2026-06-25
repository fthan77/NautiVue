import { MapContainer, TileLayer, ZoomControl } from 'react-leaflet';
import DestinationMarker from './DestinationMarker';

export default function ExploreMap({ destinations, onDestinationClick }) {
  return (
    <MapContainer
      center={[-2.5, 118]}
      zoom={5}
      zoomControl={false}
      className="w-full h-full"
      style={{ background: '#062433' }}
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>'
        subdomains="abcd"
        maxZoom={19}
      />
      <ZoomControl position="bottomright" />
      {destinations.map((dest) => (
        <DestinationMarker
          key={dest.id}
          destination={dest}
          onClick={() => onDestinationClick?.(dest)}
        />
      ))}
    </MapContainer>
  );
}
