import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
// import your story from App.stories.js
import {Primary} from './App.stories.js';
  
// Add your tests here
// See https://storybook.js.org/docs/react/writing-tests/importing-stories-in-tests#example-with-testing-library 

it("Checks if inital state is set to click me", () => {
    const { getByRole } = render(<Primary />);
    const buttonElement = getByRole("button", { name: "click me" });
    expect(buttonElement).toBeInTheDocument();
});

it("Checks if state after one click is thanks!", () => {
    const { getByRole } = render(<Primary />);
    const buttonElement = getByRole("button", { name: "click me" });
    fireEvent.click(buttonElement);
    expect(buttonElement).toHaveTextContent("thanks!");
  })
