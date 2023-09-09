import React from "react";
import instaImg from '../images/instagram.png';
import linkedInImg from '../images/linkedin.png';
import twitterImg from '../images/twitter.png';
import { Col, Container, Row } from "react-bootstrap";


function Footer() {
  return <div className="footerDiv">
    {/* <hr /> */}
    <Container>
      <Row>
        <Col>
          <div className="footerTable">
            <h3>Connect With Us</h3>
            <p>C/O Maulana Azad National Institute of Technology (MANIT), Bhopal Room No TC-105, New Teaching Block, MANIT, Bhopal, MP, India</p>
            <p>Pin code : 462003</p>
            Phone : <a href="tel:+918982597809">+91-8982597809</a>
            <br />Email:<a href="mailto:Prathammsaraf@gmail.com"> Prathammsaraf@gmail.com</a>
          </div>
        </Col>
        <Col>
          <div className="footerTable">
            <center>
              <p>Follow Us on Social Media Platforms</p>
              <table>
                <tr>
                  <td><a href="https://instagram.com/iiitbhopal_official" target="_blank" rel="noopener noreferrer"><img className="shakethis" src={instaImg} alt="Instagram_Profile" /></a></td>
                  <td><a href="https://www.linkedin.com/in/tnp-iiitbhopal" target="_blank" rel="noopener noreferrer"><img className="shakethis" src={linkedInImg} alt="linkedIn_Profile" /></a></td>
                  <td><a href="https://x.com/iiitbhopal" target="_blank" rel="noopener noreferrer"><img className="shakethis" src={twitterImg} alt="Twitter_profile" /></a></td>
                </tr>
              </table>
            </center>
          </div>
        </Col>
      </Row>
    </Container>
    <br />
    <center><span>IIIT Bhopal 2023 &#169; All Rights Reserved</span></center>
  </div>
}

export default Footer;