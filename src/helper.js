"use strict";

const createElement = (tag, classNames, textContent) => {
  const element = document.createElement(tag);
  if (classNames) {
    classNames.split(" ").forEach((className) => {
      element.classList.add(className);
    });
  }
  if (textContent) {
    element.textContent = textContent;
  }
  return element;
};

export {createElement}