import React, { Component } from "react";

class GoogleMap extends Component {
    componentDidMount() {
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lng
            }
        });
    }

    render () {
        return (
            <div ref="map" />
        );
        // 'ref="map"' this makes use of the ref system in react.
        //  a ref system allows us to get a reference, a direct reference
        //  to a 'html element' that has been rendered to the page.
        //  so after this component has been rendered to the screen,
        //  I can get a direct reference to the 'div' that was created right here by referreing 
        //  to 'this.refs.map' anywhere else in this component.
    }
}

export default GoogleMap;