import {Envelope, Person, ViewList} from 'react-bootstrap-icons'
import {Link, Outlet} from 'react-router-dom'

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
          <li><Link to='/Contact'><Envelope/> { (window.innerWidth > 768) && 'Contact'}</Link></li>
        </ul>
      </nav>
      <Outlet/>
    </>
    )
}

export default Navbar