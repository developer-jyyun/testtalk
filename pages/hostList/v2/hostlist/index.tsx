import { useState, useEffect } from 'react';
import Link from 'next/link';
import HostListItem from './components/hostListItem';
import styles from './hostList.module.scss';

export default function HostList() {
  useEffect(() => {
    // 페이지 로드 후 실행될 코드
    const handleScroll = () => {
      const element = document.getElementById('busan');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    // 이벤트 리스너 등록
    window.addEventListener('hashchange', handleScroll);

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      window.removeEventListener('hashchange', handleScroll);
    };
  }, []);
  return (
    <section className={styles.container}>
      <article>
        <h2 className={styles.title}> 숙소 목록</h2>
        <ul className={styles.hash}>
          <li>
            <Link href="#busan">#부산</Link>
          </li>
          <li>
            <Link href="#jeju">#제주</Link>
          </li>
          <li>
            <Link href="#jeonju">#전주</Link>
          </li>
          <li>
            <Link href="#gyeongju">#경주</Link>
          </li>
        </ul>

        <h3 className={styles.location} id="gyeongju">
          경주 펜션
        </h3>
        <ul className={styles.itemList}>
          <HostListItem />
          <HostListItem />
          <HostListItem />
          <HostListItem />
          <HostListItem />
          <HostListItem />
          <HostListItem />
          <HostListItem />
          <HostListItem />
          <HostListItem />
        </ul>
        <h3 className={styles.location} id="jeonju">
          전주 펜션
        </h3>
        <ul className={styles.itemList}>
          <HostListItem />
          <HostListItem />
          <HostListItem />
          <HostListItem />
          <HostListItem />
          <HostListItem />
          <HostListItem />
          <HostListItem />
          <HostListItem />
          <HostListItem />
        </ul>
        <h3 className={styles.location} id="busan">
          부산 펜션
        </h3>
        <ul className={styles.itemList}>
          <HostListItem />
          <HostListItem />
          <HostListItem />
          <HostListItem />
          <HostListItem />
          <HostListItem />
          <HostListItem />
          <HostListItem />
          <HostListItem />
          <HostListItem />
        </ul>
        <h3 className={styles.location} id="jeju">
          제주 펜션
        </h3>
        <ul className={styles.itemList}>
          <HostListItem />
          <HostListItem />
          <HostListItem />
          <HostListItem />
          <HostListItem />
          <HostListItem />
          <HostListItem />
          <HostListItem />
          <HostListItem />
          <HostListItem />
        </ul>
      </article>
    </section>
  );
}
