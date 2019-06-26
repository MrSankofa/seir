import React from 'react';
import GoogleMapReact from 'google-map-react';
import config from '../../config.js';
import MapProperty from './mapProperty.jsx';



class Map extends React.Component {
    constructor(props) {
        super(props);
        this.center = {
          lat: this.props.currentProperty.latitude,
          lng: this.props.currentProperty.longitude
        }
        this.zoom = 15;
        
    }

    render() {
        console.log('props in Map:', this.props);
        return (
          // Important! Always set the container height explicitly
          <div style={{ height: '50vh', width: '100%' }}>
            <GoogleMapReact bootstrapURLKeys={{ key: config }} defaultCenter={this.center} center={{lat: this.props.currentProperty.latitude, lng: this.props.currentProperty.longitude}} defaultZoom={this.zoom} >
            {this.props.properties.map( (property, i) => {
                return (
                    <MapProperty key={i} lat={property.latitude} lng={property.longitude} property={property} currentProperty={this.props.currentProperty} changeCurrentProperty={this.props.changeCurrentProperty}/>
                )
            })}
            
            </GoogleMapReact>
          </div>
        );
    }
}

module.exports = Map;