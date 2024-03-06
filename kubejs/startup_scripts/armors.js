onEvent('item.registry', event => {
	//征服Armor
	event
		.create('ragnamod_seven:conquest_helmet', 'helmet')
		.displayName('征服头盔')
		.tier('conquest')
		.maxDamage(10000);
	event
		.create('ragnamod_seven:conquest_chestplate', 'chestplate')
		.displayName('征服胸甲')
		.tier('conquest')
		.maxDamage(10000);
	event
		.create('ragnamod_seven:conquest_leggings', 'leggings')
		.displayName('征服护腿')
		.tier('conquest')
		.maxDamage(10000);
	event
		.create('ragnamod_seven:conquest_boots', 'boots')
		.displayName('征服靴子')
		.tier('conquest')
		.maxDamage(10000);

	//战争Armor
	event
		.create('ragnamod_seven:war_helmet', 'helmet')
		.displayName('战争头盔')
		.tier('war')
		.maxDamage(10000);
	event
		.create('ragnamod_seven:war_chestplate', 'chestplate')
		.displayName('战争胸甲')
		.tier('war')
		.maxDamage(10000);
	event
		.create('ragnamod_seven:war_leggings', 'leggings')
		.displayName('战争护腿')
		.tier('war')
		.maxDamage(10000);
	event
		.create('ragnamod_seven:war_boots', 'boots')
		.displayName('战争靴子')
		.tier('war')
		.maxDamage(10000);

	//饥荒Armor
	event
		.create('ragnamod_seven:famine_helmet', 'helmet')
		.displayName('饥荒头盔')
		.tier('famine')
		.maxDamage(10000);
	event
		.create('ragnamod_seven:famine_chestplate', 'chestplate')
		.displayName('饥荒胸甲')
		.tier('famine')
		.maxDamage(10000);
	event
		.create('ragnamod_seven:famine_leggings', 'leggings')
		.displayName('饥荒护腿')
		.tier('famine')
		.maxDamage(10000);
	event
		.create('ragnamod_seven:famine_boots', 'boots')
		.displayName('饥荒靴子')
		.tier('famine')
		.maxDamage(10000);

	//死亡Armor
	event
		.create('ragnamod_seven:death_helmet', 'helmet')
		.displayName('死亡头盔')
		.tier('death')
		.maxDamage(10000);
	event
		.create('ragnamod_seven:death_chestplate', 'chestplate')
		.displayName('死亡胸甲')
		.tier('death')
		.maxDamage(10000);
	event
		.create('ragnamod_seven:death_leggings', 'leggings')
		.displayName('死亡护腿')
		.tier('death')
		.maxDamage(10000);
	event
		.create('ragnamod_seven:death_boots', 'boots')
		.displayName('死亡靴子')
		.tier('death')
		.maxDamage(10000);
});

onEvent('item.registry.armor_tiers', event => {
	event.add('conquest', tier => {
		tier.durabilityMultiplier = 15;
		tier.slotProtections = [5, 10, 8, 4];
		tier.enchantmentValue = 20;
		tier.equipSound = 'minecraft:item.armor.equip_netherite';
		tier.repairIngredient = 'minecraft:iron';
		tier.toughness = 20.0;
		tier.knockbackResistance = 1.5;
	});
	event.add('war', tier => {
		tier.durabilityMultiplier = 15;
		tier.slotProtections = [5, 10, 8, 4];
		tier.enchantmentValue = 20;
		tier.equipSound = 'minecraft:item.armor.equip_netherite';
		tier.repairIngredient = 'minecraft:iron';
		tier.toughness = 20.0;
		tier.knockbackResistance = 1.5;
	});
	event.add('famine', tier => {
		tier.durabilityMultiplier = 15;
		tier.slotProtections = [5, 10, 8, 4];
		tier.enchantmentValue = 20;
		tier.equipSound = 'minecraft:item.armor.equip_netherite';
		tier.repairIngredient = 'minecraft:iron';
		tier.toughness = 20.0;
		tier.knockbackResistance = 1.5;
	});
	event.add('death', tier => {
		tier.durabilityMultiplier = 15;
		tier.slotProtections = [5, 10, 8, 4];
		tier.enchantmentValue = 20;
		tier.equipSound = 'minecraft:item.armor.equip_netherite';
		tier.repairIngredient = 'minecraft:iron';
		tier.toughness = 20.0;
		tier.knockbackResistance = 1.5;
	});
});
