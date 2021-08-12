const urlParams = new URLSearchParams(window.location.search); // get URL params
const email = urlParams.get('email'); // get email
 
console.log(email); // log the email

//query airtable for form response results based on email
const api_url = "https://api.airtable.com/v0/appsRjFFGSA5rwrKU/Table%202?api_key=keykQb0bBMBy6ro5D";

var data;

// Function to define innerHTML for HTML table
function show(data) {
    // Loop to access all rows 
    for (let r of data) {
        
    }
}

// Defining async function
async function getapi(url) {
    
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    data = await response.json();
    data = data['records'];
    show(data);
}

getapi(api_url);


//     let tab = 
//         `<tr>
//           <th>Name</th>
//           <th>Ethnicity</th>
//           <th>State</th>
//          </tr>`;
    
//     // Loop to access all rows 
//     for (let r of data) {
//         tab += `<tr> 
//     <td>${r['fields']['name']} </td>
//     <td>${r['fields']['ethnicity']}</td>    
//     <td>${r['fields']['state']}</td>  
// </tr>`;}
//     document.getElementById("therapists").innerHTML = tab;