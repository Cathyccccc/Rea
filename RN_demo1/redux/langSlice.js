import { createSlice } from "@reduxjs/toolkit";

const data = [
  {lang: 'zh', text: '中文(简体)'},
  {lang: 'yue', text: '中文(粤语)'},
  {lang: 'en', text: '英语'},
  {lang: 'jp', text: '日语'},
  {lang: 'kor', text: '韩语'},
  {lang: 'fra', text: '法语'},
  {lang: 'de', text: '德语'},
  {lang: 'ru', text: '俄语'},
  {lang: 'th', text: '泰语'},
  {lang: 'spa', text: '西班牙语'},
  {lang: 'ara', text: '阿拉伯语'},
  {lang: 'may', text: '马来语'},
  {lang: 'pt', text: '葡萄牙语'},
  {lang: 'it', text: '意大利语'},
]

const langSlice = createSlice({
  name: 'lang',
  initialState: {
    selectIndex: 0, // 默认选中翻译选项为第一项
    languages: data,
  },
  reducers: {
    setSelect: (state, action) => {
      state.selectIndex = action.payload;
    }
  }
})

export const { setSelect } = langSlice.actions;
export default langSlice.reducer;