const Ok = (res, data) => {
  res.status(200).json({
    code: 200,
    status: 'OK',
    data,
  });
};

const Created = (res, data) => {
  res.status(201).json({
    code: 201,
    status: 'CREATED',
    data,
  });
};

const NoContent = (res) => {
  res.status(204).json({
    code: 204,
    status: 'NO_CONTENT',
  });
};

const BadRequest = (res, error) => {
  res.status(400).json({
    code: 400,
    status: 'BAD_REQUEST',
    error,
  });
};

const Unauthorized = (res, error) => {
  res.status(401).json({
    code: 401,
    status: 'UNAUTHORIZED',
    error,
  });
};

const Forbidden = (res, error) => {
  res.status(403).json({
    code: 403,
    status: 'FORBIDDEN',
    error,
  });
};
const NotFound = (res, error) => {
  res.status(404).json({
    code: 404,
    status: 'NOT_FOUND',
    error,
  });
};

const InternalServerError = (res, error = '') => {
  res.status(500).json({
    code: 500,
    status: 'INTERNAL_SERVER_ERROR',
    error,
  });
};

module.exports = {
  Ok,
  Created,
  NoContent,
  BadRequest,
  Unauthorized,
  Forbidden,
  NotFound,
  InternalServerError,
};
