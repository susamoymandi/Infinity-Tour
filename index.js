(function () {
  var input = document.getElementById('packageSearch');
  var cards = Array.prototype.slice.call(document.querySelectorAll('#packagesGrid .card'));
  var noResults = document.getElementById('noResults');
  var noResultsTerm = document.getElementById('noResultsTerm');
  var count = document.getElementById('searchCount');

  function filter() {
    var term = input.value.trim().toLowerCase();
    var visible = 0;

    cards.forEach(function (card) {
      var name = (card.getAttribute('data-name') || card.querySelector('h4').textContent).toLowerCase();
      var match = name.indexOf(term) !== -1;
      card.style.display = match ? '' : 'none';
      if (match) visible++;
    });

    if (term === '') {
      count.textContent = '';
    } else {
      count.textContent = visible + (visible === 1 ? ' match' : ' matches');
    }

    if (term !== '' && visible === 0) {
      noResultsTerm.textContent = input.value.trim();
      noResults.hidden = false;
    } else {
      noResults.hidden = true;
    }
  }

  input.addEventListener('input', filter);
})();