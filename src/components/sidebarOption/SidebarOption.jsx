import React from 'react';
import './sidebarOption.css';

const SidebarOption = ({ title, Icon }) => {
  return (
    <div className="sidebarOption">
      {Icon && <Icon className='sidebarOption__icon' />}
      {!Icon && <p className='sidebarOption__text'>{title}</p>}
      {Icon && <h4>{title}</h4>}
    </div>
  );
};

export default SidebarOption;



// import React from 'react'
// import './sidebarOption.css'

// const SidebarOption = ({title, Icon}) => {
//   return (
//      <div className="sidebarOption">
//       {Icon && <Icon  className='sidebarOption__icon'/>}
//          {Icon ? <h4>{title}</h4> : <p>{title}</p>}
//      </div>
//   )
// }

// export default SidebarOption