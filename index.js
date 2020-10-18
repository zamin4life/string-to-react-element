
export default function stringToReactElement(text, regexAndRendererPairs) {
  const regex = new RegExp(regexAndRendererPairs.map(item => item.regex.source).join('|'), 'gui');
  const splitedText = text.split(regex).filter(item => item !== undefined);
  const newText = splitedText.map(splitItem => regexAndRendererPairs
    .find(regexAndRendererPairsItem => regexAndRendererPairsItem.regex.test(splitItem))?.renderer(splitItem));
  return newText;
}