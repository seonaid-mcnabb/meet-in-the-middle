import React from "react";
import { shallow } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import About from "./About";
//test commit
configure({ adapter: new Adapter() });

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };

describe("Testing the About Me Component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<About />); //before each tests, gets the About component to evaluate it
  });
  it("have paragraph elements", () => {
    wrapper.find("p");
  });
});
