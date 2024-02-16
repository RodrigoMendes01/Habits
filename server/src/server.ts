import fastify from 'fastify';
import {PrismaClient} from '@prisma/client';
import cors from '@fastify/cors';

const app = fastify();
const prisma = new PrismaClient();

app.register(cors, {
  origin: 'http://localhost:3333'
});

app.get('/', async () => {
  const habits = await prisma.habit.findMany();

  return habits;
});

app.listen({
  port: 3333
}).then(() => {
  console.log('🚀Server running at http://localhost:3333');
});