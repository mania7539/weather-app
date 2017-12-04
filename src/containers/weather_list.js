import React, { Component } from "react";
import { connect } from "react-redux";

class WeatherList extends Component {

    renderWeather(cityData) {
        const name = cityData.city.name;
        return (
            <tr key={name}>
                <td>{name}</td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}


function mapStateToProps({ weather }) {
    return ({
        weather
    });
}
// the above ES6 code is as the same as the below code:
//
// function mapStateToProps({weather}) {
//     return ({
//         weather: weather
//     });
// }
//
// the above ES6 code is also as the same as the below code:
//
// function mapStateToProps(state) {
//     return ({
//         weather: state.weather
//     });
// }


export default connect(mapStateToProps)(WeatherList);