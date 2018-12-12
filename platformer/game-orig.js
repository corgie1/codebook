
let pl, curs, stools


new Phaser.Game({
    width: 683,
    height: 384,

    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 1800 },
            debug: false,
        },
    },

    scene: {
        preload() {
            this.load.image('bg', './assets/moon-bg.png')
            this.load.image('flyguy', './assets/flyguy.png')
            this.load.image('stool', './assets/stool.png')




        },
        create() {
            this.add.image(0, 0, 'bg').setOrigin(0, 0)
            pl = this.physics.add.sprite(100, 100, 'flyguy')
            pl.setCollideWorldBounds(true)
            pl.setBounce(0)

            stools = this.physics.add.staticGroup()
            stools.create(300, 300, 'stool')
            this.physics.add.collider(pl, stools)


            curs = this.input.keyboard.createCursorKeys()
        },

        update() {
            if (curs.left.isDown) {
                pl.setVelocityX(-300)
            } else if (curs.right.isDown) {
                pl.setVelocityX(300)
            }

            if (pl.body.onFloor()) {
                pl.setDragX(2200)


                if (curs.up.isDown) {
                    pl.setVelocityY(-700)
                }
            } else {
                pl.setDragX(0)
            }
        },
    }
})
