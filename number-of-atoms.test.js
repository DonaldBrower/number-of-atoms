var { numberOfAtoms, tokenizeAtoms } = require("./number-of-atoms");

test("parses string correctly when there are nested sibiling groups", () => {
  // sorted tuple format, for easy frontend consunption
  expect(numberOfAtoms("MgA4(OgHKLMg(HOg3)2(KP9))")).toStrictEqual([
    ["A", 4],
    ["H", 7],
    ["K", 10],
    ["L", 1],
    ["Mg", 5],
    ["Og", 7],
    ["P", 9],
  ]);
});

test("the tokenize atoms function should behave as expected", () => {
  expect(tokenizeAtoms("Mg1")).toStrictEqual([["Mg", 1]]);

  // todo: figure out if there is a problem with having tokenize atoms not be able to handle parens in the input
  expect(tokenizeAtoms("(Mg2)")).toStrictEqual([["Mg", 2]]);
});

test("the frontend is linked up with the algorithm", () => {
  expect();
});
