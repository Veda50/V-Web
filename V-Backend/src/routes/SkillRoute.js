import controller from "../controllers/SkillControllers";
import express from express;
const router = express.Router();

router.use((req, res, next) => {
    console.info(`Receive request : ${req.originalUrl}`);
    next();
});

router.get('/Dashboard', (req, res) => {
    res.send('Ngapain?');
});

router.get('/', controller.getAllSkills);
router.get('/:id', controller.getSkillById);

module.exports = router;