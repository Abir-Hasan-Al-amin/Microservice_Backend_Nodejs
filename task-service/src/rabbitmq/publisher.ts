import amqplib from "amqplib";

export const publishTaskEvent = async (message: any) => {
  const queue = "task_created";
  const conn = await amqplib.connect(process.env.RABBITMQ_URL!);
  const channel = await conn.createChannel();
  await channel.assertQueue(queue, { durable: true });

  channel.sendToQueue(queue, Buffer.from(JSON.stringify(message)), {
    persistent: true,
  });

  console.log("📤 Task event published:", message);
};
