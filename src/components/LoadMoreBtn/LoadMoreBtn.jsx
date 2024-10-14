import React from 'react';
import { IoCloudDownloadOutline } from 'react-icons/io5';
import styles from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ addNextPage }) => {
  return (
    <button type="button" onClick={addNextPage}>
      <IoCloudDownloadOutline />
      {'  '}Load more
    </button>
  );
};

export default LoadMoreBtn;
