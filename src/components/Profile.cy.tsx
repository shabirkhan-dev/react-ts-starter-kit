import { mount } from "@cypress/react18";

import Profile from "./Profile";

describe("<Profile />", () => {
  it("renders", () => {
    mount(
      <Profile
        name="John Doe"
        username="johndoe"
        image="https://via.placeholder.com/150"
      />
    );
  });
});
