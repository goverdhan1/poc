import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  options;
  data;
  tcepGraphData =[];
  adminPrefKeyExecutionStatus = [];

constructor(){
  
  this.tcepGraphData = [ {
    "uniqueId" : "P10-user-3",
    "id" : "user-3",
    "name" : "Release 1.0",
    "type" : "user",
    "chartId" : "P10",
    "updateTime" : 1505289739692,
    "details" : {
      "4" : 1,
      "unexecuted" : 515,
      "12" : 2,
      "3" : 0,
      "11" : 2,
      "2" : 0,
      "1" : 2
    },
    "keyWords" : {
      "Fail" : 0.0,
      "skey12" : "Cul",
      "skey11" : "N/A",
      "skey10" : "Change Status",
      "skey4" : "Blocked",
      "dataPointNum" : 2,
      "skey3" : "WIP",
      "skey2" : "Fail",
      "N/A" : 0.38314176,
      "skey1" : "Pass",
      "Pass" : 0.38314176,
      "percentageSumDetailedBytotal" : 1.3409961,
      "WIP" : 0.0,
      "Change Status" : 98.659004,
      "Blocked" : 0.19157088,
      "total" : 522.0,
      "sumDetailed" : 7.0,
      "Cul" : 0.38314176
    },
    "childList" : [ {
      "uniqueId" : "P10-user-3-P10-Cycle-3",
      "id" : "Cycle-3",
      "name" : "cycle 234234",
      "type" : "Cycle",
      "updateTime" : 1505289739691,
      "details" : {
        "4" : 0,
        "unexecuted" : 280,
        "12" : 2,
        "3" : 0,
        "11" : 2,
        "2" : 0,
        "1" : 1
      },
      "keyWords" : {
        "Fail" : 0.0,
        "skey12" : "Cul",
        "skey11" : "N/A",
        "skey10" : "Change Status",
        "skey4" : "Blocked",
        "dataPointNum" : 0,
        "skey3" : "WIP",
        "skey2" : "Fail",
        "N/A" : 0.7017544,
        "skey1" : "Pass",
        "Pass" : 0.3508772,
        "percentageSumDetailedBytotal" : 1.754386,
        "WIP" : 0.0,
        "Change Status" : 98.24561,
        "Blocked" : 0.0,
        "total" : 285.0,
        "sumDetailed" : 5.0,
        "Cul" : 0.7017544
      },
      "childList" : [ ],
      "contextString" : "contextstring=cycleid:3",
      "dirty" : true
    }, 
    {
      "uniqueId" : "P10-user-3-P10-Cycle-5",
      "id" : "Cycle-5",
      "name" : "TRelaee",
      "type" : "Cycle",
      "updateTime" : 1505289739692,
      "details" : {
        "4" : 1,
        "unexecuted" : 235,
        "12" : 0,
        "3" : 0,
        "11" : 0,
        "2" : 0,
        "1" : 1
      },
      "keyWords" : {
        "Fail" : 0.0,
        "skey12" : "Cul",
        "skey11" : "N/A",
        "skey10" : "Change Status",
        "skey4" : "Blocked",
        "dataPointNum" : 0,
        "skey3" : "WIP",
        "skey2" : "Fail",
        "N/A" : 0.0,
        "skey1" : "Pass",
        "Pass" : 0.42194092,
        "percentageSumDetailedBytotal" : 0.84388185,
        "WIP" : 0.0,
        "Change Status" : 99.15612,
        "Blocked" : 0.42194092,
        "total" : 237.0,
        "sumDetailed" : 2.0,
        "Cul" : 0.0
      },
      "childList" : [ ],
      "contextString" : "contextstring=cycleid:5",
      "dirty" : true
    } ],
    "dirty" : true
  } ];
  this.adminPrefKeyExecutionStatus = [
    {"id":"1","value":"Pass","color":"#75B000","active":"true"},
    {"id":"2","value":"Fail","color":"#CC3300","active":"true"},
    {"id":"3","value":"WIP","color":"#F2B000","active":"true"},
    {"id":"4","value":"Blocked","color":"#6693B0","active":"true"},
    {"id":"10","value":"Not Executed","color":"#9E987D","active":"true"},
    {"id":"11","value":"N/A","color":"#003333","active":"true"},
    {"id":"12","value":"Cul","color":"#190033","active":"true"}
  ];
  
  let sortAdminPrefKeyExecutionStatus = this.adminPrefKeyExecutionStatus.sort(function (a, b) {
    return (a.id - b.id);
  });

  
  var keyObj = [];
  
  var summaryKeys = {};
  


  for (let j = 0; j < sortAdminPrefKeyExecutionStatus.length; j++) {
    var seriesArr = [];
    var key = sortAdminPrefKeyExecutionStatus[j].value;
    var color = sortAdminPrefKeyExecutionStatus[j].colors;
    var id = sortAdminPrefKeyExecutionStatus[j].id
    for (let i = 0; i < this.tcepGraphData[0].childList.length; i++) {


      let sortedDetailsKeys = Object.keys(this.tcepGraphData[0].childList[i].details).sort(function (a, b) {
        return (a.id - b.id);
      })

      console.log(sortedDetailsKeys);
      sortedDetailsKeys.map(key => this.tcepGraphData[0].childList[i].details[key]);


//              let details = Object.keys(this.tcepGraphData[0].childList[i].details)
//              .map(key => this.tcepGraphData[0].childList[i].details[key]);



        let series = { "x": this.tcepGraphData[0].childList[i].name, "y": sortedDetailsKeys[j], "color": color };
        seriesArr.push(series);







    }
    keyObj.push({ "key": key, "values": seriesArr});
  }
  this.data = keyObj;

  
//  console.log(keyObj)
  
  for(key in this.tcepGraphData[0].keyWords){
//    console.log(key);
//    console.log(this.adminPrefKeyExecutionStatus.length)
    for(var i=0;i<this.adminPrefKeyExecutionStatus.length; i++){
//     console.log(this.adminPrefKeyExecutionStatus[i].value)
      if(this.adminPrefKeyExecutionStatus[i].value==key)
      {
//        console.log(key, this.tcepGraphData[0].keyWords[key]);
        summaryKeys[key] = this.tcepGraphData[0].keyWords[key];
      }
    }
  }
  
//  console.log(summaryKeys);
  
  this.options = {
    chart: {
      type: 'multiBarChart',
      height: 350,
      margin: {
        top: 40,
        right: 10,
        bottom: 40,
        left: 10
      },
      clipEdge: true,
      duration: 500,
      stacked: true,
      showControls: false,
      multibar: {
        dispatch: {
          elementClick: (e) => {
//            let contextStr = this.contextString[e.index].contextString.split(":")[1];
//            this.router.navigate(['/reports/1/tcepphase/' + contextStr]);
          }
        }
      },
      callback: function (e) { console.log('! callback !'); }
    }
  };
  
  
}

}
