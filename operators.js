import { map, Observable, tap} from 'rxjs'

var count=0;


function continousProvider(){
    return new Observable(subscriber=>{
    setInterval(()=>{
           
            subscriber.next(Math.round(Math.random()*100))
            count++;
        },2000)
    })
}

continousProvider().pipe(
    map(x=>" String is created on the random number "+x),
    tap(x=>console.log("Processing a side effect with",x))
).subscribe(
    {
        next: x=>console.log(x)
    }
)