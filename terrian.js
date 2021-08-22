//bconsole.table(stone.ypre, cave_air.ypre, air.ypre, dirt.ypre);
//console.table([dirt.decimal, air.decimal, stone.decimal]);
var y, x;
var col = [];
var search = [];
var todesplay = "";
for (x = 0; x < Wide; x++) {
  for (y = 0; y < Tall; y++) {
    var chance = Math.round(Math.random() * 100);
    if (col[y - 1] === "air") {
      col.push("air");
      log(air.image, "air", "air.tap(this)");
    } else if (col[y - 1] === "cave_air" && Math.random() <= 0.75) {
      col.push("cave_air.middle");
      log(cave_air.image, "cave_air.middle", "air.tap(this)");
    } else if (col[y - 1] === "cave_air.middle" && Math.random() <= 0.5) {
      col.push("cave_air.top");
      log(cave_air.image, "cave_air.top", "air.tap(this)");
    } else if (col[y - 1] === "cave_air.middle" && Math.random() <= 0.1) {
      col.push("cave_air.middle");
      log(cave_air.image, "cave_air.middle");
    } else if (chance < air.ypre[Math.floor(y / 8)]) {
      col.push("air");
      log(air.image, "air", "air.tap(this)", "air.tap(this)");
    } else if (
      chance <=
      dirt.ypre[Math.floor(y / 8)] + air.ypre[Math.floor(y / 8)]
    ) {
      col.push("dirt");
      log(dirt.image, "dirt", "dirt.tap(this)");
    } else if (
      chance <=
      stone.ypre[Math.floor(y / 8)] +
        dirt.ypre[Math.floor(y / 8)] +
        air.ypre[Math.floor(y / 8)]
    ) {
      log(stone.image, "stone", "stone.tap(this)");

      col.push("stone");
    } else if (
      chance <=
      stone.ypre[Math.floor(y / 8)] +
        dirt.ypre[Math.floor(y / 8)] +
        air.ypre[Math.floor(y / 8)] +
        cave_air.ypre[Math.floor(y / 8)]
    ) {
      log(cave_air.image, "cave_air", "air.tap(this)");
      col.push("cave_air");
    } else {
      col.push("error");
      console.log("ERROR" + y + " " + chance);
    }
  }
  //displayarray[displayarray.length] += [col];

  console.log(col);
  search[x] = col;
  col = [];
}
//console.log(displayarray);
