export const getArticlesByCategory = (data = [], category) => {
  if (!Array.isArray(data)) return [];

  const categoryBlock = data.find(
    item => item.category.toLowerCase() === category.toLowerCase()
  );

  return categoryBlock ? categoryBlock.articles : [];
};

