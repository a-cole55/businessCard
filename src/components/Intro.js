import React from 'react';


export default function Header(){
    return (
        <div className="intro">
            <section className="info">
                <img className="headerImage" src="../../images/acole.JPG" alt="developer" />
                <h1>Ar'Niqua Coleman</h1>
                <h2>Fullstack Developer</h2>
                <a href="acole.netlify.app">acolee.netlify.app</a>
            </section>
            <section className="links">
                <button className= "button" type='button'><a href="arniqua_c@yahoo.com">Email</a></button>
                <button className = "button" type='button'><a href="https://www.linkedin.com/in/arniqua-c/">LinkedIn</a></button>
            </section>
        </div>

    )
}
