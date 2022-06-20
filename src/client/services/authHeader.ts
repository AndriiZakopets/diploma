export default function authHeader() {
  const auth = JSON.parse(localStorage.getItem('auth'));
  const token = auth.token;
  if (token) {
    return { 'x-access-token': token };
  } else {
    return {};
  }
}
