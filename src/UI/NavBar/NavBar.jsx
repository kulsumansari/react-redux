import { navData } from './data/data'
import { useSelector } from 'react-redux';

import './style.css'
function NavBar(props){
    const isLoggedIn = useSelector((state)=> state.login)
    let { logo , navLinks} = navData;
    return(
         <div className='navigation'>
            <div className='company-logo'>
                <img src={logo.imageSrc} alt={logo.alt} className='logo'></img>
            </div>
            <ul className='nav-container'> 
                {
                    navLinks.map((link)=>{
                        return <li key={link.linkId} className='nav-item'>
                            {
                                isLoggedIn && link.isCta? 
                                    <button className={'nav-link'+' btn'} onClick={props.onLogOut}> 
                                        Log Out
                                    </button>
                                : 
                                <a href={link.href} className={'nav-link'} > {link.link} </a>

                            }
                        </li>
                    })
                }
        </ul>
      </div>
    )
}
export default NavBar;