export const calcRatio = (
  figmaWidth: number,
  objSize: number,
  yourScreenWidth: number
): object => {
  const present = (objSize / figmaWidth) * 100;
  const objectSize = (yourScreenWidth * present) / 100;
  return { present, objectSize };
};
