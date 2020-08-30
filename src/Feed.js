import React from 'react'
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'
import './Feed.css'

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />

      <Post 
        profilePic="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcelebmafia.com%2Fwp-content%2Fuploads%2F2019%2F06%2Famber-heard-grazia-magazine-italy-06-13-2019-issue-7.jpg&f=1&nofb=1"
        message="Fascinating message"
        timestamp="13:00"
        username="amberheard66"
        image="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.who.com.au%2Fmedia%2F24869%2Famber-heard_shape-2018-11-20-at-94336-am.png&f=1&nofb=1"
      />
      <Post 
        profilePic="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcelebmafia.com%2Fwp-content%2Fuploads%2F2019%2F06%2Famber-heard-grazia-magazine-italy-06-13-2019-issue-7.jpg&f=1&nofb=1"
        message="Fascinating message"
        timestamp="13:00"
        username="amberheard66"
      />
      <Post />
      <Post />
    </div>
  )
}

export default Feed
