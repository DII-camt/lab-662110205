async function taskOne() {
  return new Promise((resolve) => {
    setTimeout(function () {
      console.log("this is task 1");
      resolve(true);
    }, 500);
  });
}

async function taskTwo() {
  return new Promise((resolve) => {
    console.log("this is task 2");
    resolve(true);
  });
}

async function taskThree() {
  return new Promise((resolve) => {
    setTimeout(function () {
      console.log("this is task 3");
      resolve(true);
    }, 1000);
  });
}

async function test() {
  await taskOne();
  await taskTwo();
  await taskThree();
}

test();
