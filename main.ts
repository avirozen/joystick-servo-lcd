let b = 0
let y = 0
let x = 0
I2C_LCD1602.LcdInit(0)
I2C_LCD1602.BacklightOn()
led.enable(false)
basic.forever(function () {
    I2C_LCD1602.clear()
    x = pins.analogReadPin(AnalogPin.P1)
    y = pins.analogReadPin(AnalogPin.P0)
    b = pins.digitalReadPin(DigitalPin.P2)
    pins.servoWritePin(AnalogPin.P0, pins.map(
    x,
    4,
    1023,
    0,
    180
    ))
    pins.servoWritePin(AnalogPin.P0, pins.map(
    y,
    4,
    1023,
    0,
    180
    ))
    if (b == 0) {
        pins.digitalWritePin(DigitalPin.P5, 0)
    } else {
        pins.digitalWritePin(DigitalPin.P5, 1)
    }
    I2C_LCD1602.ShowString("X", 0, 0)
    I2C_LCD1602.ShowNumber(x, 3, 0)
    I2C_LCD1602.ShowString("Y", 8, 0)
    I2C_LCD1602.ShowNumber(y, 11, 0)
    I2C_LCD1602.ShowString("B", 0, 1)
    I2C_LCD1602.ShowNumber(b, 3, 1)
    basic.pause(100)
})
