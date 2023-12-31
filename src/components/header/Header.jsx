import React from 'react'
import './header.css'
import Search from '@mui/icons-material/Search'
import { Avatar } from '@mui/material'
import { useDataLayerValue } from '../../DataLayer'

const Header = () => {
  const [{user} ] = useDataLayerValue()
  return (
     <div className="header">
      <div className="header__left">
        <Search />
        <input type="text" 
        placeholder='Search for Artist, Songs or Podcasts'
         />
      </div>
      <div className="header__right">
        <Avatar src={user?.images[0]?.url} alt={user?.display_name}/>
        <h4>{user?.display_name}</h4>
      </div>
     </div>
  )
}

export default Header