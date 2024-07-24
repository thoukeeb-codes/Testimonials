import { useState } from 'react';
import './App.css';
import reviews from './data';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className='w-screen h-screen flex items-center justify-center bg-slate-950'>
      <Testimonials reviews={reviews} />
    </div>
  );
}

export default App;
