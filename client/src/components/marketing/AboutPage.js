import React from 'react';
import ExampleDisplaySingleMedia from '../project/DisplaySingleMediaExample'

const AboutPage = () => {

    const selectedVideo = {
        name: "Joe Rogan Experience #1169 - Elon Musk",
        notes: "I was on the train to London whilst listening to this. Elon talked about artificial intelligence, which was quite scary and thought provoking. Ohh and he also did something that made Tesla stock drop!",
        rating: 5,
        dateCompleted: "12/12/2018",
        mediaType: "Podcast",
        webLink: "https://www.youtube.com/watch?v=ycPr5-27vSI&t=6782s",
        videoId: "ycPr5-27vSI&t=6782s",
        id: 1
    }

    const deleteMedia =(id) =>{
        alert("Delete")
    }

    const editMedia =(id) =>{
        alert("Edit")
    }

    return (
        <div>
            <h2>About</h2>
            <p>This website is to gather all your thoughts about media you have consumed.
                What are the lessons you have learnt? Did you find something funny? 
                Who did you watch it with? Detail your experience to fully appreciate the
                the media you have consumed. This is what you'll find inside once you have 
                created a bookmark!
            </p>
            <div>
                <ExampleDisplaySingleMedia deleteMedia={deleteMedia} fetchEditMedia={editMedia} selectedVideo={selectedVideo}/>
            </div>
        </div>
    );
}

export default AboutPage;

