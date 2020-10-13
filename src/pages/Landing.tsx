import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import '../styles/landing.css';
import logoImg from '../images/logo.svg';

function Landing(){
    return(
        <div id="page-landing">
        <div className="content-wrapper">
          <img src={logoImg} alt="Happy"></img>
          <main>
            <h1>Leve felicidade para o mundo</h1>
            <p>Visite orfanatos e mude o dia de muitas crianças</p>
            <div className="location">
              <strong>Goiania</strong>
              <span>Goiás</span>
            </div>
            <Link to="/app" className="enter-app">
              <FiArrowRight  color="rgba(0, 0, 0, 0.7"></FiArrowRight>
              </Link>
          </main>
        </div>
      </div>
    );
}

export default Landing;