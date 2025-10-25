import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../utility/addToDB';
import Book from '../Book/Book';

const ReadList = () => {
    const data = useLoaderData();

    const [readList, setReadList] = useState([]);
    const [sort, setSort] = useState("");

    useEffect(() => {
        const storedBookData = getStoredBook()
        const convertedStoredBookData = storedBookData.map(id => parseInt(id));
        const myReadList = data.filter(book => convertedStoredBookData.includes(book.bookId));
        setReadList(myReadList)
    }, [data])

    const handleSort = (type) => {
        setSort(type);

        if (type === "rating") {
            const sortedByRating = [...readList].sort((a, b) => a.rating - b.rating);
            setReadList(sortedByRating)
        }
        if (type === "pages") {
            const sortedByPages = [...readList].sort((a, b) => a.totalPages - b.totalPages);
            setReadList(sortedByPages)
        }
        if (type === "year") {
            const sortedByYear = [...readList].sort((a, b) => a.yearOfPublishing - b.yearOfPublishing);
            setReadList(sortedByYear)
        }
    }
    return (
        <div className='my-4'>

            <div className='text-center'>
                <details className="dropdown">
                    <summary className="btn m-1 bg-[#23BE0A] text-white">Sort By  {sort === 'pages' && `: ${sort}`} {sort === 'rating' && `: ${sort}`} {sort === 'year' && `: ${sort}`}</summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><a onClick={() => handleSort("rating")}>Rating</a></li>
                        <li><a onClick={() => handleSort("pages")}>Number of Pages</a></li>
                        <li><a onClick={() => handleSort("year")}>Publisher year</a></li>
                    </ul>
                </details>
            </div>

            <Tabs>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist Books</Tab>
                </TabList>

                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                        {
                            readList.map(book => <Book key={book.bookId} singleBook={book}></Book>)
                        }
                    </div>
                </TabPanel>

                <TabPanel>
                    <h2>My Wishlist</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ReadList;