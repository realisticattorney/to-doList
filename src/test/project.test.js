const project = require('../project');

describe("create project", () => {
  it("Create a new project", () => {
    const create = project.createProject("Firt project");
    expect(create).toEqual({
      name: "Firt project"
    });
  });

  it("If no input throws undefined", () => {
    const create = project.createProject();
    expect(create).toEqual({
      name: undefined,
    });
  });
});