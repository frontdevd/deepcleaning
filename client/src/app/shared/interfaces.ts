export interface User {
  email: string,
  password: string,
  returnSecureToken?: boolean
}

export interface FbAuthResponse {
  idToken: string,
  expiresIn: string
}

export interface Post {
  id? : string,
  title: string,
  author: string,
  text: string,
  description: string,
  image: string,
  date: Date,
}

export interface FbCreateResponse {
  name: string
}

export interface Contact {
  service: string,
  name: string,
  phone: string,
  address: string,
  email: string,
  datepicker: string,
}

export interface Services {
  id: number,
  name: string
}
