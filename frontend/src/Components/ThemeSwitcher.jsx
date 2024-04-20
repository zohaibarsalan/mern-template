import React, { useEffect, useState } from 'react';

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') ? localStorage.getItem('theme') : 'system'
  );
  const element = document.documentElement;
  const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

  function onWindowMatch() {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && darkQuery.matches)
    ) {
      element.classList.add('dark');
    } else {
      element.classList.remove('dark');
    }
  }
  onWindowMatch();

  useEffect(() => {
    switch (theme) {
      case 'dark':
        element.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        break;
      case 'light':
        element.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        break;
      default:
        localStorage.removeItem('theme');
        onWindowMatch();
        break;
    }
  }, [theme]);

  darkQuery.addEventListener('change', (e) => {
    if (!('theme' in localStorage)) {
      if (e.matches) {
        element.classList.add('dark');
      } else {
        element.classList.remove('dark');
      }
    }
  });

  return (
    <div className="mr-2 mb-2 p-2 dark:text-white fixed top-5 right-28 duration-200">
      <div className="flex flex-row gap-8 mt-4">
        <div className="h-8 w-20 bg-sky-300 text-center align-middle rounded-full dark:bg-sky-800">
          <button
            className="text-center align-middle"
            onClick={() => setTheme('system')}
          >
            System
          </button>
        </div>
        <div className="h-8 w-20 bg-sky-300 text-center align-middle rounded-full dark:bg-sky-800">
          <button
            className="text-center align-middle"
            onClick={() => setTheme('light')}
          >
            Light
          </button>
        </div>
        <div className="h-8 w-20 bg-sky-300 text-center align-middle rounded-full dark:bg-sky-800">
          <button
            className="text-center align-middle"
            onClick={() => setTheme('dark')}
          >
            Dark
          </button>
        </div>
      </div>
    </div>
  );
};
export default ThemeSwitcher;
