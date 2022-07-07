import logo from '../../Logo.svg'
import style from './Navbar.module.css'

function Navbar() {
  return (
    <nav className={style.navbar}>
      <div className={style.logo}><img src={logo} alt="logo" />
      <h1>Sajjad Kazemi</h1></div>
      <ul className={style.list}>
        <li>Portfolio</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
    )
}

export default Navbar