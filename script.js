 let userInput = document.getElementById("date");
    userInput.max = new Date().toISOString().split("T")[0];
    let result = document.getElementById("result");
   
    function calculateAge(){
        let birthDate = new Date (userInput.value);

        let birthDay = birthDate.getDate();
        let birthMonth = birthDate.getMonth() + 1;
        let birthYear = birthDate.getFullYear();

        let today = new Date();
         
        let currentDay = today.getDate();
        let currentMonth = today.getMonth() + 1;
        let currentYear = today.getFullYear();

        let resultDay,resultMonth,resultYear;

        resultYear=currentYear-birthYear;

        if(currentMonth >= birthMonth){
           resultMonth = currentMonth-birthMonth;
        }else{
            resultYear--;
            resultMonth = 12 + currentMonth-birthMonth;

        }
        if(currentDay >= birthDay){
            resultDay = currentDay-birthDay;

        }else{
            resultMonth--;
            resultDay = getDaysInMonth(birthYear,birthMonth) + currentDay - birthDay;
          }
          if(resultMonth < 0){
            resultMonth = 11;
            resultYear--;
          }
        //   console.log(y3,m3,d3);
        result.innerHTML = `You are ${resultYear} years, ${resultMonth} months and ${resultDay} days old`;
         }

         function getDaysInMonth(year,month){
            return new Date(year,month,0).getDate();
         }
