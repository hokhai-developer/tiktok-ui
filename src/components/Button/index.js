import React from 'react';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({
  to,
  href,
  rank,
  text = false,
  disabled = false,
  className,
  leftIcon,
  rightIcon,
  children,
  onClick,
  ...passProps
}) {
  let Comp = 'button';

  const props = {
    onClick,
    ...passProps,
  };

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.hred = href;
    Comp = 'a';
  }

  //no-event when disabled
  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on') && typeof key === 'function') {
        delete props[key];
      }
    });
  }

  const classes = cx('wrapper', {
    [rank]: rank,
    text,
    disabled,
    [className]: className,
  });

  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
      <span className={cx('title')}>{children}</span>
      {rightIcon && <spam className={cx('icon')}>{rightIcon}</spam>}
    </Comp>
  );
}

export default Button;
