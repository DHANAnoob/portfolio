import './nav.css';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { useState } from 'react';


export default function Nav(){

    const [value,setvalue] = useState(false)
    function close(){
        setvalue (!value)
    }

    return(
        <div>
            <div className='navbar'>
                <nav>
                    <div className='heading1'><h1>DHANASEKAR J</h1></div>
                    <ul className='ul0'>
                        <li><Link  to='/'>Home</Link></li>
                        <li><Link  to='/About'>About me</Link></li>
                        <li><Link  to='/Contact'>Contact me</Link></li>
                        <li><Link  to='/Projects'>My Projects</Link></li>
                    </ul>
                    <div className='hamburger' onClick={()=>(close())}>{ value ? (<MdClose/>) :(<GiHamburgerMenu/>)}</div>
                </nav>
            </div>                
            <ul className={`ul1 ${value ? "ul2" :"ul3"}`}>
                        <li><Link onClick={close} to='/'>Home</Link></li>
                        <li><Link onClick={close} to='/About'>About me</Link></li>
                        <li><Link onClick={close} to='/Contact'>Contact me</Link></li>
                        <li><Link onClick={close} to='/Projects'>My Projects</Link></li>
                </ul>
        </div>
    )
}