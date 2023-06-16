import React from 'react';
import './App.css';
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import About from "./about/About";
import Resume from "./resume/Resume";
import Portfolio from "./portfolio/Portfolio";
import Contact from "./contact/contact";
import Footer from "./footer/footer";

const App = () => {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <About/>
            <Skills/>
            <Resume/>
            <Portfolio/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;
