import { copy } from "./k1.js";

const heading = `<h3>Nastavení výkresu</h3>`;
const kap2Img = `<img class='w40' src='./images/k1/k1i2.jpg' alt=''/>`;
const kap2P = `<textarea readonly>(název výkresu)_(číslo objektu)_(program).dwg
Si_101_C3D.dwg


Po_101_C3D.dwg</textarea>`;

const a1 = `<a target='_blank' href="https://knowledge.autodesk.com/support/civil-3d/downloads/caas/downloads/content/civil-3d-country-kits-for-czech-republic.html">Civil 3D Country Kits for Czech Republic</a>`;

//
//
//

const k2 = `${heading}${kap2Img}${kap2P}${a1}${copy}`;

export default k2;
