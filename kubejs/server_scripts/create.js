ServerEvents.recipes((event) => {
    event.custom({
            "type": "create:mixing",
            "heatRequirement": "none",
            "ingredients": [
              {
                "amount": 2700,
                "fluid": "tconstruct:molten_iron",
                "nbt": {}
              },
              {
                "amount": 2700,
                "fluid": "kubejs:poop_fluid"
              }
            ],
            "results": [
              {
                "amount": 5400,
                "fluid": "kubejs:andesite_alloy_fluid"
              }
            ]
          });
});
