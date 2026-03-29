var student1 = {
  stdName: "MAheen",
  email: "maheenzuhra@hmail.com",
  roolNumber: 123,
  enrolled: true,
  days: ["Mon", "Tue", "Wed"],
};
var student2 = {
  stdName: "Hreem",
  email: "hareem@hmail.com",
  roolNumber: 124,
  enrolled: true,
  days: ["Mon", "Tue", "Wed"],
};
document.getElementById("table").innerHTML = ` <tr>
    <th>Name</th>
    <th>Email</th>
    <th>Roll Number</th>
    <th>Enrolled</th>
    <th>Days</th>
  </tr>
  <tr>
    <td>${student1.stdName}</td>
    <td>${student1.email}</td>
    <td>${student1.roolNumber}</td>
    <td>${student1.enrolled}</td>
    <td>${student1.days[0]}-${student2.days[1]}-${student2.days[2]}</td>
  </tr>
  <tr>
    <td>${student2.stdName}</td>
    <td>${student2.email}</td>
    <td>${student2.roolNumber}</td>
    <td>${student2.enrolled}</td>
    <td>${student2.days[0]}-${student2.days[1]}-${student2.days[2]}</td>
  </tr>`;
  console.log(student2.enrolled);
student2 ={
  enrolled: false,
}
console.log(student2.enrolled);
