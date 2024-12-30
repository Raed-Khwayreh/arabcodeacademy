/**
 * Checks if a given date falls within a specified date range.
 *
 * @param {Date} currentDate - The date to be checked.
 * @param {Date} startDate - The start of the date range.
 * @param {Date} endDate - The end of the date range.
 * @returns {boolean} `true` if the current date is within the range (inclusive), otherwise `false`.
 *
 */
export const isInRange = (
  currentDate: Date,
  startDate: Date,
  endDate: Date
): boolean => {
  return currentDate >= startDate && currentDate <= endDate;
};
