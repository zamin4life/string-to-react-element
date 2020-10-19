import '@testing-library/jest-dom'
// NOTE: jest-dom adds handy assertions to Jest and is recommended, but not required
 
import React from 'react'
import {render} from '@testing-library/react'
import stringToReactElement from '../src/index'
it('should call renderer function if text match with regex', () => {
    const rendererFunction = jest.fn()
    const renderer = [
        {
            regex: /(\s)([@][\w_-]+)|((^())[@][\w_-]+)/,
            renderer: rendererFunction,
        },
    ];
    stringToReactElement('hello this is @test', renderer);
    expect(rendererFunction).toHaveBeenCalledTimes(1);
})

it('should render div instead of @test in the text', () => {
    const rendererFunction = (spliteItem) => <div data-testid="rendered-div">{spliteItem}</div>

    const renderer = [
        {
            regex: /(\s)([@][\w_-]+)|((^())[@][\w_-]+)/,
            renderer: rendererFunction,
        },
    ];
    const { queryByTestId } = render(stringToReactElement('hello this is @test', renderer));
    expect(queryByTestId('rendered-div')).toBeInTheDocument();
})