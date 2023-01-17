export default function searchBarHandler() {
  const searchBar = document.getElementById('dropbox_search_bar');

  searchBar.addEventListener('keyup', (e) => {
    const searchValue = e.target.value;
    const dropboxItems = document.querySelectorAll('.dropbox_item');
    dropboxItems.forEach((item) => {
      if (item.innerText.toLowerCase().includes(searchValue.toLowerCase())) {
        item.classList.remove('hidden');
      } else {
        item.classList.add('hidden');
      }
    });

    dropboxItems.forEach((item) => {
      item.addEventListener('click', () => {
        searchBar.textContent = item.innerText;
      });
    });
  });

  //Handle focus on search bar
  searchBar.addEventListener('focus', () => {
    const dropboxList = document.querySelector('.dropbox_list');
    dropboxList.classList.remove('hidden');
  });

  //Handle blur on search bar
  searchBar.addEventListener('blur', () => {
    const dropboxList = document.querySelector('.dropbox_list');
    dropboxList.classList.add('hidden');
  });
}
