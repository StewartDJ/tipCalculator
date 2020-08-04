console.log("is linked")


function calculateTip(){
    var theBill = document.getElementById("bill").value
    console.log(theBill);
    
    var theTip = document.getElementById("tipping").value
    console.log(theTip);

    var thePeople = document.getElementById("people").value
    console.log(thePeople);

    var yourTip = theTip * theBill;
    console.log(yourTip)
    var yourTotal = parseFloat(yourTip) + parseFloat(theBill);
    console.log(yourTotal)
    var youPay = parseFloat(yourTotal)/parseFloat(thePeople);
    console.log(youPay)
    var answer = youPay;

    var postHTML = '<p> *You pay: $' + answer + ', yayA?</p>'
   


console.log(postHTML);
document.getElementById('tipAmount').innerHTML = postHTML;
}


if (typeof new Audio().loop == 'bo') {
    audioToLoop = document.getElementById('music');
    audioToLoop.addEventListener('ended', function () {
        this.currentTime = 0;
        this.play();
    }, false);
}


