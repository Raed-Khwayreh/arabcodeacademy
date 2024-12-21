export const generateNumbersList = (pageNum: number) => {
  return {
    start:
      pageNum % 5 == 0
        ? pageNum - 5
        : pageNum % 5 === 1
        ? pageNum - 1
        : pageNum - Math.round(pageNum % 5),
    end: pageNum % 5 === 0 ? pageNum : pageNum - Math.round(pageNum % 5) + 5,
  };
};
