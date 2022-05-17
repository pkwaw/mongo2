if(process.env.NODE_ENV === 'production'){ // 환경변수 배포 이후이면 prod에서 가져옴
    module.exports = require('./prod');
} else{
    module.exports = require('./dev'); // local 환경의 개발 상태이면 dev에서 가져옴
}