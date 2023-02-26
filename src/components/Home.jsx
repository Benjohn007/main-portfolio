import React from 'react'
import Animi from "../asset/Animi.jpeg"
import {BiRightArrow} from "react-icons/bi"
import { Link } from "react-scroll"

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b
    from-black  via-black to-gray-800'>
        <div className='max-w-screen-lg mx-auto flex flex-col
        items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl sm:mt-52 font-bold
                text-white mt-10'>
                    I'm a full Stack Developer</h2>
                <p className='text-gray-500 py-4 max-w-md'>
                    I have 3 years of experience building and 
                    designing software. Currently, I love to work 
                    on web application using technology like 
                    .Net, React, Tailwind, Next JS and Sql.
                </p>
                <Link 
                to="portfolio"
                smooth duration={500}
                className='group  text-white w-fit px-6 py-3 my-2 flex 
                item-center rounded-md bg-gradient-to-r from-cyan-500
                 to-blue-500 cursor-pointer'>
                    Portfolio
                    <span className='group-hover:rotate-90 duration-300'>
                    <BiRightArrow size={20} className=' ml-1'/>
                    </span>
                </Link>
            </div>
            <div>
                <img src={Animi}
                alt="myAnimi" 
                className=' rounded-3xl mx-auto  w-2/4 md:w-10/12 md:rounded-r-full' />
            </div>
        </div>
    </div>
  )
}

export default Home