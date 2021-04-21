const task = require('../task');

describe("create task", () => {
  it("Create a new task", () => {
    const create = task.createTask(
      "Firt task",
      "first task description",
      "2021-04-22",
      "Urgent",
      'Lol'
    );
    expect(create).toEqual({
      date: "2021-04-22",
      desc: "first task description",
      name: "Firt task",
      priority: "Urgent",
      project: "Lol"
    });
  });

  it("If no input throws undefined", () => {
    const create = task.createTask()
    expect(create).toEqual({
      date: undefined,
      desc: undefined,
      name: undefined,
      priority: undefined,
      project: undefined
    });
  });
});