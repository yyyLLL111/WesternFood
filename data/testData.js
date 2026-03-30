const testScraps = [
  {
    id: "scrap-001",
    name: "牛肉边角料",
    type: "肉类",
    quantity: 200,
    unit: "克",
    freshness: "新鲜",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "scrap-002",
    name: "面包边",
    type: "主食",
    quantity: 5,
    unit: "片",
    freshness: "中等",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "scrap-003",
    name: "蔬菜边角",
    type: "蔬菜",
    quantity: 150,
    unit: "克",
    freshness: "新鲜",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "scrap-004",
    name: "鸡肉边角料",
    type: "肉类",
    quantity: 150,
    unit: "克",
    freshness: "新鲜",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "scrap-005",
    name: "奶酪碎",
    type: "乳制品",
    quantity: 100,
    unit: "克",
    freshness: "新鲜",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "scrap-006",
    name: "意大利面剩料",
    type: "主食",
    quantity: 200,
    unit: "克",
    freshness: "中等",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "scrap-007",
    name: "洋葱边角",
    type: "蔬菜",
    quantity: 80,
    unit: "克",
    freshness: "新鲜",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "scrap-008",
    name: "火腿边角",
    type: "肉类",
    quantity: 120,
    unit: "克",
    freshness: "中等",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "scrap-009",
    name: "奶油剩料",
    type: "乳制品",
    quantity: 50,
    unit: "毫升",
    freshness: "新鲜",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "scrap-010",
    name: "米饭剩料",
    type: "主食",
    quantity: 300,
    unit: "克",
    freshness: "中等",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "scrap-011",
    name: "胡萝卜边角",
    type: "蔬菜",
    quantity: 100,
    unit: "克",
    freshness: "新鲜",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "scrap-012",
    name: "猪肉边角料",
    type: "肉类",
    quantity: 180,
    unit: "克",
    freshness: "新鲜",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "scrap-013",
    name: "酸奶剩料",
    type: "乳制品",
    quantity: 150,
    unit: "毫升",
    freshness: "中等",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "scrap-014",
    name: "黄瓜边角",
    type: "蔬菜",
    quantity: 70,
    unit: "克",
    freshness: "即将过期",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "scrap-015",
    name: "鸡蛋剩料",
    type: "其他",
    quantity: 3,
    unit: "个",
    freshness: "新鲜",
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

const testIdeas = [
  {
    id: "idea-001",
    title: "牛肉蔬菜炒饭",
    description: "利用牛肉边角料和蔬菜边角制作美味炒饭",
    ingredients: ["scrap-001", "scrap-003"],
    steps: ["将牛肉边角料切成小块", "蔬菜边角切碎", "锅中放油，先炒牛肉", "加入蔬菜和米饭翻炒"],
    difficulty: "简单",
    prepTime: 15,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "idea-002",
    title: "面包布丁",
    description: "用面包边制作香甜的面包布丁",
    ingredients: ["scrap-002"],
    steps: ["面包边撕成小块", "加入牛奶、鸡蛋、糖混合", "放入烤箱烘烤"],
    difficulty: "中等",
    prepTime: 30,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "idea-003",
    title: "鸡肉蔬菜沙拉",
    description: "用鸡肉边角料和蔬菜边角制作健康沙拉",
    ingredients: ["scrap-004", "scrap-003", "scrap-007"],
    steps: ["鸡肉边角料煮熟切块", "蔬菜边角洗净切碎", "加入沙拉酱拌匀", "撒上奶酪碎"],
    difficulty: "简单",
    prepTime: 20,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "idea-004",
    title: "奶酪意大利面",
    description: "用意大利面剩料和奶酪碎制作美味意面",
    ingredients: ["scrap-005", "scrap-006"],
    steps: ["意大利面加热", "奶酪碎融化", "混合搅拌", "撒上黑胡椒"],
    difficulty: "简单",
    prepTime: 15,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "idea-005",
    title: "火腿蛋炒饭",
    description: "用火腿边角和鸡蛋制作美味炒饭",
    ingredients: ["scrap-008", "scrap-010", "scrap-015"],
    steps: ["鸡蛋炒熟", "火腿边角切碎", "米饭加热", "混合翻炒"],
    difficulty: "简单",
    prepTime: 12,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "idea-006",
    title: "奶油蘑菇汤",
    description: "用奶油剩料制作香浓奶油汤",
    ingredients: ["scrap-009", "scrap-007"],
    steps: ["洋葱切碎炒香", "加入奶油", "加水煮沸", "搅拌成浓汤"],
    difficulty: "中等",
    prepTime: 25,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "idea-007",
    title: "胡萝卜蛋糕",
    description: "用胡萝卜边角制作健康蛋糕",
    ingredients: ["scrap-011", "scrap-002", "scrap-015"],
    steps: ["胡萝卜切碎", "面包边打成粉", "混合鸡蛋和糖", "烘烤"],
    difficulty: "困难",
    prepTime: 45,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "idea-008",
    title: "猪肉蔬菜卷",
    description: "用猪肉边角料和蔬菜制作美味卷饼",
    ingredients: ["scrap-012", "scrap-003", "scrap-007"],
    steps: ["猪肉边角料炒熟", "蔬菜切丝", "用饼皮卷起", "切段"],
    difficulty: "中等",
    prepTime: 20,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "idea-009",
    title: "酸奶水果沙拉",
    description: "用酸奶剩料制作健康沙拉",
    ingredients: ["scrap-013"],
    steps: ["酸奶倒入碗中", "加入喜爱的水果", "搅拌均匀", "冷藏"],
    difficulty: "简单",
    prepTime: 10,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "idea-010",
    title: "黄瓜鸡蛋饼",
    description: "用黄瓜边角和鸡蛋制作营养早餐",
    ingredients: ["scrap-014", "scrap-015"],
    steps: ["黄瓜切碎", "鸡蛋打散", "混合搅拌", "煎成薄饼"],
    difficulty: "简单",
    prepTime: 15,
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

module.exports = {
  testScraps,
  testIdeas
};