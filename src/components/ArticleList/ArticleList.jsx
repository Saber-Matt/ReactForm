/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
//import Article component, map through articles, return an <ul> of articles and inject them in <li>
import Article from '../Article/Article.jsx';
const articleElements = articles.map(article => (

  <li key={article.title}>
    <Article
      title={article.title}
      author={article.author}
      description={article.description}
    />
  </li>
));

return <ul>{articleElements}</ul>;
};
ArticleList.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    })
  ).isRequired,
};

export default ArticleList;
