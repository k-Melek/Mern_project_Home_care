// Sidebar.js
import React, { useState } from 'react';
import { BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsListCheck, BsMenuButtonWideFill, BsFillGearFill } from 'react-icons/bs';

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  const [isUsersMenuOpen, setUsersMenuOpen] = useState(false);

  const toggleUsersMenu = () => {
    setUsersMenuOpen(!isUsersMenuOpen);
  };

  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          {/* <BsCart3 className='icon_header'/> SHOP */}
        </div>
        <span className='icon close_icon' onClick={OpenSidebar}>X</span>
      </div>

      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
          <a href="#">
            <BsGrid1X2Fill className='icon' /> Dashboard
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="#">
            <BsFillArchiveFill className='icon' /> Admins
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="#">
            <BsFillGrid3X3GapFill className='icon' /> Categories
          </a>
        </li>
        <li className={`sidebar-list-item ${isUsersMenuOpen ? 'active' : ''}`}>
          <a href="#" onClick={toggleUsersMenu}>
            <BsPeopleFill className='icon' /> Users
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="#">
            <BsListCheck className='icon' /> Security {/* Updated: Inventory to Security */}
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="#">
            <BsMenuButtonWideFill className='icon' /> Reports
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="#">
            <BsFillGearFill className='icon' /> Setting
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
