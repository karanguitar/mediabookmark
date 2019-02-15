const db = require('../models/index')

exports.getMedia = (req, res, next) => {
    db.Media.findAll({
      where:{
        userId: req.user.id
      }
    })
    .then((media) =>{
      res.send({media: media})
    })
    .catch(err => console.log(err));
  };

exports.getSingleMedia = (req, res) =>{
  const id = req.params.id
  
  db.Media.findByPk(id)
  .then((media) =>{
    res.send({singleMedia: media})
  })
  .catch(err => console.log(err));
}

exports.postMedia = (req, res, next) =>{
  const name = req.body.name
  const mediaType = req.body.mediaType
  const dateCompleted = req.body.dateCompleted
  const notes = req.body.notes
  const rating = req.body.rating
  const webLink = req.body.webLink
  const videoId = req.body.videoId

  db.Media.create({
    name,
    mediaType,
    dateCompleted,
    notes,
    rating,
    videoId,
    webLink,
    userId: req.user.id
  })
  .then((result) => res.send({newPost: result.dataValues}))
  .catch(err => console.log(err))
}

exports.getEditMedia = (req, res) =>{
  const id = req.params.id

  db.Media.findByPk(id)
  .then((media) =>{

    res.send({EditMedia: media})
  })
  .catch(err => console.log(err))
}

exports.postEditMedia = (req, res) =>{
  const id = req.body.id
  const name = req.body.name
  const mediaType = req.body.mediaType
  const dateCompleted = req.body.dateCompleted
  const notes = req.body.notes
  const rating = req.body.rating
  const webLink = req.body.webLink
  const videoId = req.body.videoId

  db.Media.findByPk(id)
  .then((media) =>{
    media.id= id
    media.name = name
    media.mediaType = mediaType
    media.dateCompleted = dateCompleted
    media.notes = notes
    media.rating = rating
    media.webLink = webLink
    media.videoId = videoId

    return media.save()

  })
  .then((result) => res.send({editedPost: result.dataValues}))
  .catch(err => console.log(err))
}

exports.deleteMedia = (req, res) =>{
  const id = req.params.id
  db.Media.destroy({
    where:{
      id : id
    }
  })
  .then((result) =>{
    res.send({deleted:"true"})
  })
  .catch(err => console.log(err))
}