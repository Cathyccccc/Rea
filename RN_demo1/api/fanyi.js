import md5 from 'md5';

export function translateApi(query, from = 'auto', to) {
  const AppId = '20230721001752238';
  const SecretKey = '7diHCJLFuv7GQQ2R0dtj';
  const uri = 'https://fanyi-api.baidu.com/api/trans/vip/translate';
  const salt = Math.random();
  const sign = md5(`${AppId}${query}${salt}${SecretKey}`) // appid+q+salt+密钥的MD5值
  return new Promise((resolve, reject) => {
    fetch(uri, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      mode: 'cors',
      body: `q=${query}&from=${from}&to=${to}&appid=${AppId}&salt=${salt}&sign=${sign}`
      // {
      //   q: query,
      //   from,
      //   to,
      //   appid: AppId,
      //   salt,
      //   sign
      // }
    })
    .then((res) => res.json())
    .then((resp) => {
      if (resp.trans_result) {
        resolve(resp.trans_result[0].dst)
      } else {
        reject('错误：请求过于频繁！')
      }
    })
  })
}