import { DoList } from "./DoList.js";


let toDo = new DoList();


let done = new DoList();

done.getLocalStorage('doneList');
done.sapXep();

done.renderDoList("completed",'rgb(43, 187, 162)');

toDo.getLocalStorage('toDoList');
toDo.sapXep();
//console.log(toDo);
toDo.renderDoList("todo", '');

window.delList = (deDo) =>{
    //alert(deDo);
    toDo.deleteDo(deDo);
    toDo.renderDoList("todo", '');
    toDo.saveLocalStorage('toDoList');

    done.deleteDo(deDo);
    done.renderDoList("completed", 'rgb(43, 187, 162)');
    done.saveLocalStorage('doneList');

}

window.checkDone = (check) =>{
    let toDone = new DoList();
    toDone.do = check;
    done.arrToDo.push(toDone);
    toDo.deleteDo(check);
    toDo.saveLocalStorage('toDoList');
    toDo.renderDoList("todo",'');

    done.sapXep();
    done.saveLocalStorage('doneList');
    done.renderDoList("completed", 'rgb(43, 187, 162)');

   // document.getElementById(`"${check}"`).style.backgroundColor = "green";
}



document.querySelector("#addItem").onclick = function(){

     let act = document.getElementById("newTask").value;
    
//    // toDo.push(act);
//    // console.log(toDo);
        let toAdd = new DoList();
        toAdd.do = act;
       // console.log(toDo);
//    //console.log(toDo);
        toDo.arrToDo.push(toAdd);

        toDo.sapXep();
        
        toDo.saveLocalStorage('toDoList');
        toDo.renderDoList("todo");
//    toDo.saveLocalStorage();
//    toDo.renderDoList("todo");

};


