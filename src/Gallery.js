import React, { useState } from 'react';
import './Gallery.css';
import ImageItem from './ImageItem';
import Modal from './Modal';

const images = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRemCjL3EYTluhgbsYw7ISiYpWyENxfrjt3lw&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnMz7pn-Dp7F3oEPhEzTFu01klAQh1X1xrJUl_RJ2LL2TCoksDL7BsDoBg9-RTvCqzyQo&usqp=CAU',
  'https://cdn.audleytravel.com/800/571/79/8007274-northern-lights-over-yellowknife.webp',
  'https://static1.thetravelimages.com/wordpress/wp-content/uploads/2023/12/winter-train-tracks-and-northern-lights.png',
  'https://turuhi.com/resources/wp-content/uploads/2022/04/Seeing-the-Northern-Lights-in-Alaska-Nome-Turuhi.jpg',
  'https://travel.home.sndimg.com/content/dam/images/travel/fullrights/2018/3/15/0/CI_ExploreFairbanks_FrankStelges_BorealisBasecamp_FairbanksNorthernLights.jpg.rend.hgtvcom.1280.960.suffix/1521126677001.jpeg',
  'https://actionphototours.com/wp-content/uploads/2023/12/Alaska-Aurora-Winter-Photo-Workshop-1200px.jpg',
  'https://seatosummit.com/cdn/shop/articles/The_Aurora_Borealis_dancing_over_the_White_Mountains_of_Alaska_b63c9b4a-42ac-4720-9784-753c81a3065f.jpg?v=1555097280',
  'https://www.travelandleisure.com/thmb/1piQ5c3tqi0Z3_gvCWt7cFoWvdM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/tombstone-territorial-park-yukon-cananda-northern-lights_CANORTHERNLIGHTS1122-c6e0dbfe0fb1413fa18a79d7e0e08bc9.jpg',
  'https://www.discover-the-world.com/app/uploads/2018/08/norway-northern-tromso-surrounds-with-aurora-istk-1800x0-c-default.jpg',
  'https://img.freepik.com/free-photo/aurora-borealis-landscape-sea_23-2151387626.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1719878400&semt=ais_user',
  'https://i.pinimg.com/564x/3e/eb/4d/3eeb4d96b13760b4c80ad70a7ca09359.jpg',
  'https://i.pinimg.com/474x/a7/94/65/a79465fd741ed1a40ae06dcc01cb9990.jpg',
  'https://i.pinimg.com/originals/7b/85/16/7b8516b38d5c46deea61b273cecfd8f9.jpg',
  'https://vacationidea.com/pix/img25Hy8R/articles/best-places-to-see-the-northern-lights-in-canada_f.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkudwXBSLTA0iiaJ_uokyS0Ckfj7A7pPVoEzEPKpttka4BM3vMdpZuPHRDIYXwXlq88Vw&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBmTJ4ERpS7Xy3c5ltkYX6PezexeqYkpLPLQ&s',
  'https://media.alaskapublic.org/wp-content/uploads/2023/02/IMG_6478-scaled.jpg',
  'https://www.shutterstock.com/image-photo/aurora-borealis-over-hamnoy-norway-600nw-2394644969.jpg',
  'https://ichef.bbci.co.uk/news/976/cpsprodpb/699E/production/_131783072_nl7.jpg',
  'https://www.hindustantimes.com/ht-img/img/2024/01/10/550x309/Tromoso_1704888792255_1704888890806.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqQrJ2pTWAkzzc6Q3z1r37cEXnmzwAP46siw&s',
  'https://www.marthastewart.com/thmb/7-Zs8_AoEzwq1KtBYT9xTq2La0s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ms-northenrn-lights-june-getty-8e84e3781a1441448610159cbf5a6a84.jpg',
  'https://images.ctfassets.net/7mmwp5vb96tc/113343/9155b6ae5fce3bf21e7212fd67ad5879/senja-norway-hgr-146868_1920-photo_shutterstock.jpg?q=75&w=3840&fm=webp',
  'https://cdn.mos.cms.futurecdn.net/k6okX2VVUg4qWoyxuNLsf7-1200-80.jpg',
  'https://cdn.pixabay.com/photo/2020/09/15/13/10/aurora-borealis-5573566_960_720.jpg',
  'https://wallpapers.com/images/hd/aurora-borealis-northern-lights-forest-jn6g3839wnxcj67b.jpg'
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const openModal = (index) => {
    setCurrentIndex(index);
    setSelectedImage(images[index]);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setCurrentIndex(null);
  };

  const showPrevImage = () => {
    const newIndex = (currentIndex + images.length - 1) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  const showNextImage = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  return (
    <div className="gallery">
      {images.map((image, index) => (
        <ImageItem key={index} image={image} openModal={() => openModal(index)} />
      ))}
      {selectedImage && (
        <Modal
          image={selectedImage}
          closeModal={closeModal}
          showPrevImage={showPrevImage}
          showNextImage={showNextImage}
        />
      )}
    </div>
  );
};

export default Gallery;
