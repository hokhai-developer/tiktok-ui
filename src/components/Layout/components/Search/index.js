import React, { useState, useRef, useEffect } from 'react';
import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';

import styles from './Search.module.scss';
import { ClearIcon, LoadingIcon, SearchIcon } from '~/components/Icons';
import AccountItem from '~/components/AccountItem';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { useDebounce } from '~/hooks';
import * as searchService from '~/apiServices/searchService';

const cx = classNames.bind(styles);

function Search() {
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);

  const inputRef = useRef();
  const debounceSearchValue = useDebounce(searchValue, 500);

  useEffect(() => {
    if (!debounceSearchValue.trim('')) {
      setSearchResult([]);
      return;
    }

    const fecthApi = async () => {
      setLoading(true);
      const result = await searchService.search(debounceSearchValue);
      setSearchResult(result);
      setLoading(false);
    };

    fecthApi();
  }, [debounceSearchValue]);

  const handleClear = () => {
    setSearchValue('');
    setSearchResult([]);
    inputRef.current.focus();
  };
  const handleHideResult = () => {
    setShowResult(false);
  };

  const handleChange = (e) => {
    const searchValue = e.target.value;
    if (!searchValue.startsWith(' ')) {
      setSearchValue(searchValue);
    }
  };

  return (
    //Using a wrapper <div> or <span> tag around the reference element solves this by creating a new parentNode context.
    <div>
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
            onChange={handleChange}
            onFocus={() => setShowResult(true)}
          />
          {!!searchValue && !loading && (
            <button className={cx('clear-btn')} onClick={handleClear}>
              <ClearIcon />
            </button>
          )}
          {loading && <LoadingIcon className={cx('loading')} />}
          <button
            className={cx('search-btn')}
            onMouseDown={(e) => e.preventDefault()}
          >
            <SearchIcon className={cx('search-btn-icon')} />
          </button>
        </div>
      </HeadlessTippy>
    </div>
  );
}

export default Search;
