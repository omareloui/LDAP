import { AuthDto } from './auth.dto';
import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    authenticate(body: AuthDto): Promise<{
        authentacted: boolean;
    }>;
}
