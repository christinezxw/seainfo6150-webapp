import React from 'react';
import PropTypes from 'prop-types';
import SlugButton from './SlugButton.jsx'
import ArticleImage from './ArticleImage.jsx'
import styles from './ArticleListItem.module.css'

const ArticleListItem = props => (
  <section className = {styles.flexContainer}>
    <div className = {styles.image}>
      {<ArticleImage article = {props.article}/>}
    </div>
    <div className = {styles.text}>
      <h1>{props.article.title}</h1>
      <p>{props.article.shortText}</p>
      <time dateTime={props.article.pubDate}>{props.article.pubDate}</time>
    </div>
    <div className = {styles.button}>
    {<SlugButton article = {props.article}/>}
    </div>
  </section>
);

  ArticleListItem.propTypes = {
    article: PropTypes.object.isRequired
};

export default ArticleListItem;