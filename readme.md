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
  "QXCHART" : "../../../qxchart"
},
"jobs" : {
  "libraries" : {
    "library" : [{
      "manifest": "contribs/qxchart/Manifest.json"
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
* [Scatter chart](http://tinyurl.com/hez3xb8)
* [Line chart](http://tinyurl.com/hz9yjqd)
* [Bar chart](http://tinyurl.com/j29peyy)
* [Pie chart](http://tinyurl.com/zgtlvos)
* [Area chart](http://tinyurl.com/jbgcfs2)
* [Bubble chart](http://tinyurl.com/hfmzec5)

Others :
* [Customized legend](http://tinyurl.com/zwus38g)
* [Data binding](http://tinyurl.com/z8skqzh)
* [Scatter chart with data labels](http://tinyurl.com/jr9cnnm)
* [Multiple axes](http://tinyurl.com/zqx284d)
* [Annotations](http://tinyurl.com/zvkqyx7)
* [Shapes](http://tinyurl.com/hzty9tw)


## 4. Documentation

The full API documentation is hosted at https://rawgit.com/adeliz/qxchart/master/api/index.html#ae