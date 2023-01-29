import React, { useState } from 'react'
import "./index.scss"
import { BsChevronDown } from 'react-icons/bs'
import About from "../../assets/about.png"
import BlogAwait from "../../assets/blogAwait.png"

const BlogPage = () => {

    return (  
        <div className='blog-page'>
            <div className='top-section'>
                <p className='heading'>
                    <span className='bold-heading-dark'>Hello 👋, We are <br/>
                    Zenrapy Blog.</span><span className='bold-heading-light'> see our <br/> 
                    thoughts, stories and ideas</span> 
                </p>
           </div>
           
           <div className='bottom-section'>
                <h2>Page Under Construction</h2>
                <div className='context'>
                    <p>
                        Hello, the page you are tying to view is under 
                        construction and temporarily unavailable.
                        The team is doing some work behind the scenes,<br/>
                        do check back later.😊<br/>
                        Thank you
                    </p>
                    <img src={BlogAwait} />
                </div>
           </div>
           
        </div>
    );
}
 
export default BlogPage;