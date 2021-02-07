const { createLogger, transports, format} = require("winston");
const { combine, timestamp, printf, label, colorize, simple } = format;
const printFormat = printf(({ timestamp, label, level, message }) => {
    return `${timestamp} [${label}] ${level} : ${message}`;
})

const printLogFomat = {
    file : combine(
    label({
        label: "백엔드 맛보기",
        }),
    
    timestamp({
       format: "YYYY-MM-DD HH:mm:dd"
        }),
    printFormat
    ),
    console: combine(
        colorize(),
        simple(),
    )
};

const opts = {
    file: new transports.File({
        filename: "access.log",
        dirname: "./logs",
        level: "info",
        format: printLogFomat.file
    }),
    console: new transports.Console({
        level: "info",
        format: printLogFomat.console
    })
}

const logger = createLogger({
    transports: [opts.file]
});

if (process.env.NODE_ENV !== "production") {
    logger.add(opts.console)    
}

module.exports = logger;