import { Button } from '@material-ui/core'
import React, {useState} from 'react'
import './TweetBox.css';
import { Avatar} from "@material-ui/core";
import db from './firebase';


function TweetBox() {

    const [tweetMessage, setTweetMessage] = useState('')
    const [tweetImage, setTweetImage] = useState('');

    const sendTweet = (e) =>{
        e.preventDefault();

        db.collection("posts").add({
            displayName: "tanzeel",
            username: "tanzeelwahid",
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://scontent.fkhi2-1.fna.fbcdn.net/v/t1.0-9/94688576_2467128720054305_5401162150586613760_o.jpg?_nc_cat=101&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeGFl6o1qLgG3sn_2fzRsRrtCso7__icCe8Kyjv_-JwJ70jChKRYZ8sdQfCahz6s92yiaEKhdQWzseAvMneCDupX&_nc_ohc=YH2OJAfxNrMAX-98n87&_nc_ht=scontent.fkhi2-1.fna&oh=471a6a0e37f43f0cf98a30e451d0fca4&oe=5FE731EE"
        });
        setTweetMessage("");
        setTweetImage("");
    }

    return (
        <div className='tweetBox'>

            <form>
                <div className='tweetBox__input'>
                <Avatar src="https://scontent.fkhi2-1.fna.fbcdn.net/v/t1.0-9/94688576_2467128720054305_5401162150586613760_o.jpg?_nc_cat=101&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeGFl6o1qLgG3sn_2fzRsRrtCso7__icCe8Kyjv_-JwJ70jChKRYZ8sdQfCahz6s92yiaEKhdQWzseAvMneCDupX&_nc_ohc=YH2OJAfxNrMAX-98n87&_nc_ht=scontent.fkhi2-1.fna&oh=471a6a0e37f43f0cf98a30e451d0fca4&oe=5FE731EE" />
                <input value={tweetMessage} onChange={(e)=> setTweetMessage(e.target.value) } type='text' placeholder="What's happening?"  />
                </div>
                <input
                value={tweetImage} onChange={(e)=> setTweetImage(e.target.value) }  
                className='tweetBox__inputImage'
                type='text' 
                placeholder='Enter image URL' />

                <Button onClick={sendTweet} type='submit' className='tweetBox__tweetButton'>Tweet</Button>
            </form>

        </div>
    )
}

export default TweetBox
