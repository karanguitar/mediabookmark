import React, { Component } from 'react'
import ItemMedia from './ItemMedia'
import './fetchMedia.css';
import { List } from 'semantic-ui-react'
import history from '../../history'

export default class FetchMedia extends Component {

    state= {
        activeItem: 0
    }

    activeItem = (id) =>{
        this.setState({
            activeItem: id
        })   
    }


  render() {
    
    const renderList = this.props.media.map((item, index) =>{
        let classStyle = "item"
        let activeStyle = "item active"
        
        return(
            <List.Item style={{padding:"10px"}} className={this.state.activeItem === item.id ? activeStyle : classStyle} key={item.id}>
                <ItemMedia activeItem={this.activeItem} id={item.id} selectedMedia={this.props.selectedMedia} name={item.name} notes={item.notes} />
            </List.Item>
        )
    })
    if(!this.props.currentUser){
        history.push('/')
      }else{  
      
    return (
      <div>
        {this.props.media.length >= 1 ?
          <List divided relaxed style={{padding:"10px"}} className="ui vertical menu media-list">
              {renderList }
          </List>
          : ""}
      </div>
    )
  }
}
}
