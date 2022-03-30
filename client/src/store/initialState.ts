type InitialState = {
  'test': {id: number, name: string, quan: number}[],
  'count': number,
  'userInfo': {id: number|string, nickname: string, image: string, accessToken: string}
  'isLogin': boolean,
  'notification': [],
  'shareRecord': {genre: string, weight: number, count: number, time_record :number}[],
  'shareRecordId': string | number
}

export const initialState :InitialState = {
  'test' : [
    {id: 0, name: '멋진신발', quan: 2},
    {id: 1, name: '예쁜신발', quan: 3}
  ],
  'count' : 0,
  'userInfo' : {id: '', nickname: '', image: '', accessToken: ''},
  'isLogin' : false,
  'notification': [

  ],
  'shareRecord' : [

  ],
  'shareRecordId' : ''
}