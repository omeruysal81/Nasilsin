let nasilsin = ""
input.onButtonPressed(Button.A, function () {
    nasilsin = "mutlu"
})
input.onButtonPressed(Button.B, function () {
    nasilsin = "mutsuz"
})
basic.forever(function () {
    if (nasilsin == "mutlu") {
        basic.showIcon(IconNames.Happy)
    } else if (nasilsin == "mutsuz") {
        basic.showIcon(IconNames.Sad)
    }
})
