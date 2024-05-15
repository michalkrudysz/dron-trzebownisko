export default async function cacheImages(srcArray) {
  const promises = srcArray.map(
    (src) =>
      new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve();
        img.onerror = () => reject(new Error("Problem z ładowaniem obrazka"));
      })
  );

  await Promise.all(promises);
  return new Promise((resolve) => setTimeout(resolve, 100));
}
