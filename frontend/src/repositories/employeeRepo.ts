export const employeeRepo = {

  async getDepartments() {
    const response = await fetch("http://localhost:3000/api/departments");

    if (!response.ok) {
      throw new Error("Failed to fetch departments");
    }

    return await response.json();
  },

  async createEmployee(
    firstName: string,
    lastName: string,
    departmentName: string,
    token: string
  ) {
    const response = await fetch("http://localhost:3000/api/employees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        firstName,
        lastName,
        department: departmentName
      })
    });

    if (!response.ok) {
      const text = await response.text(); // debug
      console.error("Backend error:", text);
      throw new Error("Failed to create employee");
    }

    return await response.json();
  }

}; 