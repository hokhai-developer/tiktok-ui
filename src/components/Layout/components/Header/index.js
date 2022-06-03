import React from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { ClearIcon, LoadingIcon, SearchIcon } from '~/components/Icons';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <img src={images.logo.default} alt="Tiktok" />
        </div>
        <div className={cx('search')}>
          <input
            className={cx('search-input')}
            type="text"
            placeholder="Search accounts and videos"
            spellCheck={false}
          />
          <button className={cx('clear-btn')}>
            <ClearIcon />
          </button>
          <LoadingIcon className={cx('loading')} />
          <button className={cx('search-btn')}>
            <SearchIcon className={cx('search-btn-icon')} />
          </button>
        </div>
        <div className="actions">actions</div>
      </div>
    </header>
  );
}

export default Header;
