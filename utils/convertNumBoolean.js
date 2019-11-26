module.exports = value => {
    if (typeof value === 'number') {
      return Boolean(value);
    } else {
      return Number(value);
    };
  };