import { Avatar } from '@material-ui/core'
import React from 'react'
import '../Style/Post.css'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import CommentIcon from '@material-ui/icons/Comment';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';

function Post({avatar, username, description, image}) {
    return (
        <div className="post">
            <div className="post_header">
              <Avatar
              className="post_avatar"
              src={avatar}/>
              <h3>{username}</h3>
              <VerifiedUserIcon fontSize='small'/>
            </div>
            <p>{description}</p>
            <img 
            className="post_image" 
            src={image}/>

            <div className="post_footer">
                <AttachMoneyIcon/>
                <StarBorderIcon/>
                <CommentIcon/>
            </div>
        </div>
    )
}

export default Post
