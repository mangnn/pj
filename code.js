function pwc(){
    var pw=prompt("비밀번호를 입력하세요");
    if (pw == 789456){
        location.href="http://127.0.0.1:3000/index2.html"
    }
    else{
        alert("비밀번호가 틀렸습니다")
    }
}