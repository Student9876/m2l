import React from 'react';
import sponsorImage from '../images/google.png'


function SponsorSlider() {
    return <div className='slide-w'>
        <div className='slide'>
            <span><img src={sponsorImage} alt="Sponsor"/> &#160;&#160;&#160; <img src={sponsorImage} alt="Sponsor"/> &#160;&#160;&#160; <img src={sponsorImage} alt="Sponsor"/> &#160;&#160;&#160; <img src={sponsorImage} alt="Sponsor"/></span>
        </div>
    </div>  
}


export default SponsorSlider;
