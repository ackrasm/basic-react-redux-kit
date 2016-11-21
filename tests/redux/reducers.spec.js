import {expect} from "chai";

import {createStore} from "redux";
import reducers from "../../src/redux/reducers";

describe("(Redux)", () => {
  it("should contain the proper reducers", () => {
    let store = createStore(reducers);

    expect(store.getState().routing).to.exist;
  });
});