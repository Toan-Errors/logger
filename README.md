# @toanerrors/logger

Logger functionality for express middleware.

## Installation

Install the package using npm:

```bash
npm install @toanerrors/logger
```

## Usage

importing the package:

```ts
import logger from "@toanerrors/logger";
```

example:

```ts
import logger from "@toanerrors/logger";
logger.info("info message");
logger.success("success message");
logger.error("error message");
logger.warning("warning message");
logger.debug("debug message");
```

example with middleware:

```ts
import logger from "@toanerrors/logger";
import express from "express";

const app = express();
app.use(logger);
```

Logger Methods:

- `logger.info(message: any)`: Logs an info message.
- `logger.success(message: any)`: Logs a success message.
- `logger.error(message: any)`: Logs an error message.
- `logger.warning(message: any)`: Logs a warning message.
- `logger.debug(message: any)`: Logs a debug message.
- `logger.middleware(req: Request, res: Response, next: NextFunction)`: Express middleware to log request details.

## License

MIT
