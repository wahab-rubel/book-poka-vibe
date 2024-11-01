import React from 'react'
import BannerImg from '../../assets/books.jpg'

function Banner() {
  return (
   <div className="hero bg-base-200 min-h-screen">
   <div className="hero-content flex-col lg:flex-row-reverse">
     <img
       src={BannerImg}
       className="max-w-sm rounded-lg shadow-2xl" />
     <div className=''>
       <h1 className="text-5xl font-bold mb-6">Books to freshen up <br /> your bookshelf</h1>
       <button className="btn bg-green-500 mb-6 text-white">View The List</button>
     </div>
   </div>
 </div>
  )
}

export default Banner
