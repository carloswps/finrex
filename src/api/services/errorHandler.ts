// Axios Error Interceptor

let ErrorHandler: ((msg: string | null) => void) | null = null;

export const registerErrorHandler = (handler: (msg: string | null) => void) => {
  ErrorHandler = handler;
};

export const handleError = (msg: string | null) => {
  if (ErrorHandler) {
    ErrorHandler(msg);
  } else {
    console.error('Erro capturado antes de ser registrado: ', msg);
  }
};
