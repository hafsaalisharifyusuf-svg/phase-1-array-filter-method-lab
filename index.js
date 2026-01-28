// Code your solution here
/// index.js

// findMatching
// Takes an array of driver names and a string
// Returns an array of names that match the string (case-insensitive)
function findMatching(drivers, name) {
  return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

// fuzzyMatch
// Takes an array of driver names and a string
// Returns all drivers whose names start with the provided letters
function fuzzyMatch(drivers, letters) {
  return drivers.filter(driver => driver.toLowerCase().startsWith(letters.toLowerCase()));
}

// matchName
// Takes an array of driver objects and a string
// Returns all driver objects whose name matches the string exactly
function matchName(drivers, name) {
  return drivers.filter(driver => driver.name === name);
}

// Export functions for testing
module.exports = {
  findMatching,
  fuzzyMatch,
  matchName
};