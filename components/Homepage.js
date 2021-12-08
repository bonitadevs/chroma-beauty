import React from 'react'
import Image from 'next/image'

export default function Homepage() {
    return (
        <div className="homepage">
            <div className="color-blocks parent">
                <Image src="/HomepageImage.png" alt="colorblocks" width="1220" height="580"/>
                <div><p className="tis-the-season">Tis' the Season</p></div> 
                <div><p className="for-a">for a</p></div> 
                <div><p className="healthy-glow">Healthy Glow</p></div> 
            </div>
        </div>
    )
}


