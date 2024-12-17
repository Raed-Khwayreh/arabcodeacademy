export const getPageSize = () =>
  window.innerWidth > 1280
    ? 12
    : window.innerWidth < 1279 && window.innerWidth > 768
    ? 8
    : 4;
