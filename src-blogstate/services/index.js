import { DataRequester } from 'react-mobx-admin'
import { convertQuery, getTotalItems } from './api_flavor'

export default class BlogAppRequester extends DataRequester {

  constructor(on401, onError) {
    super(convertQuery, getTotalItems, on401, Conf.apiUrl)
  }

  // maybe more methods? :)

}
