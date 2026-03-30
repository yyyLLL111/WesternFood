const { testIdeas } = require('../data/testData');

class IdeaModel {
  constructor() {
    this.ideas = [...testIdeas];
    this.nextId = 11;
  }

  getAll() {
    return this.ideas;
  }

  getById(id) {
    return this.ideas.find(idea => idea.id === id);
  }

  create(ideaData) {
    const newIdea = {
      id: `idea-${String(this.nextId).padStart(3, '0')}`,
      ...ideaData,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    this.ideas.push(newIdea);
    this.nextId++;
    return newIdea;
  }

  update(id, ideaData) {
    const index = this.ideas.findIndex(idea => idea.id === id);
    if (index === -1) {
      return null;
    }
    this.ideas[index] = {
      ...this.ideas[index],
      ...ideaData,
      updatedAt: new Date()
    };
    return this.ideas[index];
  }

  delete(id) {
    const index = this.ideas.findIndex(idea => idea.id === id);
    if (index === -1) {
      return false;
    }
    this.ideas.splice(index, 1);
    return true;
  }
}

module.exports = new IdeaModel();