

function BookMarks({readingTime, bookmarks }) {
 
  return (
    <div className=" p-4">
      <div className="bg-blue-200 rounded-lg  text-blue-900 font-bold p-5 mb-4">
        <h1>Spent time on read : {readingTime} min</h1>
      </div>
      <div className="bg-gray-300 p-4">
        <h1>Bookmarked Blogs: 8</h1>
        {bookmarks.map(item => {
          return (
            <div>
              <div className="bg-white my-4 p-4 rounded-lg">
                <h1>{item.title}</h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BookMarks;
