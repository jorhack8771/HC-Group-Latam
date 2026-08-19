const fs = require('fs');

let appJs = fs.readFileSync('app.js', 'utf8');

// I am changing "min-h-[Xpx]" to "h-[Xpx] block". 
// min-height allows the container to shrink if its contents are smaller, which is what is causing the collapse.
// By strictly setting 'h-[120px]' (fixed height) and 'block', the container acts like a solid box that NEVER collapses, 
// regardless of whether there is 0 text or full text.

const oldH1 = `/* @__PURE__ */ import_react9.default.createElement("h1", { className: "text-3xl sm:text-4xl md:text-5xl font-black text-slate-800 mt-6 mb-4 min-h-[72px] sm:min-h-[96px] md:min-h-[120px]" }`;
const newH1 = `/* @__PURE__ */ import_react9.default.createElement("h1", { className: "text-3xl sm:text-4xl md:text-5xl font-black text-slate-800 mt-6 mb-4 h-[90px] sm:h-[100px] md:h-[120px] block w-full" }`;

appJs = appJs.replace(oldH1, newH1);

fs.writeFileSync('app.js', appJs);
console.log('Forced absolute fixed height on H1 container');
