'use strict';

const removeElements = (array, ...items) => {
  for (const item of items) {
    const index = array.indexOf(item);
    if (-1 !== index) array.splice(index, 1);
  }
};

module.exports = { removeElements };
