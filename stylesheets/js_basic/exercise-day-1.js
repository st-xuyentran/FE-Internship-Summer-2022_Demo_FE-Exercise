// bai 1

var week = ["mon", "tues", "wed", "thirt", "fri", "sta", "sun"];

      var calender = [
        {
          date: "wed",
          rom: "mars",
          team: "fe",
        },
        {
          date: "mon",
          rom: "a",
          team: "ios",
        },
        {
          date: "sta",
          rom: "b",
          team: "fe",
        },
        {
          date: "tue",
          rom: "a",
          team: "BE",
        },
      ];

      var result = [];
      var checkCalender = calender.map(function (item) {
        console.log(item.date);
        // return item["date"];
        if (!result?.[item.date]) {
          result[item.date] = [item];
          console.log(result[item.date]);
        }
        result[item.date].push(item);
      });
    //   console.log(result);


    // bai 2
    // cho môt string 1*4 thay * thành giá trị từ 0-9 và lấy ra số chia hết cho 3

    //cach1
    // function string(str) {
    //     arr = [];
    //     if (str.indexOf("*")) {
    //       for (var i = 0; i < 10; i++) {
    //         var a = +str.replace("*", i);
    //         if (a % 3 === 0) {
    //           arr.push(a);
    //         }
    //       }
    //     }
    //     console.log(arr);
    //   }
    //   string('1*4');
    
// cach2
    function string(str){
        arr = []
        sum = 0
        for(var i = 0; i < str.length; i++){
            if(str[i] == "*"){
                sum += str[i]
            }
        }
        for(var j = 0; j < 10; j++){
            if((sum + j) %3 ===0){
                arr.push(+ str.replace('*'), j)
            }
        }
    }
    string('1*4')

    //bai 3
    //cho 2 so a và b nếu a >b thi sum  = a +b
    // a<=b sum= (a+b)*3

    function sum(a,b){
        if(a > b){
           return  sum = a + b
        }
        return sum = (a + b) * 3
    }
    console.log(sum(1,3));
