document.getElementById("btn").addEventListener("click", onclick);

function onclick ()
{
    let grade;
    let score;
    score = document.getElementById("score").valueAsNumber;
    round = Math.trunc(score);
    if (round >= 97) {
        grade = "A+";
    }
    else if (round >= 93) {
        grade = "A";
    }
    else if (round >= 90) {
        grade = "A-";
    }
    else if (round >= 87) {
        grade = "B+";
    }
    else if (round >= 83) {
        grade = "B";
    }
    else if (round >= 80) {
        grade = "B-";
    }
    else if (round >= 77) {
        grade = "C+";
    } 
    else if (round >= 73) {
        grade = "C";
    }
    else if (round >= 70) {
        grade = "C-";
    }
    else if (round >= 67) {
        grade = "D+";
    }
    else if (score >= 63) {
        grade = "D";
    }
    else if (round >= 60) {
        grade = "D-";
    }
    else {
        grade = "F";
    }
    document.getElementById("result").innerHTML = "Your letter grade is " + grade + "." ;
}