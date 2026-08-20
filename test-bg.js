const fs = require('fs');
let code = fs.readFileSync('app.js', 'utf8');

// First, remove the `<hr>` tags I added earlier
code = code.replace(/\/\* @__PURE__ \*\/ import_react\d+\.default\.createElement\("hr", \{ className: "w-full border-t-2 border-slate-100 my-16 max-w-7xl mx-auto" \}\), /g, '');

fs.writeFileSync('app.js', code);
console.log("HR tags removed");
