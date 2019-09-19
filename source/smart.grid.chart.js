
/* Smart HTML Elements v4.5.0 (2019-Sep) 
Copyright (c) 2011-2019 jQWidgets. 
License: https://htmlelements.com/license/ */

Smart.Utilities.Assign("Grid.Chart",class{_getChartDataFields(a){const b=this,c=a[0];let d,e=!0,f=[];for(let g in c){if("$"==g)continue;const a=b.dataSource.dataFields.find(a=>a.name===g).dataType;if("string"===a){const a=b.columns.findIndex(a=>a.dataField===g);0===a&&(d=g)}else e=!1,f.push({dataField:g,displayText:g})}return{xAxisDataField:d,series:f,stringOnly:e}}createChart(a,b){const c=this,d=c.getSelection(),e=d.rows,f=d.columns,g=d.cells,h=document.createElement("smart-chart"),j=[],i={};let k,l=[],m=[];if(g&&1<g.length&&g.forEach(a=>{-1===l.indexOf(a.row.index)&&l.push(a.row.index),-1===m.indexOf(a.dataField)&&m.push(a.dataField)}),b)j.concat(b);else for(let a=0;a<c.dataSource.length;a++){if(e){if(!e.find(b=>b.row.index===a))continue;}else if(f){const b={};f.forEach(d=>{b[d.dataField]=c.dataSource[a][d.dataField]}),j.push(b);continue}else if(g&&1<g.length){if(-1===l.indexOf(a))continue;const b={};m.forEach(d=>{b[d]=c.dataSource[a][d]}),j.push(b);continue}j.push(c.dataSource[a])}const n=c._getChartDataFields(j);if(n.stringOnly)return toolbar.classList.add("warning"),document.getElementById(a).classList.add("warning"),void setTimeout(function(){toolbar.classList.remove("warning"),document.getElementById(a).classList.remove("warning")},1e3);if(k=n.series,h.caption="",h.description="",h.clip=!1,h.showLegend=!0,h.showBorderLine=!1,h.padding={left:5,top:10,right:5,bottom:5},h.dataSource=j,h.xAxis={dataField:n.xAxisDataField,gridLines:{visible:!0}},h.valueAxis={displayValueAxis:!0,description:"USD",axisSize:"auto",formatSettings:{prefix:"$",thousandsSeparator:","}},h.colorScheme=c.charting.colorScheme,h.seriesGroups=[i],i.formatSettings={prefix:"$",thousandsSeparator:","},i.series=k,"line"===a)k.forEach(function(a){a.symbolSize=8,a.symbolType="square"});else if("pie"===a){const a=k[0].dataField;delete i.formatSettings,i.formatFunction=function(a,b){return isNaN(a)?"object"==typeof a?b:a:"$"+a},i.showLabels=!0,k.length=0,k.push({dataField:a,displayText:n.xAxisDataField,initialAngle:0})}else if("bar"===a)a="column",i.orientation="horizontal",h.xAxis.textRotationAngle=90,h.valueAxis.textRotationAngle=30,h.valueAxis.flip=!0;else if("area"===a){let a=1;for(let b=0;b<k.length;b++)k[b].opacity=a,a-=.2,a=Math.max(.3,a)}if(i.type=a,c.onChartInit&&c.onChartInit(h),c.charting.appendTo){const a="string"===c.charting.appendTo?document.querySelector(c.charting.appendTo):c.charting.appendTo;a&&a.appendChild(h)}else c._openChartDialog(h,a)}_openChartDialog(a,b){const c=this;if(!c.charting.dialog.enabled)return!1;const d=c._dialogChart||c._createDialog(c.charting.dialog),e=b.substring(0,1).toUpperCase()+b.substring(1),f="{{message}}"===c.charting.dialog.header?c.localize("dialogChartHeader",{value:e}):c.charting.dialog.header;a.style.width="100%",a.style.height="100%",d.header.innerHTML=f,d.content.innerHTML="",d.content.style.width="100%",d.content.style.height="100%",d.btnCancel.classList.add("smart-hidden"),c._dialogChart||(d.modal=!0,d.onOpen=function(){c.charting.dialog.visible=!0},d.onClose=function(){c.charting.dialog.visible=!1},d.btnConfirm.onclick=function(){d.close()},d.btnClose.onclick=function(){d.close()},d.onkeydown=function(a){"Escape"===a.key&&d.close()},c._dialogChart=d),d.open(),setTimeout(function(){d.btnConfirm.focus(),d.content.appendChild(a)},100)}});