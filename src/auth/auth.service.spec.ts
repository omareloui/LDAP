import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthService],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it("should return user data if when s/he's authenticated", async () => {
    const user = await service.auth({
      username: 'John Doe',
      password: 'user1234',
    });
    expect(user).toBeDefined();
  });
});
