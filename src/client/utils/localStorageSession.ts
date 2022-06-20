export const getAuth = () => {
  const auth = localStorage.getItem('auth');
  return JSON.parse(auth);
};

export const setAuth = (auth) => {
  localStorage.setItem('auth', JSON.stringify(auth));
};

export const removeAuth = () => {
  localStorage.removeItem('auth');
};
