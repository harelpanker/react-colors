import chroma from "chroma-js";
const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

function generatePalette(starterPalette) {
  let newPalette = {
    paletteName: starterPalette.paletteName,
    id: starterPalette.id,
    emoji: starterPalette.emoji,
    colors: {},
  };

  for (let level of levels) {
    newPalette.colors[level] = [];
    // 50: [],
    // 100: [] and so on
  }
  for (let color of starterPalette.colors) {
    let scale = getScale(color.color, 10).reverse(); // reverse becuse we get it from light to dark
    for (let i in scale) {
      newPalette.colors[levels[i]].push({
        // we push inside the 10 shades of the color in all formats (hex, rgb, rgba)
        name: `${color.name} ${levels[i]}`, // -> pink 500
        id: color.name.toLowerCase().replace(/ /g, "-"),
        hex: scale[i],
        rgb: chroma(scale[i]).css(),
        rgba: chroma(scale[i])
          .css()
          .replace("rgb", "rgba")
          .replace(")", ",1.0)"),
      });
    }
  }
  return newPalette;
}
function getRange(hexColor) {
  const end = "#fff";
  return [
    chroma(hexColor).darken(1.4).hex(), // our color just darken and get a hex color
    hexColor, // mid-value
    end, // #fff
    // color darken(1.4) -> our color -> white
  ];
}

function getScale(hexColor, numberOfColors) {
  return chroma.scale(getRange(hexColor)).mode("lab").colors(numberOfColors);
}

export { generatePalette };
