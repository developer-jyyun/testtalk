import { useState, useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { addHostsToFirestore, fetchHostsFromFirestore } from '@/utils/firebase';
import { Host } from './hostList.types';
import HostListItem from './components/HostListItem';
import styles from './hostList.module.scss';

export default function HostList() {
  const [hosts, setHosts] = useState<Host[]>([]);
  const [selectedTab, setSelectedTab] = useState<number>(0);

  const locations = ['busan', 'jeju', 'gyeongju', 'jeonju'];

  const fetchHosts = async (location: string) => {
    try {
      const response = await fetchHostsFromFirestore(location);
      setHosts(response);
    } catch (error) {
      console.error('호스트 정보 불러오기 오류:', error);
    }
  };

  useEffect(() => {
    // 초기 로드: 부산
    fetchHosts(locations[selectedTab]);
  }, []);

  return (
    <section className={styles.container}>
      <button type="submit" onClick={addHostsToFirestore}>
        호스트 저장
      </button>
      <Tabs
        selectedIndex={selectedTab}
        onSelect={index => {
          const selectedLocation = locations[index];
          setSelectedTab(index);
          fetchHosts(selectedLocation);
        }}
      >
        <TabList>
          {locations.map(location => (
            <Tab key={location}>{location}</Tab>
          ))}
        </TabList>
        {locations.map(location => (
          <TabPanel key={location}>
            <h3 className={styles.location}>#{location}</h3>
            <ul className={styles.itemList}>
              {hosts
                .filter(host => host.location === location)
                .map(host => (
                  <HostListItem key={host.id} host={host} />
                ))}
            </ul>
          </TabPanel>
        ))}
      </Tabs>
    </section>
  );
}
