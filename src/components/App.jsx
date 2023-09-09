import React from "react";
import NavbarCompo from "./NavbarCompo";
import Home from "./Home";
import SponsorSlider from "./Sliding_Sponsor";
import GuestSpeaker from "./Speakers";
import About from "./AboutUs";
import QNA from "./QnaSection";
import Footer from "./Footer";

function App() {

    return <>
        <NavbarCompo />
        <Home />
        <SponsorSlider/>
        <About/>
        <GuestSpeaker/>
        <QNA/>
        <Footer/>
    </>
}

export default App;