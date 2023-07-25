"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhotosModule = void 0;
const common_1 = require("@nestjs/common");
const commit_service_1 = require("./commit.service");
const commit_controller_1 = require("./commit.controller");
const sequelize_1 = require("@nestjs/sequelize");
const commit_model_1 = require("./models/commit.model");
const userCommit_model_1 = require("./models/userCommit.model");
let PhotosModule = exports.PhotosModule = class PhotosModule {
};
exports.PhotosModule = PhotosModule = __decorate([
    (0, common_1.Module)({
        imports: [sequelize_1.SequelizeModule.forFeature([commit_model_1.Photo, userCommit_model_1.UserPhoto])],
        controllers: [commit_controller_1.PhotosController],
        providers: [commit_service_1.PhotosService],
    })
], PhotosModule);
//# sourceMappingURL=commit.module.js.map