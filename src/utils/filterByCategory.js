export const getArticlesByCategory = (data = [], category) => {
  if (!Array.isArray(data)) return [];

  return data.filter(
    item => item.category?.toLowerCase() === category.toLowerCase()
  );
};
