import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import Header from './Header';
import { ArrowIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function Menu({ children, items = [], hideOnClick = false, arrow = false }) {
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
              setHistory((prev) => [...prev, item.children]);
            }
          }}
        />
      );
    });
  };

  const handleBack = () => {
    setHistory((prev) => prev.slice(0, prev.length - 1));
  };

  return (
    <Tippy
      offset={[16, 10]}
      interactive
      placement="bottom-end"
      delay={[0, 500]}
      hideOnClick={hideOnClick}
      render={(attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx('menu-popper')}>
            {history.length > 1 && (
              <Header title={currentMenu.title} onBack={handleBack} />
            )}
            {items && (
              <div className={cx('menu-body')}>{renderItems(currentMenu)}</div>
            )}
          </PopperWrapper>
          <ArrowIcon className={cx(arrow ? 'arrow-user' : 'arrow')} />
        </div>
      )}
      onHide={() => {
        setHistory((prev) => prev.slice(0, 1));
      }}
    >
      {children}
    </Tippy>
  );
}

Menu.propTypes = {
  children: PropTypes.node.isRequired,
  items: PropTypes.array,
  hideOnClick: PropTypes.func,
  arrow: PropTypes.bool,
};

export default Menu;
