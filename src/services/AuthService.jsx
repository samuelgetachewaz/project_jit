
const getCurrentUser = () => {
  // change the role to display different links
    return { username: 'JohnDoe', role: 'student' };
  };
  



const getUserRole = () => {
  const user = getCurrentUser();
  return user ? user.role : null;
};

const hasRole = (requiredRole) => {
  const userRole = getUserRole();
  return userRole === requiredRole;
};

export default {

  getCurrentUser,
  getUserRole,
  hasRole
};
