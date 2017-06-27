import React from 'react'
import {Navbar, NavItem} from 'react-materialize'

export default () => (
  <div className="container">
    <div>
      <Navbar brand='Sprout' className="light-green" href='/home' right>
        <NavItem href='/gardens/current'>My Garden</NavItem>
        <NavItem href='/gardens/history'>Past Gardens</NavItem>
        <NavItem href='/gardens/history'>Stats</NavItem>
        <NavItem href='/gardens/login'>Login/Logout</NavItem>
      </Navbar>
    </div>
  </div>
  )
