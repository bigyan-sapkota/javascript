// for

for (let i = 0; i < 10; i++) {
  const element = i;
  if (element == 5) {
    // console.log("5 is the best number");
  }
  //   console.log(element);
}

for (let i = 0; i <= 10; i++) {
  console.log(`Outer Loop value: ${i}`);
  for (let j = 0; j <= 10; j++) {
    // console.log(`Inner Loop value: ${j}`);
    console.log(`${i} * ${j} = ${i * j}`);
  }
}
