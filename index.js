function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                alert(allText);
            }
        }
    }
    rawFile.send(null);
}

var myFile = readTextFile("/building_inventory.csv")

myScheme = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "data": {"url": myFile},
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