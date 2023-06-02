const demoId = document.getElementById('demo');

demoId.style.border = '1px solid purple';

const demoClass = document.getElementsByClassName('demo');
for (i = 0; i < demoClass.length; i++) {
  demoClass[i].style.border = '1px solid orange';
}

const demoTag = document.getElementsByTagName('article');
for (i = 0; i < demoTag.length; i++) {
  demoTag[i].style.border = '1px solid blue';
}

const demoQuery = document.querySelector('#demo-query');
demoQuery.style.border = '1px solid red';

const demoQueryAll = document.querySelectorAll('.demo-query-all');
demoQueryAll.forEach(query => {
  query.style.border = '1px solid green';
});