import net from "net";

const clients = [];

const server = net.createServer((socket) => {
    console.log("New client connected");

    clients.push(socket);

    socket.on("data", (data) => {
        const message = data.toString().trim();
        console.log("Message:", message);

        // broadcast to all clients except sender
        clients.forEach(client => {
            if (client !== socket) {
                client.write(message + "\n");
            }
        });
    });

    socket.on("end", () => {
        console.log("Client disconnected");
        const index = clients.indexOf(socket);
        if (index !== -1) clients.splice(index, 1);
    });
});

server.listen(5000, () => {
    console.log("TCP Server running on port 5000");
});
