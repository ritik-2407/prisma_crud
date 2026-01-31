import { PrismaClient, Prisma } from "../app/generated/prisma/client";
import { PrismaPg } from '@prisma/adapter-pg'
import 'dotenv/config'

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
})

const prismaClient = new PrismaClient({
  adapter,
});

const userData: Prisma.UserCreateInput[] = [
 
  {
    name: "Meghna",
    email: "meguuuuu.io",
    posts: {
      create: [
        {
          title: "Join the Prisma Discord",
          content: "https://pris.ly/discord",
          published: true,
        },
        {
          title: "Prisma on YouTube",
          content: "https://pris.ly/youtube",
        },
      ],
    },
  },

 
];

export async function main() {

   
  for (const u of userData) {
    await prismaClient.user.create({ data: u });
  }
}

main();