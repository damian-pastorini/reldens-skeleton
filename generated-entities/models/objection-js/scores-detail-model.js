/**
 *
 * Reldens - ScoresDetailModel
 *
 */

const { ObjectionJsRawModel } = require('@reldens/storage');

class ScoresDetailModel extends ObjectionJsRawModel
{

    static get tableName()
    {
        return 'scores_detail';
    }

}

module.exports.ScoresDetailModel = ScoresDetailModel;
