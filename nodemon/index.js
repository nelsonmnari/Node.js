const logEvents = require("./logEvent");
const EventEmitter = require("events");

class myEmitter extends EventEmitter {}

//initialize object
const myEmitter = new MyEmitter();

// add listener for the log event

myEmitter.on("log", (msg) => logEvents(msg));

setTimeout(() => {
  //emit event
  myEmitter.emit("log", "log event emitted!");
}, 2000);
