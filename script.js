function compute() {
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear() + parseInt(years);
    document.getElementById("result").innerHTML = "If you deposit <span class=\"number\">" + principal + "</span>,<br>at an interest rate of <span class=\"number\">" + rate + "%</span>\<br\>You will receive an amount of <span class=\"number\">" + interest + "</span>,\<br\>in the year <span class=\"number\">" + year + "</span>\<br\>";
    return true;
}
function updateRate() {
    var rateValue = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateValue;
}
