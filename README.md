# LDAP integration

## Packages found

### ldapjs

**Pros:**

- Large community (250,788 weekly downloads [src](https://www.npmjs.com/package/ldapjs)).
- Last update 12 days ago.

**Cons:**

- Supports TypeScript via a separate package.

### ldap-authentication

**Pros:**

- Large community (113,603 weekly downloads [src](https://www.npmjs.com/package/ldap-authentication)).
- Supports TypeScript out of the box.
- Last update 5 months. (more stable but still gets updates).

**Cons:**

---

### ldapts

**Pros:**

- Supports TypeScript out of the box.
- Last update 13 days ago.
- It's used by the System Integration here.

**Cons:**

- Smaller community (18,872 weekly downloads [src](https://www.npmjs.com/package/ldapts)).

---

We tried out the `ldap-authentication` library first but we found some
problems. It threw `TCPConnection timeout error`.
One of System Integration team suggested to use `ldapts` so we
tried it out and it worked, at first at least. After a while it started to throw
the same error the previous library did.

We need to make sure that this error isn't something we are responsible of.

---

## Notes when it worked

- The authentication route `POST /auth` now returns true or false.
- We could get data over any user without any form of authentication we only
  need the email.
- We created `GET /auth/search` to get data with email address (didn't test yet).
