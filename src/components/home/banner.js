import { useRef, useLayoutEffect } from "react"
import bannerImage from "../../assets/banner.jpg"
import { createBanner } from "./createBanner"

import { ReactComponent as GitHub } from "../../assets/icons/github-brands.svg"
import { ReactComponent as CodeIcon } from "../../assets/icons/code-solid.svg"
import { ReactComponent as LinkedInLogo } from "../../assets/icons/linkedin-brands.svg"

import "../../assets/banner.css"

const Banner = () => {
    const banner = useRef()
    const ctx = useRef()

    useLayoutEffect(() => {
        ctx.current = createBanner(banner.current)
        ctx.current.init()
        ctx.current.animate()

        return (() => {
            if (ctx.current) ctx.current.stop()

        })

    }, [])

    return (
        <div>
            <div className="home-banner text-white">

                <div ref={banner} className="banner" style={{ backgroundImage: `url(${bannerImage})` }} />

                <div className="title-name">
                    <h1>Nick Koerber</h1>
                    <h3 className="subtitle">Web Dev, Game Dev</h3>
                    <div className="socials text-white">
                        <a href="https://www.linkedin.com/in/nick-koerber-8a6954190/" target="_blank" rel="noreferrer"><LinkedInLogo className="social text-white" /></a>
                        <a href="https://github.com/thisisbilly1" target="_blank" rel="noreferrer"><GitHub className="social text-white" /></a>
                        <a href="https://github.com/thisisbilly1/portfolio" target="_blank" rel="noreferrer"><CodeIcon className="social text-white" /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner