function e(e,t){return new Promise(((o,n)=>{setTimeout((()=>{Math.random()>.3?o({position:e,delay:t}):n({position:e,delay:t})}),t)}))}document.querySelector(".form").addEventListener("submit",(t=>{t.preventDefault();const o=Number(t.target.elements.delay.value),n=Number(t.target.elements.step.value),l=Number(t.target.elements.amount.value);for(let t=1;t<=l;t++)e(t,o+t*n).then((e=>{console.log(`✅ Fulfilled promise ${e.position} in ${e.delay}ms`)})).catch((e=>console.log(`❌ Rejected promise ${e.position} in ${e.delay}ms`)))}));
//# sourceMappingURL=03-promises.00d23fe5.js.map