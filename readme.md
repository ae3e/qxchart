# qxCHART

qxCHART is a [Qooxdoo](http://qooxdoo.org/) wrapper for [Plotly](https://plot.ly/javascript/)

![qxCHART](screenshot.png)

## 1. Add the qxCHART contrib to your project

* Download qxCHART
* Unzip it in your project (e.g. within the top-level directory `your_app/contribs`)
* Add the following in your config.json file (some parts may already exist and you have to insert only the right lines)

```json
"include": [
  {
    "path" : "${QXCHART}/qxchart.json"
  }
],
"let": {
  "QXCHART" : "contribs/qxchart"
},
"jobs" : {
  "libraries" : {
    "library" : [{
      "manifest": "${QXCHART}/Manifest.json"
      }
    ]
  }
}
```
* Add `@asset(ae/chart/plotly/*)` at the top of your application's class

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
* [Scatter chart](http://tinyurl.com/y4hguzgx)
* [Line chart](http://tinyurl.com/y663tmap)
* [Bar chart](http://tinyurl.com/y2vxqh4l)
* [Pie chart](http://tinyurl.com/yyxve3aa)
* [Area chart](http://tinyurl.com/y2nnsfdt)
* [Bubble chart](http://tinyurl.com/y579ujm9)

Others :
* [Customized legend](http://tinyurl.com/y3xad8bo)
* [Data binding](http://tinyurl.com/y2y9qb3h)
* [Scatter chart with data labels](http://tinyurl.com/y66qenpy)
* [Multiple axes](http://tinyurl.com/y3nr5euv)
* [Annotations](http://tinyurl.com/y4ackh42)
* [Shapes](http://tinyurl.com/yy3fe6l9)


## 4. Documentation

The full API documentation is hosted at https://rawgit.com/adeliz/qxchart/master/api/index.html#ae
