import getSkillsHadndler from "./handler";
import express from express;
const router = express.Router();

router.use((req, res, next) => {
    console.info(`Receive request : ${req.originalUrl}`);
    next();
});

router.get('/Dashboard', (req, res) => {
    res.send('Ngapain?');
});

router.get('/skills', getSkillsHadndler);

module.exports = router;