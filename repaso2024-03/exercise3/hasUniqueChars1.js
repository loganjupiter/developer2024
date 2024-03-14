function hasUniqueChars(chars) {
  for (let i = 0; i < chars.length; i++) {
    if (chars.lastIndexOf(chars[i]) != i) {
      return false;
    }
  }
  return true;
}
