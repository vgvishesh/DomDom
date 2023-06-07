var totalCount = 0;
var sleep = (msec) => new Promise(resolve => setTimeout(resolve, msec));

async function main() {
  let likedTweets = [];

  while (totalCount < 50) {
    var allLikes = document.querySelectorAll('[data-testid="like"]');
    let tweets = document.querySelectorAll('[data-testid="User-Name"]');
    for (let i = 0; i < allLikes.length; i++) {
      await sleep(100);
      allLikes[i].click();
      let tweetId = tweets[i].lastElementChild?.firstElementChild?.lastElementChild?.firstElementChild?.getAttribute('href');
      console.log(`liked tweet: ${tweetId}`)
      likedTweets.push(tweetId);
      totalCount++;
    }
    await sleep(1000);
    window.scrollTo(0, document.body.scrollHeight);
  }

  likedTweets.forEach(t => {
    console.log(t);
  })
  console.log('Script Completed!!');
}
main();
