import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import Map from './map.jsx';
import NeighborhoodInfo from './neighborhoodInfo.jsx';
import NearbyHomes from './nearbyHomes.jsx';


class NeighborhoodSection extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            properties: [],
            currentProperty: undefined
        }

        this.getProperties = this.getProperties.bind(this);
        this.changeCurrentProperty = this.changeCurrentProperty.bind(this);
    }

    componentDidMount() {
        this.getProperties();
    }

    getProperties() {
        Axios.get('/items')
        .then(response => this.setState({
            properties: response.data,
            currentProperty: response.data[window.location.pathname.substring(1) - 1] || response.data[0]
        }))
        .catch(err => console.log('error fetching data'))
    }

    changeCurrentProperty(propertyId) {
        // console.log('propertyId when clicked: ', propertyId);
        
        for (var i = 0; i < this.state.properties.length; i++) {
            if (this.state.properties[i].uniqueId === propertyId) {
                this.setState({
                    currentProperty: this.state.properties[i]
                })
            }
        }
    }

    render() {
        if (this.state.properties.length > 0) {
            return (
                <div>
                    <NeighborhoodInfo properties={this.state.properties} currentProperty={this.state.currentProperty}/>
                    <Map properties={this.state.properties} currentProperty={this.state.currentProperty} changeCurrentProperty={this.changeCurrentProperty}/>
                    <NearbyHomes properties={this.state.properties}/>
                </div>
            );
        } else {
            return (
                <div></div>
            )
        }
    }
}



ReactDOM.render(<NeighborhoodSection />, document.getElementById('Neighborhood'));

