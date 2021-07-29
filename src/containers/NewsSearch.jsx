/* eslint-disable max-len */
import React, { Component } from 'react';
//import ArticleList, Search, API call from services
import ArticleList from '../components/articles/ArticleList';
import Search from '../components/search/Search';
import { getArticles } from '../services/news-utils';
//setState w/articles and search, componentDidUpdate for API call
export default class NewsSearch extends Component {
  state = {
    search: '',
    articles: [],
    // loading: true,
  };
  //handleChange for props, onSubmit from Search (make sure the props are stated in Search also)
  handleChange = ({ target }) => {
    this.setState({ search: target.value });
  };
  //double check this, fingers crossed
  handleSubmit = async (e) => {
    e.preventDefault();
    const articles = await getArticles(this.state.search);
    this.setState({ articles });
  }

  render() {
    //search funcionality here? Look closer at this
    return (
      <>
        <Search 
          search={search}
          onChange={this.handleChange}
          onSearch={this.handleSearch}
          onSubmit={this.handleSubmit}
        />

        <ArticleList articles={articles}/>
      </>
    );
  }
}
