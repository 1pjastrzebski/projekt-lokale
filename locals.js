const locals = document.querySelectorAll(".l");
const btn = document.querySelector(".button")
let x = 0

locals.forEach((local) =>{
  
    
        if(localStorage.getItem(local.id)!=null){
            if(localStorage.getItem(local.id).includes("unavailable")){
                local.classList = localStorage.getItem(local.id)
                
            }
        }
    
    local.addEventListener('click',() =>{
        if((local.classList.contains("null")) && !(local.classList.contains("unavailable"))){
            local.classList.replace("null","reserved");
            localStorage.setItem(local.id + "r",local.id+ "t")
            x+=1
        }else if((local.classList.contains("reserved")) && !(local.classList.contains("unavailable"))){
            
            local.classList.replace("reserved","null");
            localStorage.setItem(local.id + "r",local.id + 'f')
            x-=1
        }
        (x>0)? btn.href = "local.html" : btn.href = ""
    })
})  

btn.addEventListener("click",()=>{
    locals.forEach((local) =>{
        localStorage.setItem(local.id,local.classList)
  
  })
})