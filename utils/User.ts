import { Role } from '../interface/Constants'
import { User } from '../interface/ConsumerResponses'

const hasRole = ({ user, role }: { user?: User; role: Role }) => {
  if (!user) {
    return false
  }
  return user?.roles?.includes(role)
}

export { hasRole }
