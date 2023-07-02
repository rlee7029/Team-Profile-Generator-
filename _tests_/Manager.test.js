const Manager = require ("../lib/Manager");
const Employee = require ("../lib/Employee");

test("Can get Office Number with constructors", () =>{
    const testValue = "100";
    const emp = new Manager("Rob", 1, "", testValue);
    expect(emp.officeNumber).toBe(testValue);
});

test("Can get Manager Role with getManager function", () =>{
    const testValue = "Manager";
    const emp = new Manager("Rob", 1, "", 100);
    expect(emp.getRole()).toBe(testValue);
});

test("Can get Office Number with getOffice function", () =>{
    const testValue = 100;
    const emp = new Manager("Rob", 1, "", testValue);
});