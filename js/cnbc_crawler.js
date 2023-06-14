const sResults = document.getElementById('searchcontainer').children;
console.log(`total results: ${sResults.length}`);

for (let i = 0; i < sResults.length; i++) {
  const p = sResults[i];
  console.log(i);
  console.log(`link: ${p.querySelectorAll('a')[0].href}`);
  // for (let j = 0; j < anchors.length; j++) {
  //   console.log(anchors[j].href);
  // }
}