const axios = require('axios') // node.js 환경에서 사용할 수 있는 require로 모듈 가져옴, import X, 기존에 설치된 모듈 사용 가능 (package.json에 기재된 모듈)
const { OMDB_API_KEY } = process.env

exports.handler = async function(event, context) {
  const params = JSON.parse(event.body)
  const { title, type, year, page, id } = params

  const url = id 
    ? `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${id}&plot=full`
    : `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=${page}`
  
  try {
    const res = await axios.get(url)
    console.log(res.data)
    if (res.data.Error) {
      // reject(res.data.Error)
      return {
        statusCode: 400,
        body: res.data.Error
      }
    }
    // resolve(res)
    return {
      statusCode: 200,
      body: JSON.stringify(res.data)
    }
  } catch (error) {
    console.log(error.reponse.status)
    // reject(error.message)
    return {
      statusCode: error.reponse.status,
      body: error.message
    }
  }
}