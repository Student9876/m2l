import React from "react";
import tanav_singh_bajaj from '../images/tanav_singh_bajaj.jpeg';
import pratham_saraf from '../images/pratham_saraf.jpg';
import ashutosh_kumar_singh from '../images/ashutosh_kumar_singh.jpg';
import ajay_shrivastava from '../images/ajay_shrivastava.jpg';
import nikhil_singh from '../images/nikhil_singh.jpg';

function Speakers() {
    return <>
    <div className="speakerDiv">

        <center><h1 className="guestSpeakerHeading">Chief Guests</h1></center>
        <div className="guestSpeakerContent">
            <table>
                <tr>
                    <div className="speakerDetails reveal fade-bottom">
                        <td><img className="profileImage" src={ashutosh_kumar_singh} alt="ProfileImage" /></td>
                        <td><h1 className="guestName">Dr. Ashutosh Kumar Singh</h1>
                            <p>
                                <strong>Director</strong> at IIIT Bhopal
                            </p>

                        </td>
                    </div>
                </tr>
                <tr>
                    <div className="speakerDetails reveal fade-bottom">
                        <td><img className="profileImage" src={ajay_shrivastava} alt="ProfileImage" /></td>
                        <td><h1 className="guestName">Prof. Ajay Srivastava</h1>
                            <p>
                                <strong>Training and Placement Officer</strong> at IIIT Bhopal
                            </p>
                        </td>
                    </div>
                </tr>
                <tr>
                    <div className="speakerDetails reveal fade-bottom">
                        <td><img className="profileImage" src={nikhil_singh} alt="ProfileImage" /></td>
                        <td><h1 className="guestName">Nikhil Singh</h1>
                            <p>
                                <strong>Ex-Googler</strong>
                            </p>
                        </td>
                    </div>
                </tr>
            </table>
        </div>
        <br />
        {/* Guest Speakers  */}
        <center><h1 className="guestSpeakerHeading">Guest Speakers</h1></center>
        <div className="guestSpeakerContent">
            <table>
                <tr>
                    <div className="speakerDetails reveal fade-bottom">
                        <td><img className="profileImage" src={tanav_singh_bajaj} alt="ProfileImage" /></td>
                        <td><h1 className="guestName">TANAV SINGH BAJAJ</h1>
                            <p>
                                Research Assistant at <strong>University of Toronto</strong> and <strong>University of British Columbia</strong>
                            </p>

                        </td>
                    </div>
                </tr>
                <tr>
                    <div className="speakerDetails reveal fade-bottom">
                        <td><img className="profileImage" src={pratham_saraf} alt="ProfileImage" /></td>
                        <td><h1 className="guestName">PRATHAM SARAF</h1>
                            <p>
                                Research Assistant at <strong>IIT Madras</strong> and <strong>IIT BHU</strong>
                            </p>
                        </td>
                    </div>
                </tr>
            </table>
        </div>
    </div>
    </>
}

export default Speakers;