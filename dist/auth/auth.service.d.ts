import { ConfigService } from '@nestjs/config';
type AuthenticationParams = {
    username: string;
    password: string;
};
type SearchParams = {
    email: string;
};
export declare class AuthService {
    private configService;
    constructor(configService: ConfigService);
    private config;
    private client;
    auth({ username, password }: AuthenticationParams): Promise<boolean>;
    search(options: SearchParams): Promise<import("ldapts").SearchResult>;
}
export {};
