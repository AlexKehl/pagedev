import { Role } from '../interface/Constants'
import { User } from '../interface/ConsumerResponses'
import { nil } from '../types'

const hasRole = ({ user, role }: { user: User | nil; role: Role }) => {
  if (!user) {
    return false
  }
  return user?.roles?.includes(role)
}

export { hasRole }
