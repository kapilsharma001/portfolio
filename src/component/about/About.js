
// src/About.js
import React from 'react';

const About = () => {
    return (
        <div className="about">
            <header className="about-header">
                <h1>About Kapil Sharma</h1>
            </header>
            <section className="bio">
                <h2 className='dca'>Who is Kapil Sharma?</h2>
                <p>My name is kapil sharma, and I am a software developer with expertise in JavaScript frameworks and libraries such as React. 
                I also have experience with html and css and a frontend developer in training, I am passionate about using technology to solve complex problems and create impactful solutions.
                </p>
            </section>
            <section className="achievements">
                <h2 className='jay'>Experience</h2>
                <ul>
                    <li className='developer'>Internship From Regal Outsourcing pvt. ltd.</li>
                    <li className='developer'>Internship From Marvik Academy From Technical Education. (MATE)</li>
                    <li className='developer'>Training From JM Pvt. ltd.</li>
                    <li className='developer'>Hands-on Project</li>
                </ul>
            </section>
            <section className="">
                <h2 className='abcd'>About the Developer</h2>
                <p>
                    This website was developed by kapil Sharma, a passionate web developer dedicated to creating engaging and user-friendly web applications. With experience in React, JavaScript, and modern web technologies, Kapil Sharma aims to bring the best online experiences to users.
                </p>
            </section>
        </div>
    );
};

export default About;
