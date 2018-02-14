import {
  SHOW_CHEAPEST_RESULTS,
  SHOW_FASTEST_RESULTS,
  HIDE_RESULTS,
  FETCH_DEALS
} from "./types";
import {
  showCheapestResults,
  showFastestResults,
  hideResults,
  fetchDealsData
} from "./index";

describe("Actions", () => {
  it("should create an action to SHOW_CHEAPEST_RESULTS", () => {
    const expectedAction = {
      type: SHOW_CHEAPEST_RESULTS,
      payload: []
    };

    expect(showCheapestResults([], "start", "end")).toEqual(expectedAction);
  });

  it("should create an action to SHOW_FASTEST_RESULTS", () => {
    const expectedAction = {
      type: SHOW_FASTEST_RESULTS,
      payload: []
    };

    expect(showFastestResults([], "start", "end")).toEqual(expectedAction);
  });

  it("should create an action to HIDE_RESULTS", () => {
    const expectedAction = {
      type: HIDE_RESULTS
    };

    expect(hideResults()).toEqual(expectedAction);
  });

  it("should create an action to FETCH_DEALS", () => {
    const expectedAction = {
      type: FETCH_DEALS,
      payload: []
    };

    expect(fetchDealsData([])).toEqual(expectedAction);
  });
});
