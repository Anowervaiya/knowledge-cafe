import { BsBookmarkStar } from 'react-icons/bs';

function SingleCard({handleBookmarks, item }) {
  const {
    id,
    cover,
    title,
    author_img,
    author,
    hashtags,
    posted_date,
    reading_time,
  } = item;

  return (
    <div>
      <div>
        <img src={cover} alt="" className="w-full" />
      </div>

      {/* description  */}
      <div
        className="flex justify-between my-8
      "
      >
        <div className="flex gap-3">
          <div>
            <img className="w-[45px]" src={author_img} alt="" />
          </div>
          <div>
            <h1>{author}</h1>
            <p>{posted_date} </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <h1>Reading time {reading_time} min</h1>
          <button onClick={()=>handleBookmarks(item,reading_time)}>
            <BsBookmarkStar></BsBookmarkStar>
          </button>
        </div>
      </div>
    </div>
  );
}
export default SingleCard;
