import React from 'react';
import clsx from 'clsx';

const Image = ({ src, alt, type }) => {
    const classMap = {
      bigBanner: 'img-big-banner',
      banner: 'img-banner',
      smallBanner: 'img-small-banner',

      hugeIcon: 'img-huge-icon',
      biggerIcon: 'img-bigger-icon',
      bigIcon: 'img-big-icon',
      icon: 'img-icon',
      smallIcon: 'img-small-icon',
      tinyIcon: 'img-tiny-icon',
      veryTinyIcon: 'img-very-tiny-icon',

      bigImg: 'img-big-img',
      img: 'img-img',
      smallImg: 'img-small-img',
    };

    return <img src={src} alt={alt} className={clsx(classMap[type])} />;
  };

  export default Image;