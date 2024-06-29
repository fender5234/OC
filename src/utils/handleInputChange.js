function HandleFormSubmit(event) {
  event.preventDefault();
  alert(JSON.stringify(userData));
}

function handleInputChange(e, name) {
  setUserData({ ...userData, [name]: e.target.value });
}
