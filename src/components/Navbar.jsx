import '../App.css'
import { Link, NavLink } from 'react-router-dom';
const Navbar=()=>{
    return(
        <>
        <nav>
            <div className="navbar">
               <span className="logo">MixMaster</span>
               <div className="nav-links">
               <NavLink to='/MixMaster/' className='nav-link'>Home</NavLink>
               <NavLink to='/About' className='nav-link'>About</NavLink>
               <NavLink to='/Newsletter' className='nav-link'>Newsletter</NavLink>
               </div>
            </div>
        </nav>
        
        </>
    )
}

export default Navbar;