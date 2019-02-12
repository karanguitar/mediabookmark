import React, { Component } from 'react';
import {Router, Route, Link} from 'react-router-dom'
import axios from 'axios'
import history from './history';
import {Grid, Responsive} from 'semantic-ui-react'

import Toolbar from './components/util/toolbar/Toolbar'
import SignedOutToolbar from './components/util/toolbar/SignedOutToolbar'
import PostMedia from './components/PostMedia'
import FetchMedia from './components/FetchMedia'
import DisplaySingleMedia from './components/DisplaySingleMedia'
import EditMedia from './components/EditMedia'

import HomePage from './components/marketing/HomePage'
import AboutPage from './components/marketing/AboutPage'


import './App.css'



class App extends Component {

  state={
    media: [],
    selectedVideoId: 0,
    selectedVideo: {},
    editMedia: {},
    currentUser: null

  }

  componentDidMount(){
      this.fetchAllMedia()
      this.fetchCurrentUser()
    }

  fetchAllMedia = () =>{
    axios.get('/api/all-media')
    .then(res => {
        const newList = res.data.media
        this.setState({
            media: newList,
            selectedVideo:  newList[0],
          
        })
    })
    .catch(err => console.log(err))
  }

  fetchSingleMedia = (id) =>{
    axios.get(`/api/single-media/${id}`)
    .then((res) =>{
        this.setState({
            selectedVideo: res.data.singleMedia
        })  
    })
    .catch(err => console.log(err))
  }


  fetchEditMedia = (id) =>{
    axios.get(`/api/edit-media/${id}`)
    .then((media) =>{
        this.setState({
        editMedia: media.data.EditMedia,
        edit: true
        
      },() => (history.push(`/edit/${id}`)))
      
    })
    
  }

  selectedMedia = (id) =>{
    this.setState({selectedVideoId: id}, () => this.fetchSingleMedia(this.state.selectedVideoId))
   
  }

  deleteMedia = (id) =>{
    axios.delete(`/api/delete-media/${id}`)
    .then((res) =>{
      const newMediaList = this.state.media.filter((item) => item.id !== id)
      const newVideoId = this.state.media[0].id

      this.setState({
        media: newMediaList,
      },() => this.selectedMedia(newVideoId))
    })
    .catch(err => console.log(err))
  }

  handleSubmit = (name, notes, dateCompleted, mediaType, rating, webLink) =>{
    let videoId = "";
    if(webLink.toString().includes('youtube.com')){
      if(webLink.includes('v=')){
        videoId = webLink.split('v=')[1]  
      }
    }
    axios.post('/api/create/media', {
      videoId,
      webLink,
      name,
      notes,
      dateCompleted,
      mediaType,
      rating
    })
    .then((result) =>{
      const newList = [...this.state.media, result.data.newPost]
      this.setState({media: newList}, () => history.push('/'))
      
    })
    .catch(err => console.log(err))

  }

  handleEditSubmit = (id, name, notes, dateCompleted, mediaType, rating, webLink) =>{
    let videoId = "";
    if(webLink.toString().includes('youtube.com')){
      if(webLink.includes('v=')){
        videoId = webLink.split('v=')[1]  
      }
    }
    axios.post(`/api/edit-media/${id}`, {
      id,
      name,
      notes,
      dateCompleted,
      mediaType,
      rating,
      webLink,
      videoId
    })
    .then((result) =>{
      
      let listCopy = this.state.media
      let index = listCopy.findIndex((item, index) =>{
        return item.id === id
      })
      listCopy[index] = result.data.editedPost
      this.setState({
        media: listCopy,
        selectedVideo: result.data.editedPost
      }, () => {history.push("/")} )

    })
    .catch(err => console.log(err))

  }

  fetchCurrentUser = () =>{

    axios.get('/api/current_user')
    .then((user) =>{
      console.log(user)
      this.setState({
        currentUser:user.data 
      })
    })
  }

  render() {
    return (
      <div className="App">
        <Responsive>
        <main >
        <Router history={history}>
            <div>
               <Toolbar currentUser={this.state.currentUser}>
                <Grid>
                <Grid.Column width={16}>
                  <Route path="/home" component={HomePage}/>
                  <Route path="/about"  component={AboutPage}/>
                </Grid.Column>
                <Grid.Column width={4}>
                  <Route 
                      render={(props) => <FetchMedia {...props} selectedMedia={this.selectedMedia} media={this.state.media}/>}
                      path="/" exact
                      />
                </Grid.Column>
                <Grid.Column width={10}>
                  <Route 
                    render={(props) => <PostMedia {...props} created={this.state.created} handleSubmit={this.handleSubmit} />}
                    path="/post" 
                    />
                    <Route 
                    render={(props) => <DisplaySingleMedia {...props} fetchEditMedia={this.fetchEditMedia} deleteMedia={this.deleteMedia} selectedVideo={this.state.selectedVideo} /> }
                    path="/" exact
                    />
                    <Route 
                    render={(props) => <EditMedia {...props} handleEditSubmit={this.handleEditSubmit} editMedia={this.state.editMedia} /> }
                    path="/edit/:id"
                    />
                  </Grid.Column>
                  <Grid.Column width={2}>
                    <Link className="ui positive button" to="/post">Add Bookmark</Link>
                  </Grid.Column>
                </Grid>
              </Toolbar>
            </div>   
          </Router>
        </main>
        </Responsive>
      </div>
    );
  }
}

export default App;
