import React from 'react'
import './sidebar.css'
import SidebarOption from '../sidebarOption/SidebarOption'
import { useDataLayerValue } from '../../DataLayer';

import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
 


const Sidebar = () => {
  const [{ playlists } ] =  useDataLayerValue()

  return (
     <div className="sidebar">
      <div className="sidebar__header-logo">
      <img src="https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-logo-transparent-spotify-logo-images-25.png" alt="" className="sidebar__logo" />

      <h4 className="sidebar__text">SPOtify</h4>
      </div>
      <SidebarOption Icon={HomeIcon} title='Home'/>
      <SidebarOption Icon={SearchIcon} title='Search'/>
      <SidebarOption Icon={LibraryMusicIcon} title='Your Library'/>
       
       <br />
      <strong className='sidebar__title'>PLAYLISTS</strong>

      <hr />
      {playlists?.items?.length > 0 ? (
        playlists.items.map((playlist) => (
          <SidebarOption key={playlist.id} title={playlist.name} />
        ))
      ) : (
        <p className='sidebar__playlist'>No playlists available</p>
      )}
     </div>
  )
}

export default Sidebar
 