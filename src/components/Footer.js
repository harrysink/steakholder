import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import logo from '../images/logo-png.png';
import appstorelogo from '../images/app-store-logo.png';
import playstorelogo from '../images/play-store-logo.png';
import './Footer.css';

function Footer() {
    const facebook = <FontAwesomeIcon icon={faFacebook} />
    const twitter = <FontAwesomeIcon icon={faTwitter} />
    const instagram = <FontAwesomeIcon icon={faInstagram} />
    const linkedin = <FontAwesomeIcon icon={faLinkedin} />

    return (
        <div className='footer'>
            <div className='upperfooter'>
                <div className='logosection'>
                    <img src={logo} alt="steakholder logo"/>
                    <h6><i>...the grill road!</i></h6>
                    <p className="app-advert-1">
                        <div className="div-1">
                            <img src={appstorelogo} alt="app store logo"/>
                            <img src={playstorelogo} alt="play store logo"/>
                        </div>
                        App coming to stores soon!
                    </p>
                    <div className="social-media-1">
                        <span>{facebook}</span>
                        <span>{twitter}</span>
                        <span>{instagram}</span>
                        <span>{linkedin}</span>
                    </div>
                </div>
                <div className='otherlinks'>
                    <p>Contact</p>
                    <p>Signup as a business</p>
                    <p>View pick-up points nearby</p>
                    <p>Privacy</p>
                    <p>Terms</p>
                    <p className="app-advert-2">
                        <div className="div-2">
                            <img src={appstorelogo} alt="app store logo"/>
                            <img src={playstorelogo} alt="play store logo"/>
                        </div>
                        App coming to stores soon!
                    </p>
                    <div className="social-media-2">
                        <span>{facebook}</span>
                        <span>{twitter}</span>
                        <span>{instagram}</span>
                        <span>{linkedin}</span>
                    </div>
                </div>
            </div>
            <div className="lowerfooter">
                <p>© Copyright 2023  Steakholder Inc. All rights reserved</p>
            </div>
        </div>
    )
}

export default Footer;