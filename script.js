const fs = require("fs");
const yaml = require("js-yaml");

const inDir = "./data-in/";
const outDirGood = "./data-out/good/";
const outDirBad = "./data-out/bad/";

let files = fs.readdirSync(inDir);

let count = 0;
let countGood = 0;
let countBad = 0;

files.forEach((file) => {
  let data = yaml.load(fs.readFileSync(inDir + file, "utf8"));
  
  if (data == undefined) return;

  if (data.npc) {
    fs.writeFileSync(outDirBad + file, yaml.dump(data));

    countBad++;
  } else {
    fs.writeFileSync(outDirGood + file, yaml.dump(data));

    countGood++;
  }

  count++;

  console.log(file + " done");
});

console.log("\n\n");
console.log("Done Processing!")
console.log("Total: " + count);
console.log("Good: " + countGood);
console.log("Bad: " + countBad);