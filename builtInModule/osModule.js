const os = require('os');

// console.log(os.EOL);                 // Defines the end-of-line marker for the OS.
// console.log(os.arch());              // Returns the CPU architecture.
// console.log(os.constants);           // Returns an object of useful OS constants.
// console.log(os.cpus());              // Returns information about each CPU/core.
// console.log(os.endianness());        // Returns the endianness of the CPU.
// console.log(os.freemem());           // Returns the amount of free system memory.
// console.log((os.freemem() / (1024 * 1024 * 1024)).toFixed(2)+'GB');
// console.log(os.homedir());           // Returns the home directory of the current user.
// console.log(os.hostname());          // Returns the hostname of the OS.
// console.log(os.loadavg());           // Returns the load averages over the last 1, 5, and 15 minutes.
// console.log(os.networkInterfaces()); // Returns the network interfaces that the OS has.
// console.log(os.platform());          // Returns the operating system platform.
// console.log(os.release());           // Returns the operating system release.
// console.log(os.tmpdir());            // Returns the temporary directory.
// console.log(os.totalmem());          // Returns the total amount of system memory.
// console.log(os.type());              // Returns the operating system name.
console.log(os.uptime());            // Returns the system uptime in seconds.
// console.log(os.userInfo());          // Returns the current user information.
// console.log(os.version());           // Returns the operating system's version.