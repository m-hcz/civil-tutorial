const heading = `<h3>Nastavení výkresu</h3>`;

const h1 = `<h4>Název výkresu pro Civil 3D</h4>`;
const t1 = `<textarea readonly>(název výkresu)_(číslo objektu)_(program).dwg
Si_101_C3D.dwg
Po_101_C3D.dwg</textarea>`;

const h2 = `<h4>Nový výkres</h4>`;
const t2 = `<p>Pro správné <b>fungování české</b> verze Civilu 3D a stylů zobrazení je nutné rýsovat do šablony Autocad Civil 3D 20xx CZ, která se volí při otevření nového výkresu. Nebo do upravené HBH šablony.</p>`;
const i2 = `<img class='w40' src='/civil-tutorial/images/k1/k1i2.jpg' alt=''/>`;

const h3 = `<h4>Datové zkratky</h4>`;
const i3 = `<img class='w40' src='' alt=''/>`;
const t3 = `<textarea readonly>Pro zjednodušení výkresu a zmenšení jeho velikosti se dají některé prvky (DTM, trasa, podélný profil, příčné řezy) uložit pomocí datových zkratek a nareferencovat do samostatného výkresu. Je nutné založit si novou pracovní složku, nastavit ji jako pracovní, nastavit jako projektovou složku datových zkratek. Potom je možné vytvářet do této složky datové zkratky. Tuto složku mít pokud možno jednu pro jeden projekt a na síťovém disku, nevytvářet si složky na svém PC. NASTAVENÁ SLOŽKA DATOVÝCH ZKRATEK JE PRO CELÝ CIVIL, NE JEN PRO JEDEN VÝKRES.</textarea>`;

//
//
//
export const copy = `<p class='copyright'>m-hcz ${new Date().getFullYear()} &copy; All Right Reserved</p>`;

const k1 = `${heading}${h1}${t1}${h2}${t2}${i2}${h3}${i3}${t3}${copy}`;

export default k1;

const head = `<h3></h3>`;
const h = `<h4></h4>`;
const t = `<textarea readonly></textarea>`;
const i = `<img class='w40' src='' alt=''/>`;
const p = `<p></p>`;
// ${}
