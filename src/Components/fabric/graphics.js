import { fabric } from 'fabric';

export const canvas = new fabric.Canvas('c');
export const CANVAS_HEIGHT = 500;
export const CANVAS_WIDTH = 800;

export function init() {
  // create a wrapper around native canvas element (with id="c")
  canvas.setHeight(CANVAS_HEIGHT);
  canvas.setWidth(CANVAS_WIDTH);
  canvas.backgroundColor = 'white';

  // var point = new fabric.Rect({
  //   left: 20,
  //   top: 20,
  //   fill: "rgb(255,0,134)",
  //   width: 1,
  //   height: 1
  // })
  // canvas.add(point);
  // canvas.renderAll();
}

export function draw(noteName) {
  console.log(noteName);
  
  var rect = new fabric.Rect({
    left: Math.floor(Math.random() * CANVAS_WIDTH) + 1,
    top: Math.floor(Math.random() * CANVAS_HEIGHT) + 1,
    fill: convertNoteToColor(noteName),
    width: Math.floor(Math.random() * 50) + 20,
    height: Math.floor(Math.random() * 50) + 20
  });
  canvas.add(rect);
  canvas.renderAll();
}

function convertNoteToColor(noteName) {
  switch (noteName) {
    case 'Dó':
      return '#28ff00';
    case 'Dó#':
      return '#00ffe8';
    case 'Ré':
      return '#007cff';
    case 'Ré#':
      return '#0500ff';
    case 'Mi':
      return '#4500ea';
    case 'Fá':
      return '#57009e';
    case 'Fá#':
      return '#740000';
    case 'Sol':
      return '#b30000';
    case 'Sol#':
      return '#ee0000';
    case 'Lá':
      return '#ff6300';
    case 'Lá#':
      return '#ffec00';
    case 'Si':
      return '#99ff00';
    default:
      return '#28ff00';
  }
}
