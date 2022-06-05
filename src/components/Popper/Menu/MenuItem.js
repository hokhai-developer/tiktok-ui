import React from 'react';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
  const classes = cx('menu-item', {
    separate: data.separate,
  });
  return (
    <Button
      leftIcon={data.icon}
      className={classes}
      to={data.to}
      onClick={onClick}
    >
      <p className={cx('title')}>{data.title}</p>
    </Button>
  );
}

export default MenuItem;
