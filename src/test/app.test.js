import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CriticScore from "../components/CriticScore";

describe("TEST APP", () => {
  test("Score bagde test", () => {
    render(<CriticScore score={30} />);
    const scoreElem = screen.getByTestId("score-elem");
    const scoreStyles = window.getComputedStyle(scoreElem);

    expect(scoreStyles.backgroundColor).toBe("red");
    expect(scoreElem).toBeInTheDocument();
  });
});
