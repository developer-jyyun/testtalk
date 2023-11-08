import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import HostListItem from './components/hostListItem';
import styles from './hostList.module.scss';
import 'react-tabs/style/react-tabs.css';

export default function HostList() {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <section className={styles.container}>
      <article>
        <h2 className={styles.title}> 숙소 목록</h2>

        <Tabs
          selectedIndex={selectedTab}
          onSelect={index => setSelectedTab(index)}
        >
          <TabList>
            <Tab>경기</Tab>
            <Tab>부산</Tab>
            <Tab>제주</Tab>
          </TabList>
          <TabPanel>
            <h3 className={styles.location}> # 경기</h3>
            <ul className={styles.itemList}>
              <HostListItem />
              <HostListItem />
              <HostListItem />
              <HostListItem />
              <HostListItem />
              <HostListItem />
              <HostListItem />
              <HostListItem />
            </ul>
          </TabPanel>
          <TabPanel>
            <h3 className={styles.location}> # 부산</h3>
            <ul className={styles.itemList}>
              <HostListItem />
              <HostListItem />
              <HostListItem />
              <HostListItem />
              <HostListItem />
              <HostListItem />
              <HostListItem />
              <HostListItem />
            </ul>
          </TabPanel>
          <TabPanel>
            <h3 className={styles.location}> # 제주</h3>
            <ul className={styles.itemList}>
              <HostListItem />
              <HostListItem />
              <HostListItem />
              <HostListItem />
              <HostListItem />
              <HostListItem />
              <HostListItem />
              <HostListItem />
            </ul>
          </TabPanel>
        </Tabs>
      </article>
    </section>
  );
}
