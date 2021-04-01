import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// A `main` function so that you can use async/await
async function main() {
    // ... you will write your Prisma Client queries here
    //--------step 1---------
    //const allUsers = await prisma.user.findMany()
    //console.log(allUsers)
    
    //---------step 3--------
    const post = await prisma.post.create({
       data: {
          title: 'Prisma makes databases easy',
          author: {
            connect: { email: 'sarah@prisma.io' },
          },
       },
    })
    console.log(post)
    
    //---------step 2--------
    const allUsers = await prisma.user.findMany({
      include: { posts: true },
    })
    // use `console.dir` to print nested objects
    console.dir(allUsers, { depth: null })
}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
