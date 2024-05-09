const dropdown = document.querySelector('.dropdown');
const dropdownMenu = document.querySelector('.dropdown-menu');
const result = document.getElementById('result');

dropdown.addEventListener('click', () => {
  dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
});

document.querySelectorAll('.dropdown-menu a').forEach(item => {
  item.addEventListener('click', (e) => {
    result.textContent = e.target.textContent;
    dropdownMenu.style.display = 'none';
  });
});