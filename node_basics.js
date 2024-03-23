const add1 = () => {
    const args = process.argv.slice(2);
    let sum = 0;
    for (let gettingNumber of args) {
        let num = Number(gettingNumber);
        sum += num; 
    }
    console.log(sum);
};
add1();

const add2 = () => {
  const args = process.argv.slice(2);
  const sum = args.map(Number).reduce((prev,curr) => prev + curr);
  console.log(sum);
};
add2();


