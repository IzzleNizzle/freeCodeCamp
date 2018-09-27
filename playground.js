function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  return str;
}

spinalCase('This Is Spinal Tap');

// here;s some regex for this challenge. may need finer tuning

// [\W|\s|_]

// [A-Z][a-z]*[^A-Z]

// [a-z]*

// change things to lower case, then filter from regex
