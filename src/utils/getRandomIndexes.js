export const getRandomIndexes = (length, count) => {
  const indexes = new Set();
  while (indexes.size < count) {
    const index = Math.floor(Math.random() * length);
    indexes.add(index);
  }
  return Array.from(indexes);
};
