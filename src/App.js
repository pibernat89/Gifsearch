import React from 'react';
import './App.css';
import gifSearchLogo from './images/gifsearchlogo.png'
import GiphySearch from './components/GiphySearch';


export default function App() {
  return (
    <div className="App">
      <div className= "gifsearch-logo-content">
        <img
          src={gifSearchLogo}
          className='gifsearch-logo'
          alt='GifSearch Logo'/>
      </div>
      <section className="app-content">
        <div id='gif'><GiphySearch/></div>
        <p className="animated-text">Search for your new Gif and Sticker 🚀</p>
        <p>Powered by <strong>Alex Pibernat</strong></p>       
      </section>
    </div>
  );
}