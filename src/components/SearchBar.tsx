/**
 * SearchBar Component
 * 
 * This component provides a search form allowing users to filter jobs 
 * by keyword, location, and distance.
 * 
 * Features:
 * - Debounced search input for location suggestions.
 * - Predefined distance filter.
 * - Handles form submission.
 *
 * @component
 * @example
 * return (
 *   <SearchBar />
 * )
 */

import React, { useState, useMemo, useCallback } from 'react';
import Image from 'next/image';
import styles from '../styles/SearchBar.module.scss';
import { useSearch } from '../hooks/useSearch';
import { DEFAULT_DISTANCE_OPTIONS } from '../utils/constants';

const SearchBar: React.FC = () => {
  const { query, setQuery, locations } = useSearch();
  const [keyword, setKeyword] = useState('');
  const [distance, setDistance] = useState('15 miles');
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

  const distanceOptions = useMemo(() => DEFAULT_DISTANCE_OPTIONS, []);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    console.log('Search submitted:', { keyword, query, distance });
  }, [keyword, query, distance]);

  const handleLocationClick = (location: string) => {
    setQuery(location);
    setSelectedLocation(location);
    setIsExpanded(false); 
  };

  return (
    <div className={styles.searchBar}>
      <form className={styles.searchForm} onSubmit={handleSubmit} aria-label="Job Search Form">
        
        <div className={styles.inputBox}>
          <label htmlFor="keyword">Keywords / Job Title / Job Ref</label>
          <input
            id="keyword"
            type="text"
            placeholder="e.g. Sales Executive"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            autoComplete="off"
          />
        </div>

        <div className={styles.formRow}>
          
          <div className={`${styles.inputBox} ${styles.small}`} style={{ position: 'relative' }}>
            <label htmlFor="location">Location</label>
            <input
              id="location"
              type="text"
              placeholder="e.g. town or postcode"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setIsExpanded(true); 
              }}
              autoComplete="off"
              role="combobox"
              aria-controls="location-suggestions"
              aria-expanded={isExpanded}
              aria-autocomplete="list"
            />
            
            {isExpanded && locations.length > 0 && (
              <ul
                id="location-suggestions"
                className={styles.suggestions}
                role="listbox"
                aria-label="Location suggestions"
              >
                {locations.map((loc, index) => (
                  <li
                    key={index}
                    role="option"
                    tabIndex={0}
                    aria-selected={selectedLocation === loc} // ✅ Fixes ARIA issue
                    onClick={() => handleLocationClick(loc)}
                    onKeyDown={(e) => e.key === 'Enter' && handleLocationClick(loc)}
                  >
                    {loc}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className={`${styles.inputBox} ${styles.extraSmall}`}>
            <label htmlFor="distance">Distance</label>
            <select id="distance" value={distance} onChange={(e) => setDistance(e.target.value)}>
              {distanceOptions.map((option, index) => (
                <option key={index} value={option}>{option}</option>
              ))}
            </select>
          </div>

        </div>

        <div className={styles.buttonContainer}>
          <button type="submit" className={styles.searchButton}>
            <span className={styles.buttonText}>Find jobs now</span>
            <Image src="/Search.svg" alt="Search Icon" width={17} height={17} />
          </button>
        </div>

      </form>
    </div>
  );
};

export default SearchBar;
