import React from 'react';

import icFacebook from '../assets/images/fi_facebook.svg'
import icInstagram from '../assets/images/fi_instagram.svg'
import icTwitter from '../assets/images/fi_twitter.svg'
import icMail from '../assets/images/fi_mail.svg'
import icTwitch from '../assets/images/fi_twitch.svg'

const Footer = () => {
  return (
        // <footer className="container-fluid contains mt-5">
        //     <div className="row gap-4">
        //         <div className="col-md-4 d-flex flex-column gap-1">
        //             <p className="paragraph-title m-0 w-75">
        //                 Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000
        //             </p>
        //             <p className="paragraph-title m-0">
        //                 binarcarrental@gmail.com
        //             </p>
        //             <p className="paragraph-title m-0">
        //                 081-233-334-808
        //             </p>
        //         </div>
        //         <div className="col-md-1">
        //             <p>Our Services</p>
        //             <p>Why Us</p>
        //             <p>Testimonial</p>
        //             <p>FAQ</p>
        //         </div>
        //         <div className="col-md-3">
        //             <p className="paragraph-title">Connect with us</p>
        //             <img className='px-1' src={facebook} alt="pict-alt" />
        //             <img className='px-1' src={instagram} alt="pict-alt" />
        //             <img className='px-1' src={twitter} alt="pict-alt" />
        //             <img className='px-1' src={mail} alt="pict-alt" />
        //             <img className='px-1' src={twitch} alt="pict-alt" />
        //         </div>
        //         <div className="col-md-3">
        //             <p className="paragraph-title">
        //                 Copyright Binar 2022
        //             </p>
        //             <div className="title-header position-relative my-2"></div>
        //         </div>
        //     </div>
        // </footer>

    <footer className="footer-component">
      <div className="container container-custom footer-custom">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-3 col-xl-4 px-3 px-md-0 px-lg-2">
            <div className="wrapper-info-company-footer">
              <p className="fw-bold mb-3">
                Jalan Suroyo No. 161 Mayangan Kota Probolinggo 67200
              </p>
              <p className="fw-bold mb-3">binarcarrental@gmail.com</p>
              <p className="fw-bold mb-3">081-233-334-808</p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-2 col-xl-2 px-3 px-md-0 px-lg-2">
            <p>Our Service</p>
            <p>Why Us</p>
            <p>Testimonial</p>
            <p>FAQ</p>
          </div>
          <div className="col-12 col-md-6 col-lg-4 col-xl-3 px-3 px-md-0 px-lg-2">
            <p className="fw-bold mb-3">Connect with us</p>
            <div className="d-flex gap-3 mb-3">
              <div className="wrap-icon">
                <img src={icFacebook} className="image-icon d-block mx-auto" alt="ic footer" />
              </div>
              <div className="wrap-icon">
                <img src={icInstagram} className="image-icon d-block mx-auto" alt="ic footer" />
              </div>
              <div className="wrap-icon">
                <img src={icTwitter} className="image-icon d-block mx-auto" alt="ic footer" />
              </div>
              <div className="wrap-icon">
                <img src={icMail} className="image-icon d-block mx-auto" alt="ic footer" />
              </div>
              <div className="wrap-icon">
                <img src={icTwitch} className="image-icon d-block mx-auto" alt="ic footer" />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 col-xl-3 px-3 px-md-0 px-lg-2">
            <p className="fw-bold mb-3">Copyright Binar 2022</p>
            <div className="logo-nav"></div>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer