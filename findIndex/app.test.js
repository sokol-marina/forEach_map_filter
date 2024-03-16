describe("#findUserByUsername", function () {
  let users;
  beforeEach(function () {
    users = [
      { username: "mlewis" },
      { username: "akagen" },
      { username: "msmith" },
    ];
  });
  it("returns the first object with the key of username", function () {
    expect(findUserByUsername(users, "mlewis")).toEqual({ username: "mlewis" });
  });
  it("returns undefined if a username is not found", function () {
    expect(findUserByUsername(users, "taco")).toEqual(undefined);
  });
});

describe("#removeUser", function () {
  const users = [
    { username: "mlewis" },
    { username: "akagen" },
    { username: "msmith" },
  ];

  it("remove the object from the array and return this object", function () {
    expect(removeUser(users, "akagen")).teEqual({ username: "akagen" });
  });
  it("returns undefined a user from an array", function () {
    expect(removeUser(users, "taco")).toEqual(undefined);
    expect(users.length).toEqual(3);
  });
});
