import React from 'react';
import ImageToggleOnScroller from '../src/image-toggle-scroll';

const ImageChangeOnMouseOver = () => {
    return (
        <div>
            { [1,2,3,4,5,6].map(i => (<div key={i}>
                    <ImageToggleOnScroller 
                        primaryImg={`/static/pics/${i}a.jpg`} 
                        secondaryImg={`/static/pics/${i}b.jpg`} 
                        alt="">
                    </ImageToggleOnScroller>
                </div>))
            }
        </div>      
    );
};

export default ImageChangeOnMouseOver;