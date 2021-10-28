var myScheme = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "title": "The 150 Largest Buildings in Illinois",
    "data": {"url": "https://raw.githubusercontent.com/prithvi-prakash/prithvi-prakash.github.io/master/building_inventory.csv"},
    "mark": {
        "type": "point",
        "filled": true,
        "opacity": 0.6,
        
    },
    
    "height": 400,
    "width": 600,
    "background": "#DFCFBE",
    "transform": [
    {
      "window": [{
        "op": "rank",
        "as": "rank"
      }],
      "sort": [{ "field": "Square Footage", "order": "descending" }]
    }, {
      "filter": "datum.rank <= 100"
    }
  ],
    "encoding": {
        "y": {"field": "Agency Name", "sort": "descending"},
        
        "x": {"field": "Year Constructed", "type": "temporal", "timeUnit": "year", "scale": {"domain": ["1860", "2020"]}},
        "tooltip": [
          {"field": "Location Name", "type": "nominal", "title": "Location"},
          {"field": "Square Footage", "type": "quantitative", "title": "Building Area"},
          {"field": "Total Floors", "type": "quantitative", "title": "Number of Floors"},
          {"field": "City", "type": "nominal", "title": "City"},
          {"field": "Year Constructed", "type": "temporal", "timeUnit": "year", "title": "Year Constructed"}

        ],
        "color": {
          "field":"Total Floors", 
          "type": "quantitative",
        //   "scale": "reds",
          "scale": {"range": ["green", "#CD0000"]}
          
          },
        "size": {
         "field": "Square Footage",
         "type": "quantitative",
         "legend": null
        },
        "shape": {
            "field":"Bldg Status", 
            "type": "nominal",
            "scale": {"range": ["square", "triangle", "circle"]},
            "title": "Building Status"

        }
    }
}



vegaEmbed("#vis", myScheme)