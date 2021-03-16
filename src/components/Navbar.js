import { Link, graphql, useStaticQuery } from 'gatsby';
import React from 'react'

export default function Navbar() {

    // Can only use one static query per component
    // Can't use query variables like in Page Queries
    // useStaticQuery is tempremental
    // keep component names with upper case first letter
    const data = useStaticQuery(graphql`
        query SiteInfo {
        site {
            siteMetadata {
            title
            }
        }
        }
    `)

    const { title } = data.site.siteMetadata

    return (
        <nav>
            <h1>{ title }</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Portfolio Projects</Link>
            </div>
        </nav>
    )
}
