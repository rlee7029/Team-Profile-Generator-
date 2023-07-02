const Employee = require("../lib/Employee");

test("whats the role", () => {
    const emp = new Employee();
    expect(typeof(emp)).toBe('object');
});

test("Name of the new emp", () => {
    const name = "Robert";
    const emp = new Employee(name);
    expect (emp.name).toBe(name);
});

test("ID of the new emp", () => {
    const testValue = 100; 
    const emp = new Employee("Rob", testValue);
    expect(emp.getId()).toBe(testValue);
});

test("email of the new emp", () => {
    const testValue = "test@test.com"
    const emp = new Employee("Rob", 1, testValue);
    expect(emp.getEmail()).toBe(testValue);
});

test("new emp role with getrole function", () => {
    const testValue = "Employee";
    const emp = new Employee("Robert", 1, "");
    expect(emp.getRole()).toBe(testValue);
});