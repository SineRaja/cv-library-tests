/**
 * Tabs Component
 * 
 * Displays selectable tabs for filtering job results by location or industry.
 * 
 * @component
 * @prop {Array<{id: string; label: string}>} tabs - Array of tabs with id and label.
 * @prop {string} [defaultTab] - Default selected tab.
 * @prop {(tabId: string) => void} [onTabChange] - Callback when tab is changed.
 * 
 * @example
 * return (
 *   <Tabs tabs={[{ id: "location", label: "Jobs by Location" }]} />
 * )
 */


import React, { useState, useCallback } from "react";
import styles from "../styles/Tabs.module.scss";
import { useTranslation } from "next-i18next";

interface TabsProps {
  tabs: { id: string; label: string }[];
  defaultTab?: string;
  onTabChange?: (tabId: string) => void;
}

const Tabs: React.FC<TabsProps> = ({ tabs, defaultTab, onTabChange }) => {
  const { t } = useTranslation("common");
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

  const handleTabClick = useCallback(
    (tabId: string) => {
      if (tabId !== activeTab) {
        setActiveTab(tabId);
        if (onTabChange) {
          onTabChange(tabId);
        }
      }
    },
    [activeTab, onTabChange]
  );

  return (
    <div className={styles.tabsContainer} role="tablist">
      <div className={styles.tabsInner}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`${styles.tab} ${activeTab === tab.id ? styles.activeTab : ""}`}
            onClick={() => handleTabClick(tab.id)}
            role="tab"
            aria-selected={activeTab === tab.id}
          >
            {t(tab.label)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
