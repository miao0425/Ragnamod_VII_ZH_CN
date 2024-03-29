onEvent('item.registry', e => {
	//Complete Prediction
	function completePrediction(mob, name, color) {
		e.create('hostilenetworks:' + mob + '_complete_prediction')
			.displayName('完整的' + name + '预测')
			.textureJson({ layer0: 'ragnamod_seven:item/completed_prediction' })
			.color(0, color)
			.glow(true)
			.maxStackSize(1);
	}

	completePrediction('bat', '蝙蝠', '#594b30');
	completePrediction('bee', '蜜蜂', '#f7bd28');
	completePrediction('blaze', '烈焰人', '#FFD528');
	completePrediction('armored_frost_spirit', '裹冰霜灵', '#7a9bd8');
	completePrediction('artificial_golem', '人造傀儡', '#4b77c9');
	completePrediction('azulfo', '阿祖福牛', '#415d7f');
	completePrediction('cosmic_fox', '宇宙狐', '#9c56ea');
	completePrediction('crogre', '克罗格蛙', '#9a957a');
	completePrediction('crynocerous', '冰晶犀牛', '#6e9aea');
	completePrediction('crystal_camel', '水晶骆驼', '#838f9d');
	completePrediction('diophyde_prowler', '徘徊雪狼', '#26916a');
	completePrediction('emberback', '余烬虫', '#070b13');
	completePrediction('firefly', '火蝇', '#b54026');
	completePrediction('frost_spirit', '霜灵', '#83adfa');
	completePrediction('infested_swarmer', '异化蚂蚁', '#5a7884');
	completePrediction('nyctofly', '夜凌蜻蜓', '#412d57');
	completePrediction('polargeist', '极地雪熊', '#78a2b0');
	completePrediction('reindeer', '雪鹿', '#615ee0');
	completePrediction('seclam', '海蛎子', '#b2575e');
	completePrediction('shade_monitor', '岩蜥', '#2c4835');
	completePrediction('shrumpty', '雪帽蘑菇人', '#68b5d7');
	completePrediction('snow_owl', '雪鸮', '#c9deeb');
	completePrediction('stardust_ram', '星尘羊', '#64bcc0');
	completePrediction('stonelet', '石人', '#388462');
	completePrediction('venom_spider', '猛毒蜘蛛', '#2c4835');
	completePrediction('chicken', '鸡', '#aaaaaa');
	completePrediction('cow', '牛', '#6e563a');
	completePrediction('creeper', '苦力怕', '#70DC5D');
	completePrediction('doppleganger', '盖亚守护者', '#edb2c7');
	completePrediction('drowned', '溺尸', '#84dfc7');
	completePrediction('ender_dragon', '末影龙', '#CC00CC');
	completePrediction('enderman', '末影人', '#161616');
	completePrediction('ghast', '恶魂', '#F0F0F0');
	completePrediction('glow_squid', '发光鱿鱼', '#4adbb8');
	completePrediction('guardian', '守卫者', '#6A9583');
	completePrediction('hoglin', '疣猪兽', '#e28166');
	completePrediction('blackstone_dwarf', '黑石侏儒', '#18181a');
	completePrediction('blindsight', '黑石盲蛙', '#82713c');
	completePrediction('embody', '嗜骨沙鬼', '#6a8eaa');
	completePrediction('glowsilk_moth', '荧丝蛾', '#e0ae63');
	completePrediction('glowsquito', '荧光蚊', '#fcc35a');
	completePrediction('shroomloin', '绯红菌灵', '#cb222e');
	completePrediction('voline', '熔岩吞噬兽', '#4f1f28');
	completePrediction('warpbeetle', '诡异甲虫', '#62ca81');
	completePrediction('magma_cube', '岩浆怪', '#CC2200');
	completePrediction('mooshroom', '哞菇', '#b22f30');
	completePrediction('panda', '熊猫', '#4c4c4c');
	completePrediction('pig', '猪', '#fcabab');
	completePrediction('rabbit', '兔子', '#daad73');
	completePrediction('sheep', '绵羊', '#c3c3c3');
	completePrediction('skeleton', '骷髅', '#BCBCBC');
	completePrediction('slime', '史莱姆', '#7BCA62');
	completePrediction('snow_golem', '雪傀儡', '#e5f5f5');
	completePrediction('spider', '蜘蛛', '#322B26');
	completePrediction('squid', '鱿鱼', '#536c7e');
	completePrediction('stray', '流浪者', '#799b9d');
	completePrediction('turtle', '海龟', '#46bd49');
	completePrediction('brute', '粗野兽', '#5b4e42');
	completePrediction('dweller', '居存者', '#ce8d65');
	completePrediction('forgotten_guardian', '遗忆守卫', '#68d8a0');
	completePrediction('gloomper', '困跳者', '#5c455e');
	completePrediction('mog', '青豕', '#728d27');
	completePrediction('muncher', '巨嘴兽', '#c0431f');
	completePrediction('rotbeast', '腐衰凶兽', '#fc6655');
	completePrediction('rotling', '腐衰微体', '#fc6655');
	completePrediction('rotwalker', '腐衰行者', '#fc6655');
	completePrediction('scintling', '微光蚙娫', '#7c7960');
	completePrediction('sploogie', '吐射者', '#957c6a');
	completePrediction('stoneborn', '石生体', '#3d4e35');
	completePrediction('warden', '坚守者', '#009093');
	completePrediction('witch', '女巫', '#361758');
	completePrediction('wither_skeleton', '凋灵骷髅', '#343434');
	completePrediction('wither', '凋零', '#343434');
	completePrediction('zombie', '僵尸', '#3B622F');
	completePrediction('zombified_piglin', '僵尸猪灵', '#3B992F');
	completePrediction('ars_wilden', '荒野族裔', '#55FF55');
	completePrediction('cod', '鳕鱼', '#A52A2A');
	completePrediction('elder_guardian', '远古守卫者', '#CBB1A5');
	completePrediction('evoker', '唤魔者', '#BCA341');
	completePrediction('iron_golem', '铁傀儡', '#CFB198');
	completePrediction('phantom', '幻翼', '#0AB405');
	completePrediction('polar_bear', '北极熊', '#CCCCCC');
	completePrediction('shulker', '潜影贝', '#976797');
	completePrediction('basalz', '岩石人', '#292C2F');
	completePrediction('blitz', '狂风人', '#858F8E');
	completePrediction('blizz', '暴雪人', '#1E6389');
	completePrediction('vindicator', '卫道士', '#325566');
	completePrediction('alpha_yeti', '雪怪首领', '#E1E1E1');
	completePrediction('carminite_golem', '砷铅铁傀儡', '#D3C4BA');
	completePrediction('death_tome', '死灵书', '#72381B');
	completePrediction('deer', '野鹿', '#4B241D');
	completePrediction('fire_beetle', '喷火甲虫', '#CC7526');
	completePrediction('twilight_giant', '巨人', '#444444');
	completePrediction('twilight_goblin', '链锤哥布林 ', '#2143FE');
	completePrediction('helmet_crab', '寄居蟹', '#FFA96F');
	completePrediction('hydra', '九头蛇', '#0F253E');
	completePrediction('kobold', '狗头人', '#2F1AB1');
	completePrediction('lich', '巫妖', '#34125E');
	completePrediction('minoshroom', '米诺菇', '#A81012');
	completePrediction('minotaur', '牛头人', '#443626');
	completePrediction('naga', '娜迦', '#55FF55');
	completePrediction('raven', '乌鸦', '#121922');
	completePrediction('redcap', '红帽地精', '#AA2A2A');
	completePrediction('skeleton_druid', '骷髅德鲁伊', '#415329');
	completePrediction('snow_queen', '冰雪女王', '#363990');
	completePrediction('twilight_ice', '冰晶', '#55FF55');
	completePrediction('mimic', '宝箱怪', '#55FF55');
	completePrediction('towerwood_borer', '塔木蛀虫', '#6F3327');
	completePrediction('troll', '洞穴巨魔', '#A0A791');
	completePrediction('ur_ghast', '暮初恶魂', '#F0F0F0');
	completePrediction('winter_wolf', '寒冬狼', '#AFB8C3');
	completePrediction('wraith', '幽灵', '#111010');
	completePrediction('yeti', '雪怪', '#4570B6');
});
