"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const ldapts_1 = require("ldapts");
const config_1 = require("@nestjs/config");
let AuthService = class AuthService {
    constructor(configService) {
        this.configService = configService;
        this.config = {
            url: this.configService.get('LDAP_URL'),
            timeout: 0,
            connectionTimeout: this.configService.get('LDAP_TIMEOUT'),
        };
        this.client = new ldapts_1.Client(this.config);
    }
    async auth({ username, password }) {
        let isAuthenticated;
        try {
            await this.client.bind(username, password);
            isAuthenticated = true;
        }
        catch (ex) {
            isAuthenticated = false;
            console.log({ ex });
        }
        finally {
            await this.client.unbind();
        }
        return isAuthenticated;
    }
    async search(options) {
        const { email } = options;
        try {
            const result = await this.client.search(this.configService.get('LDAP_BASE_DN'), {
                filter: `(mail=${email})`,
            });
            return result;
        }
        catch (e) {
            console.error('ERROR: something went wrong while searching.');
            console.log(e);
            process.exit();
        }
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map