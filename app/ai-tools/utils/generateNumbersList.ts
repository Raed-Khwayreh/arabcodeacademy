/**
 * Generates the start and end numbers for a pagination group based on the current page number.
 *
 * @param {number} pageNum - The current page number.
 * @returns {object} An object containing:
 * - `start`: The starting number of the pagination group.
 * - `end`: The ending number of the pagination group.
 *
 * The pagination works in groups of 5:
 * - For page numbers 1-5, the result is `{ start: 1, end: 5 }`.
 * - For page numbers 6-10, the result is `{ start: 6, end: 10 }`.
 * - For page numbers 11-15, the result is `{ start: 11, end: 15 }`.
 * - And so on.
 */
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
