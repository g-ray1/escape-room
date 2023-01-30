import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { DEFAULT_MAP_POSITION } from '../../const';
import { Locations } from '../../types/types';

type LeafletMapProps = {
  locations: Locations;
  clickHandler: (arg0: string) => void;
}

function LeafletMap({ locations, clickHandler }: LeafletMapProps): JSX.Element {

  return (
    <MapContainer style={{ height: 529, width: 890 }} center={DEFAULT_MAP_POSITION} zoom={10} scrollWheelZoom>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {locations?.map((location) => (
        <Marker position={location.coords} key={location.id}
          eventHandlers={{click: () => clickHandler(location.address) }}
        >
          <Popup keepInView>
            {location.address}
          </Popup>
        </Marker>
      ))}

    </MapContainer >
  );
}

export default LeafletMap;
