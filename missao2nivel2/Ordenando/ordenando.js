
const swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

const shuffle = (arr, numSwaps) => {
  for (let i = 0; i < numSwaps; i++) {
    let pos1 = Math.floor(Math.random() * arr.length);
    let pos2 = Math.floor(Math.random() * arr.length);
    swap(arr, pos1, pos2);
  }
};

const bubble_sort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
};

const selection_sort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let minIdx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    swap(arr, i, minIdx);
  }
};

const quick_sort = (arr, start, end) => {
  if (start < end) {
    let pivotIdx = particionamento(arr, start, end);
    quick_sort(arr, start, pivotIdx - 1);
    quick_sort(arr, pivotIdx + 1, end);
  }
};

const particionamento = (arr, start, end) => {
  let pivot = arr[end];
  let pivotIdx = start;
  for (let i = start; i < end; i++) {
    if (arr[i] < pivot) {
      swap(arr, i, pivotIdx);
      pivotIdx++;
    }
  }
  swap(arr, pivotIdx, end);
  return pivotIdx;
};

function add() {
  let inputField = document.getElementById('valor');
  let list = document.getElementById('valores');

  let node = document.createElement('li');
  let textNode = document.createTextNode(inputField.value);
  node.appendChild(textNode);

  list.appendChild(node);

  inputField.value = '';
}

function ordenar() {
  let list = document.getElementById('valores');
  let selection = document.getElementById('algoritmo');

  let values = Array.from(list.children).map(item => parseInt(item.innerHTML));

  switch (selection.value) {
    case 'bubble':
      bubble_sort(values);
      break;
    case 'selection':
      selection_sort(values);
      break;
    case 'quick':
      quick_sort(values, 0, values.length - 1);
      break;
  }

  list.innerHTML = values.map(value => `<li>${value}</li>`).reduce((acc, item) => acc + item, '');
}

function misturar() {
  let list = document.getElementById('valores');

  let values = Array.from(list.children).map(item => parseInt(item.innerHTML));

  shuffle(values, values.length);

  list.innerHTML = values.map(value => `<li>${value}</li>`).reduce((acc, item) => acc + item, '');
}
