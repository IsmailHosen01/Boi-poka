import React from 'react';

const Book = ({ singleBook }) => {
    const { bookName, author, image, category, rating } = singleBook;
    console.log(singleBook)
    return (
        <div className="card bg-base-100 shadow-sm p-5">
            <figure className='p-5 bg-[#F3F3F3] rounded-xl'>
                <img
                    className='h-40'
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="space-y-1.5">
                <h2 className="card-title playfair-display-font font-bold mt-4">{bookName}</h2>
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