import React from 'react';
import ImageToggleOnMouseOver from '../src/image-toggle';

const ImageChangeOnMouseOver = () => {
    return (
        <div>
            <ImageToggleOnMouseOver primaryImg="/static/pics/1a.jpg" secondaryImg="/static/pics/1b.jpg" alt=""></ImageToggleOnMouseOver>
            &nbsp;&nbsp;&nbsp;
            <ImageToggleOnMouseOver primaryImg="/static/pics/2a.jpg" secondaryImg="/static/pics/2b.jpg" alt=""></ImageToggleOnMouseOver>
        </div>      
    );
};

export default ImageChangeOnMouseOver;