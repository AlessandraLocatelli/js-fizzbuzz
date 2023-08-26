let squares = ''; 

for(let i = 1; i <= 100; i++)
{     
    let squareColor = "bg-light"; 
    let printed = i; 

    if( i % 3 == 0 && i % 5 == 0)
    {
       printed = "FizzBuzz"; 
       squareColor = "bg-danger"; 

    }
    else if(i% 3 == 0)
    {
        printed = "Fizz"; 
        squareColor = "bg-success";

    }
    else if (i % 5 == 0)
    {
        printed = "Buzz"; 
        squareColor = "bg-warning"; 

     }
    
    
       
     
     squares +=
     `     
           
           <div class="col-auto my-1 mx-1">
            <div class= "${squareColor} square d-flex align-items-center justify-content-center"> 
     
                <div class= "fs-5">
                ${printed} 
                </div> 
                
           </div>
           </div> 
           
          
           
     
     
     `; 
    


}

document.getElementById('squaresContainer').innerHTML +=
`<div class="row">${squares}</div>`;