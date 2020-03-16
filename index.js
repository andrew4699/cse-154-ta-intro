function main() {
  function onScroll() {
    console.log('scroll');
  }

  window.addEventListener('scroll', onScroll);
}

window.addEventListener('load', main);
