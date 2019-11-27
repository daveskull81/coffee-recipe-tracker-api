module.exports = (data, arrOfPropsToRemove) => {
    if (Array.isArray(data)) {
        return data.map(obj => {
          const newObj = { ...obj };
          arrOfPropsToRemove.forEach(prop => {
            delete newObj[prop];
          });
          return newObj;
        });
      } else {
        const results = { ...data };
        arrOfPropsToRemove.forEach(prop => {
          delete results[prop];
        });
        return results;
      };
};