const testScraps = [
  {
    id: "scrap-001",
    name: "船点余料",
    type: "面制品",
    quantity: 150,
    unit: "克",
    freshness: "新鲜",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "scrap-002",
    name: "杂粮余料",
    type: "杂粮",
    quantity: 200,
    unit: "克",
    freshness: "新鲜",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "scrap-003",
    name: "明酥余料",
    type: "面制品",
    quantity: 120,
    unit: "克",
    freshness: "新鲜",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "scrap-004",
    name: "包子皮余料",
    type: "面制品",
    quantity: 180,
    unit: "克",
    freshness: "新鲜",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "scrap-005",
    name: "馅料余料",
    type: "馅料",
    quantity: 100,
    unit: "克",
    freshness: "中等",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "scrap-006",
    name: "糯米余料",
    type: "杂粮",
    quantity: 250,
    unit: "克",
    freshness: "新鲜",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "scrap-007",
    name: "豆沙余料",
    type: "馅料",
    quantity: 90,
    unit: "克",
    freshness: "新鲜",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "scrap-008",
    name: "莲蓉余料",
    type: "馅料",
    quantity: 110,
    unit: "克",
    freshness: "中等",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "scrap-009",
    name: "椰蓉余料",
    type: "馅料",
    quantity: 80,
    unit: "克",
    freshness: "新鲜",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "scrap-010",
    name: "芝麻余料",
    type: "辅料",
    quantity: 50,
    unit: "克",
    freshness: "新鲜",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "scrap-011",
    name: "面粉余料",
    type: "面制品",
    quantity: 300,
    unit: "克",
    freshness: "新鲜",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "scrap-012",
    name: "黄油余料",
    type: "辅料",
    quantity: 60,
    unit: "克",
    freshness: "中等",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "scrap-013",
    name: "鸡蛋余料",
    type: "辅料",
    quantity: 3,
    unit: "个",
    freshness: "新鲜",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "scrap-014",
    name: "糖余料",
    type: "辅料",
    quantity: 120,
    unit: "克",
    freshness: "新鲜",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "scrap-015",
    name: "果酱余料",
    type: "馅料",
    quantity: 70,
    unit: "克",
    freshness: "中等",
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

const testIdeas = [
  {
    id: "idea-001",
    title: "船点余料装饰",
    description: "利用船点余料制作中式面点装饰，提升产品美观度",
    ingredients: ["scrap-001"],
    steps: ["船点余料切成小块", "制作各种造型", "用于面点装饰"],
    difficulty: "简单",
    prepTime: 10,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "idea-002",
    title: "杂粮馅心",
    description: "将杂粮余料融入馅心，增加营养和口感",
    ingredients: ["scrap-002", "scrap-005"],
    steps: ["杂粮余料磨碎", "与原有馅料混合", "搅拌均匀"],
    difficulty: "中等",
    prepTime: 15,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "idea-003",
    title: "明酥余料新团",
    description: "明酥余料揉成新团，制作新的酥点",
    ingredients: ["scrap-003"],
    steps: ["明酥余料收集", "揉成新团", "制作新的酥点"],
    difficulty: "中等",
    prepTime: 20,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "idea-004",
    title: "酥粒制作",
    description: "用明酥余料制作酥粒，用于面点表面装饰",
    ingredients: ["scrap-003"],
    steps: ["明酥余料切碎", "加入适量黄油和糖", "烘焙成酥粒"],
    difficulty: "简单",
    prepTime: 15,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "idea-005",
    title: "包子皮余料小饼",
    description: "用包子皮余料制作小饼，减少浪费",
    ingredients: ["scrap-004"],
    steps: ["包子皮余料揉匀", "擀成薄饼", "煎制或烘烤"],
    difficulty: "简单",
    prepTime: 12,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "idea-006",
    title: "糯米糍",
    description: "用糯米余料制作糯米糍，增加产品种类",
    ingredients: ["scrap-006", "scrap-007"],
    steps: ["糯米余料蒸熟", "揉成面团", "包入豆沙", "滚上椰蓉"],
    difficulty: "中等",
    prepTime: 25,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "idea-007",
    title: "混合馅料",
    description: "将多种馅料余料混合，制作新口味馅料",
    ingredients: ["scrap-005", "scrap-007", "scrap-008"],
    steps: ["各馅料余料混合", "搅拌均匀", "用于制作面点"],
    difficulty: "简单",
    prepTime: 10,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "idea-008",
    title: "芝麻酥",
    description: "用芝麻余料制作芝麻酥，增加产品多样性",
    ingredients: ["scrap-010", "scrap-012", "scrap-014"],
    steps: ["芝麻余料与黄油、糖混合", "烤制成酥饼"],
    difficulty: "中等",
    prepTime: 20,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "idea-009",
    title: "蛋酥",
    description: "用鸡蛋余料制作蛋酥，作为面点装饰",
    ingredients: ["scrap-013", "scrap-014"],
    steps: ["鸡蛋打散", "加入糖", "烤制成蛋酥"],
    difficulty: "简单",
    prepTime: 15,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "idea-010",
    title: "果酱小饼",
    description: "用果酱余料制作小饼，减少浪费",
    ingredients: ["scrap-015", "scrap-011"],
    steps: ["面粉余料揉成面团", "包入果酱", "烤制成小饼"],
    difficulty: "简单",
    prepTime: 18,
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

module.exports = {
  testScraps,
  testIdeas
};