import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import mapIcon from "../../../assets/marker-icon.png";

const KycMap = ({ latitude = 0, longitude = 0 }) => {
  const icon = L.icon({ iconUrl: mapIcon });

  return (
    <div style={{ display: "flex", height: "100%" }}>
      <MapContainer
        style={{
          flex: 1,
          height: "100%",
          width: "fit-contain",
        }}
        id="map"
        className="map-container"
        center={{
          lat: latitude,
          lng: longitude,
        }}
        zoom={17}
        scrollWheelZoom={false}
        dragging={false}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[latitude, longitude]} icon={icon}>
          <Popup>Your are here</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default KycMap;
