export const get = (key) => {
  let data;
  if (typeof window !== "undefined") {
    data = window.localStorage.getItem(key);
    data = data && JSON.parse(data);
  }

  return data;
};

export const set = (key, data) => {
  if (typeof window !== "undefined") {
    window.localStorage.setItem(key, JSON.stringify(data));
  }
};

export const del = (key) => {
  if (typeof window !== "undefined") {
    window.localStorage.removeItem(key);
  }
};
