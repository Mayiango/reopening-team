import React, {Component} from 'react';

import coronavirus from '../assets/coronavirus.jpg';
import './App.css';

class About extends Component{
    render(){
        return (
            <div className="about">      
                <div className="intro">
                    <p>
                        Coronaviruses are large, roughly spherical, particles with crown like spikes proteins on their surface. 
                        There are four main subgroups of coronavirus known as alpha, beta, gamma and delta.
                        Human coronaviruses including the novel coronavirus - CoV19 all are alphacoronavirus. 
                    </p>           
                    <p>
                        With the widespread of CoV19 worldwide,all countries have their own travel policies during this pandemic. 
                        Due to the vairation of spread in each country, all states or province of the countries may have different 
                        travel polices. 
                    </p>
                    <p>
                        To facilitate of travel policy search, we started this project to pull all travel policy together.
                    </p>
                    <p>
                        Be safe!     
                    </p>  
                </div>           
            </div>
        );
    }
};

export default About;