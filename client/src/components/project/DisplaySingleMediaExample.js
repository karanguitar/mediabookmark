import React from 'react';
import './displaySingleMedia.css'
import Button from '../util/Button'
import { Segment, Label, Statistic, Divider, Embed} from 'semantic-ui-react'
import PlaySign from '../../images/play.png'


const ExampleDisplaySingleMedia = ({selectedVideo, deleteMedia, fetchEditMedia}) => {

    const videoRender = () =>{
        if(selectedVideo.webLink){
            return selectedVideo.videoId ? 
            <Embed id={selectedVideo.videoId} placeholder={PlaySign} source='youtube' /> :
            <a href={selectedVideo.webLink} rel="noopener noreferrer" target="_blank"><h2>{selectedVideo.name}</h2></a>
        }
    }

        return (
            <div>
                <div className="single-media">
                <Segment.Group horizontal>
                    <Segment ><Statistic label='Rating' value={selectedVideo.rating} /></Segment>
                    <Segment><Label>Date completed</Label><hr/>{selectedVideo.dateCompleted}</Segment>
                    <Segment><Label>Media type</Label><hr/>{selectedVideo.mediaType}</Segment>
                </Segment.Group>
                <Divider/>
                {videoRender()}
                <Divider/>
                    <div className="single-media__content">
                        <h2>{selectedVideo.name}</h2>
                        <p>{selectedVideo.notes}</p>
                        
                    </div> 
                    <Divider/>
                        <div className="single-media__actions">
                            <Button color="ui negative button"  id={selectedVideo.id} onClick={deleteMedia} buttonName="Delete" />
                            <Button color="ui button" id={selectedVideo.id} onClick={fetchEditMedia} buttonName="Edit" />   
                        </div>
                        <Divider/>
                           
                </div>
            </div>
        )

}

export default ExampleDisplaySingleMedia;
