onEvent('fluid.registry', e => {
    e.create('ragnamod_seven:aureal')
        .thinTexture(0xa19fc9)
        .bucketColor(0xa19fc9)
        .displayName('耀金')

    e.create('ichor')
        .displayName('灵液')
        .stillTexture('tconstruct:fluid/ichor_still')
        .flowingTexture('tconstruct:fluid/ichor_flowing')
        .bucketColor(0xcc4100)

    e.create('chaos_liquid')
        .displayName('混沌流体')
        .stillTexture('ragnamod_seven:fluid/chaos_still')
        .flowingTexture('ragnamod_seven:fluid/chaos_flowing')
        .bucketColor(0x0d0d0d)
})