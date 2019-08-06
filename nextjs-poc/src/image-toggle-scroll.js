import React, { useRef, useEffect, useState } from 'react';

const ImageToggleOnScroll = ({ primaryImg, secondaryImg }) => {
    const imageRef = useRef(null);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        window.addEventListener("scroll", scrollHandler);
        setInView(isInView());
        setIsLoading(false);
        return (()=> {
            window.removeEventListener("scroll", scrollHandler);
        })
    }, [isLoading])
    const [inView, setInView] = useState(false);

    const isInView = () => {
        if (imageRef.current) {
            const rect = imageRef.current.getBoundingClientRect();
            return rect.top >= 0 && rect.bottom <= window.innerHeight;
        }
        return false;
    }

    const scrollHandler = () => {
        setInView(() => {
            return isInView();
        })
    }
    return (
        isLoading ? null : (
        <img src={inView ? primaryImg : secondaryImg} 
            alt=""
            ref={imageRef}
            width="360"
            height="360">
        </img>)
    );
}

export default ImageToggleOnScroll;