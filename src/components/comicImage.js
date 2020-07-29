import React from 'react';

const ComicImage = ({thumbnail }) => (
    <React.Fragment>
        <img className="thumbnail-img" src={thumbnail} alt={thumbnail} />
    </React.Fragment>
);

export default ComicImage;
