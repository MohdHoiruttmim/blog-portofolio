import './Navbar.css'
import icon from '../../assets/devsquad.svg'
// import { GiHamburgerMenu } from 'react-icons/gi'
import { FaBars } from 'react-icons/fa'

function Navbar() {
  return (
    <div className='Navbar'>
      <div className='link'>
        <button>
          <FaBars style={{color: "white"}} size={21}/>
        </button>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Note</a></li>
          <li><a href="#">About</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;