import React from 'react';
import { Link } from 'react-router-dom';
import images from '../assets/images/dish-plate.png';
import aboutImage from '../assets/images/about-img.jpg';

const Home = () => {
    return (
        <>
            <div className="banner">
                <div className="banner-content">
                    {/* <h4 className='style-head'>WORLD'S BEST CUISINE</h4> */}
                    <h1>Welcome to Food <span>Lover</span></h1>
                    <p>Metropolis Grill one and only authentic Greek, Mediterranean, and Indian Restaurant. We feature a vibrant atmosphere with delicious cuisine.</p>
                    <ul>
                        <li><Link to="/Orderonline" className='btnred'>Order Online</Link></li>
                        <li><Link to="/Menu" className='btngreen'>Our Menu</Link></li>
                    </ul>
                    <div className="banner-image">
                        <img src={images} alt="" />
                    </div>
                </div>
            </div>
            <div className="about-wrapper">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <img src={aboutImage} alt={aboutImage} />
                        </div>
                        <div className="col-md-6 about-content">
                            <h4 className='style-head2'>Quality Service</h4>
                            <h2 className='heading'>Good Foods, Drinks and Great Company</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta perferendis provident itaque labore ea quisquam perspiciatis explicabo, laborum necessitatibus placeat aliquam blanditiis excepturi, asperiores magni dolorum iusto accusamus ipsa laboriosam! <br/><br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sed ipsum quam nihil, architecto ea exercitationem quidem delectus numquam ipsa.</p>
                            <div className="experiance">
                                <h3>25 <span>+</span></h3>
                                <h4><span>Years</span> Experiance</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
