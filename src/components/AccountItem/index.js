import React from 'react';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

import Image from '~/components/Image';
import { CheckIcon } from '../Icons';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
  return (
    <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
      <div className={cx('avatar')}>
        <Image src={data.avatar} alt={data.full_name} className={cx('image')} />
      </div>
      <div className={cx('info')}>
        <p className={cx('name')}>
          <span>{data.full_name}</span>
          {data.tick && <CheckIcon />}
        </p>
        <p className={cx('user-name')}>{data.nickname}</p>
      </div>
    </Link>
  );
}

export default AccountItem;
