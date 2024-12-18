export const fetchAIToolsData = async (
  page: number,
  pageSize: number,
  favortie: boolean
) => {
  try {
    const response = await fetch(
      `https://sitev2.arabcodeacademy.com/wp-json/aca/v1/aitools?page_size=${pageSize}&page=${page}${
        favortie ? `&isFav=${favortie}` : ""
      }`
    );
    const result = await response.json();
    return result;
  } catch (error) {
    return error;
  }
};
