/**
 * Stylelint is unable to determine if auto fixes introduce new linting rule violations.
 * When Stylelint changes multiple selectors on one line to a line for each selector the indentation
 * of the new lines that it introduced isn't correct. Therefore we run stylelint again with a
 * simpler configuration to fix new violations.
 */
module.exports = {
  rules: {
    indentation: [
      2,
      {
        baseIndentLevel: 1
      }
    ]
  }
};
