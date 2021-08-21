var Tall = 128;
var Wide = 32;
var air = {
  ypre: [0, 5, 5, 5, 5, 5, 4, 3, 4, 20, 30, 50, 60, 80, 90, 100],

  image: ["/media/air.svg"]
};
var dirt = {
  ypre: [0, 5, 5, 5, 5, 10, 15, 30, 75, 60, 40, 30, 21, 10, 5, 0],
  image: ["/media/dirt.svg"]
};
var stone = {
  ypre: [100, 90, 90, 90, 90, 85, 81, 67, 21, 20, 30, 20, 19, 10, 5, 0],
  image: ["/media/stone.svg"]
};
//console.table([dirt.decimal, air.decimal, stone.decimal]);
var y, x;
var array = [];
var todesplay = "";
for (x = 0; x < Wide; x++) {
  for (y = 0; y < Tall; y++) {
    var chance = Math.round(Math.random() * 100);
    if (chance <= air.ypre[Math.floor(y / 8)]) {
      array.push("air");
      todesplay +=
        "<image data-y='" +
        y +
        "' data-x='" +
        x +
        "'width='20px'height='20px' style=\"bottom:" +
        y * 20 +
        "px; right:" +
        x * 20 +
        "px;\" src='" +
        air.image +
        "'/>";
    } else if (
      chance <=
      dirt.ypre[Math.floor(y / 8)] + air.ypre[Math.floor(y / 8)]
    ) {
      array.push("dirt");
      todesplay +=
        "<image data-y='" +
        y +
        "' data-x='" +
        x +
        "'width='20px'height='20px' style=\"bottom:" +
        y * 20 +
        "px; right:" +
        x * 20 +
        "px;\" src='" +
        dirt.image +
        "'/>";
    } else if (
      chance <=
      stone.ypre[Math.floor(y / 8)] +
        dirt.ypre[Math.floor(y / 8)] +
        air.ypre[Math.floor(y / 8)]
    ) {
      todesplay +=
        "<image data-y='" +
        y +
        "' data-x='" +
        x +
        "'width='20px'height='20px' style=\"bottom:" +
        y * 20 +
        "px; right:" +
        x * 20 +
        "px;\" src='" +
        stone.image +
        "'/>";

      array.push("stone");
    } else {
      array.push("error");
      console.log("ERROR" + y + " " + chance);
    }
  }
  //displayarray[displayarray.length] += [array];

  console.log(array);
  array = [];
}
//console.log(displayarray);
