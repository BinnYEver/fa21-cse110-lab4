let d = new Date();
let time = d.toLocaleDateString();
// setTimeout(function () {
//     console.log(time);
// }, 1000)
setInterval(function () {
    console.log(time);
}, 1000);