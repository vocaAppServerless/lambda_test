exports.handler = async (event) => {
  // 로그에 이벤트 출력 (디버깅 용)
  console.log("Received event:", JSON.stringify(event, null, 2));

  // 이벤트에서 HTTP 요청에 대한 정보 가져오기
  const httpMethod = event.httpMethod;
  const path = event.path;
  const queryStringParameters = event.queryStringParameters;
  const body = JSON.parse(event.body || "{}");

  // 간단한 응답 생성
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello from Lambda!",
      input: event, // 전체 이벤트 데이터 포함
      httpMethod: httpMethod,
      path: path,
      queryStringParameters: queryStringParameters,
      requestBody: body,
    }),
  };

  // 응답 반환
  return response;
};
