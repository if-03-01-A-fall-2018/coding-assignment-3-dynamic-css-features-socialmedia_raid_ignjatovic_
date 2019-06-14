
var number = 0;
var questionCount=0;

window.onload = function () {
        document.getElementById("button1").disabled = true;
        document.getElementById("button2").disabled = true;
        document.getElementById("button3").disabled = true;
        document.getElementById("button4").disabled = true;
        document.getElementById("button5").disabled = true;
    }

function enable(id){
  document.getElementById("button"+id).disabled = false;
}

function nextquestion(){
  var checkBoxForSubmit = document.getElementById("submit");
  var checkBoxForAnswer1 = document.getElementById("a1_"+questionCount);
  var checkBoxForAnswer2 = document.getElementById("a2_"+questionCount);
  var checkBoxForAnswer3 = document.getElementById("a3_"+questionCount);
  var checkBoxForAnswer4 = document.getElementById("a4_"+questionCount);
  var checkBoxForAnswer5 = document.getElementById("a5_"+questionCount);
  if(checkBoxForAnswer1!=null && checkBoxForAnswer2!=null && checkBoxForAnswer3!=null && checkBoxForAnswer4!=null && checkBoxForAnswer5!=null && checkBoxForAnswer1.checked == false && checkBoxForAnswer2.checked == false && checkBoxForAnswer3.checked == false && checkBoxForAnswer4.checked == false && checkBoxForAnswer5.checked == false){
  alert("You didnt selelct anything!")
  }

  else {
    question();
    document.getElementById("question"+questionCount).style.cssText="display:none";
    questionCount++;
    document.getElementById("question"+questionCount).style.cssText="display:block";
  }
}

function result(){
  question();
  document.getElementById("question"+questionCount).style.cssText="display:none";

  document.getElementById("result").style.cssText="display:block";
  var margin=number*5-25;
  console.log(margin);
  document.getElementById("num").innerHTML =margin + "%";
  document.getElementById("pointer").style.cssText="margin-left:"+margin+"%";

  if(margin>=0&&margin<=10)
  {
    document.getElementById("result1").style.cssText="display:block";
  }
  if(margin>=11&&margin<=30)
  {
    document.getElementById("result2").style.cssText="display:block";
  }
  if(margin>=31&&margin<=50)
  {
    document.getElementById("result3").style.cssText="display:block";
  }
  if(margin>=51&&margin<=70)
  {
    document.getElementById("result4").style.cssText="display:block";
  }
  if(margin>=71&&margin<=90)
  {
    document.getElementById("result5").style.cssText="display:block";
  }
  if(margin>=91&&margin<=100)
  {
    document.getElementById("result6").style.cssText="display:block";
  }
}


function home(){
    document.getElementById("question"+questionCount).style.cssText="display:none";
    questionCount=0;
    number=0;
    document.getElementById("question"+questionCount).style.cssText="display:block";
}

function question(){
  var checkBoxForSubmit = document.getElementById("submit");
  var checkBoxForAnswer1 = document.getElementById("a1_"+questionCount);
  var checkBoxForAnswer2 = document.getElementById("a2_"+questionCount);
  var checkBoxForAnswer3 = document.getElementById("a3_"+questionCount);
  var checkBoxForAnswer4 = document.getElementById("a4_"+questionCount);
  var checkBoxForAnswer5 = document.getElementById("a5_"+questionCount);

  if (checkBoxForAnswer1!=null && checkBoxForAnswer1.checked == true) {
    number += 1;
  }
  else if (checkBoxForAnswer2!=null && checkBoxForAnswer2.checked == true) {
    number += 2;
  }
  else if (checkBoxForAnswer3!=null && checkBoxForAnswer3.checked == true) {
    number += 3;
  }
  else if (checkBoxForAnswer4!=null && checkBoxForAnswer4.checked == true) {
    number += 4;
  }
  else if (checkBoxForAnswer5!=null && checkBoxForAnswer5.checked == true) {
    number += 5;
  }
  console.log(number);
}
