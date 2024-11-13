export const isInRange = (currentDate: Date, startDate: Date, endDate: Date): boolean => {
    return currentDate >= startDate && currentDate <= endDate;
};
