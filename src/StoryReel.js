import React from 'react'
import Story from './Story'
import './StoryReel.css'

function StoryReel() {
  return (
    <div className="storyReel">
      <Story 
        image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcelebmafia.com%2Fwp-content%2Fuploads%2F2018%2F08%2Fjennifer-lawrence-dior-s-new-fragrance-joy-photoshoot-13.jpg&f=1&nofb=1"
        profileSrc="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.unilad.co.uk%2Fwp-content%2Fuploads%2F2018%2F02%2FGettyImages-921222214.jpg&f=1&nofb=1"
        title="Jenifer Lawrence"
      />
      <Story 
        image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.hawtcelebs.com%2Fwp-content%2Fuploads%2F2020%2F08%2Fscarlett-johansson-out-shopping-in-new-york-08-26-2020-1.jpg&f=1&nofb=1"
        profileSrc="https://m.media-amazon.com/images/M/MV5BMTM3OTUwMDYwNl5BMl5BanBnXkFtZTcwNTUyNzc3Nw@@._V1_UY209_CR16,0,140,209_AL_.jpg"
        title="Scarlett Johansson"
      />
      <Story 
        image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcelebmafia.com%2Fwp-content%2Fuploads%2F2016%2F04%2Fjessica-alba-in-a-swimsuit-photoshoot-in-hawaii-4-24-2016-10.jpg&f=1&nofb=1"
        profileSrc="https://m.media-amazon.com/images/M/MV5BODYxNzE4OTk5Nl5BMl5BanBnXkFtZTcwODYyMDYzMw@@._V1_UY209_CR8,0,140,209_AL_.jpg"
        title="Jessica Alba"
      />
    </div>
  )
}

export default StoryReel
