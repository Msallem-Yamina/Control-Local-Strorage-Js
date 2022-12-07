let allsp = document.querySelectorAll ("section span"),
    res = document.querySelector ("footer > span"),
    inp = document.getElementById("inp");

allsp.forEach((sp) => {
    sp.addEventListener("click", (e)=> {
        if (e.target.classList.contains("check")){
            CheckItem ();
        }
        if (e.target.classList.contains("add")){
            AddItem ();
        }
        if (e.target.classList.contains("delete")){
            DeleteItem ();
        }
        if (e.target.classList.contains("show")){
            ShowItem ();
        }
    });
});
function ShowMsg () {
        res.innerHTML = "Input Cant Be Empty";
}
function CheckItem (){
    if (inp.value !== ''){
        if (localStorage.getItem(inp.value)){
            res.innerHTML = `Found Local Item With Name <span>${inp.value}</span>`;
        }else {
            res.innerHTML = `No Item <span>${inp.value}</span> In Local Storage`;
        }
    }else {
        ShowMsg();
    }
}
function DeleteItem (){
    if (inp.value !== ''){
      if(localStorage.getItem(inp.value)){
        localStorage.removeItem(inp.value);
        res.innerHTML = `Local Storage Item <span>${inp.value}</span> Deleted!`;
        inp.value = '';
      }else{
        res.innerHTML = `No Item <span>${inp.value}</span> In Local Storage`;
      }
    }else {
        ShowMsg();
    }
}
function AddItem (){
    if (inp.value !== ''){
        localStorage.setItem(inp.value, "Test");
        res.innerHTML = `Local Storage Item <span>${inp.value}</span> Added`;
        inp.value = '';
    }else {
        ShowMsg();
    }
}
function ShowItem (){
    if (localStorage.length){
        res.innerHTML = '';
        for (let [key,value] of Object.entries(localStorage)) {
        res.innerHTML += ` <span class="keys"> ${key} </span> `;
        }
        // for(let i= 0 ; i<localStorage.length ; i++){
        //     const key = localStorage.key(i);
        //     res.innerHTML += `<span class="keys">${key}</span>`;
        // }
    }else {
        res.innerHTML = "Local Storage Is Empty";
    }
}