import React from 'react';
import '@testing-library/jest-dom';
import {render} from '@testing-library/react';
import stringToReactElement from '../src/index';

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