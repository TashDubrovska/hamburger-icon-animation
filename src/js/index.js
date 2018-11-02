const hamburgerTrigger = document.querySelector('.hamburger-trigger');

hamburgerTrigger.addEventListener('click', () => {
  const hamburgerTriggerClassList = hamburgerTrigger.classList;

  if (hamburgerTriggerClassList.contains('open')) {
    hamburgerTriggerClassList.remove('open');
    hamburgerTriggerClassList.add('closed');
  } else {
    hamburgerTriggerClassList.remove('closed');
    hamburgerTriggerClassList.add('open');
  }
});
