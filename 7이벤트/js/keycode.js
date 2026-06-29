/*
1 <body></body> 요소 선택해서 저장


*/

const body = document.body;

/*
        2 <div id="result"></div>요소 선택해서 저장


 */

const result =document.querySelector("#result");

/* 
        3 선택한 바디요소에 키보드의 키를 누르고 있는동작(keydown 이벤트) 등록해 사용자가 
        키를 누르고 있는 동작을 실행할때마다 이벤트핸들러 함수가 호출되어 실행되게 작성하자.
*/
 body.addEventListener("keydown",(e)=>{
/* 
        3.1 바디전체 영역을 보면서 어떤 키보드의 어떤 키를 누르고 있는 동작을 하는지 얻어 출력

*/
// <div id="result">콘텐츠영역</div>의 콘텐츠영역에 누를 키코드값 정보를 넣어 보여주자
result.innerText =  ` code : ${e.code}, key : ${e.key} `;


 });



/* 
    이벤트 등록 방식3 addEventListener 메소드 이용하여 선택한 요소에 이벤트종류 하나 이상 등록
        작성 문법
                요소선택.addEventListener("이벤트종류1 이벤트종류2", 이벤트핸들러함수,옵션작성);

       작성문법 참고. 옵션작성 자리에 작성할 코드 종류 
        {once : true} -> 선택한요소에 이벤트종류 등록하면 이벤트핸들러 함수가 여러번의 이벤트가 발생해도
                            이벤트 처리를 단 한번만 수행함


        {capture : true} -> 이벤트 캡처링 단계에서 이벤트처리 실행하는 값

        {capture : false} -> 기본값 false로 이벤트 버블링 단계에서 이벤트처리 실행하는 값



*/






