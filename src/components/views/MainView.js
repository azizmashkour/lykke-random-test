import React from 'react';
import Gallery from 'react-grid-gallery';
import images from '../common/gallery';

const MainView = () => (
  <div className="Main-view">
    <h2>This is our Main View Component</h2>
    <Gallery images={images} />
  </div>
);

export default MainView;
