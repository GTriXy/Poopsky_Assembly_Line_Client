StartupEvents.registry("fluid", event => {
    let example_fluid = event.create("poop_fluid")
        .thinTexture(0x3c2611)
        .thickTexture(0x3c2611)
        .temperature(300)
        .bucketColor(0x3c2611)
        .displayName("poop fluid");
    let exampleAttributes = example_fluid.createAttributes();
    exampleAttributes.dropOff(2);
    exampleAttributes.tickDelay(20);
    example_fluid.attributes = exampleAttributes;
});
StartupEvents.registry("fluid", event => {
    let example_fluid = event.create("andesite_alloy_fluid")
        .thinTexture(0x6c7c72)
        .thickTexture(0x6c7c72)
        .temperature(300)
        .bucketColor(0x6c7c72)
        .displayName("andesite alloy fluid");
    let exampleAttributes = example_fluid.createAttributes();
    exampleAttributes.dropOff(2);
    exampleAttributes.tickDelay(20);
    example_fluid.attributes = exampleAttributes;
});