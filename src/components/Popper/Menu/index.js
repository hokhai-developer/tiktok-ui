import React, { useState } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import Header from './Header';

const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
  const [history, setHistory] = useState([{ data: items }]);

  const currentMenu = history[history.length - 1];

  const renderItems = (currentMenu) => {
    return currentMenu.data.map((item, index) => {
      const isParent = !!item.children;
      return (
        <MenuItem
          data={item}
          key={index}
          onClick={() => {
            if (isParent) {
              setHistory((pre) => [...pre, item.children]);
            }
          }}
        />
      );
    });
  };

  const handleBack = () => {
    setHistory((pre) => pre.slice(0, pre.length - 1));
  };

  return (
    <Tippy
      visible
      interactive
      placement="bottom-end"
      delay={[0, 500]}
      render={(attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx('menu-propper')}>
            {history.length > 1 && (
              <Header title={currentMenu.title} onBack={handleBack} />
            )}
            {items && renderItems(currentMenu)}
          </PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
