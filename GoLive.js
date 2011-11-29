var request = require('request')
  request(
    { method: 'POST'
    , uri: 'https://login.netromedia.com/rest.svc/login'
    , json: true
    ,  body: JSON.stringify({Email: 'me@myemail.com', Password: "PassworD"})
    }
  , function (error, response, body) {
      if(response.statusCode == 200){
        console.log(response.body)
      } else {
        console.log('error: '+ response.statusCode)
        console.log(body)
      }
    }
  )