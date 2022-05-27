import React from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
import LineStyleIcon from '@mui/icons-material/LineStyle';
import PersonIcon from '@mui/icons-material/Person';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ReorderIcon from '@mui/icons-material/Reorder';
import SearchIcon from '@mui/icons-material/Search';
import InfoIcon from '@mui/icons-material/Info';

import {  Link } from "react-router-dom";

export default function Topbar({name,profile}) {

  return (
    <div className='topbar'>
      
      <div className='topLeft d-flex align-items-center justify-content-center'><a class="btn  open" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
<ReorderIcon />
</a>CodeFox</div>
      <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
<div className="offcanvas-header">
  <h5 className="offcanvas-title" id="offcanvasExampleLabel">Dashboard</h5>
  <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
</div>
<div className="offcanvas-body">
<div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
              <li className='sidebarListItem active'>
                  <LineStyleIcon className='sidebarIcon' />
                 <Link className='text-decoration-none text-secondary' to='/'>Home</Link> 
              </li>
             
          </ul>
          <h3 className="sidebarTitle">Personal Details</h3>
          <ul className="sidebarList">
            
              <li className='sidebarListItem '>
                  <PersonIcon className='sidebarIcon' />
                  <Link className='text-decoration-none text-secondary' to='/details'>Check Your Details</Link> 
              </li>
           
            
          </ul>
          <h3 className="sidebarTitle">Updates</h3>
          <ul className="sidebarList">
            
              <li className='sidebarListItem'>
                  <DynamicFeedIcon className='sidebarIcon' />
                  <Link className='text-decoration-none text-secondary' to='/board'>Notice Wall</Link>
              </li>
              <li className='sidebarListItem'>
                  <DynamicFeedIcon className='sidebarIcon' />
                  <Link className='text-decoration-none text-secondary' to='/query'>Query</Link>
              </li>
            
          </ul>
          <h3 className="sidebarTitle">Extra info</h3>
          <ul className="sidebarList">
              <li className='sidebarListItem '>
                  <ManageAccountsIcon className='sidebarIcon' />
                  <Link className='text-decoration-none text-secondary' to='/faq'>FAQ</Link>
              </li>
              <li className='sidebarListItem '>
                  <InfoIcon className='sidebarIcon' />
                  <Link className='text-decoration-none text-secondary' to='/info'>Info</Link>
              </li>
             
              
          </ul>
      </div>
  
</div>
</div>
      <div className='topRight'>
           <h6 className='mt-2 mx-2'>Hello, {name}</h6>
          <img src={profile} alt="" className='topAvatar' />
      </div>
  </div>
  )
}
