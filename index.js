
export default function parseReactElement(text, renderer) {
  const regex = new RegExp(renderer.map(item => item.regex.source).join('|'), 'gui');
  const splitedText = text.split(regex).filter(item => item !== undefined);
  const newText = splitedText.map(splitItem => renderer
    .find(rendererItem => rendererItem.regex.test(splitItem))?.component(splitItem));
  return newText;
}