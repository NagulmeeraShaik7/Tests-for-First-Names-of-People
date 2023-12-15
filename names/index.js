const result = require("../utilities/utils/index.js");
const peopleNames = require("../country/state/city/index.js");

const getPeopleInCity = (peopleNames) => {
  return result(peopleNames);
};

module.exports = getPeopleInCity;
