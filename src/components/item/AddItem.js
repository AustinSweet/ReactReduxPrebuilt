import React, { Component } from 'react';

class AddItem extends Component {

    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
          data1: '',
          data2: ''
        }
    }

    handleChange(e){
        this.setState({
          [e.target.name]: e.target.value
        })
      }
    
      handleSubmit(e){
        e.preventDefault();
        console.log(this.state);
      }
    
      render() {
        return(
          <>
              <form onSubmit={this.handleSubmit}>
                <input 
                name='data1'
                type="text"
                placeholder={this.props.stringOne}
                onChange={this.handleChange} />
                <input 
                name='data2'
                type="text"
                placeholder={this.props.stringTwo}
                onChange={this.handleChange} />
                <input type="submit" />
              </form>
          </>
        )
      }
}

export default AddItem;