onEvent('jei.hide.items', e => {
	e.hide([
		/botanypots(tiers:(elite|ultra|creative)_|:).+_(terracotta|concrete)(_hopper)?_botany_pot/,
		/chickens:liquid_egg/,
		/chickens:spawn_egg/,
		/tconstruct:part_builder/,
		/tconstruct:tinker_station/,
		/tconstruct:crafting_station/,
		/tconstruct:pickaxe/,
		/tconstruct:sledge_hammer/,
		/tconstruct:vein_hammer/,
		/tconstruct:mattock/,
		/tconstruct:pickadze/,
		/tconstruct:excavator/,
		/tconstruct:hand_axe/,
		/tconstruct:broad_axe/,
		/tconstruct:kama/,
		/tinkers_reforged:greatsword/,
		/tinkers_reforged:frying_pan/,
		/tconstruct:cleaver/,
		/tconstruct:sword/,
		/tconstruct:scythe/,
		/tconstruct:dagger/,
		/tinkers_reforged:cast/,
		/tconstruct:longbow/,
		/tconstruct:crossbow/,
		/materialis:wrench/,
		/tinker_rapier:rapier_tic/,
		/tinker_rapier:estoc_tic/,
		/ftbic:fluid_cell/,
		/evilcraft:dark_tank/,
		/ae2:facade/,
		/titanium:/,
		/trofers:/,
		Item.of(
			'mekanism:creative_fluid_tank',
			'{mekData:{FluidTanks:[{Tank:0b,stored:{Amount:2147483647,FluidName:"tconstruct:honey"}}]}}'
		),
		Item.of(
			'mekanism:creative_fluid_tank',
			'{mekData:{FluidTanks:[{Tank:0b,stored:{Amount:2147483647,FluidName:"cofh_core:honey"}}]}}'
		),
		Item.of(
			'mekanism:creative_fluid_tank',
			'{mekData:{FluidTanks:[{Tank:0b,stored:{Amount:2147483647,FluidName:"beyond_earth:oil"}}]}}'
		),
		Item.of(
			'mekanism:creative_fluid_tank',
			'{mekData:{FluidTanks:[{Tank:0b,stored:{Amount:2147483647,FluidName:"pneumaticcraft:oil"}}]}}'
		),
		Item.of(
			'mekanism:creative_fluid_tank',
			'{mekData:{FluidTanks:[{Tank:0b,stored:{Amount:2147483647,FluidName:"thermal:crude_oil"}}]}}'
		),
		Item.of('twilightdelight:ironwood_knife', '{Damage:0}').enchant(
			'minecraft:knockback',
			1
		),
		Item.of('twilightdelight:steeleaf_knife', '{Damage:0}').enchant(
			'minecraft:looting',
			2
		),
		Item.of(
			'patchouli:guide_book',
			'{"patchouli:book":"sebastrnlib:sebastrn_mods_guide_book"}'
		),
		'thermal:crude_oil_bucket',
		'pneumaticcraft:oil_bucket',
		'tconstruct:honey_bucket',
		'mekanism:ingot_steel',
		'immersiveengineering:ingot_steel',
		'chemlib:osmium_ingot',
		'ftbic:enderium_ingot',
		'chemlib:iridium_ingot',
		'chemlib:zinc_ingot',
		'immersiveengineering:ingot_electrum',
		'immersiveengineering:ingot_constantan',
		'ftbic:uranium_ingot',
		'ftbic:aluminum_ingot',
		'chemlib:nickel_ingot',
		'ftbic:bronze_ingot',
		'mekanism:ingot_bronze',
		'immersiveengineering:ingot_nickel',
		'immersiveengineering:ingot_aluminum',
		'immersiveengineering:ingot_uranium',
		'mekanism:ingot_tin',
		'chemlib:aluminum_ingot',
		'chemlib:uranium_ingot',
		'chemlib:tin_ingot',
		'ftbic:tin_ingot',
		'chemlib:lead_ingot',
		'ftbic:lead_ingot',
		'mekanism:ingot_lead',
		'immersiveengineering:ingot_lead',
		'chemlib:silver_ingot',
		'darkerdepths:silver_ingot',
		'occultism:silver_ingot',
		'immersiveengineering:ingot_silver',
		'immersiveengineering:nugget_copper',
		'tconstruct:copper_nugget',
		'ftbic:copper_nugget',
		'thermal:copper_nugget',
		'chemlib:lead_nugget',
		'immersiveengineering:nugget_constantan',
		'immersiveengineering:nugget_electrum',
		'chemlib:osmium_nugget',
		'tconstruct:netherite_nugget',
		'chemlib:zinc_nugget',
		'chemlib:iridium_nugget',
		'ftbic:enderium_nugget',
		'chemlib:tin_nugget',
		'chemlib:uranium_nugget',
		'chemlib:silver_nugget',
		'ftbic:aluminum_nugget',
		'mekanism:nugget_lead',
		'chemlib:aluminum_nugget',
		'immersiveengineering:nugget_silver',
		'ftbic:tin_nugget',
		'ftbic:uranium_nugget',
		'immersiveengineering:nugget_uranium',
		'mekanism:nugget_tin',
		'occultism:silver_nugget',
		'immersiveengineering:nugget_aluminum',
		'immersiveengineering:nugget_lead',
		'mekanism:nugget_bronze',
		'immersiveengineering:nugget_steel',
		'immersiveengineering:nugget_nickel',
		'ftbic:bronze_nugget',
		'mekanism:nugget_steel',
		'chemlib:nickel_nugget',
		'ftbic:lead_nugget',
		'occultism:silver_dust',
		'ftbic:aluminum_dust',
		'ftbic:uranium_dust',
		'immersiveengineering:dust_lead',
		'chemlib:copper_dust',
		'occultism:copper_dust',
		'ftbic:gold_dust',
		'immersiveengineering:dust_iron',
		'chemlib:iron_dust',
		'chemlib:nickel_dust',
		'chemlib:iridium_dust',
		'immersiveengineering:dust_constantan',
		'immersiveengineering:dust_electrum',
		'mekanism:dust_bronze',
		'mekanism:dust_sulfur',
		'mekanism:dust_diamond',
		'createaddition:diamond_grit',
		'bloodmagic:coalsand',
		'chemlib:tin_dust',
		'ftbic:tin_dust',
		'ftbic:copper_dust',
		'chemlib:gold_dust',
		'occultism:iron_dust',
		'ftbic:iron_dust',
		'occultism:gold_dust',
		'immersiveengineering:dust_copper',
		'immersiveengineering:dust_gold',
		'ftbic:lead_dust',
		'chemlib:lead_dust',
		'chemlib:uranium_dust',
		'chemlib:aluminum_dust',
		'chemlib:silver_dust',
		'immersiveengineering:dust_uranium',
		'immersiveengineering:dust_aluminum',
		'immersiveengineering:dust_silver',
		'ftbic:coal_dust',
		'mekanism:dust_tin',
		'mekanism:dust_gold',
		'mekanism:dust_copper',
		'mekanism:dust_lead',
		'mekanism:dust_iron',
		'bloodmagic:ironsand',
		'bloodmagic:goldsand',
		'bloodmagic:coppersand',
		'immersiveengineering:dust_nickel',
		'ftbic:bronze_dust',
		'ftbic:diamond_dust',
		'chemlib:sulfur_dust',
		'mekanism:dust_quartz',
		'mekanism:dust_netherite',
		'mekanism:dust_charcoal',
		'immersiveengineering:dust_steel',
		'chemlib:osmium_dust',
		'thermal:ender_pearl_dust',
		'ftbic:ender_dust',
		'miniutilities:ender_dust',
		'ftbic:obsidian_dust',
		'mekanism:dust_obsidian',
		'occultism:obsidian_dust',
		'ftbic:enderium_dust',
		'immersiveengineering:dust_wood',
		'mekanism:sawdust',
		'mekanism:dust_emerald',
		'mekanism:dust_lapis_lazuli',
		'immersiveengineering:dust_sulfur',
		'immersiveengineering:deepslate_ore_lead',
		'immersiveengineering:deepslate_ore_aluminum',
		'occultism:silver_ore_deepslate',
		'occultism:silver_ore',
		'immersiveengineering:ore_aluminum',
		'immersiveengineering:ore_lead',
		'immersiveengineering:ore_uranium',
		'mekanism:tin_ore',
		'immersiveengineering:ore_nickel',
		'ftbic:deepslate_lead_ore',
		'darkerdepths:silver_ore',
		'ftbic:lead_ore',
		'ftbic:deepslate_tin_ore',
		'ftbic:deepslate_uranium_ore',
		'mekanism:deepslate_lead_ore',
		'ftbic:deepslate_aluminum_ore',
		'immersiveengineering:deepslate_ore_silver',
		'immersiveengineering:ore_silver',
		'ftbic:aluminum_ore',
		'mekanism:lead_ore',
		'ftbic:uranium_ore',
		'ftbic:tin_ore',
		'immersiveengineering:deepslate_ore_nickel',
		'mekanism:deepslate_tin_ore',
		'immersiveengineering:deepslate_ore_uranium',
		'mekanism:raw_lead',
		'mekanism:raw_tin',
		'ftbic:tin_chunk',
		'immersiveengineering:raw_lead',
		'ftbic:aluminum_chunk',
		'ftbic:uranium_chunk',
		'occultism:raw_silver',
		'darkerdepths:raw_silver',
		'ftbic:lead_chunk',
		'immersiveengineering:raw_silver',
		'immersiveengineering:raw_nickel',
		'immersiveengineering:raw_uranium',
		'immersiveengineering:raw_aluminum',
		'compactmachines:solid_wall',
		'compactmachines:chunkloader_upgrade',
		'thermal:tin_plate',
		'immersiveengineering:plate_nickel',
		'immersiveengineering:plate_copper',
		'chemlib:gold_plate',
		'chemlib:copper_plate',
		'chemlib:nickel_plate',
		'chemlib:aluminum_plate',
		'chemlib:zinc_plate',
		'chemlib:silver_plate',
		'immersiveengineering:plate_silver',
		'immersiveengineering:plate_electrum',
		'immersiveengineering:plate_constantan',
		'beyond_earth:iron_plate',
		'create:copper_sheet',
		'thermal:copper_plate',
		'create:iron_sheet',
		'immersiveengineering:plate_iron',
		'thermal:iron_plate',
		'thermal:gold_plate',
		'immersiveengineering:plate_gold',
		'create:golden_sheet',
		'chemlib:iron_plate',
		'chemlib:tin_plate',
		'chemlib:iridium_plate',
		'thermal:lead_plate',
		'chemlib:lead_plate',
		'chemlib:uranium_plate',
		'immersiveengineering:plate_lead',
		'thermal:bronze_plate',
		'immersiveengineering:plate_uranium',
		'immersiveengineering:plate_aluminum',
		'thermal:enderium_plate',
		'immersiveposts:stick_lead',
		'immersiveposts:stick_uranium',
		'immersiveengineering:stick_aluminum',
		'createaddition:gold_rod',
		'createaddition:iron_rod',
		'createaddition:copper_rod',
		'immersiveposts:stick_copper',
		'immersiveengineering:stick_iron',
		'immersiveposts:stick_gold',
		'createaddition:copper_wire',
		'createaddition:gold_wire',
		'ftbic:iron_gear',
		'ftbic:gold_gear',
		'ftbic:copper_gear',
		'ftbic:enderium_gear',
		'industrialforegoing:gold_gear',
		'industrialforegoing:iron_gear',
		'industrialforegoing:diamond_gear',
		'ftbic:tin_gear',
		'ftbic:lead_gear',
		'ftbic:bronze_gear',
		'immersiveengineering:wire_copper',
		'immersiveengineering:wire_aluminum',
		'avaritia:silver_singularity',
		'avaritia:lead_singularity',
		'avaritia:tin_singularity',
		'avaritia:copper_singularity',
		'avaritia:quartz_singularity',
		'avaritia:redstone_singularity',
		'avaritia:lapis_singularity',
		'avaritia:gold_singularity',
		'avaritia:iron_singularity',
		'avaritia:nickel_singularity',
		'avaritia:diamond_singularity',
		'avaritia:emerald_singularity',
		'avaritia:fluxed_singularity',
		'avaritia:platinum_singularity',
		'avaritia:iridium_singularity',
		'avaritia:netherite_singularity',
		'avaritia:amethyst_singularity',
		'immersivepetroleum:bitumen',
		'immersiveengineering:slag',
		'immersiveengineering:coal_coke',
		'avaritia:cosmic_meatballs',
		'tempad:he_who_remains_tempad',
		'reliquary:bat_wing',
		'architects_palette:withered_bone',
		'tconstruct:necrotic_bone',
		'chemlib:lithium_dust',
		'createaddition:electrum_wire',
		'createaddition:electrum_rod',
		'createaddition:electrum_ingot',
		'createaddition:electrum_sheet',
		'createaddition:electrum_nugget',
		'sophisticatedstorage:debug_tool',
		'ironfurnaces:upgrade_silver',
		'ironfurnaces:upgrade_copper',
		'ironfurnaces:upgrade_netherite',
		'ironfurnaces:upgrade_crystal',
		'ironfurnaces:upgrade_obsidian',
		'ironfurnaces:upgrade_emerald',
		'ironfurnaces:upgrade_diamond',
		'ironfurnaces:upgrade_gold',
		'ironfurnaces:upgrade_iron',
		'ironfurnaces:upgrade_gold2',
		'ironfurnaces:upgrade_silver2',
		'ironfurnaces:upgrade_iron2',
		'ironfurnaces:upgrade_obsidian2',
		'summoningrituals:indestructible_altar',
		'beyond_earth:iron_stick',
		'ftbic:advanced_powered_furnace',
		'ftbic:advanced_macerator',
		'ftbic:advanced_centrifuge',
		'ftbic:advanced_compressor',
		'ftbic:teleporter',
		'ftbic:powered_crafting_table',
		'ironfurnaces:augment_xp',
		'ae2:silicon',
		'miniutilities:gold_angel_ring',
		'miniutilities:ender_dragon_angel_ring',
		'miniutilities:feather_angel_ring',
		'miniutilities:bat_angel_ring',
		'miniutilities:peacock_angel_ring',
		'custommachinery:machine_creator_item',
		'custommachinery:structure_creator',
		'custommachinery:box_creator_item',
		'beyond_earth:oil_bucket',
		'miniutilities:cursed_earth',
		'miniutilities:blessed_earth',
		'miniutilities:blursed_earth',
		'ragnamod_seven:black_sphere',
		'ftbquests:missing_item',
		'pneumaticcraft:creative_upgrade',
		'modularrouters:creative_module',
		'create:creative_crate',
		'ragnamod_seven:creative_augment_base',
		'ragnamod_seven:ae2',
		'chemlib:cobalt_nugget',
		'chemlib:cobalt_ingot',
		'hostilenetworks:deep_learner',
		'chickens:soul_chicken',
		'twilightdelight:fiery_knife',
		'twilightdelight:knightmetal_knife',
		'ae2additions:disk_item_256k',
		'appmek:creative_chemical_cell',
		'ae2:creative_fluid_cell',
		'appbot:creative_mana_cell',
		'avaritia:extreme_crafting_table',
		'gemsnjewels:peridot_deepslate_ore_block',
		'gemsnjewels:topaz_deepslate_ore_block',
		'gemsnjewels:garnet_deepslate_ore_block',
		'gemsnjewels:opal_deepslate_ore_block',
		'gemsnjewels:amethyst_deepslate_ore_block',
		'gemsnjewels:sapphire_deepslate_ore_block',
		'gemsnjewels:ruby_deepslate_ore_block',
		'gemsnjewels:emerald_deepslate_ore_block',
		'gemsnjewels:pale_diamond_deepslate_ore_block',
		'gemsnjewels:iolite_deepslate_ore_block',
		'gemsnjewels:kunzite_deepslate_ore_block',
		'gemsnjewels:ametrine_deepslate_ore_block',
		'gemsnjewels:morganite_deepslate_ore_block',
		'gemsnjewels:citrine_deepslate_ore_block',
		'gemsnjewels:black_opal_deepslate_ore_block',
		'gemsnjewels:spinel_deepslate_ore_block',
		'gemsnjewels:tourmaline_deepslate_ore_block',
		'gemsnjewels:tanzanite_deepslate_ore_block',
		'gemsnjewels:alexandrite_deepslate_ore_block',
		'gemsnjewels:zircon_deepslate_ore_block',
		'gemsnjewels:aquamarine_deepslate_ore_block',
		'gemsnjewels:topaz_nether_ore_block',
		'gemsnjewels:garnet_nether_ore_block',
		'gemsnjewels:opal_nether_ore_block',
		'gemsnjewels:amethyst_nether_ore_block',
		'gemsnjewels:sapphire_nether_ore_block',
		'gemsnjewels:ruby_nether_ore_block',
		'gemsnjewels:emerald_nether_ore_block',
		'gemsnjewels:diamond_nether_ore_block',
		'gemsnjewels:pale_diamond_nether_ore_block',
		'gemsnjewels:v_emerald_nether_ore_block',
		'gemsnjewels:iolite_nether_ore_block',
		'gemsnjewels:kunzite_nether_ore_block',
		'gemsnjewels:ametrine_nether_ore_block',
		'gemsnjewels:morganite_nether_ore_block',
		'gemsnjewels:citrine_nether_ore_block',
		'gemsnjewels:black_opal_nether_ore_block',
		'gemsnjewels:spinel_nether_ore_block',
		'gemsnjewels:tourmaline_nether_ore_block',
		'gemsnjewels:tanzanite_nether_ore_block',
		'gemsnjewels:alexandrite_nether_ore_block',
		'gemsnjewels:zircon_nether_ore_block',
		'gemsnjewels:aquamarine_nether_ore_block',
		'gemsnjewels:peridot_nether_ore_block',
	])
})

