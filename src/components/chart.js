import React from "react";
import { Sparklines, SparklinesLine } from "react-sparklines";

export default (props) => {
    return (
        <div>
            <Sparklines height={120} width={180} data={props.data}>
                <SparklinesLine color={props.color} />
            </Sparklines>
        </div>
    );
    // the value of 'data' will map from 'temperatures' to 'props.data', 
    //  which we want to pass it in as a property called 'data'.
    //
    // the value of 'color' map from "red" to 'props.color'.
}
/** 
 * Construct the component into a functional component rather then a class-based component,
 *  is because we only need to get props for color and data, 
 *  however no extensional functions required, so we just make it simple.
 */