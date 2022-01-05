import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import Authentication from './components/Authentication/Authentication';
import BlogDetails from './components/Blogs/BlogDetails';
import Blogs from './components/Blogs/Blogs';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>  
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/details/:blogId" element={<BlogDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="authentication" element={<Authentication />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default App;
