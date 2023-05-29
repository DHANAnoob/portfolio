import './abt.css';
import education from '../assets/education2.jpg';
import frontennd from '../assets/certificate.jpg';
import projectimg from '../assets/project.jpg';
import technicalimg from '../assets/technical.jpg';
import chess from '../assets/chess.jpg';

export default function About() {
    return (
        <div className='abt'>
            <div className='abtcontainer'>
                <div className='aboutmehead'>
                    <h1>ABOUT <span style={{ color: "rgba(20, 13, 13, 0.915)" }}>ME</span>
                    </h1>
                </div>
                <div className='education'>
                    <div className='edubox'>
                        {/* first box */}
                        <div className='eduboxcont'>
                            <h3>CURRICULUM</h3>
                            <table border={"1px"}>
                                <thead>
                                    <tr>
                                        <th>CURRICULUM</th>
                                        <th>SCHOOL</th>
                                        <th>END YEAR</th>
                                        <th>PERCENTAGE</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>SSLC</td>
                                        <td>G.H.S.S velachery</td>
                                        <td>2015</td>
                                        <td>93%</td>
                                    </tr>
                                    <tr>
                                        <td>HSLC</td>
                                        <td>G.H.S.S velachery</td>
                                        <td>2017</td>
                                        <td>87%</td>
                                    </tr>
                                    <tr>
                                        <td>UG (B.E)</td>
                                        <td>SJIT Chennai</td>
                                        <td>2021</td>
                                        <td>7.52CGPA</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className='eduboximgs'>
                            <img src={education} alt='education pic'/>
                        </div>
                    </div>
                    {/* box2 */}
                    <div className='cerbox'>
                        <div className='cerboxcont'>
                            <h3>CERTIFICATIONS</h3>
                            <div className='cer1'>
                                <h4>Web developing cource</h4>
                                <p>Completed front end web devlopment cource in 2023 -course duration five months</p>
                            </div>
                            <div className='cer2'>
                                <h4>Cambridge English entry level - 2018(Preliminary)</h4>
                            </div>
                            <div className='cer3'>
                                <h4>Goodwin motors skill development training(2019)</h4>
                            </div>
                        </div>
                        <div className='cerboximgs'>
                            <img src={frontennd} alt='frontend cerificate pic'/>
                        </div>
                    </div>
                </div>
                {/* box3 */}
                <div className='projects'>
                    <div className='projectcont'>
                        <div className='prohead'><h3>PROJECTS</h3></div>
                        <div className='probody'>
                            <div className='p1'><h4>RESPONSIVE WEBPAGE (2023) - A Responsive webpage using HTML, CSS,React Js.</h4></div>
                            <div className='p1'><h4>Experimental investigation of calophylluminophyllum powder. (2021) -A bio polymerinvolved several testings.</h4></div>
                            <div className='p1'><h4>Four wheel load carrier ( troIly ).(2020)</h4></div>
                            <div className='p1'><h4>Spy ball (2018).</h4></div>
                            <div className='p1'><h4>BULB on and off task using React Js.</h4></div>
                        </div>
                    </div>
                    <div className='projectimgs'>
                        <img src={projectimg} alt='project pic'/>
                    </div>
                </div>
                <div className='technical'>
                    <div className='technicalbox'>
                        {/* box4 */}
                        <div className='technicalcont'>
                            <div className='techhead'><h3>TECHICAL SKILLS</h3></div>
                            <div className='techbody'>
                                <h4>Html,Css</h4>
                                <h4>Bootstrap</h4>
                                <h4>React Js</h4>
                                <h4>Java script</h4>
                            </div>
                        </div>
                        <div className='technicalimgs'>
                            <img src={technicalimg} alt='technical pic'/>
                        </div>
                    </div>
                    <div className='cocurricularbox'>
                        {/* box5 */}
                        <div className='cocuuricularcont'>
                            <div className='cohead'><h3>CO-CURRICULAR ACTIVITIES</h3></div>
                            <div className='cobody'>
                                <h4>Making model of submarine in inter college symposium (2018).</h4>
                                <h4>Participation of chess in zonal level.</h4>
                            </div>
                        </div>
                        <div className='cocurricularimgs'>
                        <img src={chess} alt='chess pic'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}