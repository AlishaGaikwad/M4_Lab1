// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
var addForm = document.getElementById('addForm');
var employees = document.getElementById('employees');
// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
var count = employees.getElementsByTagName('tr').length - 1;
var empCount = document.getElementById('empCount');
empCount.innerText = `(${count})`;

// ADD EMPLOYEE
addForm.addEventListener('submit', function(e) {
    // PREVENT FORM SUBMISSION
    e.preventDefault();
    // GET THE VALUES FROM THE TEXT BOXES
    var id = document.getElementById('id').value;
    var name = document.getElementById('name').value;
    var extension = document.getElementById('extension').value;
    var email = document.getElementById('email').value;
    var department = document.getElementById('department').value;
    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    var row = employees.insertRow(-1);
    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    var cells = [id, name, extension, email, department].map(function(value) {
        var cell = row.insertCell();
        cell.textContent = value;
        return cell;
    });
    // CREATE THE DELETE BUTTON
    var delButton = document.createElement('button');
    delButton.className = 'btn btn-danger btn-sm delete';
    delButton.textContent = 'Remove';
    var delCell = row.insertCell();
    delCell.appendChild(delButton);

    // RESET THE FORM
    addForm.reset();
    // SET FOCUS BACK TO THE ID TEXT BOX
    document.getElementById('id').focus();
    // INCREMENT THE NUMBER OF EMPLOYEES IN THE TABLE
    empCount.textContent = `(${++count})`;
});

// DELETE EMPLOYEE
employees.addEventListener('click', function(e) {
    if (e.target.classList.contains('delete')) {
        var row = e.target.closest('tr');
        if (confirm('Are you sure you want to remove this employee?')) {
            row.remove();
            empCount.textContent = `(${--count})`;
        }
    }
});
