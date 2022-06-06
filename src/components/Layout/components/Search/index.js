import React, { useState, useRef, useEffect } from 'react';
import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';
import styles from './Search.module.scss';

import { ClearIcon, LoadingIcon, SearchIcon } from '~/components/Icons';
import AccountItem from '~/components/AccountItem';
import { Wrapper as PopperWrapper } from '~/components/Popper';

const cx = classNames.bind(styles);

function Search() {
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef();

  useEffect(() => {
    if (!searchValue.trim('')) {
      setSearchValue('');
      setSearchResult([]);
      return;
    }

    setLoading(true);

    fetch(
      `https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(
        searchValue,
      )}&type=less`,
    )
      .then((res) => res.json())
      .then((res) => {
        setSearchResult(res.data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [searchValue]);

  const handleClear = () => {
    setSearchValue('');
    setSearchResult([]);
    inputRef.current.focus();
  };
  const handleHideResult = () => {
    setShowResult(false);
  };
  return (
    <HeadlessTippy
      visible={searchResult.length > 0 && showResult}
      interactive={true}
      onClickOutside={handleHideResult}
      render={(attrs) => (
        <div className={cx('search-results')} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx('search-popper')}>
            <h4 className={cx('search-title')}>Accounts</h4>
            {searchResult.map((result) => {
              return <AccountItem key={result.id} data={result} />;
            })}
          </PopperWrapper>
        </div>
      )}
    >
      <div className={cx('search')}>
        <input
          ref={inputRef}
          value={searchValue}
          className={cx('search-input')}
          type="text"
          placeholder="Search accounts and videos"
          spellCheck={false}
          onChange={(e) => setSearchValue(e.target.value)}
          onFocus={() => setShowResult(true)}
        />
        {!!searchValue && !loading && (
          <button className={cx('clear-btn')} onClick={handleClear}>
            <ClearIcon />
          </button>
        )}
        {loading && <LoadingIcon className={cx('loading')} />}
        <button className={cx('search-btn')}>
          <SearchIcon className={cx('search-btn-icon')} />
        </button>
      </div>
    </HeadlessTippy>
  );
}

export default Search;
