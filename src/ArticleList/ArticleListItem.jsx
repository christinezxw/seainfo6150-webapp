import React from 'react';
import PropTypes from 'prop-types';

const ArticleListItem = props => (
  <div>
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <title>Articles</title>
        </head>
        <body>
            <h1>{props.article.title}</h1>
            <p>{props.article.shortText}</p>
            <time dateTime={props.article.pubDate}>{props.article.pubDate}</time>
            <button onClick={() => alert(props.article.slug)}>
                {"show article slug"}
            </button>     
        </body>
        
    </html>       
  </div>
  
);

  ArticleListItem.propTypes = {
    article: PropTypes.object.isRequired
};

export default ArticleListItem;