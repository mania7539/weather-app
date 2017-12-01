import React, { Component } from "react";

export default class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ""
        };

        this.onInputChange = this.onInputChange.bind(this);
        // the first 'this' on the right side which is 'SearchBar'
        // has a function called 'onInputChange'
        // bind the function to 'this' which is 'SearchBar'
        // to replace the function 'onInputChange' of 'this' which is 'SearchBar'
    }

    onInputChange(event) {
        console.log(event.target.value);
        this.setState({ term: event.target.value });

    }

    onFormSubmit(event) {
        event.preventDefault();
        // Add an event handler to the 'form' element itself by using 'onSubmit' and ```event.preventDefault();```

        // TODO: we need to go and fetch weather data
    }

    render() {
        return (
            <form
                onSubmit={this.onFormSubmit}
                className="input-group" >
                <input
                    placeholder="Get a five-day forecast in your favorite cities"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
    // 'onChange={(event) => this.onInputChange(event)}' 
    //      is equal to
    // 'onChange={this.onInputChange}' + 'this.onInputChange = this.onInputChange.bind(this)'
    // 		so use an arrow function would be easier in this case
}