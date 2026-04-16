export const roleRepo = {
  async getRoles() {
    const response = await fetch("http://localhost:3000/api/roles");

    if (!response.ok) {
      throw new Error("Failed to fetch roles");
    }

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

    if (!response.ok) {
      const text = await response.text();
      console.error("Backend error (roles):", text);
      throw new Error("Failed to create role");
    }

    return await response.json();
  }
};