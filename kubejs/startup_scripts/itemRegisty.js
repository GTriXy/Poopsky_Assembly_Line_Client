StartupEvents.registry('item', e => {
    e.create('manure_stick', 'sword')
        .tier('wood')
        .attackDamageBaseline(1.0)
        .speedBaseline(0.2);

    e.create('venusian_poop', 'basic');

    e.create('lunar_poop', 'basic');

    e.create('ice_crystal_poop', 'basic');

    e.create('martian_poop', 'basic');

    e.create('pp_mixture', 'basic');

    e.create('undigested_fibre', 'basic');

    e.create('undigested_seed', 'basic');

    //e.create('', 'basic');
})