import React, { Component } from 'react';
import {Router, Route, Link} from 'react-router-dom'
import axios from 'axios'
import history from './history';
import {Grid, Responsive} from 'semantic-ui-react'

import Toolbar from './components/util/toolbar/Toolbar'
import PostMedia from './components/project/PostMedia'
import FetchMedia from './components/project/FetchMedia'
import DisplaySingleMedia from './components/project/DisplaySingleMedia'
import EditMedia from './components/project/EditMedia'

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
      this.setState({media: newList}, () => history.push('/dashboard'))
      
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
      }, () => {history.push("/dashboard")} )

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

  renderForCurrentUser = () =>{
    if(this.state.currentUser){
      return( 
              <>
                <Grid.Column width={4}>
                  <Route 
                      render={(props) => <FetchMedia {...props} currentUser={this.state.currentUser} selectedMedia={this.selectedMedia} media={this.state.media}/>}
                      path="/dashboard" exact
                      />
                </Grid.Column>
                <Grid.Column width={10}>
                  <Route 
                    render={(props) => <PostMedia {...props} currentUser={this.state.currentUser}  handleSubmit={this.handleSubmit} />}
                    path="/post" 
                    />
                    <Route 
                    render={(props) => <DisplaySingleMedia {...props} currentUser={this.state.currentUser} fetchEditMedia={this.fetchEditMedia} deleteMedia={this.deleteMedia} selectedVideo={this.state.selectedVideo} /> }
                    path="/dashboard" exact
                    />
                    <Route 
                    render={(props) => <EditMedia {...props} currentUser={this.state.currentUser} handleEditSubmit={this.handleEditSubmit} editMedia={this.state.editMedia} /> }
                    path="/edit/:id"
                    />
                  </Grid.Column>
                  <Grid.Column width={2}>
                    <Link className="ui positive button" to="/post">Add Bookmark</Link>
                  </Grid.Column>
                  </>
      )
    }
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
                  <Route exact path="/" component={HomePage}/>
                  <Route path="/about"  component={AboutPage}/>
                </Grid.Column>
                {this.renderForCurrentUser()}
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
