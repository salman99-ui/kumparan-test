import React , {useState} from 'react'
import {Bill} from '../../assets'
import {BrowserRouter as Router , Switch , Link , Route} from 'react-router-dom'
import {Home , About , PageNotFound , Investor} from '../../components'
import { FaFacebook , FaTwitter , FaYoutube , FaEnvelope , FaPhone , FaMapMarkerAlt , FaCalendarDay , FaBars} from 'react-icons/fa'
import './main.scss'


function Index() {
    const date = new Date() ;
    const [show , setShow] = useState(false)
    
    return (
        <div className="main">
            <Router>
            <div className="navbar">
                <Link to="/">
                    <img src={Bill} width="60" height="60" />
                </Link>

                <button className="btn-menu" onClick={() => setShow(!show)}><FaBars color="white" size="24" /></button>

                <ul className={"list " + (show ? 'showTab' : '')}>

                    <li><Link to="/" className="link">Beranda</Link></li>
                    <li><Link to="/about" className="link">Tentang Bill</Link></li>
                    <li><Link to="/blog" className="link">Blog</Link></li>
                    <li><Link to="/investor" className="link">Investor Relation</Link></li>
                    <li><Link to="/bantuan" className="link">Bantuan</Link></li>
                    
                </ul>
            </div>

            <Switch>
                <Route component={Home} path="/" exact />
                <Route component={About} path="/about" />
                <Route component={Investor} path="/investor" />
                <Route component={PageNotFound} path="**" />
            </Switch>

            <div className="footer">
                    <div className="social-media">
                        <h3>Social Media</h3>
                        <span><FaFacebook size="26" color="white" /></span>
                        <span><FaTwitter size="26" color="white" /></span>
                        <span><FaYoutube size="26" color="white" /></span>
                    </div>

                    <div className="product">
                        <h3>Service</h3>
                        <ul>
                            <li><Link to="/" className="list-link">Home</Link></li>
                            <li><Link to="/about" className="list-link">About Us</Link></li>
                            <li><Link to="/roadmap" className="list-link">Milestone & Roadmap</Link></li>
                            <li><Link to="/investor" className="list-link">Investor Relation</Link></li>
                        </ul>
                    </div>

                    <div className="connect">
                        <h3>Connect With Us</h3>
                        <ul>
                            <li><FaPhone className="icon" />  +628131991</li>
                            <li><FaEnvelope className="icon" />  bill_indonesia@gmail.com</li>
                            <li><FaMapMarkerAlt className="icon" />  PIK 2 , North Jakarta</li>
                            <li><FaCalendarDay className="icon" />  Monday - Friday </li>
                        </ul>
                    </div>
                    
                    <div className="aboutus">
                        <h3>About Us</h3>
                        
                        <p>We are a team of passionate people whose goal is to improve everyone's life through disruptive products. We build great products to solve your business problems.
                            Our products are designed for small to medium size companies willing to optimize their performance.</p>
                    </div>
                </div>

                <div className="copyright">
                    <p>Bill &copy;Copyright { date.getFullYear() }</p>
                </div>
            
            </Router>
        </div>
    )
}

export default Index