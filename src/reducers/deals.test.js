import { deals } from "./deals";
import { FETCH_DEALS } from "../actions/types";

describe("deals reducer", () => {
  const initialState = [];

  it("should return the initial state", () => {
    expect(deals(undefined, initialState)).toEqual(initialState);
  });

  it("should handle FETCH_DEALS", () => {
    expect(deals(initialState, { type: FETCH_DEALS, payload: [] })).toEqual(
      []
    );
  });
});
