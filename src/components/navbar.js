import React from 'react'
import {Navbar, NavItem} from 'react-materialize'

export default () => (
  <div className="container">
    <div>
      <Navbar brand='Sprout' className="light-green" href='/home' right>
        <NavItem href='/gardens'>My Gardens</NavItem>
        <NavItem href='/patches/all'>All Patches</NavItem>
        <NavItem href='/stats'>Stats</NavItem>
        <NavItem href='/login'>Login/Logout</NavItem>
      </Navbar>
    </div>
  </div>
  )
