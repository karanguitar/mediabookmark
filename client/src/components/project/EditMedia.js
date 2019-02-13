import React, { Component } from 'react'
import { Link} from 'react-router-dom'
import { ValidatorForm } from 'react-form-validator-core';
import TextValidator from '../../Validation'
import history from '../../history'

export default class EditMedia extends Component {


  state={
    id: this.props.editMedia.id,
    name: this.props.editMedia.name,
    notes: this.props.editMedia.notes,
    dateCompleted: this.props.editMedia.dateCompleted,
    mediaType: this.props.editMedia.mediaType,
    rating: this.props.editMedia.rating,
    webLink: this.props.editMedia.webLink

  }

  handleChange = (event) =>{
    this.setState({[event.target.name]: event.target.value})
  }

  handleEditSubmit = (event) =>{
    event.preventDefault()
    const {id, name, notes, dateCompleted, mediaType, rating, webLink} = this.state
    this.props.handleEditSubmit(id, name, notes, dateCompleted, mediaType, rating, webLink)

  }

  render() {
    if(!this.props.currentUser){
      history.push('/')
    }else{
    return (
      <div>
      <ValidatorForm
              ref="form"
              onSubmit={this.handleEditSubmit}
              className="ui form"
          >
          <div className="field">
          <label >Title</label>
          <TextValidator
                onChange={this.handleChange}
                name="name"
                value={this.state.name}
                validators={['required']}
                errorMessages={['This field is required']}
                
            />
          </div>

          <div className="field">
          <label >Notes</label>
          <TextValidator
                onChange={this.handleChange}
                name="notes"
                value={this.state.notes}
                inputType="textarea"
                validators={['required']}
                errorMessages={['This field is required']}
            />
          </div>
          <div className="field">
            <label >Link</label>
            <input type="text" onChange={this.handleChange} name="webLink" value={this.state.webLink} />
          </div>
          <div className="field">
          <label >Date</label>
          <TextValidator
                type="date"
                onChange={this.handleChange}
                name="dateCompleted"
                value={this.state.dateCompleted}
                validators={['required']}
                errorMessages={['This field is required']}
            />
          </div>

          <div className="field">
          <label >Type</label>
          <TextValidator
                onChange={this.handleChange}
                name="mediaType"
                value={this.state.mediaType}
                validators={['required']}
                errorMessages={['This field is required']}
                placeholder="Podcast, Book, Film..."
            />
          </div>
      
          <div className="field">
          <label >Rating</label>
          <TextValidator
                onChange={this.handleChange}
                name="rating"
                value={this.state.rating}
                validators={['required','isNumber', 'minFloat:1', 'maxFloat:5', ]}
                errorMessages={['This field is required', 'Please select a number only', 'Rating must be 1 or above', 'Rating must be 5 or below']}
                placeholder="1-5"
            />
          </div>

            
            <button className="ui positive button" type="submit">Submit</button>
            <Link className="ui button" to="/dashboard">Cancel </Link>
        </ValidatorForm>
        
      </div>
    )
  }
}
}
