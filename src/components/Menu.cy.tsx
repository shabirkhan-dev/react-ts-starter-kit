/// <reference types="cypress" />
import { mount } from "@cypress/react18";

import Menu from "./Menu";

describe("<Menu />", () => {
  it("renders", () => {
    mount(<Menu />);
  });
});
