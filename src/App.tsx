import React from 'react';
import  './App.css';
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import About from "./about/About";
import Resume from "./resume/Resume";
import Portfolio from "./portfolio/Portfolio";
import Contact from "./contact/contact";
import Footer from "./footer/footer";
import Nav from "./nav/Nav";


const App = () => {
    return (
        <div className="App">
            <video className='bodyOverlay' autoPlay loop muted>
                <source src={require('./assets/backgroundVideo.mp4')} type='video/mp4' />
            </video>
            <Nav/>
            <Header/>
            <div id={'homepage'}><Main/></div>
            <div id={'AboutPart'}><About/></div>
            <div id={'SkillsPart'}><Skills/></div>
            <div id={'ResumePart'}><Resume/></div>
            <div id={'PortfolioPart'}><Portfolio/></div>
            <div id={'ContactPart'}><Contact/></div>
            <Footer/>
        </div>
    );
}

export default App;
