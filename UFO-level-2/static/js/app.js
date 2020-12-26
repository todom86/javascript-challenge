// From data.js
var tableData = data;

// Select items from html
var tbody = d3.select('tbody');
var button = d3.select('#filter-btn');
var form = d3.select('#form');

// Add events to filters
button.on('click', runEnter);
form.on('submit', runEnter);

// Add data to table
__init__();

// Function for complete table
function __init__() {
    console.log(tableData);
    tableData.forEach((entry) => {
        var row = tbody.append('tr');
        Object.values(entry).forEach((value) => {
            row.append('td').text(value);
        });
    });
}

// console.log(data[0]);

// Filter Function 
// ------------------------------------------
function runEnter() {

    // collect user inputs
    var inputs = [
        d3.select("#datetime").property('value'),
        d3.select('#city-id').property('value'),
        d3.select('#state-id').property('value'),
        d3.select('#country-id').property('value'),
        d3.select('#shape-id').property('value')
    ];
    
    // Find and remove empty inputs
    searchTerms = []

    for (i in inputs) {
        if (inputs[i] !== "") {
            searchTerms.push(inputs[i]);
        } else {
            continue;
        }
    };

    console.log(searchTerms.length);


    // Loop through full dataset to match user inputs
    // -------------------------------------------------
    var filteredData = [];

    // Look at each object in dataset
    for (var i=0; i<tableData.length; i++) {

        // loop through search terms and add matching objects to an array
        for (t in searchTerms) {

            if (tableData[i].datetime === searchTerms[t] ||
                tableData[i].city === searchTerms[t] ||
                tableData[i].state === searchTerms[t] ||
                tableData[i].country === searchTerms[t] ||
                tableData[i].shape === searchTerms[t]) {
                    filteredData.push(tableData[i]);
                } else {
                    continue;
                };
        };
        
        // if (tableData[i].datetime === inputs[0]) {
        //     filteredData.push(tableData[i]);
        // } else if (tableData[i].city === inputs[1]) {
        //     if (filteredData.includes(tableData[i]) === false) {
        //         filteredData.push(tableData[i]);
        //     } else {
        //         continue;
        //     };
        // } else if (tableData[i].state === inputs[2]) {
        //     if (filteredData.includes(tableData[i]) === false) {
        //         filteredData.push(tableData[i]);
        //     } else {
        //         continue;
        //     };
        // } else if (tableData[i].country === inputs[3]) {
        //     if (filteredData.includes(tableData[i]) === false) {
        //         filteredData.push(tableData[i]);
        //     } else {
        //         continue;
        //     };
        // } else if (tableData[i].shape === inputs[4]) {
        //     if (filteredData.includes(tableData[i]) === false) {
        //         filteredData.push(tableData[i]);
        //     } else {
        //         continue;
        //     };
        // } else {
        //     continue;
        // };
    }

    // filteredData = []
    
    // if (inputs[0] !== "") {

    // }

    console.log(filteredData);

    // clear out current display
    tbody.html('');

    // display array in html table
    filteredData.forEach((entry) => {
        var row = tbody.append('tr');
        Object.values(entry).forEach((value) => {
            row.append('td').text(value);
        });    
    });

    if (searchTerms === undefined || searchTerms.length == 0) {
        __init__();
    };
    
};
