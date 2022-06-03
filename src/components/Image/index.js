import React, { forwardRef, useState } from 'react';
import classNames from 'classnames';
import images from '~/assets/images';
import styles from './Image.module.scss';

function Image(
  {
    src,
    alt = 'tiltle image',
    className,
    fallback: customFallback = images.noImage,
    ...props
  },
  ref,
) {
  const [fallback, setFallback] = useState('');

  const handleError = () => {
    setFallback(customFallback);
  };

  return (
    <img
      alt={alt}
      ref={ref}
      src={fallback || src}
      onError={handleError}
      className={classNames(styles.wrapper, className)}
      {...props}
    />
  );
}

export default forwardRef(Image);
