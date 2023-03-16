import { render, screen, fireEvent } from '@testing-library/react';

// import your story from App.stories.js
import App from './App.stories';

// Add your tests here
// See https://storybook.js.org/docs/react/writing-tests/importing-stories-in-tests#example-with-testing-library
test('Checks if inital state is set to click me', () => {
    const {getText} = render(<button label = "aButton"/>);
    //console.log(screen.getByRole("button").textContent);
    expect(screen.getByRole("button").textContent == "click me");
});

test('Checks if state after one click is thanks!', () => {
    const {getText} = render(<button label = "aButton"/>);
    //console.log(screen.getByRole("button").textContent);
    fireEvent.click(screen.getByRole("button"))
    expect(screen.getByRole("button").textContent == "click me");
});
