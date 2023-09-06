const printAsyncName = (callBack, n) => {
    let id = setInterval(callBack, 1000);
    setTimeout(() => clearInterval(id), 1000 * n);
}

    printAsyncName(() => console.log("Hello"), 1);
    setTimeout(() => console.log("Miriana"), 2000);