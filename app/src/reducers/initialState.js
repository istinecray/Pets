export default { 
  user: JSON.parse(sessionStorage.getItem('user')) || {
    username: '',
    email: '',
    token: '',
    justRegistered: false
  },
}