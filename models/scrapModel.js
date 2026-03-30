const { testScraps } = require('../data/testData');

class ScrapModel {
  constructor() {
    this.scraps = [...testScraps];
    this.nextId = 16;
  }

  getAll() {
    return this.scraps;
  }

  getById(id) {
    return this.scraps.find(scrap => scrap.id === id);
  }

  create(scrapData) {
    const newScrap = {
      id: `scrap-${String(this.nextId).padStart(3, '0')}`,
      ...scrapData,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    this.scraps.push(newScrap);
    this.nextId++;
    return newScrap;
  }

  update(id, scrapData) {
    const index = this.scraps.findIndex(scrap => scrap.id === id);
    if (index === -1) {
      return null;
    }
    this.scraps[index] = {
      ...this.scraps[index],
      ...scrapData,
      updatedAt: new Date()
    };
    return this.scraps[index];
  }

  delete(id) {
    const index = this.scraps.findIndex(scrap => scrap.id === id);
    if (index === -1) {
      return false;
    }
    this.scraps.splice(index, 1);
    return true;
  }
}

module.exports = new ScrapModel();