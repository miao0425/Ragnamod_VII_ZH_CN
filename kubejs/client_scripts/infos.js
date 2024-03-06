//Informations
onEvent('jei.information', e => {
	e.add('chemlib:draconium_compound', ['这种化学物质只用于制造龙尘'])
	e.add('bhc:red_heart', ['被动怪物掉落'])
	e.add('bhc:yellow_heart', ['BOSS 掉落'])
	e.add('bhc:green_heart', ['猪灵交易获得'])
	e.add('bhc:blue_heart', ['亚尔夫海姆的精灵掉落'])

	e.add('create:refined_radiance', ['将异彩化合物投入信标光束中进行神秘转化获得'])
	e.add('create:shadow_steel', ['将异彩化合物投入虚空进行神秘转化所获得'])

	e.add(
		[
			'nethersdelight:plate_of_stuffed_hoglin_snout',
			'nethersdelight:plate_of_stuffed_hoglin_roast',
			'nethersdelight:plate_of_stuffed_hoglin_ham',
		],
		[
			'您需要对放置在世界中的填馅疣猪兽使用刀子，然后使用碗，收集疣猪鼻、疣猪烤肉和疣猪火腿',
		]
	)
	e.add('nethersdelight:hoglin_ear', ['用刀右击放置好的填馅疣猪兽获得'])
	e.add('farmersdelight:roast_chicken', [
		'右键放置于方块上，手持碗对烤鸡右键就可以获得盘装烤鸡',
	])
	e.add('farmersdelight:honey_glazed_ham', [
		'无法直接食用，需要放下并用碗右击获得盘装蜜汁火腿',
	])
	e.add('farmersdelight:shepherds_pie', [
		"右键放置于方块上，手持碗对牧羊人派右击",
	])
	e.add('farmersdelight:stuffed_pumpkin', [
		'无法直接食用，需要先用南瓜右击厨锅（或者将南瓜放进去）获得填馅南瓜',
	])
	e.add('endersdelight:stuffed_shulker_bowl', [
		'您需要将 Stuffed Shulker 放置在世界中，然后用碗右击它',
	])
})
