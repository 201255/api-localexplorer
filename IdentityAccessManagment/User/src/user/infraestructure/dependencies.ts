import { MysqlUserRepository } from "./repositories/mysqUserRepository";

import { RegisterUserUseCase } from "../application/usecase/registerUseCase";
import { ResgisterUserController } from "./controllers/registerController";

import { LoginUserController } from "./controllers/loginUserController";
import { LoginUserUseCase } from "../application/usecase/loginUserUseCase";

import { UpdateUserByIdUseCase } from "../application/usecase/updateUserByIdUseCase";
import { UpdateUserByIdController } from "./controllers/updateUseByIdController";

import { UpdatePasswordUserUsecase } from "../application/usecase/updatePasswordUserUseCase";
import { UpdatePasswordController } from "./controllers/updatePasswordUserController";


export const mysqlUserRepository = new MysqlUserRepository()

// regitrar usuario
export const registerUserUseCase = new RegisterUserUseCase(mysqlUserRepository) 
export const resgisterUserController = new ResgisterUserController(registerUserUseCase)

//iniciar sesion
export const loginUserUseCase = new LoginUserUseCase(mysqlUserRepository)
export const loginUserController = new LoginUserController(loginUserUseCase)

//actualizar usuario
export const updateUserByIdUseCase = new UpdateUserByIdUseCase(mysqlUserRepository)
export const updateUserByIdController = new UpdateUserByIdController(updateUserByIdUseCase)

// actualizar contraseña
export const updatePasswordUserUsecase = new UpdatePasswordUserUsecase(mysqlUserRepository)
export const updatePasswordController = new UpdatePasswordController(updatePasswordUserUsecase)