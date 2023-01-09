import { AxiosService, IBasePayload } from './AxiosService';
import { ISignupRequestDto } from './types/Signup/request/ISignupRequestDto';
import { ILoginRequestDto } from './types/Login/request/ILoginRequestDto';
import { ApiEndpoint } from './types/api/enums/ApiEndpoint';

class AuthService extends AxiosService {
  public constructor() {
    super();
  }

  public login(dto: ILoginRequestDto) {
    return this.post(ApiEndpoint.SIGN_IN, dto);
  }

  public signup(dto: ISignupRequestDto): Promise<IBasePayload> {
    return this.post(ApiEndpoint.SIGN_UP, dto);
  }

  public logout(): Promise<IBasePayload> {
    return this.post(ApiEndpoint.LOGOUT);
  }
}

export const authService = new AuthService();