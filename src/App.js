import React, { useState } from 'react';
import './App.css';

function ImageGallery() {
  return <div>Image Gallery</div>;
}

function QuickNavMenu() {
  return <div>Quick Navigation Menu</div>;
}

function StandardMenu() {
  return <div>Standard Menu</div>;
}

function Content() {
  return <div>Content Section</div>;
}

function App() {
  const [layout, setLayout] = useState({
    prefersVisualContent: true,
    prefersQuickNavigation: false
  });

  const toggleVisualContent = () => {
    setLayout(prevLayout => ({
      ...prevLayout,
      prefersVisualContent: !prevLayout.prefersVisualContent
    }));
  };

  const toggleQuickNavigation = () => {
    setLayout(prevLayout => ({
      ...prevLayout,
      prefersQuickNavigation: !prevLayout.prefersQuickNavigation
    }));
  };

  return (
    <div>
      <button onClick={toggleVisualContent}>Toggle Visual Content</button>
      <button onClick={toggleQuickNavigation}>Toggle Quick Navigation</button>
      {layout.prefersVisualContent && <ImageGallery />}
      {layout.prefersQuickNavigation && <QuickNavMenu />}
      {!layout.prefersQuickNavigation && <StandardMenu />}
      <Content />
    </div>
  );
}

export default App;

