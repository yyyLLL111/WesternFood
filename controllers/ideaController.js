const ideaModel = require('../models/ideaModel');

class IdeaController {
  getAllIdeas(req, res) {
    const ideas = ideaModel.getAll();
    res.json({
      success: true,
      data: ideas
    });
  }

  getIdeaById(req, res) {
    const { id } = req.params;
    const idea = ideaModel.getById(id);
    if (!idea) {
      return res.status(404).json({
        success: false,
        message: '创意不存在'
      });
    }
    res.json({
      success: true,
      data: idea
    });
  }

  createIdea(req, res) {
    const { title, description, ingredients, steps, difficulty, prepTime } = req.body;
    
    if (!title || !description || !ingredients || !steps || !difficulty || prepTime === undefined) {
      return res.status(400).json({
        success: false,
        message: '请提供完整的创意信息'
      });
    }

    const newIdea = ideaModel.create({
      title,
      description,
      ingredients,
      steps,
      difficulty,
      prepTime: Number(prepTime)
    });

    res.status(201).json({
      success: true,
      data: newIdea
    });
  }

  updateIdea(req, res) {
    const { id } = req.params;
    const updateData = req.body;

    const updatedIdea = ideaModel.update(id, updateData);
    if (!updatedIdea) {
      return res.status(404).json({
        success: false,
        message: '创意不存在'
      });
    }

    res.json({
      success: true,
      data: updatedIdea
    });
  }

  deleteIdea(req, res) {
    const { id } = req.params;

    const success = ideaModel.delete(id);
    if (!success) {
      return res.status(404).json({
        success: false,
        message: '创意不存在'
      });
    }

    res.json({
      success: true,
      message: '创意删除成功'
    });
  }
}

module.exports = new IdeaController();