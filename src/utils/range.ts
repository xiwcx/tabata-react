export const range = (start: number, end: number): number[] => {
  if (start > end) throw new Error("start must be less than end");

  return new Array(end - start + 1).fill(0).map((_, i) => start + i);
};
