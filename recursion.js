function fibs(n) {
  const arr = [];
  for (let i = 0; i < n; i++) {
    if (i === 0 || i === 1) {
      arr.push(i);
    } else {
      arr.push(arr[i - 2] + arr[i - 1]);
    }
  }
  return arr;
}

function fibsRec(n, arr = [], y = 0) {
  console.log("This was printed recursively");
  if (y >= n) {
    return arr;
  }
  if (y === 0 || y === 1) {
    arr.push(y);
    return fibsRec(n, arr, y + 1);
  } else {
    arr.push(arr[y - 2] + arr[y - 1]);
    return fibsRec(n, arr, y + 1);
  }
}

console.log(fibs(8));
console.log(fibsRec(8));

function mergeSort(n) {
  if (n.length === 1) {
    return n;
  } else {
    let mid = Math.floor(n.length / 2);

    let firstHalf = n.slice(0, mid);
    let secondHalf = n.slice(mid);

    let left = mergeSort(firstHalf);
    let right = mergeSort(secondHalf);
    return merge(left, right);
  }
}

function merge(n, m) {
  const result = [];
  let i = 0;
  let j = 0;
  while (i < n.length && j < m.length) {
    if (n[i] < m[j]) {
      result.push(n[i]);
      i++;
    } else {
      result.push(m[j]);
      j++;
    }
  }
  return result.concat(n.slice(i)).concat(m.slice(j));
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
