import { Response } from 'express';

function sendResponse(response: any, res: Response) {
  let statusCode: number;
  switch (response.type) {
    case 'Ok':
      statusCode = 200;
      break;
    case 'Created':
      statusCode = 201;
      break;
    case 'Updated':
      statusCode = 200;
      break;
    case 'Deleted':
      statusCode = 200;
      break;
    case 'Unauthorized':
      statusCode = 401;
      break;
    case 'Not Allowed':
      statusCode = 403;
      break;
    case 'Not Found':
      statusCode = 404;
      break;
    case 'Conflict':
      statusCode = 409;
      break;
    case 'Unprocessable':
      statusCode = 422;
      break;
    default:
      console.log(response);
      return res.sendStatus(500);
  }

  if (response.message) return res.status(statusCode).send(response.message);
  else return res.sendStatus(statusCode);
}

export default sendResponse;