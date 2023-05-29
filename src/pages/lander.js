import './lander.css';
import mypic from '../assets/IMG_6492.jpg';
import dp from '../assets/dp1.png';
import myres from '../assets/updatedres.pdf';
import { FaInstagram,FaGithub,FaEnvelope,FaLinkedin } from "react-icons/fa";


export default function Lander(){
    return(
        <div className='container1'>
            <div className='bg1'>
                <img src={mypic} alt='mypic'/>
            </div>
            <div className='container2'>
                <div className='cont1'>
                    <div className='startline'></div>
                    <h2>Welcome!</h2>
                    <p>I am J.Dhanasekar, I was born and brought up in chennai  in TN and I'm 23 Years Old.<br></br>
                    I completed  front end web developing course with duration of five months at Login 360 in 2023.<br></br>
                    As a fresher, I don't have any work experience, but I will prove it once the opportunity comes.</p>
                    <div className='myresbtn'>
                        <button>  <a href={myres} download="Resume" rel="noreferrer" target="_blank" > Get Resume </a> </button>
                    </div>
                    <div className='endline'></div>
                </div>
                <div className='cont2'>
                    <img src={dp} alt='display pic'/>
                    <div className='socialicons'>
                        <ul>
                            <li><a href='https://www.instagram.com/dhanasekar___1110/' rel="noreferrer" target='_blank'><FaInstagram/></a></li>
                            <li><a href='https://github.com/DHANAnoob' rel="noreferrer" target='_blank' ><FaGithub/></a></li>
                            <li><a href="https://www.linkedin.com/in/dhanasekar-j-03036a26b/" rel="noreferrer" target='_blank'><FaLinkedin/></a></li>
                            <li><a href='https://mail.google.com/mail/u/0/#inbox' rel="noreferrer" target='_blank'><FaEnvelope/></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>      
    )
}