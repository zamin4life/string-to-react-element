import React from 'react';

import {
  emojiRegex,
  urlRegex,
  mentionRegex,
  hashtagRegex,
  whiteSpaceRegex,
  symbolRegex,
} from './Regex';

exports.parseReactElement = function (text, Renderer) {
  const regex = new RegExp(`${urlRegex.source}|${mentionRegex.source}|${hashtagRegex.source}|${whiteSpaceRegex.source}|${symbolRegex.source}|${emojiRegex.source}`, 'gui');

  const splitedText = text.split(regex).filter(item => item !== undefined);
  const newText = splitedText.map((splitItem) => {
    if (urlRegex.test(splitItem)) {
      return Renderer.find(item => item.type === 'url').component(splitItem);
    }
    if (mentionRegex.test(splitItem)) {
      return Renderer.find(item => item.type === 'mention').component(splitItem);
    }
    if (hashtagRegex.test(splitItem)) {
      return Renderer.find(item => item.type === 'hashtag').component(splitItem);
    }
    if (emojiRegex.test(splitItem)) {
      return Renderer.find(item => item.type === 'emoji').component(splitItem);
    }
    if (whiteSpaceRegex.test(splitItem)) {
      return Renderer.find(item => item.type === 'whitespace').component(splitItem);
    }
    return (
        {splitItem}
    );
  });

  return newText;
}
