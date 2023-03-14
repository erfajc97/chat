const { check } = require("express-validator");
const validateResults = require("../utils/validate");

const createUserValidator = [
  check("userName", "Elnombre de usuario no puede estar vacio")
    .exists()
    .withMessage("El Username debe de existir")
    .notEmpty()
    .withMessage("No debe de estar vacio")
    .isString()
    .withMessage("Debe de ser un string")
    .isLength({ min: 4 })
    .withMessage("Debe de tener minimo 4 caracteres"),
  check("email", "Error con el correo electronico")
    .exists()
    .withMessage("No se encontro la propiedad email")
    .notEmpty()
    .withMessage("No se encontro un valor para el email")
    .isString()
    .isLength({ min: 7, max: 50 })
    .withMessage("EL correo debe tener una longitud entre 7 y 50 caracteres")
    .isEmail()
    .withMessage("El correo no tiene un formato correcto"),
  check("password", "Error con la contraseña")
    .exists()
    .notEmpty()
    .isString()
    .isLength({ min: 4 })
    .withMessage("EL correo debe tener una longitud entre 7 como minimo"),
  (req, res, next) => {
    validateResults(req, res, next);
  },
];

module.exports = {
  createUserValidator,
};
