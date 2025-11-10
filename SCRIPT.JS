function searchSpecies() {
  const input = document.getElementById('search').value.toLowerCase();
  const list = document.getElementById('species-list');
  const items = list.getElementsByTagName('li');

  for (let i = 0; i < items.length; i++) {
    let text = items[i].innerText.toLowerCase();
    items[i].style.display = text.includes(input) ? "" : "none";
  }
}
