import amqplib from "amqplib";

export const startTaskListener = async () => {
  const queue = "task_created";
  const conn = await amqplib.connect(process.env.RABBITMQ_URL!);
  const channel = await conn.createChannel();
  await channel.assertQueue(queue, { durable: true });

  console.log("✅ Listening for task events...");

  channel.consume(queue, (msg) => {
    if (!msg) return;
    const data = JSON.parse(msg.content.toString());
    console.log("📩 Task Event Received:", data);

    // TODO: send email, SMS, push, etc.

    channel.ack(msg);
  });
};
