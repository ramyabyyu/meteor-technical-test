const serverRoute = {
  // Auth || user
  SignIn: '/user/sign-in',
  SignUp: '/user/sign-up',

  // Borrowing
  BorrowingAll: '/borrowing/',
  BorrowingPending: '/borrowing/pending',
  BorrowingEditStatus: '/borrowing/',

  // Book
  BookAll: '/book/',
  BookOne: '/book/',
};

export default serverRoute;
