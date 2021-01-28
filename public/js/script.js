// Initialize navbar
document.addEventListener('DOMContentLoaded', () => {
  const elems = document.querySelectorAll('.sidenav');
  let options = [];
  const instances = M.Sidenav.init(elems, options);
});

// modal trigger
document.addEventListener('DOMContentLoaded', () => {
  var elems = document.querySelectorAll('.modal');
  let options = [];
  var instances = M.Modal.init(elems, options);
});

// confirm password on register after entering confirm password
const passwordEl = document.getElementById('password');
const confirmPasswordEl = document.getElementById('confirm_password');
confirmPasswordEl.addEventListener('keyup', () => {
  console.log('lah');
  if (confirmPasswordEl.value !== passwordEl.value) {
    confirmPasswordEl.setCustomValidity('Passwords Do Not Match')
  } else {
    confirmPasswordEl.setCustomValidity('');
  }
});
