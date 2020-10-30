# string-to-react-element 

## How does it work? 
 You can pass a text and a an array containing objects that each contains a regex and a renderer function. This module replaces matched words in main text with your renderer function.The result is depended on your regexes .

## installation

npm install --save string-to-react-element

## example

```
import React from 'react';
import parser from 'string-to-react-element'
import { Link } from 'path/to/Link.jsx'

const urlRegex = /(https?:\/\/[^\s]+)|(http?:\/\/[^\s]+)/;
const mentionRegex = /(\s)([@][\w_-]+)|((^())[@][\w_-]+)/;
const hashtagRegex = /(\s)([#][\w_-]+)|((^())[#][\w_-]+)/;
const whiteSpaceRegex = /(\s)/;

const App =() => {
  const text = '#hello string-to-react-element@zamin4life @zamin4life';
  const renderer = [
      {
        regex: mentionRegex,
        renderer: splitItem => (
          <Link>
            {splitItem}
          </Link>
        ),
      },
      {
        regex: hashtagRegex,
        renderer: splitItem => (
          <Link>
            {splitItem}
          </Link>
        ),
      },
      {
        regex: urlRegex,
        renderer: splitItem => (
          <Link href={splitItem}>
            {splitItem}
          </Link>
        ),
      },
      {
        regex: whiteSpaceRegex,
        renderer: splitItem => (
          splitItem.split('').map((item) => {
            if (item === '\n') {
              return <br />;
            }
            if (item === ' ') {
              return <span> </span>;
            }
            if (item === '\t') {
              return <span>   </span>;
            }
            return item;
          })
        ),
      },
    ]
    return parser(text, renderer);
}

export default App;
```
