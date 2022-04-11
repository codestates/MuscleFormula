import { AxiosRequestConfig } from "axios";

export type InitialState = {
  userInfo: {
    id: number | string;
    nickname: string;
    image: string;
    accessToken: AxiosRequestConfig<any> | string | undefined | any;
    loginType: string;
  };
  isLogin: boolean;
  shareRecord:
    | { genre: string; weight: number; count: number; time_record: number }[]
    | null;
  shareRecordId: string | number;
  postId: number | null;
};

export const initialState: InitialState = {
  userInfo: { id: "", nickname: "", image: "", accessToken: "", loginType: "" },
  isLogin: false,
  shareRecord: null,
  shareRecordId: "",
  postId: null,
};
