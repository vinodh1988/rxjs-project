import {Observable} from 'rxjs'

function delayedOutcome(){
   
return new Observable((subscriber)=>{
    setTimeout(()=>{
        subscriber.next( "India")
    },3000)

   })
  
}

const caller=delayedOutcome()

caller.subscribe({
    next : (data)=>console.log(data)
})

console.log(caller)