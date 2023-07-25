"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCommitDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_commit_dto_1 = require("./create-commit.dto");
class UpdateCommitDto extends (0, mapped_types_1.PartialType)(create_commit_dto_1.CreateCommitDto) {
}
exports.UpdateCommitDto = UpdateCommitDto;
//# sourceMappingURL=update-commit.dto.js.map