onEvent('jei.add.items', e => {
	e.add([
		Item.of('tconstruct:part_builder', '{texture:"minecraft:oak_planks"}'),
		Item.of('tconstruct:tinker_station', '{texture:"minecraft:oak_planks"}'),
		Item.of('tconstruct:crafting_station', '{texture:"minecraft:oak_log"}'),
		Item.of('ae2:facade', '{item:"minecraft:stone"}'),
		'evilcraft:dark_tank',
		'ftbic:fluid_cell',
		'tconstruct:longbow',
		'tconstruct:crossbow',
		'tconstruct:pickaxe',
		'tconstruct:sledge_hammer',
		'tconstruct:vein_hammer',
		'tconstruct:mattock',
		'tconstruct:pickadze',
		'tconstruct:excavator',
		'tconstruct:hand_axe',
		'tconstruct:broad_axe',
		'tconstruct:kama',
		'tinkers_reforged:greatsword',
		'tinkers_reforged:frying_pan',
		'tconstruct:cleaver',
		'tconstruct:sword',
		'tconstruct:scythe',
		'tconstruct:dagger',
		'materialis:wrench',
		'tinker_rapier:rapier_tic',
		'tinker_rapier:estoc_tic',
		'cataclysm:witherite_ingot',
		'cataclysm:enderite_ingot',
		'cataclysm:witherite_block',
		'cataclysm:enderite_block',
		'create:chromatic_compound',
		'create:shadow_steel',
		'create:refined_radiance',
		'minecraft:dragon_egg',
	])
})

