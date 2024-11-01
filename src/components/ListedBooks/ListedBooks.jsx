import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList } from '../../utility/addToDb';
import Book from '../Book/Book';

function ListedBooks() {
  const [readList, setReadList] = useState([]);
  const [sort, setSort] = useState('')
  const allBooks = useLoaderData();

  useEffect(() => {
    const storedReadList = getStoredReadList();
    const storedReadListInt = storedReadList.map(id => parseInt(id));
    const readBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId));

    setReadList(readBookList);
  }, [allBooks]);

  const handleSort = sortType => {
    setSort(sortType);


    // 
    if(sortType === 'No of pages'){
      const storedReadList = [readList].sort((a, b) => a.rating - b.rating);
      setReadList(storedReadList);
    }
  }

  return (
    <div>
      <h3>Listed Books</h3>
      
      <div className="dropdown">
  <div tabIndex={0} role="button" className="btn m-1">
    {
    sort ? `Sort By ${ sort }` : 'Sort by'
    }
    </div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
    <li onClick={() => handleSort('Ratings')}><a>Ratings</a></li>
    <li onClick={() => handleSort('No of pages')}><a>No of pages</a></li>
  </ul>
</div>

      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <h2 className='text-2xl'>Books I Read {readList.length}</h2>
          {
            readList.map(book => <Book key={book.bookId} book={book}></Book>)
          }
        </TabPanel>
      </Tabs>
    </div>
  )
}

export default ListedBooks;
