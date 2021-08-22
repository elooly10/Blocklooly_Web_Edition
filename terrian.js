//bconsole.table(stone.ypre, cave_air.ypre, air.ypre, dirt.ypre);
//console.table([dirt.decimal, air.decimal, stone.decimal]);
var y, x;
var array = [];
var todesplay = "";
for (x = 0; x < Wide; x++) {
  for (y = 0; y < Tall; y++) {
    var chance = Math.round(Math.random() * 100);
    if (array[y - 1] === "air") {
      array.push("air");
      log(air.image, "air", "air.tap(this)");
    } else if (array[y - 1] === "cave_air" && Math.random() <= 0.75) {
      array.push("cave_air.middle");
      log(cave_air.image, "cave_air.middle");
    } else if (array[y - 1] === "cave_air.middle" && Math.random() <= 0.5) {
      array.push("cave_air.top");
      log(cave_air.image, "cave_air.top");
    } else if (array[y - 1] === "cave_air.middle" && Math.random() <= 0.1) {
      array.push("cave_air.middle");
      log(cave_air.image, "cave_air.middle");
    } else if (chance < air.ypre[Math.floor(y / 8)]) {
      array.push("air");
      log(air.image, "air", "air.tap(this)");
    } else if (
      chance <=
      dirt.ypre[Math.floor(y / 8)] + air.ypre[Math.floor(y / 8)]
    ) {
      array.push("dirt");
      log(dirt.image, "dirt");
    } else if (
      chance <=
      stone.ypre[Math.floor(y / 8)] +
        dirt.ypre[Math.floor(y / 8)] +
        air.ypre[Math.floor(y / 8)]
    ) {
      log(stone.image, "stone");

      array.push("stone");
    } else if (
      chance <=
      stone.ypre[Math.floor(y / 8)] +
        dirt.ypre[Math.floor(y / 8)] +
        air.ypre[Math.floor(y / 8)] +
        cave_air.ypre[Math.floor(y / 8)]
    ) {
      log(cave_air.image, "cave_air");
      array.push("cave_air");
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
