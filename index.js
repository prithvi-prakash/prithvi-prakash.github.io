var myScheme = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "title": "The Top 150 largest Buildings",
    "data": {"url": "https://raw.githubusercontent.com/prithvi-prakash/prithvi-prakash.github.io/master/building_inventory.csv"},
    "mark": {
        "type": "circle",
        "opacity": 0.45
        
    },
    
    "height": 400,
    "width": 600,
    
    "transform": [
    {
      "window": [{
        "op": "rank",
        "as": "rank"
      }],
      "sort": [{ "field": "Square Footage", "order": "descending" }]
    }, {
      "filter": "datum.rank <= 150"
    }
  ],
    "encoding": {
        "y": {"field": "Agency Name", "sort": "descending"},
        
        "x": {"field": "Year Constructed", "type": "temporal", "scale": {"domain": ["01-01-1900", "01-01-2020"]}},
        "tooltip": [
          {"field": "Location Name", "type": "nominal", "title": "Location"},
          {"field": "Square Footage", "type": "quantitative", "title": "Building Area"},
          {"field": "Total Floors", "type": "quantitative", "title": "Number of Floors"},
          {"field": "City", "type": "nominal", "title": "City"}

        ],
        "color": {
          "field":"Bldg Status", 
          "type": "nominal",
          "scale": {"range": ["red", "yellow","green"]},
          "title": "Building Status"
          },
        "size": {
         "field": "Square Footage",
         "type": "quantitative",
         "legend": null
        }
    }
}



vegaEmbed("#vis", myScheme)
// result.view provides access to the Vega View API
.then(result => console.log(result))
.catch(console.warn);