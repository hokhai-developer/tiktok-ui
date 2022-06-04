import React from 'react';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function MenuItems({ data }) {
  return (
    <div>
      <Button leftIcon={data.icon} className={cx('menu-item')} to={data.to}>
        <p className={cx('title')}>{data.title}</p>
      </Button>
    </div>
  );
}

export default MenuItems;
