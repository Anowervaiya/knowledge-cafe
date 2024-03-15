import { defaults } from 'autoprefixer';
import { useEffect, useState } from 'react';
import SingleCard from './SingleCard';
function MainCard({ handleBookmarks }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fakeDataLoad = async () => {
      const res = await fetch('fake-data.json');
      const datas = await res.json();
      setData(datas);
    };
    fakeDataLoad();
  }, []);

  return (
    <div>
      {data.map(item => (
        <SingleCard handleBookmarks={handleBookmarks} item={item}></SingleCard>
      ))}
    </div>
  );
}
export default MainCard;
