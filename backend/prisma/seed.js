const path = require('path');
const dotenv = require('dotenv');

dotenv.config({ path: path.join(__dirname, '..', '.env') });

console.log('Database URL:', process.env.DATABASE_URL);

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  console.log('Starting database seed...');

  await prisma.employee.deleteMany();
  await prisma.role.deleteMany();
  await prisma.department.deleteMany();
  
  console.log('Cleared existing data');

  const exec = await prisma.department.create({
    data: { name: "Executive Leadership" }
  });

  const it = await prisma.department.create({
    data: { name: "Information Technology" }
  });

  const finance = await prisma.department.create({
    data: { name: "Finance" }
  });

  const hr = await prisma.department.create({
    data: { name: "Human Resources" }
  });

  const marketing = await prisma.department.create({
    data: { name: "Marketing" }
  });

  console.log('Created departments');

  await prisma.employee.createMany({
    data: [
      { firstName: "Mary", lastName: "Redsky", departmentId: exec.id },
      { firstName: "James", lastName: "Daniels", departmentId: exec.id },
      { firstName: "Alex", lastName: "Thompson", departmentId: it.id },
      { firstName: "Samantha", lastName: "Lee", departmentId: it.id },
      { firstName: "Khush", lastName: "Patel", departmentId: it.id },
      { firstName: "Linda", lastName: "Brown", departmentId: finance.id },
      { firstName: "Michael", lastName: "Wilson", departmentId: finance.id },
      { firstName: "Sarah", lastName: "Johnson", departmentId: hr.id },
      { firstName: "David", lastName: "Chen", departmentId: marketing.id }
    ]
  });

  console.log('Created employees');

  await prisma.role.createMany({
    data: [
      { firstName: "Sarah", lastName: "Johnson", role: "Chief Executive Officer" },
      { firstName: "Mark", lastName: "Stevens", role: "Chief Financial Officer" },
      { firstName: "John", lastName: "Smith", role: "CTO" },
      { firstName: "Emily", lastName: "Davis", role: "HR Director" },
      { firstName: "Chris", lastName: "Wilson", role: "Marketing Lead" }
    ]
  });

  console.log('Created roles');
  
  const deptCount = await prisma.department.count();
  const empCount = await prisma.employee.count();
  const roleCount = await prisma.role.count();
  
  console.log('Seeding completed');
  console.log(`Summary: ${deptCount} departments, ${empCount} employees, ${roleCount} roles`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());