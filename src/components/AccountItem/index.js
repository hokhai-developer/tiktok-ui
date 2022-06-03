import React from 'react';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

import Image from '~/components/Image';
import { CheckIcon } from '../Icons';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('avatar')}>
        <Image
          src="https://picsum.photos/200"
          alt="hoasdadas"
          className={cx('image')}
        />
      </div>
      <div className={cx('info')}>
        <p className={cx('name')}>
          <span>Nguyen Van Teo</span>
          <CheckIcon />
        </p>
        <p className={cx('user-name')}>NguyenVanTeo123</p>
      </div>
    </div>
  );
}

export default AccountItem;
