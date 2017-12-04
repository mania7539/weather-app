import { FETCH_WEATHER } from "../actions/index";

export default function (state = [], action) {
    console.log("Action received ", action);

    switch (action.type) {
        case FETCH_WEATHER:
            if (!action.payload.data) {
                return state;
                // handle 404 and situation when action.payload.data is 'undefined'
            }

            return [action.payload.data, ...state];
            // `return state.concat([action.payload.data]);` is equal to the above ES6 code
            // array.concat doesn't change the existing array, it creates a new array that contains
            //  all the old stuff and the new stuff in here.
            // return state.push(action.payload.data);
            //  the code above will create a huge can of worm: state mutation
            //  - we only update state by calling setState to create a new instance of state
            // return [action.payload.data];
            // * we are collecting payload from querying specific city.
    }

    return state;
}
// we want to show multiple rows from multiple cities at a time,
// so that implies that we're going to have a data structure for our state here.
// that's kind of a list of sorts.
// so, rather than having an initial state of null, we'll have an initial state 
// of an array instead