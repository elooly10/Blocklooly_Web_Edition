var Tall = 128;
var Wide = 32;
var cobbled_stone = {
  tap: function (l) {
    l.src = air.image;
    l.setAttribute("onClick", "javascript: air.tap(this);");
  },
  image: ["/media/cobbled_stone.svg"]
};
var oak_leaf = {
  tap: function (l) {
    l.src = oak_leaf.image;
    l.setAttribute("onClick", "javascript: oak_leaf.tap(this);");
  },
  image: ["/media/oak_leaves.svg"]
};
var air = {
  ypre: [0, 0, 0, 0, 0, 0, 1, 3, 3, 19, 39, 80, 85, 90, 90, 100],
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
  ypre: [0, 8, 8, 8, 5, 10, 15, 29, 75, 60, 40, 10, 10, 5, 5, 0],
  tap: function (l) {
    l.src = air.image;
    l.setAttribute("onClick", "javascript: air.tap(this);");
  },
  image: ["/media/dirt.svg"]
};
var stone = {
  ypre: [100, 90, 90, 90, 90, 85, 81, 67, 21, 20, 20, 10, 5, 5, 5, 0],
  tap: function (l) {
    l.src = cobbled_stone.image;
    l.setAttribute("onClick", "javascript: cobbled_stone.tap(this);");
  },
  image: ["/media/stone.svg"]
};
var sum = [
  stone.ypre[0] + dirt.ypre[0] + air.ypre[0] + cave_air.ypre[0],
  stone.ypre[1] + dirt.ypre[1] + air.ypre[1] + cave_air.ypre[1],
  stone.ypre[2] + dirt.ypre[2] + air.ypre[2] + cave_air.ypre[2],
  stone.ypre[3] + dirt.ypre[3] + air.ypre[3] + cave_air.ypre[3],
  stone.ypre[4] + dirt.ypre[4] + air.ypre[4] + cave_air.ypre[4],
  stone.ypre[5] + dirt.ypre[5] + air.ypre[5] + cave_air.ypre[5],
  stone.ypre[6] + dirt.ypre[6] + air.ypre[6] + cave_air.ypre[6],
  stone.ypre[7] + dirt.ypre[7] + air.ypre[7] + cave_air.ypre[7],
  stone.ypre[8] + dirt.ypre[8] + air.ypre[8] + cave_air.ypre[8],
  stone.ypre[9] + dirt.ypre[9] + air.ypre[9] + cave_air.ypre[9],
  stone.ypre[10] + dirt.ypre[10] + air.ypre[10] + cave_air.ypre[10],
  stone.ypre[11] + dirt.ypre[11] + air.ypre[11] + cave_air.ypre[11],
  stone.ypre[12] + dirt.ypre[12] + air.ypre[12] + cave_air.ypre[12],
  stone.ypre[13] + dirt.ypre[13] + air.ypre[13] + cave_air.ypre[13],
  stone.ypre[14] + dirt.ypre[14] + air.ypre[14] + cave_air.ypre[14],
  stone.ypre[15] + dirt.ypre[15] + air.ypre[15] + cave_air.ypre[15]
];
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
    "'width='30px'height='30px' style=\"bottom:" +
    y * 30 +
    "px; right:" +
    x * 30 +
    "px;\" src='" +
    image_src +
    "'/>";
}
