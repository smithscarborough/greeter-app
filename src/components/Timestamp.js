import React, { Component } from 'react';

export default class Timestamp extends Component {
    render() {
        const now = Date();

        return (
            <div>
                {now}
            </div>
        )
    }
}