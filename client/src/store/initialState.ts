type InitialState = {
  'test': {id: number, name: string, quan: number}[],
  'count': number,
  'userInfo': {id: number, nickname: string, email: string}[]
  'notification': []
}

export const initialState :InitialState = {
  'test' : [
    {id: 0, name: '멋진신발', quan: 2},
    {id: 1, name: '예쁜신발', quan: 3}
  ],
  'count' : 0,
  'userInfo' : [

  ],
  'notification': [

  ]
}