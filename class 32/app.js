var userDetail = {
    userNAme : "MAheen",
    userAge : 24,
    userEmail: "maheenZuhra@gmail.com",
    userSubject : {
        days : ["monday","tuesday","friday"],
        timing : "2pm to 4pm",
    },
    greet : function(){
        console.log(`hellow! how are you ${userDetail.userNAme}`);
        
    }

}
delete userDetail.userAge
console.log(userDetail);
console.log(userDetail.userSubject.days.push("sunday"));
userDetail.greet()

