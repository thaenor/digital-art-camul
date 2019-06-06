import { fabric } from "fabric";

export const canvas = new fabric.Canvas("c");

export function init() {
  // create a wrapper around native canvas element (with id="c")

  // create a rectangle object
  var rect = new fabric.Rect({
    left: 100,
    top: 100,
    fill: "red",
    width: 20,
    height: 20
  });

  rect.setGradient(
    "fill",
    {
      x1: 0,
      y1: rect.height,
      x2: rect.width,
      y2: rect.height,
      colorStops: {
        0: "red",
        1: "blue"
      }
    },
    {
      onChange: canvas.renderAll.bind(canvas)
    }
  );

  rect.animate("angle", 45, {
    onChange: canvas.renderAll.bind(canvas)
  });

  // "add" rectangle onto canvas
  canvas.add(rect);
}

export function draw(param) {
  if (param) {
    var rect = new fabric.Rect({
      left: 150,
      top: 50,
      fill: "orange",
      width: 20,
      height: 20
    });
    canvas.add(rect);
    canvas.renderAll();
  }
}
