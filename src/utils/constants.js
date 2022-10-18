import MusicNoteIcon from '@mui/icons-material/MusicNote';
import HomeIcon from '@mui/icons-material/Home';
import CodeIcon from '@mui/icons-material/Code';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SchoolIcon from '@mui/icons-material/School';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import "../assets/css/facebook-emojis.css";
import React, { Component } from "react";

export const categories = [
  { name: 'New', icon: <HomeIcon />, },
  { name: 'Coding', icon: <CodeIcon />, },
  { name: 'ReactJS', icon: <CodeIcon />, },
  { name: 'Javascript', icon: <CodeIcon />, },
  { name: 'Music', icon: <MusicNoteIcon /> },
  { name: 'Education', icon: <SchoolIcon />, },
  { name: 'Podcast', icon: <GraphicEqIcon />, },
  { name: 'Movie', icon: <OndemandVideoIcon />, },
  { name: 'Gaming', icon: <SportsEsportsIcon />, },
  { name: 'Live', icon: <LiveTvIcon />, },
  { name: 'Sport', icon: <FitnessCenterIcon />, },
  { name: 'Fashion', icon: <CheckroomIcon />, },
  { name: 'Beauty', icon: <FaceRetouchingNaturalIcon />, },
  { name: 'Comedy', icon: <TheaterComedyIcon />, },
  { name: 'Gym', icon: <FitnessCenterIcon />, },
  { name: 'Crypto', icon: <DeveloperModeIcon />, },
];

export const demoThumbnailUrl = 'https://i.ibb.co/G2L2Gwp/API-Course.png';
export const demoChannelUrl = '/channel/UCmXmlB4-HJytD7wek0Uo97A';
export const demoVideoUrl = '/video/GDa8kZLNhJ4';
export const demoChannelTitle = 'Youtube channel tittle';
export const demoVideoTitle = 'Youtube video title';
export const demoProfilePicture = 'http://dergipark.org.tr/assets/app/images/buddy_sample.png';

export default class FacebookEmoji extends Component {
 
  render() {
    let Emoji = emojis["like"];
    if (this.props.hasOwnProperty('type')) {
      Emoji = emojis[this.props.type] ? emojis[this.props.type] : emojis["like"];
    }
    return (
      <div id="zama-emoji">
        <Emoji size={this.props.size} />
      </div>
    );
  }
}

const emojis = {
  like: (props) => <div className={'zama-emoji emoji--like ' + (props.size? props.size: 'md')}>
      <div className="emoji__hand">
          <div className="emoji__thumb" />
      </div>
      </div>
  ,
  love: (props) => <div className={'zama-emoji emoji--love ' + (props.size? props.size: 'md')}>
      <div className="emoji__heart" />
      </div>
  ,
  haha: (props) => <div className={'zama-emoji emoji--haha ' + (props.size? props.size: 'md')}>
      <div className="emoji__face">
          <div className="emoji__eyes" />
          <div className="emoji__mouth">
          <div className="emoji__tongue" />
          </div>
      </div>
      </div>,
  yay: (props) => <div className={'zama-emoji emoji--yay ' + (props.size? props.size: 'md')}>
      <div className="emoji__face">
          <div className="emoji__eyebrows" />
          <div className="emoji__mouth" />
      </div>
      </div>,
  wow: (props) => <div className={'zama-emoji emoji--wow ' + (props.size? props.size: 'md')}>
      <div className="emoji__face">
          <div className="emoji__eyebrows" />
          <div className="emoji__eyes" />
          <div className="emoji__mouth" />
      </div>
      </div>,
  sad: (props) => <div className={'zama-emoji emoji--sad ' + (props.size? props.size: 'md')}>
      <div className="emoji__face">
          <div className="emoji__eyebrows" />
          <div className="emoji__eyes" />
          <div className="emoji__mouth" />
      </div>
      </div>,
  angry: (props) => <div className={'zama-emoji emoji--angry ' + (props.size? props.size: 'md')}>
      <div className="emoji__face">
          <div className="emoji__eyebrows" />
          <div className="emoji__eyes" />
          <div className="emoji__mouth" />
      </div>
      </div>
};