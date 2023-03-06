export default function () {
  return {
    LDAP_URL: process.env.LDAP_URL,
    LDAP_BASE_DN: process.env.LDAP_BASE_DN,
    LDAP_TIMEOUT: parseInt(process.env.LDAP_TIMEOUT || '120000', 10),
  };
}
