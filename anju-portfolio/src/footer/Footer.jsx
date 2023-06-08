import React, { useState } from 'react'
import './Footer.css'

function Footer(props) {
    const [count, increment] = useState(0)
    return (
        <>
            <div className='footer'>
                <div className='about'>
                    <code><h1>{props.title}</h1></code>
                    <p>Exposure: Adjust the exposure to achieve the desired brightness and balance in the photo.</p>
                </div>
                <div className='explore'>
                    <h3 className='title'>EXPLORE</h3>
                    <h3>SUPPORTS</h3>
                    <h3>ABOUT US</h3>
                    <h3>BLOG</h3>
                </div>
                <div className='legal'>
                    <h3 className='title'>LEGAL</h3>
                    <h3>TERMS OF USE</h3>
                    <h3>PRIVACY POLICY</h3>
                </div>
                <div className='socials'>
                    <h3 className='title'>SOCIALS</h3>
                    <h3>TWITTER</h3>
                    <h3>LINKEDIN</h3>
                    <h3>INSTAGRAM</h3>
                </div>
            </div>
        </>
    )
}

export default Footer