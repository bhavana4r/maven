import React, { useState } from 'react';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';


function App() {
  const mapStyles = {
    height: '60vh',
    width: '80%',
    marginLeft: '10%'
  };
  const [clicked, setClicked] = useState(false);
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const API_KEY = 'AIzaSyB8NmsEs3T-KvxAPXaBJfd8QxrOHhNektY';
  const handleClickLink1 = () => {
    setClicked(true);
    setLat(13.0827);
    setLng(80.2707);
  };
  const handleClickLink2 = () => {
    setClicked(true);
    setLat(17.3850);
    setLng(78.4867);
  };
  return (
    <div>
      <p>
        The location 1
        <span style={{ textDecoration: 'underline', cursor: 'pointer' }} onClick={handleClickLink1}>
          {'chennai'}
        </span>      
      </p>
      <p>
        The location 2{' '}
        <span style={{ textDecoration: 'underline', cursor: 'pointer' }} onClick={handleClickLink2}>
          {'Hyderabad'}
        </span>      
      </p>
      <hr></hr>
    <LoadScript googleMapsApiKey={API_KEY}>
      <div style={mapStyles}>
        <GoogleMap mapContainerStyle={mapStyles} center={{lat: lat, lng: lng}} zoom={10}>
          {clicked &&
            <Marker position={{lat: lat, lng: lng}} />
          }
        </GoogleMap>
      </div>
    </LoadScript>
    </div>
  );
}

export default App;