import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <footer className="footer-distributed">

                <div className="footer-left">

                    <h3>Company<span> Secoricos</span></h3>

                    <p className="footer-links">
                        <small className="link-1">Home</small>
                        <small>Blog</small>
                        <small>Pricing</small>
                        <small>About</small>
                        <small>Contact</small>
                    </p>

                    <p className="footer-company-name">Company Name Secoricos © 2021</p>
                </div>

                <div className="footer-center">
                    <div>
                        <p><span>Dhaka Bangladesh</span> Chittagong Division , Laksmipur District</p>
                    </div>

                    <div>
                        <p>+123000000000</p>
                    </div>

                    <div>
                        <p><a href="mailto:supportfoodelix@company.com">supportsecoricos@company.com</a></p>
                    </div>

                </div>

                <div className="footer-right">

                    <p className="footer-company-about">
                        <span>About the company</span>
                        The problem with the so-called bloody surveillance state is that it’s hard work trying to track someone’s movements using CCTV – especially if they’re on foot. Part of the problem is that the cameras all belong to different people for different reasons.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;