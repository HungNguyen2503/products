


function ham1(callbacksss){
    console.log("hàm 1");
    
    console.log("Đợi 5s...");
    setTimeout(()=>{
        console.log("Hết 5s...");
    }, 5000);
    console.log("Hết 1 5s...");
    callbacksss();
    console.log("Hết 2 5s...");
}

function ham2(){
    console.log("hàm 2");
}


ham1(ham2);