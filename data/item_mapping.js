// ============================================================
// 猎空之翼夺宝 - 统一道具映射配置文件
// 所有页面都引用这个文件，换皮只需要改这一个文件
// ============================================================

// ITEM_SMALL_IMAGES
window.ITEM_SMALL_IMAGES = {
  '王者幻神': 'images/items_box/王者幻神/small.png',
  '王者幻神-猎空之翼': 'images/items_box/王者幻神-猎空之翼/small.png',
  '狙击枪线-猎空之翼': 'images/items_box/狙击枪线-猎空之翼/small.png',
  '王者幻神-猎空之翼-原汁原味': 'images/items_box/王者幻神-猎空之翼-原汁原味/small.png',
  '王者幻神-现代战场': 'images/items_box/王者幻神-现代战场/small.png',
  '王者幻神-量子谐波': 'images/items_box/王者幻神-量子谐波/small.png',
  '猎空之翼挂饰': 'images/items_box/猎空之翼挂饰/small.png',
  '王者幻神-猎空之触': 'images/items_box/王者幻神-猎空之触/small.png',
  '王者幻神-猎空之殇': 'images/items_box/王者幻神-猎空之殇/small.png',
  '王者幻神-猎空之印': 'images/items_box/王者幻神-猎空之印/small.png',
  '击杀图标-猎空之翼1': 'images/items_box/击杀图标-猎空之翼1/small.png',
  '击杀图标-猎空之翼2': 'images/items_box/击杀图标-猎空之翼2/small.png',
  '520喷漆': 'images/items_box/520喷漆/small.png',
  '猎空之翼兑换币×88': 'images/items_box/猎空之翼兑换币/small.png',
  '猎空之翼兑换币×66': 'images/items_box/猎空之翼兑换币/small.png',
  '猎空之翼兑换币×30': 'images/items_box/猎空之翼兑换币/small.png',
  '猎空之翼兑换币×18': 'images/items_box/猎空之翼兑换币/small.png',
  '猎空之翼兑换币×12': 'images/items_box/猎空之翼兑换币/small.png',
  '猎空之翼兑换币×10': 'images/items_box/猎空之翼兑换币/small.png',
  '猎空之翼兑换币×8': 'images/items_box/猎空之翼兑换币/small.png',
  '猎空之翼兑换币×3': 'images/items_box/猎空之翼兑换币/small.png',
  '猎空之翼兑换币×2': 'images/items_box/猎空之翼兑换币/small.png',
  '猎空之翼兑换币×1': 'images/items_box/猎空之翼兑换币/small.png',
};


// SLOT_IMAGES
window.SLOT_IMAGES = {
  white: '../images/common/slot/white.png',
  purple: '../images/common/slot/purple.png',
  gold: '../images/common/slot/gold.png',
  red: '../images/common/slot/red.png'
};

// SHOWCASE_IMAGES
window.SHOWCASE_IMAGES = {
  '王者幻神': '../images/items_box/王者幻神/showcase.png',
  '王者幻神-猎空之翼': '../images/items_box/王者幻神-猎空之翼/showcase.png',
};

// SHOWCASE_BG_IMAGES
window.SHOWCASE_BG_IMAGES = {
  '王者幻神': {
    bgStart: '../images/common/animation_bg/bg_start.webp',
    bgButton: '../images/common/animation_bg/bg_button_noname.webp'
  },
  '王者幻神-猎空之翼': {
    bgStart: '../images/common/animation_bg/bg_start.webp',
    bgButton: '../images/common/animation_bg/bg_button_noname.webp'
  },
};

// EXCHANGE_ITEMS_MAP
window.EXCHANGE_ITEMS_MAP = {
  '王者幻神': {image: '../images/items_box/王者幻神/small.png', quality: 'gold'},
  '王者幻神-猎空之翼': {image: '../images/items_box/王者幻神-猎空之翼/small.png', quality: 'gold'},
  '狙击枪线-猎空之翼': {image: '../images/items_box/狙击枪线-猎空之翼/small.png', quality: 'gold'},
  '王者幻神-猎空之触': {image: '../images/items_box/王者幻神-猎空之触/small.png', quality: 'gold'},
  '王者幻神-猎空之殇': {image: '../images/items_box/王者幻神-猎空之殇/small.png', quality: 'gold'},
  '王者幻神-猎空之印': {image: '../images/items_box/王者幻神-猎空之印/small.png', quality: 'gold'},
  '猎空之翼挂饰': {image: '../images/items_box/猎空之翼挂饰/small.png', quality: 'gold'},
  '击杀图标-猎空之翼1': {image: '../images/items_box/击杀图标-猎空之翼1/small.png', quality: 'gold'},
  '击杀图标-猎空之翼2': {image: '../images/items_box/击杀图标-猎空之翼2/small.png', quality: 'gold'},
};

// 根据道具名称或ID查找道具信息
window.findExchangeItem = function(product) {
  if (window.EXCHANGE_ITEMS_MAP[product]) {
    return window.EXCHANGE_ITEMS_MAP[product];
  }
  for (var key in window.EXCHANGE_ITEMS_MAP) {
    if (window.EXCHANGE_ITEMS_MAP[key].name === product) {
      return window.EXCHANGE_ITEMS_MAP[key];
    }
  }
  return {image: '', quality: 'gold', name: product};
};


