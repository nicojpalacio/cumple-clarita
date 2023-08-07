import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Googlemap = () => {
    const mapStyles = {
        height: '400px',
        width: '100%',
      };
    
      const defaultCenter = {
        lat: -26.821316274643134,
        lng: -65.24457987238422,
      };
    
      const markerPosition = {
        lat: -26.821316274643134,
        lng: -65.24457987238422,
      };
    
      return (
        <LoadScript googleMapsApiKey="">
          <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={10}
            center={defaultCenter}
          >
            <Marker position={markerPosition} />
          </GoogleMap>
        </LoadScript>
      );
    };
    

export default Googlemap;
