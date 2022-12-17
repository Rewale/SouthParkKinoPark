import * as UserActionCreators from './episode'
import * as SeasonActionCreators from './season'

export default {
  ...SeasonActionCreators,
  ...UserActionCreators
}