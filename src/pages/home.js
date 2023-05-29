import About from './about';
import Contact from './contact';
// import Resume from './projects';
import Nav from './nav';
import './home.css';
import Lander from './lander';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Projects from './projects';

export default function Home(){
    return(
        <div>
            <BrowserRouter>
            <Nav/>
                <Routes>
                <Route path='/' element={<Lander/>}>  </Route>
                <Route path='/About' element={<About/>}></Route>
                <Route path='/Contact' element={<Contact/>}></Route>
                <Route path='/Projects' element={<Projects/>}></Route>
                </Routes>
            </BrowserRouter> 
        </div>      
    )
}