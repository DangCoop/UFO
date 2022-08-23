// import the data from data.js
const tableData = data;

//Reference the HTML table using d3
var tbody = d3.select("tbody");

//Create a new function to build a table with data
function buildTable(data) {
    //create a blank canvas - clear data
    tbody.html(" ");

    //incorporate a forEach function that loops through our data array and
    //then adds rows of data to the table
    data.forEach((dataRow) => {
        //to find the <tbody> tag within the HTML and add a table row ("tr").
        let row = tbody.append("tr"); 

        //reference one object from yhe array to argument (dataRow) and specify that we want 
        //one object per row
        Object.values(dataRow).forEach((val) => {
        //In the next two lines of code, we'll append each value of the object to a cell in the table
            let cell = row.append("td");
            //add value
            cell.text(val); 
        });
    });

    function handleClick() {
        // Grab the datetime value from the filter
        let date = d3.select("#datetime").property("value");
        let filteredData = tableData;
        
        // Check to see if a date was entered and filter the
        // data using that date.
        if (date) {
            // Apply `filter` to the table data to only keep the
             // rows where the `datetime` value matches the filter value
            filteredData = filteredData.filter(row => row.datetime === date);
        };

        // Rebuild the table using the filtered data
        // @NOTE: If no date was entered, then filteredData will
        // just be the original tableData.
        buildTable(filteredData);
    };

    // Attach an event to listen for the form button
    d3.selectAll("#filter-btn").on("click", handleClick);

    // Build the table when the page loads
    buildTable(tableData);
    



}