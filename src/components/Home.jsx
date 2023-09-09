import React from "react";
import Component1 from '../images/Component 1.png'
import Component2 from '../images/IIIT.png'
import Component3 from '../images/Bhopal.png'
function Home() {
    return <>
        <div className="home">
            <center>
                <img className="shakethis" src={Component1} alt="M2L"/>
                <p>Mastering Machine Learning</p>
                <img className="shakethis" src={Component2} alt="IIIT"/>
                <img className="shakethis" src={Component3} alt="BHOPAL"/>
                <p>Machine Learning workshop with Kaggle contest</p>
                <br/>
                <button className="regBtn shakethis">Register Now!</button>
            </center>
        </div>
    </>
}

export default Home;