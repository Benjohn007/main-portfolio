import React from 'react'
import SwaggerUI from '../asset/portfolio/SwaggerUI.png'
import Pink from '../asset/portfolio/pink.jpg'
import Josh from '../asset/portfolio/josh.jpg'
import Otavio from '../asset/portfolio/otavio.jpg'
import White from '../asset/portfolio/white.jpg'
import Bich from '../asset/portfolio/bich.jpg'

const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: SwaggerUI
        },
        {
            id: 2,
            src: Pink
        },
        {
            id: 3,
            src: Josh
        },
        {
            id: 4,
            src: Otavio
        },
        {
            id: 5,
            src: White
        },
        {
            id:6,
            src: Bich
        }
    ];

  return (
    <div name="portfolio"
     className=' bg-gradient-to-b from-black to-gray-800
        w-full h-full text-white md:h-screen'>
        <div className=' max-w-screen-lg p-4 mx-auto flex flex-col
                justify-center w-full h-full'>
                <div className=' pb-8'>
                    <p className='text-4xl font-bold inline border-b-4
                         border-gray-500'>
                        Portfoloio
                    </p>
                    <p className='py-6'>Check out some of my work here</p>
                </div>


            <div className=' grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12
                         sm:px-0 sm:mb-44'>
                {
                    portfolios.map(({ id, src }) => (
                    
                            <div key={id}className='shadow-md shadow-gray-600 rounded-lg'>
                            <img 
                            src={src} 
                            alt="work image" 
                            className='rounded-md duration-200 hover:scale-105'
                        />
                            <div className=' flex items-center justify-center'>
                                <button className='w-1/2 px-6 py-3 m-4 duration-200 
                                     hover:scale-105'>
                                    Demo
                                </button>
                                <button className='w-1/2 px-6 py-3 m-4 duration-200 
                                    hover:scale-105'>
                                    Code
                                </button>
                            </div>
                    </div>
                
                    ))
                }
            </div> 
        </div>
    </div>
  )
}

export default Portfolio