ServerEvents.recipes((event) => {
    event.custom({
        "type": "tconstruct:melting",
        "ingredient": {
           "item": "manure:manure"
        },
        "result": {
            "fluid": "kubejs:poop_fluid",
            "amount": 9000
        },
        "temperature": 800,
        "time": 10
    });
    event.custom({
        "type": "tconstruct:casting_basin",
"fluid": {
            "amount": 81000,
            "name": "kubejs:andesite_alloy_fluid"
        },
        "result": "create:andesite_alloy_block",
        "cooling_time": 120
    });
    event.custom({
            "type": "tconstruct:material",
            "ingredient": {
                "item": "manure:manure" 
            },
            "material": "kubejs:",
            "needed": 1,
            "value": 1
    });






});

