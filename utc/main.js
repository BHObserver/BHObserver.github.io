



let btn = document.querySelector(".btn");


btn.addEventListener("click", function() {
    let utcPlusOne = document.getElementById("utcPlusOne");
    let utcPlusSix = document.getElementById("utcPlusSix");

    let timeArr = utcPlusOne.value.split(":");
    let hourConverted = parseInt(timeArr.shift()) + 5;

    if(hourConverted < 10) {
        timeArr.unshift(`0${hourConverted}`)
    } else {
        timeArr.unshift(`${hourConverted}`)
    }
    utcPlusSix.value = timeArr.join(":");
})