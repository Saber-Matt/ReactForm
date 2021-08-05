export const getArticles = async (search) => {
  const res = await
  // eslint-disable-next-line max-len
  fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${process.env.KEY}`);

  const json = await res.json();

  return json.articles;
};
