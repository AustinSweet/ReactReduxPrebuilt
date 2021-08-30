import React, { Component } from 'react';

class AddItem extends Component {

    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
          formInfo: this.props.formInfo,
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
                {this.state.formInfo.map((i) =>
                <input key={i.name}
                name={i.name}
                type={i.type}
                placeholder={i.placeholder}
                onChange={this.handleChange} />)}
                <input type='submit'></input>
              </form>
          </>
        )
      }
}

export default AddItem;