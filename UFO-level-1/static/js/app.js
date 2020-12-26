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

// Function 
function runEnter() {

    d3.event.preventDefault();

    var input = d3.select('#datetime').property('value');
    console.log(input);

    var filteredData = tableData.filter(data => data.datetime === input);

    console.log(filteredData);

    tbody.html('');

    filteredData.forEach((entry) => {
        var row = tbody.append('tr');
        Object.values(entry).forEach((value) => {
            row.append('td').text(value);
        });    
    });

    if (input === "") {
        __init__();
    };
};
