const scrapModel = require('../models/scrapModel');

class ScrapController {
  getAllScraps(req, res) {
    const scraps = scrapModel.getAll();
    res.json({
      success: true,
      data: scraps
    });
  }

  getScrapById(req, res) {
    const { id } = req.params;
    const scrap = scrapModel.getById(id);
    if (!scrap) {
      return res.status(404).json({
        success: false,
        message: '边角料不存在'
      });
    }
    res.json({
      success: true,
      data: scrap
    });
  }

  createScrap(req, res) {
    const { name, type, quantity, unit, freshness } = req.body;
    
    if (!name || !type || quantity === undefined || !unit || !freshness) {
      return res.status(400).json({
        success: false,
        message: '请提供完整的边角料信息'
      });
    }

    const newScrap = scrapModel.create({
      name,
      type,
      quantity: Number(quantity),
      unit,
      freshness
    });

    res.status(201).json({
      success: true,
      data: newScrap
    });
  }

  updateScrap(req, res) {
    const { id } = req.params;
    const updateData = req.body;

    const updatedScrap = scrapModel.update(id, updateData);
    if (!updatedScrap) {
      return res.status(404).json({
        success: false,
        message: '边角料不存在'
      });
    }

    res.json({
      success: true,
      data: updatedScrap
    });
  }

  deleteScrap(req, res) {
    const { id } = req.params;

    const success = scrapModel.delete(id);
    if (!success) {
      return res.status(404).json({
        success: false,
        message: '边角料不存在'
      });
    }

    res.json({
      success: true,
      message: '边角料删除成功'
    });
  }
}

module.exports = new ScrapController();