import React from 'react'

const Gallery = () => {
  const gallery = ["/img1.webp","/img2.webp","/img4.webp","/img5.jpg" , "img6.jpg","img7.webp","img8.webp","img9.webp",]

  return <section className="gallery">
    <h1>You Can!</h1>
    <div className="images">
      <div>
        {
          gallery.slice(0,3).map((element,index)=>(

            <img key={index} src={element} alt="GalleryImage" />
          ))
        }
      </div>
      <div>
        {
          gallery.slice(3,6).map((element,index)=>(

            <img key={index} src={element} alt="GalleryImage" />
          ))
        }
      </div>
      <div>
        {
          gallery.slice(6,9).map((element,index)=>(

            <img key={index} src={element} alt="GalleryImage" />
          ))
        }
      </div>
    </div>
     </section>
}

export default Gallery