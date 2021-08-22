var Tall = 128;
var Wide = 32;
var cobbled_stone = {
  tap: function (l) {
    l.src = air.image;
    l.setAttribute("onClick", "javascript: air.tap(this);");
  },
  image: ["/media/cobbled_stone.svg"]
};
var air = {
  ypre: [0, 0, 0, 0, 0, 0, 1, 3, 3, 19, 29, 50, 60, 80, 90, 100],
  tap: function (l) {
    l.src = cobbled_stone.image;
    l.setAttribute("onClick", "javascript: cobbled_stone.tap(this);");
  },
  image: ["/media/air.svg"]
};
var cave_air = {
  ypre: [0, 2, 2, 2, 5, 5, 3, 1, 1, 1, 1, 0, 0, 0, 0, 0],

  image: ["/media/cave_air.svg"]
};
var dirt = {
  ypre: [0, 5, 5, 5, 5, 10, 15, 30, 75, 60, 40, 30, 21, 10, 5, 0],
  image: ["/media/dirt.svg"]
};
var stone = {
  ypre: [100, 90, 90, 90, 90, 85, 81, 67, 21, 20, 30, 20, 19, 10, 5, 0],
  image: ["/media/stone.svg"]
};
function log(image_src, data_type, onclick) {
  todesplay +=
    "<image onclick='" +
    onclick +
    "'data-y='" +
    y +
    "' data-x='" +
    x +
    "' data-type='" +
    data_type +
    "'width='20px'height='20px' style=\"bottom:" +
    y * 20 +
    "px; right:" +
    x * 20 +
    "px;\" src='" +
    image_src +
    "'/>";
}
