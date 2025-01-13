export const percentageOfCompletion = (steps: number, totalSteps: number) => {
  return Math.round((steps / totalSteps) * 100);
};
