"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const dist_1 = require("@nestjs/swagger/dist");
const app_module_1 = require("./app.module");
const start = async () => {
    try {
        const app = await core_1.NestFactory.create(app_module_1.AppModule);
        const PORT = process.env.PORT || 3030;
        app.useGlobalPipes(new common_1.ValidationPipe());
        const config = new swagger_1.DocumentBuilder()
            .setTitle('Nest-One Project')
            .setDescription('REST API')
            .setVersion('1.0.0')
            .addTag('NestJS, Postgersql, Sequileze')
            .build();
        const document = dist_1.SwaggerModule.createDocument(app, config);
        dist_1.SwaggerModule.setup('/api/docs', app, document);
        await app.listen(PORT, () => {
            console.log(`Server ${PORT}-da ishga tushdi`);
        });
    }
    catch (error) {
        console.log(error);
    }
};
start();
//# sourceMappingURL=main.js.map