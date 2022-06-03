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
            type="text"
            placeholder="Search accounts and videos"
            spellCheck={false}
          />
          <button className={cx('clear')}>
            <ClearIcon />
          </button>
          <LoadingIcon />
          <button className={cx('search-btn')}>
            <SearchIcon />
          </button>
        </div>
        <Image
          alt="noidasd"
          src="https://picsum.phots/200/300"
          fallback="https://picsum.photos/seed/picsum/200/300"
        />
        {/* actions */}
      </div>
    </header>
  );
}

export default Header;
