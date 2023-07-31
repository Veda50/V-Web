import Skill from '../models/SkillModels';


const getAllSkills = async (req, res) => {
    try {
        const skills = await Skill.find();
        res.json(skills);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        })
    }
}

const postSkill = async (req, res) => {
    const skill = new Skill(req.body)
    try {
        const newSkill = await skill.save();
        res.status(201).json(newSkill);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        })
    }
}

const getSkillById = async (req, res) => {
    try {
        const skill = await Skill.findById(req.params.id);
        res.json(skill);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        })
    }
}

module.exports = {
    getAllSkills,
    getSkillById,
    postSkill,
};