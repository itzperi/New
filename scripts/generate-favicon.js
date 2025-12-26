import fs from 'fs';
import pngToIco from 'png-to-ico';

const INPUT = './public/brandlyon-logo.png';
const OUTPUT = './public/favicon.ico';

(async () => {
  try {
    const buf = await pngToIco(INPUT);
    fs.writeFileSync(OUTPUT, buf);
    console.log(`✅ Generated ${OUTPUT}`);
  } catch (err) {
    console.error('Failed to generate favicon:', err);
    process.exit(1);
  }
})();