interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "New York"
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "Los Angeles"
};

const studentsList: Student[] = [student1, student2];

// Create table and append to document body
const table = document.createElement('table');
table.style.border = '1px solid black';
table.style.borderCollapse = 'collapse';

// Create header row
const headerRow = document.createElement('tr');
const headers = ['First Name', 'Location'];
headers.forEach(headerText => {
  const th = document.createElement('th');
  th.textContent = headerText;
  th.style.border = '1px solid black';
  th.style.padding = '8px';
  headerRow.appendChild(th);
});
table.appendChild(headerRow);

// Append student data rows
studentsList.forEach(student => {
  const row = document.createElement('tr');
  
  const firstNameCell = document.createElement('td');
  firstNameCell.textContent = student.firstName;
  firstNameCell.style.border = '1px solid black';
  firstNameCell.style.padding = '8px';
  
  const locationCell = document.createElement('td');
  locationCell.textContent = student.location;
  locationCell.style.border = '1px solid black';
  locationCell.style.padding = '8px';
  
  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});

document.body.appendChild(table);