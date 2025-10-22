import React from 'react';
import '../../../src/App.css';
import bookImage from '../../assets/books.jpg';

const Banner = () => {
    return (
        <div className='bg-[#1313130d] p-12 my-5 rounded-xl flex flex-col justify-around items-center md:flex-row gap-3'>
            <div>
                <h2 className='text-6xl font-bold playfair-display-font mb-12'>Books to freshen up <br /> your bookshelf</h2>
                <button className="btn bg-[#23BE0A] text-white">View The List</button>
            </div>
            <div>
                <img className='rounded-lg' src={bookImage} alt="" />
            </div>
        </div>
    );
};

export default Banner;