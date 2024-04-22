export const Logout = () => {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
};
