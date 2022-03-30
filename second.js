import { interval, Observable} from 'rxjs'

var count=0;


function continousProvider(){
    return new Observable(subscriber=>{
    setInterval(()=>{
           
            subscriber.next(Math.round(Math.random()*100))
            count++;
        },2000)
    })
}

var subscription = continousProvider().subscribe({
    next: (x)=> console.log("received ",x)
}
)

const temp=setInterval(()=>{
    if(count==10){
       subscription.unsubscribe();
       console.log("Unsubscribed")
       clearInterval(temp)
    }
    else
       console.log("Checked still not unsubscribed")
},1000)