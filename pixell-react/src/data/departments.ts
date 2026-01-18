import type { Department } from "../types/Employee";

export const departments: Department[] = [
  {
    name: "Executive Leadership",
    employees: [
      { firstName: "Mary", lastName: "Redsky" },
      { firstName: "James", lastName: "Daniels" }
    ]
  },
  {
    name: "Information Technology",
    employees: [
      { firstName: "Alex", lastName: "Thompson" },
      { firstName: "Samantha", lastName: "Lee" },
      { firstName: "Khush", lastName: "Patel" }
    ]
  },
  {
    name: "Finance",
    employees: [
      { firstName: "Linda", lastName: "Brown" },
      { firstName: "Michael", lastName: "Wilson" }
    ]
  }
];
