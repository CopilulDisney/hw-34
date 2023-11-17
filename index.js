// const time = document.getElementById('time')
// let timeInterval

// const startCount = () => {
//     clearInterval(timeInterval)
//     let second = 0
//     let minute = 0
//     let hour = 0
//     timeInterval = setInterval(() => {
//         time.innerHTML =
//         (hour ? hour + ':' : '') +
//         (minute < 10 ? '0' + minute : minute) +
//         ':' +
//         (second < 10 ? '0' + second: second)
//         second++

//         if(second === 60) {
//             minute++
//             second = 0
//         }
//         if(minute === 60) {
//             hour++
//             minute = 0
//         }
//         if(hour  === 24) {
//             hour = 0
//         }
//     }, 1000)
// }

// const stopInterval = () => {
//     clearInterval(timeInterval)
// }

function showCurrentTime () {
    const currentTime = new Date();
    const hours =
    currentTime.getHours();
    const minutes =
    currentTime.getMinutes();
    const seconds =
    currentTime.getSeconds();

    const timeString = `${hours}:${minutes}:${seconds}`;
    alert(timeString)
}