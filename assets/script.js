document.getElementById('curTime').textContent = moment().format('[Current: ]dddd MMMM Do, YYYY h:mm a')
var now = moment().hour()
runIt()
function runIt() {

    var line = [nine(), ten(), eleven(),twelve(),one(),two(),three(),four(),five(), reshow()]

    for (var f = 0; f < line.length; f++) {
        line[f]
    }
}
function nine() {
    document.getElementById('nine').textContent = "09 Am"
    var nineSvEl = $("#nineSvB")
    var nineAm = moment().format("9")
    var slot1El = $('#slot1')
    console.log(nineAm)
    if (nineAm < now) {
        slot1El.addClass('past')
        console.log(nineAm)
    }
    else if (nineAm == now) {
        slot1El.addClass('present')
    }
    else
        slot1El.addClass('future')

    nineSvEl.on('click', function (event) {
        event.preventDefault();
        localStorage.setItem("hour9", JSON.stringify(slot1El.val()))

    })
}
function ten() {
    document.getElementById('ten').textContent = "10 Am"
    var tenSvEl = $("#tenSvB")
    var tenAm = moment().format("10")
    var slot2El = $('#slot2')
    console.log(tenAm)
    if (tenAm < now) {
        slot2El.addClass('past')
        console.log(tenAm)
    }
    else if (tenAm == now) {
        slot2El.addClass('present')
    }
    else
        slot2El.addClass('future')

    tenSvEl.on('click', function (event) {
        event.preventDefault();
        localStorage.setItem("hour10", JSON.stringify(slot2El.val()))

    })
}
function eleven() {
    document.getElementById('eleven').textContent = "11 Am"
    var elevenSvEl = $("#elevenSvB")
    var elevenAm = moment().format("11")
    var slot3El = $('#slot3')
    console.log(elevenAm)
    if (elevenAm < now) {
        slot3El.addClass('past')
        console.log(elevenAm)
    }
    else if (elevenAm == now) {
        slot3El.addClass('present')
    }
    else
        slot3El.addClass('future')

    elevenSvEl.on('click', function (event) {
        event.preventDefault();
        localStorage.setItem("hour11", JSON.stringify(slot3El.val()))

    })
}
function twelve() {
    document.getElementById('twelve').textContent = "12 Pm"
    var twelveSvEl = $("#twelveSvB")
    var twelveAm = moment().format("12")
    var slot4El = $('#slot4')
    console.log(twelveAm)
    if (twelveAm < now) {
        slot4El.addClass('past')
        console.log(twelveAm)
    }
    else if (twelveAm == now) {
        slot4El.addClass('present')
    }
    else
        slot4El.addClass('future')

    twelveSvEl.on('click', function (event) {
        event.preventDefault();
        localStorage.setItem("hour12", JSON.stringify(slot4El.val()))

    })
}
function one() {
    document.getElementById('one').textContent = "01 Pm"
    var oneSvEl = $("#oneSvB")
    var oneAm = moment().format("13")
    var slot5El = $('#slot5')
    console.log(oneAm)
    if (oneAm < now) {
        slot5El.addClass('past')
        console.log(oneAm)
    }
    else if (oneAm == now) {
        slot5El.addClass('present')
    }
    else
        slot5El.addClass('future')

    oneSvEl.on('click', function (event) {
        event.preventDefault();
        localStorage.setItem("hour13", JSON.stringify(slot5El.val()))

    })
}
function two() {
    document.getElementById('two').textContent = "02 Pm"
    var twoSvEl = $("#twoSvB")
    var twoAm = moment().format("14")
    var slot6El = $('#slot6')
    console.log(twoAm)
    if (twoAm < now) {
        slot6El.addClass('past')
        console.log(twoAm)
    }
    else if (twoAm == now) {
        slot6El.addClass('present')
    }
    else
        slot6El.addClass('future')

    twoSvEl.on('click', function (event) {
        event.preventDefault();
        localStorage.setItem("hour14", JSON.stringify(slot6El.val()))

    })
}
function three() {
    document.getElementById('three').textContent = "03 Pm"
    var threeSvEl = $("#threeSvB")
    var threeAm = moment().format("15")
    var slot7El = $('#slot7')
    console.log(threeAm)
    if (threeAm < now) {
        slot7El.addClass('past')
        console.log(threeAm)
    }
    else if (threeAm == now) {
        slot7El.addClass('present')
    }
    else
        slot7El.addClass('future')

    threeSvEl.on('click', function (event) {
        event.preventDefault();
        localStorage.setItem("hour15", JSON.stringify(slot7El.val()))

    })
}
function four() {
    document.getElementById('four').textContent = "04 Pm"
    var fourSvEl = $("#fourSvB")
    var fourAm = moment().format("16")
    var slot8El = $('#slot8')
    console.log(fourAm)
    if (fourAm < now) {
        slot8El.addClass('past')
        console.log(fourAm)
    }
    else if (fourAm == now) {
        slot8El.addClass('present')
    }
    else
        slot8El.addClass('future')

    fourSvEl.on('click', function (event) {
        event.preventDefault();
        localStorage.setItem("hour16", JSON.stringify(slot8El.val()))

    })
}
function five() {
    document.getElementById('five').textContent = "05 Pm"
    var fiveSvEl = $("#fiveSvB")
    var fiveAm = moment().format("17")
    var slot9El = $('#slot9')
    console.log(fiveAm)
    if (fiveAm < now) {
        slot9El.addClass('past')
        console.log(fiveAm)
    }
    else if (fiveAm == now) {
        slot9El.addClass('present')
    }
    else
        slot9El.addClass('future')

    fiveSvEl.on('click', function (event) {
        event.preventDefault();
        localStorage.setItem("hour17", JSON.stringify(slot9El.val()))

    })
}
function reshow() {
    nineAAm()
    function nineAAm() {
        var slot1El = $('#slot1')
        var first = JSON.parse(localStorage.getItem("hour9"))
        slot1El.val(first)
    }
    tenAAm()
    function tenAAm() {
        var slot2El = $('#slot2')
        var second = JSON.parse(localStorage.getItem("hour10"))
        slot2El.val(second)
    }
    elevenAAm()
    function elevenAAm() {
        var slot3El = $('#slot3')
        var third = JSON.parse(localStorage.getItem("hour11"))
        slot3El.val(third)
    }
    twelveAAm()
    function twelveAAm() {
        var slot4El = $('#slot4')
        var fourth = JSON.parse(localStorage.getItem("hour12"))
        slot4El.val(fourth)
    }
    oneAAm()
    function oneAAm() {
        var slot5El = $('#slot5')
        var fith = JSON.parse(localStorage.getItem("hour13"))
        slot5El.val(fith)
    }
    twoAAm()
    function twoAAm() {
        var slot6El = $('#slot6')
        var six = JSON.parse(localStorage.getItem("hour14"))
        slot6El.val(six)
    }
    threeAAm()
    function threeAAm() {
        var slot7El = $('#slot7')
        var seven = JSON.parse(localStorage.getItem("hour15"))
        slot7El.val(seven)
    }
    fourAAm()
    function fourAAm() {
        var slot8El = $('#slot8')
        var eight = JSON.parse(localStorage.getItem("hour16"))
        slot8El.val(eight)
    }
}