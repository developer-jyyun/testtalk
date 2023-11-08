'use client';

import styles from './hostListItem.module.scss';

export default function HostListItem() {
  return (
    <li className={styles.item}>
      <img
        className={styles.hostImg}
        src="https://avatars.githubusercontent.com/u/131247158?v=4"
        alt=""
      />
      <div>
        <p className={styles.name}>host name</p>
        <button className={styles.btn} type="submit">
          참여
        </button>
      </div>
    </li>
  );
}
