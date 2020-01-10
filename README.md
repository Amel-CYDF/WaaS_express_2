### 01/08
1. XSS를 막기 위한 필터 미들웨어를 만들려고 한다. \<srcipt> 라는 문자열을 POST나 PUT 메소드의 바디로 받으면 status 400과 함께 응답하는 미들웨어를 만들어 적용하고 테스트하여라.  
- app.js 16~23줄에 작성

2. 오류처리 미들웨어를 만들려고 한다. /err로 요청이 갈 경우 에러가 전달되는데 이를 받아 err.stack을 콘솔에 출력하고 응답으로 {success: false}를 보내는 오류 처리 미들웨어를 작성하고 적용하여라.
- index.js 14~17줄에 작성 

### 01/09
- 0109 스켈레톤 코드에 routes/post.js에 주석 달린 부분 채우기
  - 작성완료

### 01/10
- 5초, 3초, 1초 후에 a, b, c를 각각 출력하는 함수를 만들고 async/await을 이용해 5초, 8초, 9초에 a, b, c가 각각 출력하도록 하는 async 함수를 만들어라.
```js
const amel = (char, time) => {
  return new Promise( resolve => {
    setTimeout( () => {
      console.log(char);
      resolve();
    }, time);
  });
};

const test = async () => {
  await amel('a', 5000);
  await amel('b', 3000);
  await amel('c', 1000);
};

test();
```

- 만든 async 함수 내에서 가장 아래에 throw new Error('error')를 추가하고 아래 코드를 사용해 테스트 해보아라. 0109의 routes/index.js에 넣어 확인해볼것
```js
router.get('/async', async function(req, res, next) {
  try {
    await test();
  } catch (err) {
    next(err);
  }
});
router.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({msg: 'error occur!'});
});
```
![0110_ScreenShot](./0110_SreenShot.png)

### 01/11
