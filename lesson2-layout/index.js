//ασκηση 2
let squarewidth = 12;
let squareheight = 10;
let squaresf = multiplier(squarewidth, squareheight);
function multiplier(x, y) {
  return x * y;
}
console.log(squaresf);
//ασκηση 1
let babyage = 3;
let childage = numberadder(babyage);
function numberadder(x) {
  return x + 7;
}
console.log(childage);
//ασκηση 3
let lowercasestr = "manolis";
let uppercasestr = "GEORGE";
let mixedstr = "JOhn";
let manolisupper = uppercasefirst(lowercasestr);
let georgeupper = uppercasefirst(uppercasestr);
let johnupper = uppercasefirst(mixedstr);
function uppercasefirst(x) {
  return x.charAt(0).toUpperCase() + x.slice(1).toLowerCase();
}
console.log(manolisupper);
console.log(georgeupper);
console.log(johnupper);
//ασκηση 4
let lunch = "burger";
let dinner = "cereal";
let lastletterlunch = lastletterstealer(lunch);
let lastletterdinner = lastletterstealer(dinner);
function lastletterstealer(x) {
  return x.charAt(x.length - 1);
}
console.log(lastletterlunch);
console.log(lastletterdinner);
