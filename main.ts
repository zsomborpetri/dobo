let szam = 0
input.onButtonPressed(Button.A, function () {
    // Dobókocka animáció (forgás imitáció)
    for (let index = 0; index < 1; index++) {
        basic.showLeds(`
            # . . . #
            . . . . .
            . . # . .
            . . . . .
            # . . . #
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . #
            . . . . .
            . . # . .
            . . . . .
            # . . . .
            `)
        basic.pause(100)
        basic.showLeds(`
            # . . . #
            . . . . .
            . . # . .
            . . . . .
            # . . . #
            `)
        basic.pause(100)
    }
    // Véletlenszám generálása
    szam = randint(1, 6)
    // Szám megjelenítése
    basic.showNumber(szam)
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
})
