import React, { useState } from 'react';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Tabs from '../components/Tabs';
import JobList from '../components/JobList';
import styles from '../styles/Home.module.scss';

import { locationData, industryData } from '../utils/constants';

const HomePage: React.FC = () => {
  useTranslation('common');
  const [activeTab, setActiveTab] = useState<'location' | 'industry'>('location');

  const tabs = [
    { id: 'location', label: 'Jobs by Location' },
    { id: 'industry', label: 'Jobs by Industry' },
  ];

  return (
    <div className={styles.pageContainer}>
      <Header />

      <main className={styles.main}>
        <SearchBar />
      </main>

      <div className={styles.tabsContainer}>
        <Tabs
          tabs={tabs}
          defaultTab="location"
          onTabChange={(tabId) => setActiveTab(tabId as 'location' | 'industry')}
        />
      </div>

      <footer className={styles.footer}>
        <JobList
          type={activeTab}
          items={activeTab === 'location' ? locationData : industryData}
        />
      </footer>
    </div>

  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common'])),
  },
});


export default HomePage;
