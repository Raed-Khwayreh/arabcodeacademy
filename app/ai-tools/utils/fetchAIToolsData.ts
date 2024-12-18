export const fetchAIToolsData = async (page: number, pageSize: number) => {
  try {
    const response = await fetch(
      `https://sitev2.arabcodeacademy.com/wp-json/aca/v1/aitools?page_size=${pageSize}&page=${page}`
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
