import React from 'react';

const Book = ({ singleBook }) => {
    const { bookName, author, image, category, rating, tags } = singleBook;
    console.log(singleBook)
    return (
        <div className="card bg-base-100 shadow-sm p-5">
            <figure className='p-5 bg-[#F3F3F3] rounded-xl'>
                <img
                    className='h-40'
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="space-y-2">
                <div className='flex gap-10 text-[#23BE0A] font-medium mt-4'>
                    {
                        tags.map((tag,index) => <button key={index} className='bg-[#23be0a0d] px-4 py-2 rounded-full'>{tag}</button>)
                    }
                </div>
                <h2 className="card-title playfair-display-font font-bold">{bookName}</h2>
                <p className='text-[#131313cc] font-medium border-b-1 border-dashed border-gray-300 pb-3'>By: {author}</p>
                <div className="flex justify-between items-center text-[#131313cc] font-medium">
                        <p>{category}</p>
                        <p>{rating} <i className="fa-regular fa-star"></i></p>

                </div>
            </div>
        </div>
    );
};

export default Book;