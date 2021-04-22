import jsdom from "jsdom";

const { JSDOM } = jsdom;

describe("MODULE RETRIEVE PROJECTS TEST", () => {
  beforeEach(() =>
    JSDOM.fromFile("./dist/index.html").then((dom) => {
      document.body.innerHTML = dom.window.document.body.outerHTML;
    })
  );

  it("Expects the project's projects container to not be null", () => {
    const container = document.querySelector("content");
    expect(container).toBeDefined();
  });

  it("Expects the project's section to not be null", () => {
    const section = document.querySelector(".projectContainer");
    expect(section).toBeDefined();
  });

  it("Expects the project's modal to not be null", () => {
    const modal = document.querySelector(".projectModal");
    expect(modal).toBeDefined();
  });

  it("Expects the project's modal to not be null", () => {
    const modal = document.querySelector(".projectContent");
    expect(modal).toBeDefined();
  });

  it("Expects the project's modal to not be null", () => {
    const modal = document.querySelector(".projectName");
    expect(modal).toBeDefined();
  });

  it("Expects the project's task container to not be null", () => {
    const container = document.getElementsByClassName("closeProject");
    expect(container).toBeDefined();
  });
});