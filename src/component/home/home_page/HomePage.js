import React from 'react';
import Banner from "../banner/Banner";
import Describe from "../describe/Describe";
import ExplanationSection from "../explanation_section/ExplanationSection";

const HomePage = () => {
    return (
        <div>
            <Banner/>
            <Describe/>
            <ExplanationSection/>
        </div>
    );
}

export default HomePage;