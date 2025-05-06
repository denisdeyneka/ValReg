document.addEventListener('DOMContentLoaded', () => {
  const registryBody = document.getElementById('registryBody');
  const addRowBtn = document.getElementById('addRowBtn');

  addRowBtn.addEventListener('click', () => {
    const row = document.createElement('div');
    row.classList.add('registry__row');
    row.setAttribute('role', 'row');

    const columnsCount = 18; // всего 18 полей
    for (let i = 0; i < columnsCount; i++) {
      const cell = document.createElement('div');
      cell.setAttribute('role', 'cell');

      const input = document.createElement('input');
      input.type = 'text';
      input.placeholder = '-';

      cell.appendChild(input);
      row.appendChild(cell);
    }

    registryBody.appendChild(row);
  });
});
