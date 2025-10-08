document.getElementById('btn-ios').addEventListener('click', function(){
  localStorage.setItem('platform','ios');
  location.href = 'categories.html';
});
document.getElementById('btn-android').addEventListener('click', function(){
  localStorage.setItem('platform','android');
  location.href = 'categories.html';
});
