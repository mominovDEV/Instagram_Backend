"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const users_module_1 = require("./users/users.module");
const photos_module_1 = require("./photos/photos.module");
const sequelize_1 = require("@nestjs/sequelize");
const config_1 = require("@nestjs/config");
const auth_module_1 = require("./auth/auth.module");
const user_model_1 = require("./users/model/user.model");
const photo_model_1 = require("./photos/models/photo.model");
const userPhoto_model_1 = require("./photos/models/userPhoto.model");
const jwt_1 = require("@nestjs/jwt");
let AppModule = exports.AppModule = class AppModule {
};
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: '.env',
            }),
            sequelize_1.SequelizeModule.forRoot({
                dialect: 'postgres',
                host: process.env.POSTGRES_HOST,
                port: Number(process.env.POSTGRES_PORT),
                username: process.env.POSTGRES_USER,
                password: String(process.env.POSTGRES_PASSWORD),
                database: process.env.POSTGRES_DB,
                models: [user_model_1.User, photo_model_1.Photo, userPhoto_model_1.UserPhoto],
                autoLoadModels: true,
                logging: (res) => {
                    console.log(res);
                },
            }),
            jwt_1.JwtModule.register({
                global: true,
                secret: process.env.JWT_SECRET,
                signOptions: { expiresIn: '60s' },
            }),
            users_module_1.UsersModule,
            photos_module_1.PhotosModule,
            auth_module_1.AuthModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map