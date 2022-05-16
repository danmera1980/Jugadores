const { Player } = require("../db");
  
const getAllPlayers = async (req, res, next) => {
  try {
    const allPlayers = await Player.findAll();
    if (!allPlayers.length) {
      throw new Error("No players available");
    }
    res.send(allPlayers);
  } catch (e) {
      res.status(404).json("No players available")
    next(e);
  }
};

const getPlayerById = async (req, res, next) => {
    try {
        const {playerID} = req.params

        const player = await Player.findByPk(playerID, {
            attributes: ["id", "name", "lastName", "dob", "position", "weight"]
        });
        
        res.status(200).send(player);
    } catch (error) {
        console.log(error.message);
        res.status(404).send(error.message);
    }
}

const createPlayer = async (req, res, next) => {
 try {
     const {name, lastName, dob, position, weight} = req.body
     const player = await Player.create({
        name,
        lastName,
        dob,
        position,
        weight
     });

     res.status(200).send(player)
 } catch (error) {
     console.log(error.message);
     res.status(404).send(error.message);
 }
}

const editPlayerById = async (req, res, next) => {
 try {
     const {playerID} = req.params;
     const {name, lastName, dob, position, weight} = req.body
     const player = await Player.findOne({
         where: {
             id: playerID
         }
     })

     player.name = name?name:player.name
     player.lastName = lastName?lastName:player.lastName
     player.dob= dob?dob:player.dob
     player.position = position?position:player.position
     player.weight = weight?weight:player.weight

     player.save()

     res.status(200).json("Player updated")
 } catch (error) {
     console.log(error.message);
     res.status(404).send(error.message);
 }
}

const deletePlayerById = async (req, res, next) => {
 try {
     const {playerID} = req.params;
     const player = await Player.findOne({
        where: {
            id: playerID
        }
    })

    player.destroy();

    res.status(200).send(player)
 } catch (error) {
     console.log(error.message);
     res.status(404).send(error.message);
 }
}

module.exports = {
  getAllPlayers,
  getPlayerById,
  createPlayer,
  editPlayerById,
  deletePlayerById
}; 