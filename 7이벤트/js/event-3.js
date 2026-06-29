



const button = document.querySelector("button");

/* 
    2 선택해온 버튼요소에 클릭 이벤트 등록 그리고 클릭이벤트가 발생하면 자동으로 호출될, 이벤트 핸들러 함수 연결

*/

button.onclick = changeBackground; // 호출할 이벤트 핸들러 함수명 뒤에()를 작성하지 않고,
                                    // 함수명; <- 만 작성해 호출 가능합니다

/*

3 클릭이벤트가 발생하면 처리할 이벤트 핸들러 함수를 외부에 따로 정의

*/

function changeBackground(){


    document.body.style.backgroundColor ="green";

}

