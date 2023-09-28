function printAsyncName(callback, name) {
    setTimeout(function() {
        console.log("Hello");

    setTimeout(function() {
        console.log(name);
    }, 2000);

    callback()
    }, 1000);
}
function myCallback() {
    console.log("Callback executed");
}
printAsyncName(myCallback, "Miriana");