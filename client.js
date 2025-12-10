import net from "net";
import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const socket = net.createConnection(5000, "localhost", () => {
    console.log("Connected to chat server");
});

socket.on("data", (data) => {
    console.log("\n" + data.toString());
    rl.prompt();
});

rl.on("line", (input) => {
    socket.write(input);
});
