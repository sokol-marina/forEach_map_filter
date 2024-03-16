function findUserByUsername(arr, username) {
  return arr.find(function (obj) {
    return obj.username == username;
  });
}
function removeUser(arr, username) {
  let foundIndex = arr.findIndex(function (el) {
    return el.username === username;
  });
  if (foundIndex === -1) return;

  return usersArray.splice(foundIndex, 1)[0];
}
