//* This is the Home Component , all the other components will be called in here

import React from 'react'
import Navbar from '../components/Navbar'
import LandingPage from './LandingPage'

const Home = () => {
    return (
        <>
            <Navbar />
            <LandingPage />

        </>
    )
}

export default Home