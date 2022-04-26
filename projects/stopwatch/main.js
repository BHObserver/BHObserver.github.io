$(function() {
    let mode = 0;
    let timeCounter = 0;
    let lapCounter = 0;
    let action = 0;
    let lapNumber = 0;
    let timeMinutes, timeSeconds, timeCentiseconds, lapMinutes, lapSeconds, lapCentiseconds;
    hideShowButtons("#startButton", "#lapButton");

 
    $("#startButton").click(function() {
        mode = 1;
        hideShowButtons("#stopButton", "#lapButton");
        startAction();
    })

    $("#stopButton").click( function() {
        hideShowButtons("#resumeButton", "#resetButton");
        clearInterval(action);
    })
    
    $("#resumeButton").click( function() {
        hideShowButtons("#stopButton", "#lapButton");
        startAction();
    })

    $("#resetButton").click( function() {
        hideShowButtons("#startButton", "#lapButton");
        clearInterval(action);
        //resetAll()
        location.reload()
    })

    $("#lapButton").click( function() {
         if(mode) {
            clearInterval(action);
            lapCounter = 0;
            addLap()
            startAction()
        } 

    })

    function startAction() {
        action = setInterval(function() {
            timeCounter++;
            if(timeCounter == 100 * 60 * 100) {
                timeCounter = 0;
            }
            lapCounter++;
            
            if(lapCounter == 100 * 60 * 100) {
                lapCounter = 0;
            }
            updateTime();
        }, 10)
    }

    function updateTime() {
        timeMinutes = Math.floor(timeCounter/6000);
        timeSeconds = Math.floor( (timeCounter % 6000) / 100);
        timeCentiseconds= (timeCounter % 6000) % 100;
        $("#timeminute").text(format(timeMinutes));
        $("#timesecond").text(format(timeSeconds));
        $("#timecentisecond").text(format(timeCentiseconds));
        
        lapMinutes = Math.floor(lapCounter/6000);
        lapSeconds = Math.floor( (lapCounter % 6000) / 100);
        lapCentiseconds= (lapCounter % 6000) % 100;
        $("#lapminute").text(format(lapMinutes));
        $("#lapsecond").text(format(lapSeconds));
        $("#lapcentisecond").text(format(lapCentiseconds));
    }

    function format(number) {
        if(number < 10) {
            return '0'+ number;
        } else {
            return number;
        }
    }

    function addLap() {
        lapNumber++;
        let myLapDetails =
        `<div class='lap'>
            <div class='laptimetitle'>
                lap ${lapNumber}
            </div>
            <div class='laptime'>
                <span> ${format(lapMinutes)}:${format(lapSeconds)}:${format(lapCentiseconds)} </span>
            </div>
        </div>`
        $(myLapDetails).prependTo("#laps")
    }

})

/* function resetAll() {
    timeCounter = 0;
    lapCounter = 0;
    $("#timeminute").text("00");
    $("#timesecond").text("00");
    $("#timecentisecond").text("00");
    
    $("#lapminute").text("00");
    $("#lapsecond").text("00");
    $("#lapcentisecond").text("00");

    
}

function resetLap() {
    lapCounter = 0;
    $("#lapminute").text("00");
    $("#lapsecond").text("00");
    $("#lapcentisecond").text("00");
} */



function hideShowButtons(x, y) {
    $(".control").hide();
    $(x).show();
    $(y).show();
}
