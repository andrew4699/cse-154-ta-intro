function getScrollY() {
  return window.scrollY;
}

function getElemYOnScreen(elem) {
  return elem.offsetTop - getScrollY();
}
