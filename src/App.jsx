import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainCard from './MainCard'
import BookMarks from './BookMarks'


function App() {
  
  const [bookmarks, setBookmarks] = useState([]);

  const [readingTime, setReadingTime] = useState(0);

  function handleBookmarks(item, reading_time) {
   

    const removeRepeat = bookmarks.find((singleBookmark) => singleBookmark.id == item.id);
    const newReadingTime = readingTime + reading_time;
    setReadingTime(newReadingTime);
    if (!removeRepeat) {
      
      setBookmarks([...bookmarks, item]);
    }

    else {
      alert('this is already bookmarked')
      
    }

    
    
  }
  
  
  return (
    <>
      <header className="p-4">
        <div className="flex justify-between items-center border-b-2">
          <h1>Knowledge Cafe</h1>
          <img src="./Ellipse 1.png" alt="" />
        </div>
      </header>

      <main className="flex gap-5">
        <MainCard handleBookmarks={handleBookmarks}></MainCard>
        <BookMarks readingTime={readingTime} bookmarks={bookmarks}></BookMarks>
      </main>
    </>
  );
}

export default App
