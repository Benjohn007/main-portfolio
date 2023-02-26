import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const SocialLinks = () => {
    const links = [
        {
            id: 1,
            child:(
                <>LinkedIn <FaLinkedin size={25}/></>
            ),
            href: 'https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BSPu7FXNaR1ezhx5PpP5RsA%3D%3D',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child:(
                <>GitHub <FaGithub size={25}/></>
            ),
            href: 'https://www.github.com/Benjohn007',
        },
        {
            id: 3,
            child:(
                <>Mail <HiOutlineMail size={25}/></>
            ),
            href: 'mailto:johanben330@gmail.com',
            
        },
        {
            id: 4,
            child:(
                <>Resume <BsFillPersonLinesFill size={25}/></>
            ),
            href: '/resume.pdf',
            style: 'rounded-br-md',
            download: true,
        },
    ];

  return (
    <div className='flex flex-col top-[35%] left-0
    fixed'>
        <ul>
            {links.map(({id, child, href, style, download}) => (
                  <li key={id} className={`hidden lg:flex justify-between items-center w-40 h-10 px-2 bg-gray-500 ml-[-120px] hover:ml-[-10px] hover:rounded-md duration-500 ${style}`}>

                      <a href={href} className='flex justify-between
                      items-center w-full text-white ml-5'
                      download={download}
                      target="_blank"
                      rel='noreferrer'
                      >
                        {child}
                      </a>
                  </li>
            ))}
          
        </ul>
    </div>
  )
}

export default SocialLinks