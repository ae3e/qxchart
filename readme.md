# qxCHART

qxCHART is a [Qooxdoo](http://qooxdoo.org/) wrapper for [Plotly](https://plot.ly/javascript/)

![qxCHART](screenshot.png)

## 1. Add the qxCHART contrib to your project

* Download qxCHART
* Unzip it in your project (e.g. within the top-level directory `your_app/contribs`)
* Add the following in your config.json file

```json
"jobs" : {
  "libraries" : {
    "library" : [{
      "manifest": "contribs/qxchart/Manifest.json"
      }
    ]
  }
}
```

More infos at http://manual.qooxdoo.org/devel/pages/development/contrib.html


## 2. Start using qxCHART

Create a chart's model :

```javascript
//Create chart's model
var chartModel = new ae.chart.model.Chart();
  
//Layout
var chartLayout = new ae.chart.model.layout.Layout().set({
	  title:"My chart"
});
chartModel.setLayout(chartLayout);

//First trace
var scatter = new ae.chart.model.trace.Scatter();
scatter.setX([1, 2, 3, 4]);
scatter.setY([10, 15, 13, 17]);
scatter.setMode("markers");

//Add trace to chart's model
chartModel.addTrace(scatter);
```

Create a chart widget and pass the model as argument :

```javascript
var chartWidget = new ae.chart.ui.Chart(chartModel);
```

## 3. Examples

Charts :
* [Scatter chart](https://bl.ocks.org/adeliz/25ed0f2e700d87c6857a81b24ae19108)
* [Line chart](https://bl.ocks.org/adeliz/147b4941c1461a9c1cd9e222c142592a)
* [Bar chart](https://bl.ocks.org/adeliz/32b50d1b99ddfbb47c7cf94fe59bebe1)
* [Pie chart](https://bl.ocks.org/adeliz/022e9b99228d07dca23fe5eb0e11cef0)
* [Area chart](https://bl.ocks.org/adeliz/184fbde7927bba962565e9e9f6f5edd1)
* [Bubble chart](https://bl.ocks.org/adeliz/32e240fcb71d58ddbddb9de4d64ab393)

Others :
* [Customized legend](https://bl.ocks.org/adeliz/091f6be1d0df9c57c7e23dde16528058)
* [Data binding](https://bl.ocks.org/adeliz/80eea1b89b3a7aea46d668baeff41a4b)
* [Scatter chart with data labels](https://bl.ocks.org/adeliz/72acf143dec4b38a7a41fa55dea33391)
* [Multiple axes](https://bl.ocks.org/adeliz/c4102cc7cb339acccfcfce4ae8007039)
* [Annotations](https://bl.ocks.org/adeliz/d1913f2b867b647c3afafa310794f045)
* [Shapes](https://bl.ocks.org/adeliz/1eb6846fc58bf0ec62f794c4d65439da)


## 4. Documentation

The full API documentation is hosted at https://rawgit.com/adeliz/qxchart/master/api/index.html#ae