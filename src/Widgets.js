import React from 'react'
import './Widgets.css';
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
} from "react-twitter-embed";
import { Search } from "@material-ui/icons";

function Widgets() {
    return (
        <div className='widgets'>
            <div className='widgets__input'>
                <Search className='widgets__searchIcon' />
                <input type='text' placeholder='Search Twitter' />
            </div>

            <div className='widgets__widgetContainer'>
            <h2>What's happening</h2>
            <TwitterTweetEmbed tweetId={"1307046632517664771"} />

            <TwitterTimelineEmbed
            sourceType="profile"
            screenName="cleverqazi"
            options={{ height: 400 }}
            />
            
            <TwitterShareButton
            url={"https://www.facebook.com/tanzeel.abdulwahid1"}
            options={{ text: "React Developer" }}
            />

            </div>
        </div>
    )
}

export default Widgets
