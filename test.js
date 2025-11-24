let lapsCompleted = 0;

// Create a function that increments the lapsCompleted variable with one
// Run it three times

function lapsCompletedCounter() {
  return (lapsCompleted = lapsCompleted + 1);
}

lapsCompletedCounter();
lapsCompletedCounter();
lapsCompletedCounter();

console.log(lapsCompleted);
