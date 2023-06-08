var totalLikedCount = 0;
var sleep = (msec) => new Promise(resolve => setTimeout(resolve, msec));
let maxTweets = 1;
async function main() {
  let likedTweets = [];

  while (totalLikedCount < maxTweets) {
    var allLikes = document.querySelectorAll('[data-testid="like"]');
    for (let i = 0; i < allLikes.length && totalLikedCount < maxTweets; i++) {
      await sleep(1000);
      allLikes[i].click();

      const user = allLikes[i].parentElement.parentNode.parentNode.parentNode.firstChild.firstChild.firstChild.firstChild.firstChild;
      let tweetId = user.lastElementChild?.firstElementChild?.lastElementChild?.firstElementChild?.getAttribute('href');
      tweetId = 'https://twitter.com' + tweetId;

      console.log(`liked tweet: ${tweetId}`)

      likedTweets.push(tweetId);
      totalLikedCount++;
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
