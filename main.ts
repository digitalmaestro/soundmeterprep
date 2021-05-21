radio.onReceivedString(function (receivedString) {
    if (receivedString == "loud") {
        basic.showIcon(IconNames.Sad)
        soundExpression.slide.playUntilDone()
    } else {
        basic.showIcon(IconNames.Happy)
    }
})
radio.setGroup(1)
basic.forever(function () {
    if (input.soundLevel() >= 167) {
        basic.showIcon(IconNames.Sad)
        radio.sendString("loud")
    } else {
        radio.sendString("nice")
    }
})
