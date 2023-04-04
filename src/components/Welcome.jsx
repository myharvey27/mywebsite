import { Link} from "react-router-dom";
import './Welcome.css'

import logo from '../darklove.jpg';
import home from '../homebutton.jpg';
import animation from '../unicorn.jpg';


const Name_popup= ()=> {
    return (
        <div className= 'welcome'>
            <div className='myLogo'>
                <img src={logo} className='name'/>
                <Link to='/home' className ='homeButton'>
                    <img src={home} />
                </Link>
                <img className= 'unicorn' src={animation}/>
            </div>
        </div>
        
        
    );
}

export default Name_popup;