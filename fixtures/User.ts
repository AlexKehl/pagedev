import { LoginDto } from '../../common/interface/Dto'
import { User } from '../../common/interface/ConsumerResponses'

export const USER_EMAIL = 'user@test.com'
export const ADMIN_EMAIL = 'admin@test.com'

export const AdminUserWithPassword: LoginDto = {
  email: ADMIN_EMAIL,
  password: '12345678',
}

export const UserWithPassword: LoginDto = {
  email: USER_EMAIL,
  password: '12345678',
}

export const userResponse: User = {
  email: USER_EMAIL,
  roles: ['RegisteredUser'],
}
