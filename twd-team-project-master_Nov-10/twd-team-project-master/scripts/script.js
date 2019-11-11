
  //Open Hamburger Nav
  function openNav() {
    document.getElementById('nav').style.width = '100%';
  }
  
  //Close Hamburger Nav
  function closeNav() {
    document.getElementById('nav').style.width = '0%';
  }
  
  //Event Listeners
  document.getElementsByClassName('hamburger')[0].addEventListener('click', openNav);
  document.getElementsByClassName('closeBtn')[0].addEventListener('click', closeNav);