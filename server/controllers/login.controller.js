import loginService from "../services/login.service.js";

export default {
  login: loginService.login,
  createStudentAccount: loginService.createStudentAccount,
  deleteStudentAccount: loginService.deleteStudentAccount,
  changePassword: loginService.changePassword,
};
