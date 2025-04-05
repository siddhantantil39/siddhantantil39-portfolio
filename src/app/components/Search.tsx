'use client'

import { useState, useEffect, useCallback, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Search as SearchIcon } from "@geist-ui/icons";

interface SearchProps {
  className?: string;
}

export default function Search({ className }: SearchProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<string[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const router = useRouter();
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const toggleSearch = useCallback(() => {
    setIsOpen(prev => !prev);
    if (!isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        toggleSearch();
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [toggleSearch]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }

    const search = async () => {
      setIsSearching(true);
      try {
        const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
        const data = await response.json();
        setResults(data.results || []);
      } catch (error) {
        console.error('Search failed:', error);
      } finally {
        setIsSearching(false);
      }
    };

    const debounce = setTimeout(() => {
      search();
    }, 300);

    return () => clearTimeout(debounce);
  }, [query]);

  const handleResultClick = (route: string): void => {
    router.push(route);
    setQuery('');
    setResults([]);
    setIsOpen(false);
  };

  return (
    <div className="flex items-center justify-end md:justify-start md:border md:border-gray-600 rounded-lg px-3 py-2 text-gray-400 md:hover:border-white transition-colors md:w-100">
      <button 
        onClick={toggleSearch}
        className="flex items-center gap-2 text-gray-400 hover:text-gray-300"
      >
        <SearchIcon className="w-5 h-5" />
        <span className="hidden md:inline w-70">Search</span>
        <span className="ml-auto text-sm hidden lg:inline">Ctrl + K</span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-50" onClick={() => setIsOpen(false)}>
          <div 
            className="fixed inset-x-0 top-20 max-w-2xl mx-auto p-4" 
            ref={searchRef}
            onClick={e => e.stopPropagation()}
          >
            <div className="bg-gray-600 rounded-lg border border-gray-300 text-white">
              <div className="p-4">
                <div className="relative">
                  <input
                    ref={inputRef}
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search"
                    className="w-full bg-transparent text-white border-b border-gray-900 p-2 "
                  />
                  {isSearching && (
                    <span className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-gray-500">
                      Searching...
                    </span>
                  )}
                </div>

                {results.length > 0 && (
                  <div className="mt-4 max-h-96 overflow-y-auto">
                    <ul className="space-y-2">
                      {results.map((route, index) => (
                        <li 
                          key={index}
                          onClick={() => handleResultClick(route)}
                          className="p-2 hover:bg-gray-800 rounded cursor-pointer text-white-300 hover:text-white"
                        >
                          {`${query} results: ${route}`}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}