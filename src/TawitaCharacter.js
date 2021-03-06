import React, { Component } from 'react';

export default class TawitaCharacter extends Component{
    constructor(props){
        super(props)
        this.state = {
            active : false,
        }
    }
     activate = () => {
        if(!this.state.active){
            this.props.activationHandler(this.props.value)
            this.setState({active: true})
        }
    }
    componentDidUpdate(prevProps){
        if(prevProps.attemt !== this.props.attemt){
          this.setState({active:false})
        }
      }
    render(){
        let className = `card ${this.state.active ? 'coloreiei' : ''}`
        return(
            <div className={className} onClick={this.activate}>
                {this.props.value}
            </div>
        )
    }  
} 