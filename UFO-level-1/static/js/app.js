// from data.js
var tableData = data;

// select items from html
var tbody = d3.select('tbody');
var button = d3.select('#filter-btn');
var form = d3.select('#form');

// add events to filter
button.on('click', runEnter);
form.on('submit', runEnter);

// add data to table
__init__();

function __init__() {
    console.log(tableData);
    tableData.forEach((entry) => {
        var row = tbody.append('tr');
        Object.values(entry).forEach((value) => {
            row.append('td').text(value);
        });
    });
}

function runEnter() {

    d3.event.preventDefault();
    d3.event.stopPropagation();

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
