import React from 'react';
import Sidebar from './components/Sidebar.component';
import Header from './components/Header.component';
import Railtors from './components/Railtors.component';
import Features from './components/features/Features.component';
import StoryPictures from './components/StoryPictures.component';
import StoryContent from './components/StoryContent.component ';
import Homes from './components/homes/Homes.component';
import Footer from './components/Footer.component';
import Gallery from './components/gallery/Gallery.component';


function App() {
  return (
    <div className="container">
      <Sidebar />
      <Header/>
      <Railtors />
      <Features />
      <StoryPictures />
      <StoryContent />
      <Homes />
      <Gallery/>
      <Footer />
    </div>
  );
}

export default App;
