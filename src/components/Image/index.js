import React, { forwardRef, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import images from '~/assets/images';
import styles from './Image.module.scss';

function Image(
  {
    src,
    alt = 'title image',
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

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
  fallback: PropTypes.string,
};

export default forwardRef(Image);
