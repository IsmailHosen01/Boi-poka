import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../utility/addToDB';
import Book from '../Book/Book';

const ReadList = () => {
    const data = useLoaderData();

    const [readList, setReadList] = useState([]);

    useEffect(()=> {
        const storedBookData = getStoredBook()
        const convertedStoredBookData = storedBookData.map(id => parseInt(id));
        const myReadList = data.filter(book => convertedStoredBookData.includes(book.bookId));
        setReadList(myReadList)
    },[data])
    return (
        <div className='my-4'>
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