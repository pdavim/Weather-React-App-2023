// Remove a element from an array based on it s value - index or string

const arrayRemove = (arr, value) => {
  return arr.filter(function(ele) {
    return ele != value;
  });
};

export default arrayRemove;
