//Tooltips
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
	//Tooltips Chicken
	tooltip.addAdvanced('chickens:chicken_item', (item, advanced, text) => {
		if (
			!item.nbt?.ChickenType?.id.match(
				/chickens:(red|orange|yellow|lime|green|blue|light_blue|cyan|pink|magenta|purple|brown|black|white|light_gray|gray)_chicken/
			)
		) {
			text.add(1, Text.of('§3在灵魂基座上制作'))
		}
	})
	//Unbreakable
	tooltip.addAdvanced(Ingredient.all, (item, advanced, text) => {
		if (item.nbt?.Modifier == 'forbidden_arcanus:eternal')
			text.add(Component.translate('item.unbreakable').blue())
	})
	//Draco Compound
	tooltip.addAdvanced('chemlib:draconium_compound', (item, advanced, text) => {
		text.add(1, Text.of('§3Rn₂₄Xe₈Og₁₆Lu₃₂'))
	})
	//Lithium
	tooltip.addAdvanced('mekanism:dust_lithium', (item, advanced, text) => {
		text.add(1, Text.of('§3Li (3)'))
		text.add(2, Text.of('§7碱性金属'))
	})
	//Zinc
	tooltip.addAdvanced(
		['create:zinc_ingot', 'create:zinc_nugget', 'createaddition:zinc_sheet'],
		(item, advanced, text) => {
			text.add(1, Text.of('§3Zn (30)'))
			text.add(2, Text.of('§7过渡金属'))
		}
	)
	//Cobalt
	tooltip.addAdvanced(
		['tconstruct:cobalt_block', 'tconstruct:cobalt_ingot', 'tconstruct:cobalt_nugget'],
		(item, advanced, text) => {
			text.add(1, Text.of('§3Co (27)'))
			text.add(2, Text.of('§7过渡金属'))
		}
	)
	//Soul Pedestal Fake
	tooltip.addAdvanced('custommachinery:custom_machine_item', (item, advanced, text) => {
		if (item.nbt?.machine.match('ragnamod_7:soul_pedestal')) {
			text.add(1, Text.of('§c使用魂灵中的灵魂基座'))
		}
	})
	//Excavator Fake
	tooltip.addAdvanced('custommachinery:custom_machine_item', (item, advanced, text) => {
		if (item.nbt?.machine.match('ragnamod_7:excavator')) {
			text.add(1, Text.of('§c使用沉浸工程的挖掘机'))
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
	//Echo Shard
	tooltip.addAdvanced('warden_and_sculk:echo_shard', (item, advanced, text) => {
		text.add(1, Text.of('§5§o远古城市宝箱中的战利品'))
	})
	//Dawn Tool
	tooltip.addAdvanced('bloodmagic:dawnscribetool', (item, advanced, text) => {
		text.add(1, Text.of('§7墙壁上的字迹'))
	})
})
