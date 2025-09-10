const leftInput  = document.getElementById('left');
const rightInput = document.getElementById('right');
const opSelect   = document.getElementById('op');
const btn        = document.getElementById('calcBtn');

function isNonNegativeInteger(v) {
  const s = String(v).trim();
  return /^\d+$/.test(s);
}

function validateInputs(a, b, op) {
  if (!isNonNegativeInteger(a) || !isNonNegativeInteger(b)) return false;
  if (!['+','-','*','/','%'].includes(op)) return false; // กัน operator แปลก
  return true;
}

function compute(a, b, op) {
  const left  = Number(a);
  const right = Number(b);

  if ((op === '/' || op === '%') && right === 0) {
    alert("It's over 9000!");
    console.log("It's over 9000!");
    return;
  }

  let result;
  switch (op) {
    case '+': result = left + right; break;
    case '-': result = left - right; break;
    case '*': result = left * right; break;
    case '/': result = left / right; break;
    case '%': result = left % right; break;
    default:
      alert('Error :(');
      console.log('Error :(');
      return;
  }

  if (!Number.isFinite(result)) {
    alert('Error :(');
    console.log('Error :(');
    return;
  }

  alert(result);
  console.log(result);
}

btn.addEventListener('click', () => {
  const a  = leftInput.value.trim();
  const b  = rightInput.value.trim();
  const op = opSelect.value;

  if (!validateInputs(a, b, op)) {
    alert('Error :(');
    return;
  }
  compute(a, b, op);
});

rightInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') btn.click();
});

setInterval(() => {
  alert('Please, use me...');
}, 30000);