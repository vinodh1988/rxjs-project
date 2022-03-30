import { filter, Observable} from 'rxjs'




function continousProvider(){
    return new Observable(subscriber=>{
    setInterval(()=>{
           
            subscriber.next(Math.round(Math.random()*100))
            
        },2000)
    })
}

continousProvider().pipe(
    filter(x=>x%2==0)
)
.subscribe(x=>console.log("only even results ->",x));