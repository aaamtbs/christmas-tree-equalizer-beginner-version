let micVal = 0
let tree = ChristmasTree.create()
tree.changeMode(LEDMode.Free)
basic.forever(function () {
    micVal = input.soundLevel()
    tree.equalizerAnimation(micVal)
    tree.update()
})
