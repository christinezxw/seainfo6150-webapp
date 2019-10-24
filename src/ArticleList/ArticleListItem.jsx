import React from 'react';
import PropTypes from 'prop-types';
import SlugButton from './SlugButton.jsx'
import ArticleImage from './ArticleImage.jsx'
import './ArticleListItem.module.css'

const ArticleListItem = props => (
  <section id = "content" className = "flex-container">
    <div id = "image" class = "elements">
      {<ArticleImage article = {props.article}/>}
    </div>
    <div id = "text" class = "elements">
      <h1>{props.article.title}</h1>
      <p>{props.article.shortText}</p>
      <time dateTime={props.article.pubDate}>{props.article.pubDate}</time>
    </div>
    <div id = "button" class = "elements">
    {<SlugButton article = {props.article}/>}
    </div>
  </section>
);

  ArticleListItem.propTypes = {
    article: PropTypes.object.isRequired
};

export default ArticleListItem;