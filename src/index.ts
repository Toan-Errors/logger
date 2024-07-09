type Request = any;
type Response = any;
type NextFunction = any;

const SUCCESS = "\x1b[32m";
const ERROR = "\x1b[31m";
const WARNING = "\x1b[33m";
const INFO = "\x1b[34m";
const RESET = "\x1b[0m";
const DEBUG = "\x1b[35m";

interface Logger {
  log(message: any, color: string): void;
  info(message: any): void;
  success(message: any): void;
  error(message: any): void;
  warning(message: any): void;
  debug(message: any): void;
  middleware(req: Request, res: Response, next: NextFunction): void;
}

const logger: Logger = {
  log(message: any, color: string): void {
    const time = new Date().toLocaleTimeString();
    if (message instanceof Error) {
      console.log(color, `[${time}] ${message.stack}`, RESET);
    } else {
      console.log(color, `[${time}] ${message}`, RESET);
    }
  },
  info(message: any): void {
    this.log(message, INFO);
  },
  success(message: any): void {
    this.log(message, SUCCESS);
  },
  error(message: any): void {
    this.log(message, ERROR);
  },
  warning(message: any): void {
    this.log(message, WARNING);
  },
  debug(message: any): void {
    this.log(message, DEBUG);
  },
  middleware(req: Request, res: Response, next: NextFunction): void {
    const time = new Date().toLocaleTimeString();
    console.log(
      `${INFO} [${time}] ${req.method} ${
        req.url
      }${RESET} ${DEBUG}${JSON.stringify(req.body)}${RESET}`
    );
    next();
  },
};

export default logger;
