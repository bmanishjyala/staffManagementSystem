import React from 'react'
import LineStyleIcon from '@mui/icons-material/LineStyle';
import PersonIcon from '@mui/icons-material/Person';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import InfoIcon from '@mui/icons-material/Info';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import SearchIcon from '@mui/icons-material/Search';
import {  Link } from "react-router-dom";



export default function Sidebar() {
  return (
    <div className='sidebar'>
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
  )
}
