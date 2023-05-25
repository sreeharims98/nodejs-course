const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", (data, age) => {
  console.log("GOT DATA FROM RESPONCE :", data.name);
});

customEmitter.on("response", (data, age) => {
  console.log("SOME OTHER LOGIC", age);
});

customEmitter.emit("response", { name: "Sreehari" }, 25);
