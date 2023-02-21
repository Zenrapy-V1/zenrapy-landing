import React, { useState } from 'react'
import "./index.scss"
import { BsChevronDown } from 'react-icons/bs'
import Logo from "../../assets/logo.png"
import NavBar from "../../components/Navbar/Navbar"
import Footer from '../../components/Footer'
import BlogPage from './BlogPage'

const Blog = () => {

    return (  
        <div className='about'>
            <div style={{backgroundColor: "#F7F7F7"}}>
                <NavBar />
            </div>
            <BlogPage />
            <Footer />
           
        </div>
    );
}
 
export default Blog;