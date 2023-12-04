import React, { useState } from 'react';
import './footer.css';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import { Grid, Slider } from '@mui/material';

const Footer = () => {
  const [isVolumeIconHovered, setIsVolumeIconHovered] = useState(false);

  return (
    <div className="footer">
            
      <div className="footer__left">
         <img className='footer__albumLogo' src="https://media.gettyimages.com/id/1502026221/photo/bet-awards-2023-show.jpg?s=612x612&w=gi&k=20&c=K7i-QddPCptsamCtjax1fIBhwI2eyNqtwEF9Qlz-jmY=" alt="" />
         <div className="footer__songInfo">
            <h4>Yeah!</h4>
            <p>Davido</p>
         </div>
      </div>

      <div className="footer__center">
          <ShuffleIcon className='footer__green'/>
          <SkipPreviousIcon className='footer__icon'/>
          <PlayCircleOutlineIcon className='footer__icon' fontSize='large'/>
          <SkipNextIcon className='footer__icon'/>
          <RepeatIcon className='footer__green'/>
      </div>
      <div className="footer__right">
        <Grid container spacing={3}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon
              id="volume"
              onMouseEnter={() => setIsVolumeIconHovered(true)}
              onMouseLeave={() => setIsVolumeIconHovered(false)}
            />
          </Grid>
          <Grid item xs>
            <Slider
              className={`slider ${isVolumeIconHovered ? 'hovered' : ''}`}
               style={{color: 'white'}}
            />
          </Grid>
        </Grid>
      </div>

    </div>
  );
};

export default Footer;
