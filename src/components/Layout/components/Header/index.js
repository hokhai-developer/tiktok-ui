import React from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

import styles from './Header.module.scss';
import images from '~/assets/images';
import {
  SeeMoreIcon,
  UploadIcon,
  LanguageIcon,
  FeedbackIcon,
  KeyboardIcon,
  MessageIcon,
  InboxIcon,
  CoinsIcon,
  SettingIcon,
  ProfileIcon,
  LogoutIcon,
  LiveStudioIcon,
} from '~/components/Icons';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import Image from '~/components/Image';
import Search from '../Search';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: <LanguageIcon />,
    title: 'English',
    children: {
      title: 'Language',
      data: [
        {
          type: 'language',
          code: 'en',
          title: 'English',
        },
        {
          type: 'language',
          code: 'vi',
          title: 'Tiếng Việt',
        },
      ],
    },
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
  const currentUser = true;

  const userMenu = [
    {
      icon: <ProfileIcon />,
      title: 'View profile',
      to: '/user',
    },
    {
      icon: <CoinsIcon />,
      title: 'Get coins',
      to: '/coin',
    },
    {
      icon: <LiveStudioIcon />,
      title: 'Get coins',
      to: '/studio',
    },

    {
      icon: <SettingIcon />,
      title: 'Settings',
      to: '/setting',
    },
    ...MENU_ITEMS,
    {
      icon: <LogoutIcon />,
      title: 'Log out',
      to: '/',
      separate: true,
    },
  ];

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <img src={images.logo.default} alt="Tiktok" />
        </div>
        <Search />

        <div className={cx('actions')}>
          <Button
            rank="third"
            leftIcon={<UploadIcon className={cx('upload-icon')} />}
            className={cx('upload')}
          >
            Upload
          </Button>

          {currentUser ? (
            <>
              <Tippy content="Message" placement="bottom">
                <button className={cx('message')}>
                  <MessageIcon />
                </button>
              </Tippy>
              <Tippy content="Inbox" placement="bottom">
                <button className={cx('inbox')}>
                  <InboxIcon />
                  <span className={cx('inbox-count')}>12</span>
                </button>
              </Tippy>
            </>
          ) : (
            <Button rank="first" className={cx('login')}>
              Log in
            </Button>
          )}
          <>
            <Menu
              items={currentUser ? userMenu : MENU_ITEMS}
              arrow={currentUser ? true : false}
            >
              {currentUser ? (
                <div className={cx('current-user')}>
                  <Image
                    src="https://picsum.photos/id/237/200/300"
                    alt="User avatar"
                  ></Image>
                </div>
              ) : (
                <button className={cx('see-more')}>
                  <SeeMoreIcon />
                </button>
              )}
            </Menu>
          </>
        </div>
      </div>
    </header>
  );
}

export default Header;
