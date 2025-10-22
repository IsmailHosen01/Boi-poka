import React from 'react';
import Book from '../Book/Book';

const Books = ({ data }) => {

    // useEffect(() => {
    //     fetch('booksData.json').then(res => res.json()).then(data => setAllBooks(data));
    // }, [])

    // console.log(allBooks)
    return (
        <div>
            <h3 className='text-4xl font-bold playfair-display-font text-center'>Books</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-5'>
                {
                    data.map(singleBook => <Book key={singleBook.bookId} singleBook={singleBook}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;