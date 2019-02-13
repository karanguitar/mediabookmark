import React from 'react';
import './home.css'
import {Link} from 'react-router-dom'
import {Card} from 'semantic-ui-react'

const HomePage = () => {
    return (
        <div>
            <div className="home">
                <div className="cover">
                    <h1 className="cover__heading">
                        Media Bookmark
                    </h1>
                    <h3 className="cover__sub-heading">
                        The world of bookmarks
                    </h3>
                    <div className="action">
                        <a href="/api/auth/google" className="ui button positive">Sign up!</a>
                    </div>
                </div>
                <div className="cards">
                    <Card >
                    <Card.Content >
                            <Card.Header >Bookmarks</Card.Header>
                            <Card.Meta>Welcome!</Card.Meta>
                            <Card.Description>This is a place for bookmarks that matter.</Card.Description>
                            </Card.Content>
                    </Card>
                    <Card>
                    <Card.Content>
                            <Card.Header>Detail</Card.Header>
                            <Card.Meta>Catered for you</Card.Meta>
                            <Card.Description>Add all the detail you want.</Card.Description>
                            </Card.Content>
                    </Card>
                    <Card>
                    <Card.Content>
                            <Card.Header>Internet</Card.Header>
                            <Card.Meta>We love it</Card.Meta>
                            <Card.Description>Save videos and sites you love!</Card.Description>
                            </Card.Content>
                    </Card>
                    <Card>
                    <Card.Content>
                            <Card.Header>Old school</Card.Header>
                            <Card.Meta>Books are still cool!</Card.Meta>
                            <Card.Description>Remember what you loved about a book.</Card.Description>
                            </Card.Content>
                    </Card>
                    <Card>
                    <Card.Content>
                            <Card.Header>Mentors</Card.Header>
                            <Card.Meta>Every piece of media has a message</Card.Meta>
                            <Card.Description>This is a place to gather all your thoughts from your favourite mentors.</Card.Description>
                            </Card.Content>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default HomePage;