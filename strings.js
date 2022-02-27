const stringLength = (string) => {
  if (string.length < 1 || string.length > 10) {
    throw ('String must be between 1 and 10 characters')
  }
  return string.length;
}

const stringReverse = (string) => {
  return string.split('').reverse().join('');
}

const stringCapitalize = (string) => {
  if (typeof (string) !== 'string' || string.length < 1) {
    throw ('String must be more than one character long');
  }
  let stringArray = string.split('');
  stringArray[0] = stringArray[0].toUpperCase();
  for (let i = 1; i < stringArray.length; i++) {
    stringArray[i] = stringArray[i].toLowerCase();
  }
  result = stringArray.join('')
  return result;
}


module.exports = {
  stringLength: stringLength,
  stringReverse: stringReverse,
  stringCapitalize: stringCapitalize,
};