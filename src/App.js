import React from 'react';
import NoteForm from './NoteForm';
import StickyNotes from './StickyNotes';
import Footer from './Footer';
import './App.css';

const App = () => (
  <div className="App">
    <NoteForm />
    <StickyNotes />
    <Footer />
  </div>
);



export default App;
