export const roleRepo = {

  async getRoles() {
    const response = await fetch("http://localhost:3000/api/roles");
    return await response.json();
  },

  async createRole(firstName: string, lastName: string, role: string) {

    const response = await fetch("http://localhost:3000/api/roles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        firstName,
        lastName,
        role
      })
    });

    return await response.json();
  }

};