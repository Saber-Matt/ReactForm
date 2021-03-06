import React from 'react';
import PropTypes from 'prop-types';
//this will display one single article
function Article({ title, author, description, }) {
  return (<>
    <h2>{title}</h2>
    <h3>{author}</h3>
    <p>{description}</p>
  </>);

  
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Article;

