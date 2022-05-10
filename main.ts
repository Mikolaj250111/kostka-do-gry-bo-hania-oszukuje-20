let number_a = 0
let number_b = 0
let _4digit: grove.TM1637 = null
let number_c = 0
input.onButtonPressed(Button.A, function () {
    number_a = randint(1, 6)
    number_b = randint(1, 6)
})
input.onButtonPressed(Button.B, function () {
    number_a = 0
    number_b = 0
    _4digit.clear()
})
loops.everyInterval(1000, function () {
    _4digit = grove.createDisplay(DigitalPin.P0, DigitalPin.P14)
    number_c = number_a + number_b
    _4digit.point(true)
    _4digit.bit(number_a, 1)
    _4digit.bit(number_b, 3)
    basic.pause(1000)
    _4digit.point(false)
    _4digit.show(number_c)
})
