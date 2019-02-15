module.exports = function(sequelize, DataTypes){  
    const Media = sequelize.define('media', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    mediaType: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dateCompleted:{
        type: DataTypes.STRING,
        allowNull: false
    },
    notes:{
        type: DataTypes.TEXT,
        allowNull: false
    },
    rating:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    webLink: {
        type: DataTypes.STRING,
    },
    videoId: {
        type: DataTypes.STRING,
    }


})

    Media.associate = (db) =>{
        Media.belongsTo(db.User)
    }
    return Media

}

