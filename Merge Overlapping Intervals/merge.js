function mergeOverlappingIntervals(array) {
  // Write your code here.
  const sortedIntervals = array.sort((a, b) => a[0] - b[0]);
  const output = [];
  let currentInterval = sortedIntervals[0];
  output.push(currentInterval);

  for (const nextInterval of sortedIntervals) {
    const [_, currentIntervalEnd] = currentInterval;
    const [nextIntervalStart, nextIntervalEnd] = nextInterval;

    if (currentIntervalEnd >= nextIntervalStart) {
      currentInterval[1] = Math.max(currentIntervalEnd, nextIntervalEnd);
    } else {
      currentInterval = nextInterval;
      output.push(currentInterval);
    }
  }
  return output;
}
