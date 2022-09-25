// https://www.omnicalculator.com/health/albumin-globulin-ratio

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const AGratioRadio = document.getElementById('AGratioRadio');
const albuminRadio = document.getElementById('albuminRadio');
const totalproteinsRadio = document.getElementById('totalproteinsRadio');

let AGratio;
let albumin = v1;
let totalproteins = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

AGratioRadio.addEventListener('click', function() {
  variable1.textContent = 'Albumin';
  variable2.textContent = 'Total proteins';
  albumin = v1;
  totalproteins = v2;
  result.textContent = '';
});

albuminRadio.addEventListener('click', function() {
  variable1.textContent = 'A/G ratio';
  variable2.textContent = 'Total proteins';
  AGratio = v1;
  totalproteins = v2;
  result.textContent = '';
});

totalproteinsRadio.addEventListener('click', function() {
  variable1.textContent = 'A/G ratio';
  variable2.textContent = 'Albumin';
  AGratio = v1;
  albumin = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(AGratioRadio.checked)
    result.textContent = `A/G ratio = ${computeAGratio().toFixed(2)}`;

  else if(albuminRadio.checked)
    result.textContent = `Albumin = ${computealbumin().toFixed(2)}`;

  else if(totalproteinsRadio.checked)
    result.textContent = `Total proteins = ${computetotalproteins().toFixed(2)}`;
})

// calculation

// AGratio = albumin / (totalproteins - albumin)

function computeAGratio() {
  return Number(albumin.value) / (Number(totalproteins.value) - Number(albumin.value));
}

function computealbumin() {
  return Number(AGratio.value) / Number(totalproteins.value);
}

function computetotalproteins() {
  return (Number(albumin.value) / Number(AGratio.value)) + Number(albumin.value);
}