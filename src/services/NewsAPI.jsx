//create function that will fetch all articles
//create function to query all articles (it will search)
export const fetchArticle = async () => {
  const response = await fetch(`pocess.env.KEY`);
  const json = await response.json();
  return json.articles;
};
