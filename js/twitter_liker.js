var totalLikedCount = 0;
var sleep = (msec) => new Promise(resolve => setTimeout(resolve, msec));
let maxTweets = 50;
let scrollCount = 0;
const regex = /.*\/status\/\d+$/;

function randomTime() {
  const min = 1000;
  const max = 4000;
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
}

async function main() {
  let likedTweets = [];

  while (totalLikedCount < maxTweets) {
    let tweets = document.querySelectorAll('[data-testid="cellInnerDiv"]');
    console.log(`found ${tweets.length} tweets in view ${scrollCount}, total likes count ${totalLikedCount}`);
    for (let i = 0; i < tweets.length && totalLikedCount < maxTweets; i++) {
      const sleepTimer = randomTime();
      await sleep(sleepTimer);

      let likeElement = tweets[i].querySelector('[data-testid="like"]')
      if (likeElement) {
        likeElement.click();
        let linksElem = tweets[i].getElementsByTagName('a');
        for (let j = 0; j < linksElem.length; j++) {
          const link = linksElem[j].getAttribute('href');
          if (link.match(regex)) {
            const tweetId = 'https://twitter.com' + link;
            likedTweets.push(tweetId);
            console.log(`liked tweet: ${tweetId}`);
            break;
          }
        }
        totalLikedCount++;
      }
    }

    window.scrollTo(0, document.body.scrollHeight);
    await sleep(10000);
    scrollCount++;
  }

  likedTweets.forEach(t => {
    console.log(t);
  })
  console.log('Script Completed!!');
}
main();
