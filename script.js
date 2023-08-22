function tabEvents(tab) {
  tab.classList.toggle('clicked');
}

const tabs = document.querySelectorAll('.tab');

tabs.forEach((el) => {
  el.addEventListener('click', () => {
    tabEvents(el);
  });
});
