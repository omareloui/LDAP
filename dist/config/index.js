"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1() {
    return {
        LDAP_URL: process.env.LDAP_URL || 'ldap://AAIBank.Root.Local',
        LDAP_BASE_DN: process.env.LDAP_BASE_DN || 'DC=AAIBank, DC=Root, DC=Local',
        LDAP_TIMEOUT: parseInt(process.env.LDAP_TIMEOUT || '120000', 10),
    };
}
exports.default = default_1;
//# sourceMappingURL=index.js.map