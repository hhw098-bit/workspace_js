/* 
				


<select name="major" id="major">			
    <option>---- 학과 선택 ----</option>				
    <option value="archi">건축공학과</option>				
    <option value="mechanic">기계공학과</option>				
    <option value="indust">산업공학과</option>					
    <option value="elec">전기전자공학과</option>					
    <option value="computer">컴퓨터공학과</option>						
    <option value="chemical">화학공학과</option>			
</select>

1사용자가 학과 선택할수있는 위 셀렉트요소 한쌍을 선택해서 가져와 상수에 저장



*/
const selectMenu = document.querySelector("#major");
/*
2 위에서 선택한 셀렉트 내부 작성된 옵션들 중에서 하나의 옵션을 
  선택한 동착(change 이벤트)를 셀렉트요소에 등록 후


*/
//selectMenu.addEventListener();
selectMenu.onchange = function(){
/*

     2.1. 선택한 <option>의 텍스트노드 를 가져와  변수에 저장
         
          풀이1.  selectMenu.options 속성을 호출하면
                  모든 <option>요소들을 포함하고 있는 유사배열을 반환해줌 

          풀이2.  selectMenu.selectedIndex 속성을 호출하면
                  현재 선택된 <option>요소의 index 위치번호를 반환해줌    
                  
          풀이3.  selectMenu.options[selectMenu.selectedIndex].innerText;  전체를 작성 하면
                  현재 선택된 <opttion>텍스트노드</option> 요소의 텍스트노드 를 반환해줌
*/ 

let selectedText = selectMenu.options[selectMenu.selectedIndex].innerText;

// 3 선택한 옵션의 텍스트 노드를 알림창에 보여주자
alert(`${selectedText}를 선택 했습니다.`);






};