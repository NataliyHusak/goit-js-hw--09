const submitForm = document.querySelector('.form');

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

submitForm.addEventListener('submit', event => {
  event.preventDefault();
  const delay = Number(event.target.elements.delay.value);
  const step = Number(event.target.elements.step.value);
  const amount = Number(event.target.elements.amount.value);

  for (let i = 1; i <= amount; i++) {
    createPromise(i, delay + i * step)
      .then(res => {
        console.log(`✅ Fulfilled promise ${res.position} in ${res.delay}ms`);
      })
      .catch(err =>
        console.log(`❌ Rejected promise ${err.position} in ${err.delay}ms`)
      );
  }
});
