/**
 * Returns the number of items to display on a page based on the browser window's width.
 *
 * @returns {number} Page size based on the following conditions:
 * - 12 if the window width is greater than 1280 pixels.
 * - 8 if the window width is between 768 and 1279 pixels.
 * - 4 if the window width is less than or equal to 768 pixels.
 * - 12 as the default value if the function is called outside the browser environment.
 */
export const getPageSize = () => {
  if (typeof window !== "undefined") {
    return window.innerWidth > 1280
      ? 12
      : window.innerWidth < 1279 && window.innerWidth > 768
      ? 8
      : 4;
  }
  return 12;
};
