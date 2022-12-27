const {Op} = require('sequelize')
const { Follow } = require('../models')

exports.requestFollow = async (req, res, next) => {
    try {
        const {requestToId} = req.body;
        
        await Follow.create({
            requestTo: requestToId,
            status: 'FOLLOWED',
            requestFromId: req.user.id
            
        })
        res.json({message: 'seccess'})
        // WHERE (`requestFromId` = req.user.id AND `requestToId` = requestToId) OR (`requestForm` = requestToId AND `requestToId` = req.user.id)
        // const followUser = await Follow.findOne({
        //     where: {
        //         [Op.or]:[
        //             {
        //                 requestFromId: req.user.id,
        //                 requestToId: requestToId,
        //             },
        //             {
        //                 requestFromId: requestToId,
        //                 requestToId: req.user.id,
        //             }
        //         ]
        //     }
        // });

        // if(followUser) {
        //     return res.status(400).json({message: 'this user has already been follow'})
        // }
        // await Follow.create({
        //     requestToId: requestToId,
        //     status: 'FOLLOWED',
        //     requestFromId: req.user.id
        // });
        //res.status(200).json({message: 'user has been followed.'})
    } catch(err) {
        next(err)
    }
}