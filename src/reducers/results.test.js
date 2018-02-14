import { results } from "./results";
import {
  SHOW_FASTEST_RESULTS,
  SHOW_CHEAPEST_RESULTS,
  HIDE_RESULTS
} from "../actions/types";

describe("results reducer", () => {
  const initialState = {
    visible: false,
    cities: []
  };

  it("should return the initial state", () => {
    expect(results(undefined, { visible: false, cities: [] })).toEqual(
      initialState
    );
  });

  it("should handle SHOW_FASTEST_RESULTS", () => {
    expect(
      results(initialState, { type: SHOW_FASTEST_RESULTS, payload: [] })
    ).toEqual({
      visible: true,
      cities: []
    });
  });

  it("should handle SHOW_CHEAPEST_RESULTS", () => {
    expect(
      results(initialState, { type: SHOW_CHEAPEST_RESULTS, payload: [] })
    ).toEqual({
      visible: true,
      cities: []
    });
  });

  it("should handle HIDE_RESULTS", () => {
    expect(results(initialState, { type: HIDE_RESULTS })).toEqual({
      visible: false
    });
  });
});
