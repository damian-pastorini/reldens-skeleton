const { NpcObject } = require('reldens/packages/objects/server/npc-object');

class Talker extends NpcObject
{

    constructor(props)
    {
        super(props);
        this.runOnAction = true;
        this.playerVisible = true;
        this.clientParams.enabled = true;
        this.clientParams.ui = true;
        this.content = 'I am The Talker! Bye!';
    }

}

module.exports.Talker = Talker;