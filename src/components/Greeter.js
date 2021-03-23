import React from 'react';

class Greeter extends React.Component {
    render() {
        return (
            // below means: 'try this.props.name, but if that doesn't work, use "You":
            <h1>Hello again, {this.props.name || 'You'}!</h1>
        )
    }
}

export default Greeter;