## 배운 내용

DOM에 새 노드를 동적으로 생성하고 연결하는 메소드들

| 메소드 | 설명 |  |
| --- | --- | --- |
| `createElement()` | 새로운 요소 노드 생성 |  |
| `createTextNode()` | 새로운 텍스트 노드 생성 |  |
| `createAttribute()` | 새로운 속성 노드 생성 |  |
| `appendChild(노드)` | 마지막 자식으로 추가 |  |
| `setAttributeNode(속성노드)` | 생성한 속성 노드를 요소에 연결 |  |

## 예제 코드

```jsx
// 1. 요소 노드 생성
const aEl = document.createElement('a'); // <a></a>

// 2. body에 a 요소 추가
document.body.appendChild(aEl);
// <body><a></a></body>

// 3. 텍스트 노드 생성 후 a에 추가
const txtEl = document.createTextNode('길벗');
document.querySelector('a').appendChild(txtEl);
// <body><a>길벗</a></body>

// 4. href 속성 노드 생성 후 값 설정
const hrefAttr = document.createAttribute('href');
hrefAttr.value = 'http://www.gilbut.co.kr';

// 5. a 요소에 속성 노드 연결
document.querySelector('a').setAttributeNode(hrefAttr);
// <body><a href="http://www.gilbut.co.kr">길벗</a></body>
```

document
└── html
             ├── head  ←→  body   (이 둘이 서로 형제/친구)
             │          └── title, meta, link, script 등
             │
              └── body
                            ├── h1, h2, h3 (제목들)
                            ├── p (단락)
                            ├── div (묶음)
                            ├── a  (링크)  ←─── 얘네가 body 안에서 형제들
                            ├── img (이미지)
                            ├── ul / ol (목록)
                            └── ...등등

html
├── head
└── body
             └── a
                        └── "길벗" (텍스트 노드)

**1단계 — 요소 노드 생성**

JavaScript

const aEl = document.createElement('a');
// 결과: <a></a>  (아직 화면에 없음)

**2단계 — DOM 트리에 연결**

document.body.appendChild(aEl);
// 결과: <body><a></a></body>  (이제 화면에 나타남)

**3단계 — 텍스트 노드 생성 후 추가**

const txtEl = document.createTextNode('길벗');
document.querySelector('a').appendChild(txtEl);
// 결과: <body><a>길벗</a></body>

**4단계 — 속성 노드 생성 후 값 지정**

const hrefAttr = document.createAttribute('href');
hrefAttr.value = 'http://www.gilbut.co.kr';

**5단계 — 속성 노드를 요소에 연결**

document.querySelector('a').setAttributeNode(hrefAttr);
// 결과: <a href="http://www.gilbut.co.kr">길벗</a>

한 줄 요약:

**만들기 → 트리연결 → 텍스트추가 → 속성만들기 → 속성연결**

1. 요소 생성       → createElement

2. (선택) 속성/텍스트 미리 설정 가능

3. DOM 트리에 연결 → appendChild

4. 자식 노드 추가  → appendChild

5. 속성 연결       → setAttribute / setAttributeNode




레고 조립

createElement → 블록 만들기
createTextNode → 글자 스티커
appendChild → 끼우기
createAttribute → 옵션 부품
setAttributeNode → 장착



