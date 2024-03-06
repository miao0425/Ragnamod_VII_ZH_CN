onEvent('fluid.registry', e => {
    e.create('ragnamod_seven:aureal')
        .thinTexture(0xa19fc9)
        .bucketColor(0xa19fc9)
        .displayName('耀金')

    e.create('ichor')
        .displayName('灵液')
        .stillTexture('tconstruct:ichor_still')
        .flowingTexture('tconstruct:ichor_flowing')
        .bucketColor(0xcc4100)
})