const axios = require("axios");

const numbers = Array.from({ length: 100 }, (_, i) => i + 1); // Generate an array of 100 numbers

const testJustForLoop = async () => {
  /**
   * console.time is used to measure the time taken by the code to execute,
   * should have same label for start and end
   */
  console.time("Time Taken : For Loop API call");

  for (const number of numbers) {
    await axios.get(`https://jsonplaceholder.typicode.com/posts/${number}`);
  }

  console.timeEnd("Time Taken : For Loop API call");
};

const testPromiseAll = async () => {
  console.time("Time Taken : Promise All API call");

  const promises = numbers.map((number) =>
    axios.get(`https://jsonplaceholder.typicode.com/posts/${number}`)
  );

  await Promise.all(promises);

  console.timeEnd("Time Taken : Promise All API call");
};

const runTests = async () => {
  console.log("Testing with just for loop:");
  await testJustForLoop();

  console.log("\nTesting with Promise.all:");
  await testPromiseAll();
};

runTests();
