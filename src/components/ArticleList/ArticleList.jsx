/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
//import Article component, map through articles, return an <ul> of articles and inject them in <li>
function ArticleList({ }) {
  return (
    <div>
      
    </div>
  );
}

ArticleList.propTypes = {

};

export default ArticleList;

import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';

const CharacterList = ({ characters }) => {
  const characterElements = characters.map((character) => (
    <li key={character.id}>
      <Character
        {...character}
        // name={character.name}
        // species={character.species}
        // status={character.status}
        // image={character.image}
      />
    </li>
  ));

  return <ul>{characterElements}</ul>;
};

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      species: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CharacterList;