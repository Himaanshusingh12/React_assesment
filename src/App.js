import React from 'react';
import Accordion from './Accordion';

const App = () => {
  return (
    <div className="App">
      <Accordion
        title="What is your return policy?"
        content="This is the content for Accordion Item 1.This is the content for Accordion Item 1.This is the content for Accordion Item 1.This is the content for Accordion Item 1.This is the content for Accordion Item 1.This is the content for Accordion Item 1.vThis is the content for Accordion Item 1.This is the content for Accordion Item 1.This is the content for Accordion Item 1."
      />
      <Accordion
        title="How do I track my order?"
        content="This is the content for Accordion Item 2.This is the content for Accordion Item 2.This is the content for Accordion Item 2.This is the content for Accordion Item 2.This is the content for Accordion Item 2.This is the content for Accordion Item 2.This is the content for Accordion Item 2.This is the content for Accordion Item 2.This is the content for Accordion Item 2.This is the content for Accordion Item 2."
      />
      <Accordion
        title="Can i purchase items again?"
        content="This is the content for Accordion Item 2.This is the content for Accordion Item 2.This is the content for Accordion Item 2.This is the content for Accordion Item 2.This is the content for Accordion Item 2.This is the content for Accordion Item 2.This is the content for Accordion Item 2.This is the content for Accordion Item 2.This is the content for Accordion Item 2.This is the content for Accordion Item 2."
      />
    </div>
  );
};

export default App;