const filterInput = document.querySelector('#filterInput');

const list_item = document.querySelectorAll('.list_item')

filterInput.addEventListener('input', (e) => {
  
  list_item.forEach((list) => {
    if (list.innerHTML.toUpperCase().indexOf(e.target.value.toUpperCase()) > -1) {
      list.style.display = 'block';
    } else {
      list.style.display = 'none';
    }
  })
})
