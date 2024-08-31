import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

//hooks
import { useCountryData } from '../services/covidDataService';

// Importing icon images directly
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';

import type { Country } from '../types';

// Fix for default marker icon issue
const defaultIcon = L.icon({
    iconRetinaUrl,
    iconUrl,
    shadowUrl,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
});

// Set the default icon for all markers
L.Marker.prototype.options.icon = defaultIcon;

const Map: React.FC = () => {
    const { data: countries } = useCountryData();

    const MapView: React.FC = () => {
        const map = useMap();
        map.setView([20, 50], 4);
        return null;
    };

    return (
        <MapContainer style={{ height: '500px', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MapView />
            {countries &&
                Object.values(countries).map((countryData: Country) => (
                    <Marker
                        key={countryData.country}
                        position={[countryData.countryInfo.lat, countryData.countryInfo.long]}
                    >
                        <Popup>
                            <div>
                                <h3 className='text-sm font-semibold'>{countryData.country}</h3>
                                <p className='text-xs'>Active: {countryData.active}</p>
                                <p className='text-xs'>Recovered: {countryData.recovered}</p>
                                <p className='text-xs'>Deaths: {countryData.deaths}</p>
                            </div>
                        </Popup>
                    </Marker>
                ))}
        </MapContainer>
    );
};

export default Map;
