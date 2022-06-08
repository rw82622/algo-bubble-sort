var swaps = 0;

function bubbleSort(arr) {
  let swaps = 0;
  let ops = 0;
  for (let i = 0; i < arr.length; i++) {
    let swapped = false;
    for (let j = 1; j < arr.length - i; j++) {
      ops += 1;
      if (arr[j] < arr[j - 1]) {
        [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
        swaps += 1;
        swapped = true;
      }
    }
    if (!swapped) {
      break;
    }
  }
  console.log(`Final result: ${arr}`);
  console.log(`Swaps: ${swaps} Operations: ${ops}`);
}

var sequence = [4, 3, 5, 0, 1];
bubbleSort(sequence);
