const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const dataCategoryEvent = [
  {
    name: 'Hiburan',
  },
  {
    name: 'Musik',
  },
  {
    name: 'Edukasi',
  },
];

const dataUserRole = [
  {
    role: 'participant',
  },
  {
    role: 'eventOrganizer',
  },
];

async function main() {
  for (let item of dataCategoryEvent) {
    await prisma.category.create({
      data: item,
    });
  }

  // for(let item of dataCategoryEvent){
  //   await prisma.category.create({
  //     data: item
  //   })
  // }
}

main()
  .catch((error) => {
    console.log(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect;
  });
