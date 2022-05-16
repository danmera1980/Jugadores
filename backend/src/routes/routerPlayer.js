const { Router } = require("express");
const { getAllPlayers,
        getPlayerById,
        createPlayer,
        editPlayerById,
        deletePlayerById } = require('../controllers/players')
const router = Router();

router.get("/", getAllPlayers);
router.get("/:playerID", getPlayerById);
router.post('/', createPlayer);
router.put('/:playerID', editPlayerById);
router.delete('/:playerID', deletePlayerById);

module.exports = router;