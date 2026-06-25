import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import MapPopup from './MapPopup';

function createCustomIcon(difficulty) {
  const colorMap = {
    beginner: '#34d399',    // seafoam-500
    intermediate: '#fbbf24', // kelp-500
    advanced: '#f87171',     // abyss-500
  };
  const color = colorMap[difficulty] || '#2dd4bf'; // teal-400

  return L.divIcon({
    className: 'custom-marker',
    html: `
      <div style="
        width: 32px;
        height: 42px;
        position: relative;
        filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
      ">
        <svg width="32" height="42" viewBox="0 0 32 42" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 0C7.16 0 0 7.16 0 16c0 12 16 26 16 26s16-14 16-26C32 7.16 24.84 0 16 0z" fill="${color}"/>
          <circle cx="16" cy="16" r="8" fill="white" fill-opacity="0.9"/>
          <path d="M12 16c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z" fill="${color}"/>
        </svg>
      </div>
    `,
    iconSize: [32, 42],
    iconAnchor: [16, 42],
    popupAnchor: [0, -42],
  });
}

export default function DestinationMarker({ destination }) {
  const icon = createCustomIcon(destination.difficulty);

  return (
    <Marker
      position={destination.coordinates}
      icon={icon}
    >
      <Popup maxWidth={280} minWidth={260}>
        <MapPopup destination={destination} />
      </Popup>
    </Marker>
  );
}
