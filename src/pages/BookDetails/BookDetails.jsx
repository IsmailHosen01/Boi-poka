import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDB } from '../../utility/addToDB';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const BookDetails = () => {
    const { id } = useParams();
    const data = useLoaderData()
    const singleBook = data.find(book => book.bookId == id);
    const { bookName, author, category, image, publisher, rating, review, tags, totalPages, yearOfPublishing } = singleBook;

    const handleMarkAsRead = id => {
        // store with id
        // where to store
        // array or collection
        // if book is already exist then show an alert
        // if book is not exist then push it array or collection

        MySwal.fire({
            title: "Good job!",
            text: "Added to read list",
            icon: "success"
        });

        addToStoredDB(id);
    }
    return (
        <div className='flex flex-col lg:flex-row gap-10 p-5'>
            <div className='flex-1 bg-[#1313130d] p-5 rounded-xl flex justify-center items-center'>
                <img className='w-2/3' src={image} alt="book image" />
            </div>
            <div className='flex-1'>
                <h2 className='text-4xl font-bold playfair-display-font'>{bookName}</h2>

                <p className='text-xl font-medium text-[#131313cc] border-b-1 border-gray-300 py-5'>By: {author}</p>

                <p className='text-xl font-medium text-[#131313cc] border-b-1 border-gray-300 py-5'>{category}</p>

                <p className='font-bold my-5'>Review: <span className='font-normal text-[#131313b3]'>{review}</span></p>

                <div className='flex gap-5 items-center text-[#23BE0A] font-medium mt-4 border-b-1 border-gray-300 pb-5'>
                    <p className='text-black font-bold'>Tag</p>
                    {
                        tags.map((tag, index) => <button key={index} className='bg-[#23be0a0d] px-4 py-1 rounded-full'>{tag}</button>)
                    }
                </div>

                <div className='flex items-center gap-14 mt-5'>
                    <p className='text-[#131313b3]'>Number of Pages:</p>
                    <p className='font-semibold'>{totalPages}</p>
                </div>

                <div className='flex items-center gap-28 mt-5'>
                    <p className='text-[#131313b3]'>Publisher:</p>
                    <p className='font-semibold'>{publisher}</p>
                </div>

                <div className='flex items-center gap-14 mt-5'>
                    <p className='text-[#131313b3]'>Year of Publishing:</p>
                    <p className='font-semibold'>{yearOfPublishing}</p>
                </div>

                <div className='flex items-center gap-34 mt-5'>
                    <p className='text-[#131313b3]'>Rating:</p>
                    <p className='font-semibold'>{rating}</p>
                </div>

                <div className='mt-5'>
                    <button onClick={() => handleMarkAsRead(id)} className="btn btn-outline">Mark As Read</button>
                    <button className="btn bg-[#50B1C9] text-white ml-4">Add To Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;