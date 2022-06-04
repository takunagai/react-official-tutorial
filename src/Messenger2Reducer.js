export const initialState = {
  selectedId: 0,
  // message: 'Hello'
  messages: { // 全員のメッセージを保存できるようオブジェクトに変更
    0: 'Hello, Taylor',
    1: 'Hello, Alice',
    2: 'Hello, Bob',
  }
}

export function messengerReducer(state, action) {
  switch (action.type) {
    case 'changed_selection': {
      return {
        ...state,
        selectedId: action.contactId,
        // message: ''
      }
    }
    case 'edited_message': {
      return {
        ...state,
        messages: { // 該当 ID のメッセージを更新
          ...state.messages,
          [state.selectedId]: action.message
        }
      }
    }
    case 'sent_message': { // 追加
      return {
        ...state,
        messages: {
          ...state.messages,
          [state.selectedId]: ''
        }
      }
    }
    default: {
      throw Error('Unknown action: ' + action.type)
    }
  }
}