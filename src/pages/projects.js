import React from 'react';
import './projects.css';
import proimg from '../assets/Project section.jpg';


export default function Projects() {
    return (
        <div className='projectcontainer'>
            <div className='projectshead'>
                <h1>MY <span style={{ color: "rgba(20, 13, 13, 0.915)" }}>PROJECTS</span> </h1>
            </div>
            <div className='projectsection'>
                <div className='projectboxes'>
                    <div className='project1 pro1'>
                        <div className='projectdisplay'><h4>project on process</h4></div>
                        <img src={proimg} alt='project img' />

                    </div>
                    <div className='project1 pro2'>
                        <div className='projectdisplay'><h4>project on process</h4></div>
                        <img src={proimg} alt='project img' />

                    </div>
                    <div className='project1 pro3'>
                        <div className='projectdisplay'><h4>project on process</h4></div>
                        <img src={proimg} alt='project img' />

                    </div>
                    <div className='project1 pro4'>
                        <div className='projectdisplay'><h4>project on process</h4></div>
                        <img src={proimg} alt='project img' />

                    </div>
                    <div className='project1 pro5'>
                        <div className='projectdisplay'><h4>project on process</h4></div>
                        <img src={proimg} alt='project img' />

                    </div>
                    <div className='project1 pro6'>
                        <div className='projectdisplay'><h4>project on process</h4></div>
                        <img src={proimg} alt='project img' />

                    </div>
                </div>
            </div>
        </div>
    )
}