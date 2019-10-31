import React from "react";
import PropTypes from 'prop-types'
import ArticleListItem from "./ArticleListItem.jsx"
import styles from './ArticleList.module.css'

const ArticleList = props => {
  return (
    <ul>
      <h1 className = {styles.headline}>Articles</h1>
      <div className = {styles.gridsection}>
        {props.articles.map(article => (
        <li key={article.slug}>{<ArticleListItem article = {article}/>}</li>
        ))}
      </div>
      
    </ul>
  );
};

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired
};
export default ArticleList;
