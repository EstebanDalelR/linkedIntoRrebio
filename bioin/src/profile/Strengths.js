import React, { Component } from 'react';

export default class Strengths extends Component {
    render() {
        return (
            <div >
                <h4>My strengths are:</h4>
                {this.props.strengths.map(strength => {
                    return (<p>
                        {strength.name}
                    </p>
                    )
                })}
            </div>
        )
    }
}