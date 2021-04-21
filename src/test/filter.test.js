const filter = require('../filter');

describe("create project", () => {
  it("Create a new project", () => {
    const idNumber = Date.now().toString();
    const create = createList("Firt project");
    expect(create).toEqual({
      name: "Firt project"
    });
  });

  it("If no input throws undefined", () => {
    const idNumber = Date.now().toString();
    const create = createList();
    expect(create).toEqual({
      name: undefined,
    });
  });
});