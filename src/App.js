import { useEffect } from 'react';
import './App.css';
import Login from './pages/login/Login';
import { getTokenFromResponse } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './pages/player/Player';
 import { useDataLayerValue } from './DataLayer'

const spotify = new SpotifyWebApi()

function App() {
  const [{ token }, dispatch] =  useDataLayerValue()

  useEffect(() => {
    const hash = getTokenFromResponse()
    window.location.hash = ''
    const _token = hash.access_token
     if (_token) {
      dispatch({
        type: 'SET_TOKEN',
        token: _token
      })
      
      spotify.setAccessToken(_token)

      spotify.getMe().then((user) => {
        dispatch({
          type: 'SET_USER',
          user: user
        })
      })

       spotify.getUserPlaylists().then((playlist) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlist
        })
       })

       spotify.getPlaylist('37i9dQZF1E4FthUmIHghdb').then((singlePlay) => {
        dispatch({
          type: 'SET_DISCOVER_WEEKLY',
          discover_weekly: singlePlay
        })
       })

     }
   
  }, [dispatch, token])
 
  return (
    <div className="app">

     {
      token ? 

      <Player spotify={spotify}/> :
      <Login />
      
     }
    </div>
  );
}

export default App;
 