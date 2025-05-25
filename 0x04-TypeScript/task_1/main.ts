interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // Allows additional attributes
}

interface Directors extends Teacher {
  numberOfReports: number;
}

// Interface for printTeacher function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// printTeacher function implementation
const printTeacher: printTeacherFunction = (
  firstName: string,
  lastName: string
): string => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Example usage
const director1: Directors = {
  firstName: "Alice",
  lastName: "Johnson",
  fullTimeEmployee: true,
  location: "Boston",
  contract: true,
  numberOfReports: 5,
};

const director2: Directors = {
  firstName: "Bob",
  lastName: "Smith",
  fullTimeEmployee: false,
  yearsOfExperience: 10,
  location: "Chicago",
  numberOfReports: 3,
  department: "Administration",
};

// Display director info in console for demonstration
console.log(
  "Director 1:",
  printTeacher(director1.firstName, director1.lastName)
); // A. Johnson
console.log(
  "Director 2:",
  printTeacher(director2.firstName, director2.lastName)
); // B. Smith

// Create a table to display director information
const table = document.createElement("table");
table.style.border = "1px solid black";
table.style.borderCollapse = "collapse";

// Create header row
const headerRow = document.createElement("tr");
const headers = [
  "Name",
  "Full Time",
  "Location",
  "Contract",
  "Years of Experience",
  "Number of Reports",
];
headers.forEach((headerText) => {
  const th = document.createElement("th");
  th.textContent = headerText;
  th.style.border = "1px solid black";
  th.style.padding = "8px";
  headerRow.appendChild(th);
});
table.appendChild(headerRow);

// Function to add director row
function addDirectorRow(director: Directors) {
  const row = document.createElement("tr");

  const cells = [
    printTeacher(director.firstName, director.lastName), // Use printTeacher for name
    director.fullTimeEmployee.toString(),
    director.location,
    director.contract?.toString() || "N/A",
    director.yearsOfExperience?.toString() || "N/A",
    director.numberOfReports.toString(),
  ];

  cells.forEach((cellText) => {
    const td = document.createElement("td");
    td.textContent = cellText;
    td.style.border = "1px solid black";
    td.style.padding = "8px";
    row.appendChild(td);
  });

  table.appendChild(row);
}

// Add directors to table
[director1, director2].forEach(addDirectorRow);

document.body.appendChild(table);
