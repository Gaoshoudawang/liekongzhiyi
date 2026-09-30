// ============================================================
// 道具盒子配置总表
// 由所有小盒子的 config.json 自动汇总生成
// 小盒子文件夹里只放图片，配置都集中在这里
// ============================================================

var ITEM_BOX_CONFIG = {
  "王者幻神": {
    "quality": "gold",
    "has_showcase": true,
    "gacha_behavior": "storage",
    "bonus_behavior": "warehouse"
  },
  "王者幻神-猎空之翼": {
    "quality": "gold",
    "has_showcase": true,
    "gacha_behavior": "storage",
    "bonus_behavior": "warehouse"
  },
  "狙击枪线-猎空之翼": {
    "quality": "gold",
    "has_showcase": false,
    "gacha_behavior": "storage",
    "bonus_behavior": "warehouse"
  },
  "王者幻神-猎空之翼-原汁原味": {
    "quality": "gold",
    "has_showcase": false,
    "gacha_behavior": "storage",
    "bonus_behavior": "warehouse"
  },
  "王者幻神-现代战场": {
    "quality": "gold",
    "has_showcase": false,
    "gacha_behavior": "storage",
    "bonus_behavior": "warehouse"
  },
  "王者幻神-量子谐波": {
    "quality": "gold",
    "has_showcase": false,
    "gacha_behavior": "storage",
    "bonus_behavior": "warehouse"
  },
  "猎空之翼挂饰": {
    "quality": "gold",
    "has_showcase": false,
    "gacha_behavior": "storage",
    "bonus_behavior": "warehouse"
  },
  "王者幻神-猎空之触": {
    "quality": "gold",
    "has_showcase": false,
    "gacha_behavior": "storage",
    "bonus_behavior": "warehouse"
  },
  "王者幻神-猎空之殇": {
    "quality": "gold",
    "has_showcase": false,
    "gacha_behavior": "storage",
    "bonus_behavior": "warehouse"
  },
  "王者幻神-猎空之印": {
    "quality": "gold",
    "has_showcase": false,
    "gacha_behavior": "storage",
    "bonus_behavior": "warehouse"
  },
  "击杀图标-猎空之翼1": {
    "quality": "gold",
    "has_showcase": false,
    "gacha_behavior": "storage",
    "bonus_behavior": "warehouse"
  },
  "击杀图标-猎空之翼2": {
    "quality": "gold",
    "has_showcase": false,
    "gacha_behavior": "storage",
    "bonus_behavior": "warehouse"
  },
  "520喷漆": {
    "quality": "gold",
    "has_showcase": false,
    "gacha_behavior": "storage",
    "bonus_behavior": "warehouse"
  },
  "猎空之翼兑换币": {
    "quality": "purple",
    "has_showcase": false,
    "gacha_behavior": "points",
    "bonus_behavior": "points",
    "points_type": "exchange",
    "points_amount": 1
  },
  "猎空之翼夺宝币": {
    "quality": "gold",
    "has_showcase": false,
    "decompose_points": 0,
    "exchange_price": 0,
    "special": true,
    "gacha_behavior": "none",
    "bonus_behavior": "none"
  }
};

// 根据道具名称获取盒子配置
function getBoxConfig(itemName){
  if(!itemName) return null;
  // 去掉末尾的×数量
  var cleanName = itemName.replace(/[×*]\d+$/, '');
  // 先查映射表（处理带 | 的特殊名称）
  if(window.ITEM_BASE_NAME_MAP && window.ITEM_BASE_NAME_MAP[cleanName]){
    cleanName = window.ITEM_BASE_NAME_MAP[cleanName];
  }
  return ITEM_BOX_CONFIG[cleanName] || null;
}
