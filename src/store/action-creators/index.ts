import * as UserActionCreators from './user'
import * as TodoActionCreator from './todo'

export default {
    ...TodoActionCreator,
    ...UserActionCreators
}