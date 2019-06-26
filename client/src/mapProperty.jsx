import React from 'react';



class MapProperty extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.property.uniqueId === this.props.currentProperty.uniqueId) {
            // console.log('MapProperty Props: ', this.props)
            return (
                <div className="propertyMarkerContainer">
                    <img onClick={() => window.location.pathname = '/items/' + this.props.currentProperty.uniqueid} className="currentPropMapMarkerImg" border="5" src={this.props.property.imgurl}></img>
                    <div className="circle"></div>
                    <button className="propertyMarkerPrice">{'$' + (this.props.property.price / 1000).toFixed(0) + 'K'}</button>
                </div>
                
            );
        } else {
            return (
                <div className="propertyMarkerContainer">
                    <div className="circle"></div>
                    <button id={this.props.property.uniqueId} className="propertyMarkerPrice" onClick={(e) => this.props.changeCurrentProperty(Number(e.target.id))}>{'$' + (this.props.property.price / 1000).toFixed(0) + 'K'}</button>
                </div>
            );
        }
    }
}

module.exports = MapProperty;