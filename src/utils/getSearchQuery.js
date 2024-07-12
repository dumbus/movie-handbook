export const getSearchQuery = (searchStr) => {
  if (!searchStr) return '';

  const paramName = 'search=';
  const startIndex = searchStr.indexOf(paramName) + paramName.length;
  const searchQuery = searchStr.substring(startIndex);

  return searchQuery;
};
