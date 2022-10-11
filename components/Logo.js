import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import BlackBlowgrr from '../public/header/logo-black.svg'
import WhiteBlowgrr from '../public/footer/logo-white.svg'

const Logo = ({ color }) => {

    let logo = BlackBlowgrr;

    if(color === "white"){
        logo = WhiteBlowgrr;
    }

    if(color === "black"){
        logo = BlackBlowgrr
    }

    return (
        <Link href={`/`}>
            <Image
                className="logo"
                src={logo}
                alt="Blowgrr"
                height={100}
                width={200}
            />
        </Link>
    )
}

export default Logo
