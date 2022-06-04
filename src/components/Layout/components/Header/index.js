import React, { useState } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import styles from './Header.module.scss';
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import {
  ClearIcon,
  LoadingIcon,
  SearchIcon,
  SeeMoreIcon,
  UploadIcon,
  LanguageIcon,
  FeedbackIcon,
  KeyboardIcon,
} from '~/components/Icons';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: <LanguageIcon />,
    title: 'English',
  },
  {
    icon: <FeedbackIcon />,
    title: 'Feedback and help',
    to: '/feedback',
  },
  {
    icon: <KeyboardIcon />,
    title: 'Keyboards shortcuts',
  },
];

function Header() {
  const [searchResult, setSearchResult] = useState([123]);

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <img src={images.logo.default} alt="Tiktok" />
        </div>
        <Tippy
          visible={searchResult.length > 0}
          interactive={true}
          render={(attrs) => (
            <div className={cx('search-results')} tabIndex="-1" {...attrs}>
              <PopperWrapper>
                <h4 className={cx('search-title')}>Accounts</h4>
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </PopperWrapper>
            </div>
          )}
        >
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
        </Tippy>
        <div className={cx('actions')}>
          <Button
            rank="third"
            leftIcon={<UploadIcon className={cx('upload-icon')} />}
            className={cx('upload')}
          >
            Upload
          </Button>

          <Button rank="first" className={cx('login')}>
            Log in
          </Button>

          <Menu items={MENU_ITEMS}>
            <button className={cx('see-more')}>
              <SeeMoreIcon />
            </button>
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
