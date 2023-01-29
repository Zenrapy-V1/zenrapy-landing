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
            <NavBar />
            <BlogPage />
            <Footer />
           
        </div>
    );
}
 
export default Blog;