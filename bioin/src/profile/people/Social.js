import React, { Component } from 'react';

export default class Social extends Component {
    render() {
        return (
            <div >
                <h4>Find me on:</h4>
                {this.props.socials.map(link => {
                    return (
                        <a href={link.address}>
                            {link.name}
                            <br />
                        </a>)
                })}
            </div>
        )
    }
}