//export default authSelectors;
const isAuthenticated = (state) => state.auth.isAuthenticated;
const userName = (state) => state.auth.user.name;
const userMail = (state) => state.auth.user.email;

// eslint-disable-next-line
export default {
  isAuthenticated,
  userName,
  userMail,
};
