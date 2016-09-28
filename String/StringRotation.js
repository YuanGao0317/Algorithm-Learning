
function isStringRotation(string1, string2) {
  if (string1.length === string2.length) {
    return isSubstr(string1, string2 + string2);
  }
  return false;
}

function isSubstr(string1, string2) {
  return string2.indexOf(string1) > -1;
}
