/**
 *  @description: This utility function joins multiple class names into a single string, removing any falsey values.
 *  @param {string | false | null | undefined} classes - The class names to join.
 *  @returns {string} - A single string containing all the class names, separated by spaces.
 */

const joinClassNames = (...classes: (string | false | null | undefined)[]) => {
  return classes.filter(Boolean).join(" ");
};

export default joinClassNames;
