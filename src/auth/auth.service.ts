import { Injectable } from '@nestjs/common';
import { Client as LdapClient } from 'ldapts';
import { ConfigService } from '@nestjs/config';

import {
  AuthenticationParams,
  SearchParams,
} from './interfaces/auth.interface';

@Injectable()
export class AuthService {
  constructor(private configService: ConfigService) {}

  private config = {
    url: this.configService.get<string>('LDAP_URL'),
    timeout: 0,
    connectionTimeout: this.configService.get<number>('LDAP_TIMEOUT'),
  };

  private client = new LdapClient(this.config);

  async auth({ username, password }: AuthenticationParams) {
    let isAuthenticated: boolean;

    try {
      await this.client.bind(username, password);
      isAuthenticated = true;
    } catch (ex) {
      isAuthenticated = false;
      console.log({ ex });
    } finally {
      await this.client.unbind();
    }

    return isAuthenticated;
  }

  async search(options: SearchParams) {
    const { email } = options;
    try {
      const result = await this.client.search(
        this.configService.get<string>('LDAP_BASE_DN'),
        {
          filter: `(mail=${email})`,
        },
      );
      return result;
    } catch (e) {
      console.error('ERROR: something went wrong while searching.');
      console.log(e);
      process.exit();
    }
  }
}
