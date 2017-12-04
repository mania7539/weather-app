import React, { Component } from "react";
import { connect } from "react-redux";
import Chart from "../components/chart";

class WeatherList extends Component {
    constructor(props) {
        super(props);
        // this.renderWeather = this.renderWeather.bind(this);
    }

    renderWeather(cityData) { // cityData is for each array element passed to array.map function
        const name = cityData.city.name;
        const temperatures = cityData.list.map(weather => weather.main.temp);
        /** the above code is equal to 
         * ```cityData.list.map(weather => {return weather.main.temp})``` 
         **/

        console.log(temperatures);

        return (
            <tr key={name}>
                <td>{name}</td>
                <td>
                    <Chart data={temperatures} color="orange" />
                </td>
            </tr>
        );
        // in ```height={120} width={180}```, the numbers mean pixels of chart
		//  property 'data' is an array data source from us
        //  by using 'SparklineLine' we can set the line chart color
        //
        // the 'data' and 'color' properties will be inside a property called 'props'
        //  when you want to use them in 'Chart' component
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
//
// the value of state.weather is fetched from action 'FETCH_WEATHER', which is defined in 
// ./reducers/reducer_weather.js and ./actions/index.js

export default connect(mapStateToProps)(WeatherList);