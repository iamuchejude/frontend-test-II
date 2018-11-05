const isLoggedin = () => {
  const { token, expiresIn, isAuthenticated } = localStorage;
  
  if (!token) return false;

  return ((expiresIn * 1000) - new Date().getTime()) > 1;

  if (!isAuthenticated) return false;

  return true;
}

export default isLoggedin;
