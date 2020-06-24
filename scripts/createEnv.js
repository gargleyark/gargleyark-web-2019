const fs = require('fs');
fs.writeFileSync(
  './.env',
  `SPACE_ID=${process.env.SPACE_ID}\nACCESS_TOKEN=${
    process.env.ACCESS_TOKEN
  }\n`,
);
