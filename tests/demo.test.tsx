import { act, render, renderHook } from "@testing-library/react";
import { describe, test } from "vitest";
import { Footer } from "../src/components/Footer";
import useCounter from "./testingHook";
describe("demo", () => {
  test("should be testable", ({ expect }) => {
    expect(1 + 1).toBe(2);
  });
  test("should be able to test component", ({ expect }) => {
    const { getByText } = render(<Footer />);
    expect(getByText("vite + typescript + react + ssr"));
  });
  test("should be able to test hook", ({ expect }) => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(1);
  });
});
