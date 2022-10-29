export class DoList{
    do = '';

    arrToDo = [];

    

    saveLocalStorage(obSave){
        let s_arrToDo = JSON.stringify(this.arrToDo);
        localStorage.setItem(`"${obSave}"`, s_arrToDo);
    };
    getLocalStorage(obGet){
        if(localStorage.getItem(`"${obGet}"`)){
            this.arrToDo = JSON.parse(localStorage.getItem(`"${obGet}"`));
        }
    };

    deleteDo(dowork){
        let del = this.arrToDo.findIndex(toDo =>toDo.do == dowork);
        if(del !== -1){
            this.arrToDo.splice(del,1);
        }
    };

   renderDoList (selector, color){
        let html = this.arrToDo.reduce( (content,toDo)=>{
            return content+=`
            <li><p style="color:${color} ;" >${toDo.do}</p>
            <div> <i class="fa-solid fa-trash-can" onclick="delList('${toDo.do}')"></i> 
            <i style="color:${color} ;" class="fa-regular fa-circle-check" onclick = "checkDone('${toDo.do}')" id="${toDo.do}"></i></div>
            </li>
            
            `
        }, '');
        document.getElementById(selector).innerHTML = html;
    }


    sapXep(){
        this.arrToDo.sort((lamtt,lam)=>{
            let doNamett = lamtt.do.toLowerCase();
            let doName = lam.do.toLowerCase();
            if(doNamett>doName){
                return 1;
            }
            if(doNamett<doName){
                return -1;
            }
            return 1;
        });
        
    }

}