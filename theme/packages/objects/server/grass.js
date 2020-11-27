const { AnimationObject } = require('reldens/packages/objects/server/animation-object');

class Grass extends AnimationObject
{

    constructor(props)
    {
        super(props);
        this.runOnHit = true;
        this.roomVisible = true;
        Object.assign(this.clientParams, {
            enabled: true,
            frameStart: 0,
            frameEnd: 3,
            repeat: 0,
            hideOnComplete: false,
            autoStart: false,
            restartTime: 2000
        });
    }

}

module.exports.Grass = Grass;
