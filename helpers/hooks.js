import { useEffect } from 'react';

export function useSpinner(spinnerID, dependencies) {
  useEffect(() => {
    function hideSpinner() {
      document.getElementById(spinnerID).classList.remove('show');
    }
    const state = document.readyState;
    if (state === 'complete') {
      hideSpinner();
    } else {
      window.addEventListener('load', hideSpinner, { once: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...dependencies]);
}
export function useBSNavBar(
  menuID,
  buttonID,
  linkSelector,
  useBeforeWidth
) {
  useEffect(() => {
    const menu = document.getElementById(menuID);
    const button = document.getElementById(buttonID);

    function hideMenu(e) {
      if (
        e.target.matches(linkSelector) &&
        window.matchMedia(`(max-width: ${useBeforeWidth}px)`).matches
      ) {
        button.click();
      }
    }

    if (menu && button) {
      menu.addEventListener('click', hideMenu);
      return () => menu.removeEventListener('click', hideMenu);
    }
  }, []);
}
