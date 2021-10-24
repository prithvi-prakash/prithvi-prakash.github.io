var myScheme = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "data": {"url": "https://raw.githubusercontent.com/prithvi-prakash/prithvi-prakash.github.io/master/building_inventory.csv"},
    "mark": "point",
    "encoding": {
        "x": {"field": "Year Acquired", "type": "temporal"},
        "y": {"field": "Year Constructed", "type": "temporal"}
    }
}



vegaEmbed("#vis", myScheme)
// result.view provides access to the Vega View API
.then(result => console.log(result))
.catch(console.warn);