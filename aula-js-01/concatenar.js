let palavra01 = "Quero";
let palavra02 = "um";
let palavra03 = "Switch 2!";

console.log(palavra01, palavra02, palavra03);
console.log(palavra01 + palavra02 + palavra03);
console.log(`${palavra01} ${palavra02} ${palavra03} ♥ \n mas não vou dar 5k pra nintendo`); 

// exemplos do que NÃO fazer

console.log(palavra01, "um", palavra03);
console.log(palavra01 + "um" + palavra03);

// ideal 

console.log(`${palavra01} um ${palavra03}`);