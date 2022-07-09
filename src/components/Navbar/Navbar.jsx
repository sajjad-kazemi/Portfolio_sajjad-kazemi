import {Link, Outlet} from 'react-router-dom'
import {Person, Postcard, ViewList} from 'react-bootstrap-icons'

import logo from '../../Logo.svg'
import style from './Navbar.module.css'

function Navbar() {
  return (
    <>
      <nav className={`${style.navbar} navbar-expand-md`}>
        <div className={style.logo}><img src={logo} alt="logo" />
        <h1>Sajjad Kazemi</h1></div>
        <ul className={style.list}>
          <li><Link to='/'><ViewList/> { (window.innerWidth > 768) && 'Portfolio'}</Link></li>
          <li><Link to='/About'><Person/>{ (window.innerWidth > 768) && 'About'}</Link></li>
          <li><Link to='/Contact'><Postcard/> { (window.innerWidth > 768) && 'Contact me'}</Link></li>
        </ul>
      </nav>
      <Outlet/>
    </>
    )
}

export default Navbar