import React from "react";
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from "react-sparklines";
import _ from "lodash";

function average(data) {
    return _.round(_.sum(data) / data.length);
    // use the utility library called "lodash" to get the result
}

export default (props) => {
    return (
        <div>
            <Sparklines height={120} width={180} data={props.data}>
                <SparklinesLine color={props.color} />
                <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <div>{average(props.data)} {props.units}</div>
            <div>{props.fetchWeather}</div>
        </div>
    );
    // the value of 'data' will map from 'temperatures' to 'props.data', 
    //  which we want to pass it in as a property called 'data'.
    //
    // the value of 'color' map from "red" to 'props.color'.
    //
    // instead of using height and width, using svgHeight, svgWidth, 
    //  which won't cause resize and normalization issue... OR
    //  we can use css ```svg { height: 150; }``` to solve it too. (better looking solution)
}
/** 
 * Construct the component into a functional component rather then a class-based component,
 *  is because we only need to get props for color and data, 
 *  however we don't need to change state in this component, so we just make it simple.
 */