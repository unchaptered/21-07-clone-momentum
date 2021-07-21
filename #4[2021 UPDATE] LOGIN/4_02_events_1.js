const login_form=document.querySelector("#login-form");
const login_input=document.querySelector("#login-form input");


login_form.addEventListener("submit", on_submit_button_click);
function on_submit_button_click(prevent){
    prevent.preventDefault();
    console.log(login_input.value);
}

// form>input*2 의 submit 으로 인한 새로고침 제한
/* 코드 내역
        <form id="login-form">
            <input required maxlength="15" type="text" placeholder="What is your name?"/>
            <input type="submit" value="Log In"/>
        </form>
*/

// submit 버튼을 누르면 page 가 새로고침되는 문제를 어떻게 해결할 수 있을까?
/* 정답 : value_name.preventDefault();
    >>왜?
        submit 이 click(event listener) 될 때 마다,
        broswer 가 자동으로 argument를 전송
    >> bad
        function on_submit_button_click(){
        const input_value=login_input.value;
        console.log(input_value);
    >> good
    
}
*/

// Sequence
/* focus elements, declared, allocation,  eventlistener, events, summit argument
    1   Javascript 를 적용할 Elements 를 지정
    2   해당 Elements 를 Const(type)의 Variable에 할당(pre-declared)
    3   해당 ELements 에 "@@@@" 에 대한 Events Listener 를 생성
    4   해당 Elements 의 Event Listener 가 실행할 function 을 생성
    5   Events 실행
    6   Broswer 가 Events 와 관련된 argument 들을 Summit
*/

