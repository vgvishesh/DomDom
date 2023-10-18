var sleep = (msec) => new Promise(resolve => setTimeout(resolve, msec));

function randomTime() {
  const min = 1000;
  const max = 7000;
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
}

var pageCount = 0;
while (1) {
  var i = 0;
  await sleep(randomTime() + 5000);
  const profiles = document.getElementsByClassName('entity-result__item');
  if (!profiles) {
    continue;
  }
  console.log(profiles.length);
  console.log(pageCount++);
  while (i < profiles.length) {
    const item = profiles[i];
    const button = item.lastElementChild.firstElementChild.firstElementChild;
    if (button) {
      if (button.textContent.includes('Connect') || button.textContent.includes('Follow')) {
        button.click();
        const sleepTimer = randomTime();
        await sleep(sleepTimer);
        const sendButton = document.querySelector('button[aria-label="Send now"]');
        if (sendButton) {
          sendButton.click();
        }
      }
    }
    i++;
  }
  const next = document.querySelector('button[aria-label="Next"]');
  if (next) {
    next.click();
  } else {
    console.log('broken');
    break;
  }
}
