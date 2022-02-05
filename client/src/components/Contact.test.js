import React from "react";
import { shallow } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Contact from "./Contact";

//CODE OUTLINE\\
/* ELEMENTS
--Link to Github (with icon)
--Link to LinkedIn (with icon)
--FORM with 3 inputs: name, email, message
--BUTTON called submit

FUNCTIONS
--sendEmail: triggered onSubmit of form
     --> sends the form element using emailjs
     -->sets EmailSent to "Message Sent!"

STATES
emailSent--> updated onSubmit
     --> when updated, success message (from state) displayed in <p> element
*/

//PROPOSED TESTS\\
/* 
--SIMPLE--
1. .toMatchSnapshot: to check that the component UI renders correctly
2. Check that links are present and open the appropriate page
3. Check that button is present, has appropriate labeling
4. Check that form has 3 inputs with the appropriate labels

--MORE COMPLEX(FUNCTIONALITY)--
1. Check that onSubmit triggers the sendEmail function
2. Check that once sendEmail has been triggered, if succesful, emailSent state changed

--EDGE CASES (not yet implemented in code)---
1. Currently, a message can be sent without filling in any of the inputs, so:
--> write test to check if e-mail is sent with empty input fields
--> expect error message
--> write code for passing test (users should not be able to send msg without filling in all fields)

*/

configure({ adapter: new Adapter() });

describe("Testing the Contact Component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Contact />);
  });
  it("should match the snapshot", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
