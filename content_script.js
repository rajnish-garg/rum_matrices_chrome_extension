chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "requested_data" ) {
      downloadFile();
    }
  }
 );


function downloadFile() {
    var csvContent = "data:text/csv;charset=utf-8,";
	var data = window.performance.getEntriesByType("resource");
	console.log("total length of the array is: " +data.length );


	//Header
	csvContent += "startTime, redirectStart, redirectEnd,  fetchStart, domainLookupStart" +
				 ", domainLookupEnd, connectStart, secureConnectionStart, connectEnd, requestStart, responseStart, responseEnd" +
				 ", duration, entryType, initiatorType, name, workerStart \r\n";

	data.forEach(function(perfObj, index){
	  
	  csvContent += perfObj.startTime + "," +
	  				perfObj.redirectStart + "," +
	  				perfObj.redirectEnd + "," +
	  				perfObj.fetchStart + "," +
	  				perfObj.domainLookupStart + "," +
	  				perfObj.domainLookupEnd + "," +
	  				perfObj.connectStart + "," + 
	  				perfObj.secureConnectionStart + "," +
	  				perfObj.connectEnd  + "," + 
					perfObj.requestStart + "," +
					perfObj.responseStart + "," +
					perfObj.responseEnd + "," +
					perfObj.duration + "," +
					perfObj.entryType + "," +
					perfObj.initiatorType + "," +
					encodeURIComponent(perfObj.name) + "," +
					perfObj.workerStart + "\r\n"  ;

	}); 



	var encodedUri = encodeURI(csvContent);
	var link = document.createElement("a");
	link.style = "visibility:hidden";

	link.setAttribute("href", encodedUri);
	link.setAttribute("download", "rum_data.csv");

	link.click(); // This will download the data file named "rum_data.csv".
    
};


