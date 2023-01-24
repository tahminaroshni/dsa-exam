function mergeSort(arr) {
  if (arr.length < 2) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const container = [];

  let li = 0;
  let ri = 0;

  while (li < left.length && ri < right.length) {
    if (left[li] < right[ri]) {
      container.push(left[li]);
      li++;
    }
    else {
      container.push(right[ri]);
      ri++;
    }
  }

  return container.concat(left.slice(li)).concat(right.slice(ri));
}

const arr = [5, 8, 4, 6, 9, 4, 6, 5, 9, 8];
console.log(mergeSort(arr));