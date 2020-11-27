const { EnemyObject } = require('reldens/packages/objects/server/enemy-object');
const { MultipleObject } = require('reldens/packages/objects/server/multiple');

class Enemy3 extends MultipleObject
{

    constructor(props)
    {
        super(props);
        this.classInstance = EnemyObject;
        this.respawn = true;
    }

}

module.exports.Enemy3 = Enemy3;
