import React from 'react';
import '../styles/card.css'
import Header from './Header'
import Name from './Name'
import Footer from './Footer'

export default function Card() {
    return (
        <div className='card'>
            <Header/>
            <Name/>
            <Footer/>
        </div>
    )
}
