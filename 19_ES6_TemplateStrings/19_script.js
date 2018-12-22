let employee = {
    sno : 100,
    eName : 'John',
    eAge : 40,
    eDesg : 'Manager'
};

let employee2 = {
    sno : 120,
    eName : 'Rajan',
    eAge : 30,
    eDesg : 'Tech Lead'
};


let tableBody = document.querySelector('#table_body');

let htmlStr = '<tr>'+
                '<td>'+ employee.sno +'</td>'+
                '<td>'+ employee.eName +'</td>'+
                '<td>'+ employee.eAge +'</td>'+
                '<td>'+ employee.eDesg +'</td>'+
               '</tr>';

//tableBody.innerHTML = htmlStr;

// Back Tick Operator (`)

let tempStr = `<tr>
                 <td>${employee.sno}</td>
                 <td>${employee.eName}</td>
                 <td>${employee.eAge}</td>
                 <td>${employee.eDesg}</td>
               </tr>
               <tr>
                 <td>${employee2.sno}</td>
                 <td>${employee2.eName}</td>
                 <td>${employee2.eAge}</td>
                 <td>${employee2.eDesg}</td>
               </tr>`;

tableBody.innerHTML = tempStr;