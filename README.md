# string-to-react-element 

# How does it work? 
### You can pass a text and a renderer array, the renderer array includes objects that contains a regex and a renderer function. this module replace matched words in main text with your renderer.

# installation

`npm install string-to-react-element@0.0.12`

# example

`
import React from 'react';
import parser from 'string-to-react-element'
import {Link} from '@material-ui/core'

const urlRegex = /(https?:\/\/[^\s]+)|(http?:\/\/[^\s]+)/;
const mentionRegex = /(\s)([@][\w_-]+)|((^())[@][\w_-]+)/;
const hashtagRegex = /(\s)([#][\w_-]+)|((^())[#][\w_-]+)/;
const whiteSpaceRegex = /(\s)/;
const symbolRegex = /([a-zA-Z0-9]|[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/])/;

const App =() => {
  const text = '#hello slddksml@lkmdslkdm @lksdmcsd';
  const renderer = () => (
    [
      {
        regex: mentionRegex,
        renderer: splitItem => (
        /* eslint-disable-next-line jsx-a11y/anchor-is-valid */
          <Link>
            {splitItem}
          </Link>
        ),
      },
      {
        regex: hashtagRegex,
        renderer: splitItem => (
          /* eslint-disable-next-line jsx-a11y/anchor-is-valid */
          <Link>
            {splitItem}
          </Link>
        ),
      },
      {
        regex: urlRegex,
        renderer: splitItem => (
          /* eslint-disable-next-line jsx-a11y/anchor-is-valid */
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
      {
        regex: symbolRegex,
        renderer: splitItem => splitItem,
      },
    ]
  )
  return (
    <>
    {parser(text,renderer())}
    </>
  )
}

export default App;
`