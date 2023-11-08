import { useState, useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { addHostsToFirestore, fetchHostsFromFirestore } from '@/utils/firebase';
import { Host } from './hostList.types';
import HostListItem from './components/HostListItem';
import styles from './hostList.module.scss';

export default function HostList() {
  const [selectedTab, setSelectedTab] = useState<number | string>(0);
  const [hosts, setHosts] = useState<Host[]>([]);

  useEffect(() => {
    // 호스트 정보를 불러오는 비동기 함수
    const fetchHosts = async () => {
      try {
        // Firestore에서 호스트 정보를 가져옴
        const location = String(selectedTab);
        const response = await fetchHostsFromFirestore(location);
        setHosts(response);
      } catch (error) {
        console.error('호스트 정보 불러오기 오류:', error);
      }
    };

    fetchHosts();
  }, [selectedTab]);

  const fetchHostsByLocation = async location => {
    try {
      const response = await fetchHostsFromFirestore(location);
      setHosts(response);
    } catch (error) {
      console.log('호스트 정보 불러오기 오류:', error);
    }
  };

  return (
    <section className={styles.container}>
      <button type="submit" onClick={addHostsToFirestore}>
        호스트 저장
      </button>
      <article>
        {/* <h2 className={hostListStyles.title}>숙소 목록</h2> */}

        <Tabs
          selectedIndex={selectedTab}
          onSelect={index => {
            setSelectedTab(index);
            const locations = ['busan', 'jeju', 'gyeongju', 'jeonju'];
            fetchHostsByLocation(locations[index]);
          }}
        >
          <TabList>
            <Tab onClick={() => setSelectedTab(0)}>부산</Tab>
            <Tab onClick={() => setSelectedTab(1)}>제주</Tab>
            <Tab onClick={() => setSelectedTab(2)}>경주</Tab>
            <Tab onClick={() => setSelectedTab(3)}>전주</Tab>
          </TabList>
          <TabPanel>
            <h3 className={styles.location}> # 부산</h3>
            <ul className={styles.itemList}>
              {hosts
                .filter(host => host.location === 'busan')
                .map(host => (
                  <HostListItem key={host.id} host={host} />
                ))}
            </ul>
          </TabPanel>
          <TabPanel>
            <h3 className={styles.location}> # 제주</h3>
            <ul className={styles.itemList}>
              {hosts
                .filter(host => host.location === 'jeju')
                .map(host => (
                  <HostListItem key={host.id} host={host} />
                ))}
            </ul>
          </TabPanel>
          <TabPanel>
            <h3 className={styles.location}> # 경주</h3>
            <ul className={styles.itemList}>
              {hosts
                .filter(host => host.location === 'gyeongju')
                .map(host => (
                  <HostListItem key={host.id} host={host} />
                ))}
            </ul>
          </TabPanel>
          <TabPanel>
            <h3 className={styles.location}> # 전주</h3>
            <ul className={styles.itemList}>
              {hosts
                .filter(host => host.location === 'jeonju')
                .map(host => (
                  <HostListItem key={host.id} host={host} />
                ))}
            </ul>
          </TabPanel>
        </Tabs>
      </article>
    </section>
  );
}
