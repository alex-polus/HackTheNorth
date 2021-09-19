import GoogleMapReact from 'google-map-react';
import React from "react";

const AnyReactComponent = ({ text:string}) => <div>{text}</div>;

export const SimpleMap2: React.FC<{center:{lat:number,lng:number}, zoom:number}> = ({
    center,zoom
}) => {
  return (<div style={{ height: '100vh', width: '100%' }}>
  <GoogleMapReact
    bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
    defaultCenter={center}
    defaultZoom={zoom}
  >
    <AnyReactComponent
      lat={59.955413}
      lng={30.337844}
      text="My Marker"
    />
  </GoogleMapReact>
</div>)      // Important! Always set the container height explicitly
  
};

export default SimpleMap2;
