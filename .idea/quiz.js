

var score = 0;

    function q1() {

            var radios = document.getElementsByName('myAnswer');
            for (var j = 0; j < radios.length; j++) {
                var radio = radios[j];
                if (radio.value == "jelly" && radio.checked) {
                    score = score + 1;
                }
                if (radio.value == "glazed" && radio.checked) {
                    score = score + 2;
                }
                if (radio.value == "chocolateGlazeRainbow" && radio.checked) {
                    score = score + 3;
                }
                 if (radio.value == "dulchedeleche" && radio.checked) {
                    score = score + 4;
                }
            }
            console.log(score);
        }


function q2() {

    var checks = document.getElementsByName('myCheck');
    for (var j = 0; j < checks.length; j++) {
        var checkbox = checks[j];
        if (checkbox.value == "jelly" && checkbox.checked) {
            score = score + 1;
        }
        if (checkbox.value == "glazed" && checkbox.checked) {
            score = score + 2;
        }
        if (checkbox.value == "chocolateGlazeRainbow" && checkbox.checked) {
            score = score + 3;
        }
        if (checkbox.value == "dulchedeleche" && checkbox.checked) {
            score = score + 4;
        }
    }
    console.log(score);
}

function q3() {

    var colors = document.getElementsByName('favcolor');
    for (var j = 0; j < colors.length; j++) {
        var yourcolor = colors[j];
        if (yourcolor.value.toLowerCase() == "red") {
            score = score + 1;
        }
        if (yourcolor.value.toLowerCase() == "yellow") {
            score = score + 2;
        }
        if (yourcolor.value.toLowerCase() == "green" ) {
            score = score + 3;
        }
        if (yourcolor.value.toLowerCase() == "purple") {
            score = score + 4;
        }
        }
        console.log(score);
    }

function q4() {

    var numbers = document.getElementsByName('quantity');
    for (var j = 0; j < numbers.length; j++) {
        var numbvalue = numbers[j];
        if (numbvalue.value >= 0 && numbvalue.value < 3) {
            score = score + 1;
        }
        if (numbvalue.value >= 3 && numbvalue.value < 5) {
            score = score + 2;
        }
        if (numbvalue.value >= 5 && numbvalue.value < 7) {
            score = score + 3;
        }
        if (numbvalue.value >= 7 && numbvalue.value <= 10) {
            score = score + 4;
        }
    }
    console.log(score);
}

function q5() {

    var birthday = document.getElementsByName('bdaymonth');
    for (var j = 0; j < birthday.length; j++) {
        var numbvalue = birthday[j];
        if (numbvalue.value == "2016-01" || numbvalue.value == "2016-02" || numbvalue.value == "2016-03") {
            score = score + 1;
        }
        if (numbvalue.value == "2016-04" || numbvalue.value == "2016-05"|| numbvalue.value == "2016-06") {
            score = score + 2;
        }
        if (numbvalue.value == "2016-07" || numbvalue.value == "2016-08" || numbvalue.value == "2016-09") {
            score = score + 3;
        }
        if (numbvalue.value == "2016-10" || numbvalue.value == "2016-11" || numbvalue.value == "2016-12") {
            score = score + 4;
        }
    }
    console.log(score);
}

function getResults() {
    if (score <= 26 && score > 19) {
        document.write("You are a dulche de leche doughnut!");
    }
    else if (score <= 19 && score > 12) {
        document.write("You are a chocolate glazed with rainbow sprinkles doughnut!")
    }
    else if (score <= 12 && score > 7 ) {
        document.write("You are a jelly doughnut!")
    }
    else if (score <= 7) {
        document.write("You are a glazed original doughnut!")

    }
}