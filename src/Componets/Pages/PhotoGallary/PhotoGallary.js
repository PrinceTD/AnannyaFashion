import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react'
import Footer from '../Footer/Footer';
import Navbar from '../Header/Navbar';
import ShowImage from './ShowImage';

function PhotoGallary() {
  const [itemData, setItemData] = useState([]);
  useEffect(() => {
    const url = "https://powerful-wildwood-87881.herokuapp.com/photo"
    fetch(url)
      .then(res => res.json())
      .then(data => setItemData(data))
  }, []);
  return (
    <div >
      <Navbar />
      <div className='container'>
        {
          itemData.length === 0 ? <CircularProgress />
            :
            <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 g-1">
              {
                itemData.map(itemData => <ShowImage
                  key={itemData._id}
                  itemData={itemData}
                ></ShowImage>)
              }
            </div>
        }
      </div>
      <Footer />
    </div>
  )
}

export default PhotoGallary