// 构建按名称索引的ITEM_MAPPING（用于二选一奖励等场景）
window.ITEM_MAPPING = {};
(function(){
  if(!window.EXCHANGE_ITEMS_MAP) return;
  for (var key in window.EXCHANGE_ITEMS_MAP) {
    if (window.EXCHANGE_ITEMS_MAP.hasOwnProperty(key)) {
      var item = window.EXCHANGE_ITEMS_MAP[key];
      if (item && item.name) {
        window.ITEM_MAPPING[item.name] = {
          image: item.image,
          quality: item.quality,
          showcase: item.showcase
        };
      }
    }
  }
})();

var ITEM_BEHAVIOR = {
  '王者幻神': {
    quality: 'gold',
    has_showcase: true,
    gacha_behavior: 'storage',
    bonus_behavior: 'warehouse',
  },
  '王者幻神-猎空之翼': {
    quality: 'gold',
    has_showcase: true,
    gacha_behavior: 'storage',
    bonus_behavior: 'warehouse',
  },
  '狙击枪线-猎空之翼': {
    quality: 'gold',
    has_showcase: false,
    gacha_behavior: 'storage',
    bonus_behavior: 'warehouse',
  },
  '王者幻神-猎空之翼-原汁原味': {
    quality: 'gold',
    has_showcase: false,
    gacha_behavior: 'storage',
    bonus_behavior: 'warehouse',
  },
  '王者幻神-现代战场': {
    quality: 'gold',
    has_showcase: false,
    gacha_behavior: 'storage',
    bonus_behavior: 'warehouse',
  },
  '王者幻神-量子谐波': {
    quality: 'gold',
    has_showcase: false,
    gacha_behavior: 'storage',
    bonus_behavior: 'warehouse',
  },
  '猎空之翼挂饰': {
    quality: 'gold',
    has_showcase: false,
    gacha_behavior: 'storage',
    bonus_behavior: 'warehouse',
  },
  '王者幻神-猎空之触': {
    quality: 'gold',
    has_showcase: false,
    gacha_behavior: 'storage',
    bonus_behavior: 'warehouse',
  },
  '王者幻神-猎空之殇': {
    quality: 'gold',
    has_showcase: false,
    gacha_behavior: 'storage',
    bonus_behavior: 'warehouse',
  },
  '王者幻神-猎空之印': {
    quality: 'gold',
    has_showcase: false,
    gacha_behavior: 'storage',
    bonus_behavior: 'warehouse',
  },
  '击杀图标-猎空之翼1': {
    quality: 'gold',
    has_showcase: false,
    gacha_behavior: 'storage',
    bonus_behavior: 'warehouse',
  },
  '击杀图标-猎空之翼2': {
    quality: 'gold',
    has_showcase: false,
    gacha_behavior: 'storage',
    bonus_behavior: 'warehouse',
  },
  '520喷漆': {
    quality: 'gold',
    has_showcase: false,
    gacha_behavior: 'storage',
    bonus_behavior: 'warehouse',
  },
  '猎空之翼兑换币': {
    quality: 'purple',
    has_showcase: false,
    gacha_behavior: 'points',
    bonus_behavior: 'points',
    points_type: 'exchange',
    points_amount: 1,
  },
  '猎空之翼兑换币×88': {
    quality: 'purple',
    has_showcase: false,
    gacha_behavior: 'points',
    bonus_behavior: 'points',
    points_type: 'exchange',
    points_amount: 88,
  },
  '猎空之翼兑换币×66': {
    quality: 'purple',
    has_showcase: false,
    gacha_behavior: 'points',
    bonus_behavior: 'points',
    points_type: 'exchange',
    points_amount: 66,
  },
  '猎空之翼兑换币×30': {
    quality: 'purple',
    has_showcase: false,
    gacha_behavior: 'points',
    bonus_behavior: 'points',
    points_type: 'exchange',
    points_amount: 30,
  },
  '猎空之翼兑换币×18': {
    quality: 'purple',
    has_showcase: false,
    gacha_behavior: 'points',
    bonus_behavior: 'points',
    points_type: 'exchange',
    points_amount: 18,
  },
  '猎空之翼兑换币×12': {
    quality: 'purple',
    has_showcase: false,
    gacha_behavior: 'points',
    bonus_behavior: 'points',
    points_type: 'exchange',
    points_amount: 12,
  },
  '猎空之翼兑换币×10': {
    quality: 'purple',
    has_showcase: false,
    gacha_behavior: 'points',
    bonus_behavior: 'points',
    points_type: 'exchange',
    points_amount: 10,
  },
  '猎空之翼兑换币×8': {
    quality: 'purple',
    has_showcase: false,
    gacha_behavior: 'points',
    bonus_behavior: 'points',
    points_type: 'exchange',
    points_amount: 8,
  },
  '猎空之翼兑换币×3': {
    quality: 'purple',
    has_showcase: false,
    gacha_behavior: 'points',
    bonus_behavior: 'points',
    points_type: 'exchange',
    points_amount: 3,
  },
  '猎空之翼兑换币×2': {
    quality: 'purple',
    has_showcase: false,
    gacha_behavior: 'points',
    bonus_behavior: 'points',
    points_type: 'exchange',
    points_amount: 2,
  },
  '猎空之翼兑换币×1': {
    quality: 'purple',
    has_showcase: false,
    gacha_behavior: 'points',
    bonus_behavior: 'points',
    points_type: 'exchange',
    points_amount: 1,
  },
};
