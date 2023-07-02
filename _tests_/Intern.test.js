const Intern = require("../lib/Intern");

test("Can get school info via constructor", () => {
    const testValue = "MIT of Argentina";
    const emp = new Intern("Rob", 1, "", testValue);
    expect(emp.school).toBe(testValue);
});

test("Can get Intern Role with getRole function", ()=> {
    const testValue = "Intern";
    const emp = new Intern("Rob", 1, "", "");
    expect(emp.getRole()).toBe(testValue);
});

test("getSchool function can get School info", () =>{
    const testValue = "MIT of Argentina";
    const emp = new Intern("Rob", 1, "", testValue);
    expect(emp.getSchool()).toBe(testValue);
});