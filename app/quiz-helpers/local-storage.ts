// utils/localStorage.ts
export const getLocalStorage = (key: string): string | null => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(key);
    }
    return null;
  };
  
  export const setLocalStorage = (key: string, value: string): void => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, value);
    }
  };
  
  export const removeLocalStorage = (key: string): void => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(key);
    }
  };
  