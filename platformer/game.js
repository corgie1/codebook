const keys = 'LEFT,RIGHT,UP,DOWN,SPACE,W,A,S,D'
let pl, stools, k

function preload() {   
 this.load.image('bg', './assets/moon-bg.png')
this.load.image('flyguy', './assets/flyguy.png')
this.load.image('stool', './assets/stool.png')

}

function create() {
    this.add.image(0, 0, 'bg').setOrigin(0, 0)

    pl = this.physics.add.sprite(100, 100, 'flyguy').setOrigin(0, 0)

    pl.setCollideWorldBounds(true)

    pl.setBounce(0)

    stools = this.physics.add.staticGroup()

    stools.create(500, 300, 'stool')
    
    stools.create(100, 100, 'stool')

    this.physics.add.collider(pl, stools)

    k = this.input.keyboard.addKeys(keys)



}

function update() {

    if (k.LEFT.isDown) {
        pl.setVelocityX(-300)
    }

    else if (k.RIGHT.isDown){
        pl.setVelocityX(+300)
    }
    if (pl.body.onFloor()){
        if (k.UP.isDown) {
            pl.setVelocityY(-700)
        }
        pl.setDragX(2000)
}

}

let config = {

  width: 683,
  height: 384,
  scene: {preload,update,create},
  physics: {
    default: 'arcade',
    arcade: {
        gravity: { y: 1800 },
        debug: false,
    },
  },

}


new Phaser.Game(config)

