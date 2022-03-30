import {Observable} from 'rxjs'


function continousProvider(){
    return new Observable(subscriber=>{
        setInterval(()=>{
            subscriber.next(Math.round(Math.random()*100))
        },2000)
    })
}

continousProvider().subscribe({
    next: (x)=> console.log("received ",x)
}
)