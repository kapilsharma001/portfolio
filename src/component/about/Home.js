// src/Home.js
import React from 'react';
import img5 from '../../static/css.png';
import img6 from '../../static/html.png';
import img7 from '../../static/java.png';
import img8 from '../../static/react.png';
import kapil from '../../static/kapsa.jpg';

const Home = () => {
    const home = {
        image1: img5,
        image2: img6,
        image3: img7,
        image4: img8,
        image5: kapil
    };
    return (
        <div className="home">
            <header className="header">
                <h1 className='username'><span className='tag'>Hey</span> I'm Kapil Sharma</h1>
                <p className='yes'>I am kapil sharma. I cradit high-performing websites and apps focused on user -experiences and conversions. </p>
            </header>
            <span className='icons'>
                <a href='https://instagram.com/kapilsharma_1510'><i class="fa-brands fa-square-instagram"></i></a>
                <a href='https://linkedin.com/in/kapil-sharma-45b8b8262'><i class="fa-brands fa-linkedin"></i></a>
                <a href=''><i class="fa-brands fa-square-github"></i></a>
                <a href=''><i class="fa-brands fa-square-twitter"></i></a>
            </span>
            <div className='skill'>
                <img src={home.image1} alt="product-1" />
                <img src={home.image2} alt={"product-2"} />
                <img src={home.image3} alt={"[product-3"} />
                <img src={home.image4} alt={"product-4"} />
            </div>
            <img src={home.image5} alt={"product-5"} className='bitmoji' />
        </div>
    );
};

export default Home;
