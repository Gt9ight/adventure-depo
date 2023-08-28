import { Fragment } from "react";
import { Link, Outlet} from 'react-router-dom';
import './nav.css'
import logo from './logo.png'

const Navbar = () => {
   return( 
<Fragment>
    <div className="navigation">
        <Link className="logo-container" to='/'>
        <img src={logo} alt="Logo" />
        </Link>
        <div className="nav-links-container">
            <Link className="nav-links-container" to='/shop'>
                Shop
            </Link>
        </div>
    </div>
   <Outlet />
</Fragment>
   );
}

export default Navbar