import React, { Component } from 'react';

export default class CharacterCard extends Component{
    render(){
        return(
            <div className="CharacterCard">{this.props.value}</div>
        )
    }
}