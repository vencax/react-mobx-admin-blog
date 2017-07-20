import { observable, computed, toJS, action, transaction, asMap } from 'mobx'
import AuthStore from './auth'

export default class TranslatStore extends AuthStore {

  @observable i18n = {}

  transl(str) {
    return this.i18n[str] || `UNTRANSL${str}`
  }
  __(str) {
    return this.transl(str)
  }

  @action changeLang() {
    this.i18n = csTtransl
  }

}