onEvent('jei.hide.fluids', event => {
	event.hide('cofh_core:honey')
	event.hide('tconstruct:honey')
	event.hide('beyond_earth:oil')
	event.hide('pneumaticcraft:oil')
	event.hide('thermal:crude_oil')
})

onEvent('jei.remove.categories', e => {
	// console.log(e.getCategoryIds())
	e.remove('twilightforest:uncrafting')
	e.remove('avaritia:extreme_crafting')
	e.remove('chickens:chicken_laying')
})

onEvent('jei.information', e => {
	e.add('chemlib:draconium_compound', ['这种化学物质只用于制造龙尘'])
	e.add('bhc:red_heart', ['被动怪物掉落'])
	e.add('bhc:yellow_heart', ['BOSS 掉落'])
	e.add('bhc:green_heart', ['猪灵Bathering掉落'])
	e.add('bhc:blue_heart', ['亚尔夫海姆的精灵掉落'])

	e.add('create:refined_radiance', ['将异彩化合物投入信标光束中进行神秘转化获得'])
	e.add('create:shadow_steel', ['将异彩化合物投入虚空进行神秘转化所获得'])
})

//Tooltips ChemLib
onEvent('item.tooltip', tooltip => {
	function chemLib(name, text1, text2) {
		tooltip.addAdvanced(
			[
				'#forge:ingots/' + name,
				'#forge:nuggets/' + name,
				'#forge:dusts/' + name,
				'#forge:plates/' + name,
				'#forge:storage_blocks/' + name,
			],
			(item, advanced, text) => {
				text.add(1, Text.of('§3' + text1))
				text.add(2, Text.of('§7' + text2))
			}
		)
	}
	chemLib('silver', 'Ag (47)', '过渡金属')
	chemLib('iridium', 'Ir (77)', '过渡金属')
	chemLib('nickel', 'Ni (28)', '过渡金属')
	chemLib('osmium', 'Os (76)', '过渡金属')
	chemLib('aluminum', 'Al (13)', '后过渡金属')
	chemLib('lead', 'Pb (82)', '后过渡金属')
	chemLib('tin', 'Sn (50)', '后过渡金属')
	chemLib('uranium', 'U (92)', '锕系元素')
	chemLib('iron', 'Fe (26)', '过渡金属')
	chemLib('gold', 'Au (79)', '过渡金属')
	chemLib('copper', 'Cu (29)', '过渡金属')
	chemLib('sulfur', 'S (16)', '高活性非金属')
	chemLib('cobalt', 'Co (27)', '过渡金属')

	tooltip.addAdvanced('chickens:chicken_item', (item, advanced, text) => {
		if (
			!item.nbt?.ChickenType?.id.match(
				/chickens:(red|orange|yellow|lime|green|blue|light_blue|cyan|pink|magenta|purple|brown|black|white|light_gray|gray)_chicken/
			)
		) {
			text.add(1, Text.of('§3在灵魂基座上制作'))
			text.add(2, Text.of('§6对着坤哥的壳按U，查看坤哥的合成配方'))
		}
	})

	tooltip.addAdvanced(Ingredient.all, (item, advanced, text) => {
		if (item.nbt?.Modifier == 'forbidden_arcanus:eternal')
			text.add(Component.translate('item.unbreakable').blue())
	})

	tooltip.addAdvanced('chemlib:draconium_compound', (item, advanced, text) => {
		text.add(1, Text.of('§3Rn₂₄Xe₈Og₁₆Lu₃₂'))
	})

	tooltip.addAdvanced('mekanism:dust_lithium', (item, advanced, text) => {
		text.add(1, Text.of('§3Li (3)'))
		text.add(2, Text.of('§7碱性金属'))
	})

	tooltip.addAdvanced(
		['create:zinc_ingot', 'create:zinc_nugget', 'createaddition:zinc_sheet'],
		(item, advanced, text) => {
			text.add(1, Text.of('§3Zn (30)'))
			text.add(2, Text.of('§7过渡金属'))
		}
	)
	//Soul Pedestal Fake
	tooltip.addAdvanced('custommachinery:custom_machine_item', (item, advanced, text) => {
		if (item.nbt?.machine.match('ragnamod_7:soul_pedestal')) {
			text.add(1, Text.of('§c使用魂灵中的灵魂基座'))
		}
	})

	//Gems and Jewels
	tooltip.addAdvanced(
		[
			'gemsnjewels:peridot_ore_block',
			'gemsnjewels:topaz_ore_block',
			'gemsnjewels:garnet_ore_block',
			'gemsnjewels:opal_ore_block',
			'gemsnjewels:amethyst_ore_block',
			'gemsnjewels:sapphire_ore_block',
			'gemsnjewels:ruby_ore_block',
			'gemsnjewels:emerald_ore_block',
			'gemsnjewels:pale_diamond_ore_block',
			'gemsnjewels:bright_opal_ore_block',
			'gemsnjewels:iolite_ore_block',
			'gemsnjewels:kunzite_ore_block',
			'gemsnjewels:ametrine_ore_block',
			'gemsnjewels:morganite_ore_block',
			'gemsnjewels:citrine_ore_block',
			'gemsnjewels:black_opal_ore_block',
			'gemsnjewels:spinel_ore_block',
			'gemsnjewels:tourmaline_ore_block',
			'gemsnjewels:tanzanite_ore_block',
			'gemsnjewels:alexandrite_ore_block',
			'gemsnjewels:zircon_ore_block',
			'gemsnjewels:aquamarine_ore_block',
		],
		(item, advanced, text) => {
			text.add(1, Text.of('§5§o在神秘学中获取'))
		}
	)
	//Dimensional Shard Ore
	tooltip.addAdvanced(
		[
			'rftoolsbase:dimensionalshard_overworld',
			'rftoolsbase:dimensionalshard_nether',
			'rftoolsbase:dimensionalshard_end',
		],
		(item, advanced, text) => {
			text.add(1, Text.of("§5§o不在世界中生成"))
		}
	)

	//Horsmen Essence
	tooltip.addAdvanced('ragnamod_seven:conquest_essence', (item, advanced, text) => {
		text.add(1, Text.of('§5§o击杀征服时掉落'))
	})
	tooltip.addAdvanced('ragnamod_seven:death_essence', (item, advanced, text) => {
		text.add(1, Text.of('§5§o击杀死亡时掉落'))
	})
	tooltip.addAdvanced('ragnamod_seven:famine_essence', (item, advanced, text) => {
		text.add(1, Text.of('§5§o击杀饥荒时掉落'))
	})
	tooltip.addAdvanced('ragnamod_seven:war_essence', (item, advanced, text) => {
		text.add(1, Text.of('§5§o击杀战争时掉落'))
	})
})
