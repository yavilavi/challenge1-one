const encrypt = () => {
  const text = document.getElementById('source').value;
  const output = document.getElementById('target');
  let result = '';
  for (let i = 0; i < text.length; i++) {
    switch (text[i]) {
      case 'a':
        result += 'ai';
        break;
      case 'e':
        result += 'enter';
        break;
      case 'i':
        result += 'imes';
        break;
      case 'o':
        result += 'ober';
        break;
      case 'u':
        result += 'ufat';
        break;
      default:
        result += text[i];
        break;
    }
  }
  output.value = result;
}

const decrypt = () => {
  const text = document.getElementById('source').value;
  const output = document.getElementById('target');
  let result = text;
  const keys = {
    ai: 'a',
    enter: 'e',
    imes: 'i',
    ober: 'o',
    ufat: 'u',
  }
  const indexes = Object.keys(keys);
  indexes.forEach(index => {
    result = result.split(index).join(keys[index]);
  })
  output.value = result;
}

const copyResult = () => {
  const output = document.getElementById('target');
  output.select();
  output.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(output.value);
}

document.getElementById('encrypt')
  .addEventListener('click', encrypt);

document.getElementById('decrypt')
  .addEventListener('click', decrypt);

document.getElementById('copyResult')
  .addEventListener('click', copyResult);
