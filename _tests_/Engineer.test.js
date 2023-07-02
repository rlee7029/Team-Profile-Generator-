const Engineer = require("../lib/Engineer");
const GitHubUser = "testUsername";

test("github username", () => {
  const testValue = "GitHubUser";
  const emp = new Engineer("Rob", 1, "", testValue);
  expect(emp.github).toBe(testValue);
});

test("get engineer role with getrole function", () => {
  const testValue = "Engineer";
  const emp = new Engineer("Rob", 1, "", GitHubUser);
  expect(emp.getRole()).toBe(testValue);
});

test("Cget gituhub username with github funtion", () => {
  const testValue = "GitHubUser";
  const emp = new Engineer("Rob", 1, "", testValue);
  expect(emp.getGithub()).toBe(testValue);
});