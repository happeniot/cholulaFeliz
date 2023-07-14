let toggleBtn = document.querySelector('.toggle_btn')
let toggleBtnIcon = document.querySelector('.toggle_btn i')
let dropDownMenu = document.querySelector('.dropdown_menu')
let dropdownLinks = document.querySelectorAll('.dropdown_menu a');

dropdownLinks.forEach(function(link) {
  link.addEventListener('click', function() {
    dropDownMenu.classList.remove('open');
    toggleBtnIcon.classList = 'fa-solid fa-bars';
  });
});

toggleBtn.onclick = function() {
  dropDownMenu.classList.toggle('open')
  const isOpen = dropDownMenu.classList.contains('open')

  toggleBtnIcon.classList = isOpen
  ? 'fa-solid fa-xmark'
  : 'fa-solid fa-bars'
}