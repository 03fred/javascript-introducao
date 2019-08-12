class UserController{

constructor(formId,tableId){
    this.formE1 = document.getElementById(formId);
    this.tableEL = document.getElementById(tableId);
this.onSubmit();
}

onSubmit(){

    this.formE1.addEventListener("submit" ,event =>{
    event.preventDefault();
    this.addLine(this.getValues());

    });

}

getValues(){
  var user = {};
  var aux ='';
[...this.formE1.elements].forEach((field) =>{
        
        if(field.name == "gender" && field.checked) 
        {
           aux = field.value;
        }else{
            user[field.name] = field.value;
        }
        
        user['gender']  = aux == null ? field.value : aux; 
        
        });
        
        return  new User(user.name,user.gender,user.birth,user.coutry,user.email,
          user.password,user.photo,user.admin);
           

        }        
    
    addLine(dataUser){
            
            //tr = document.createElement("tr");
         
           this.tableEL.innerHTML = `
            <tr>
            <td><img src="img/user1-128x128.jpg" alt="User Image" class="img-circle img-sm"></td>
            <td>${dataUser.name}</td>
            <td>${dataUser.email}</td>
            <td>${dataUser.admin}</td>
            <td>${dataUser.birth}</td>
            <td>
              <button type="button" class="btn btn-primary btn-xs btn-flat">Editar</button>
              <button type="button" class="btn btn-danger btn-xs btn-flat">Excluir</button>
            </td>
          </tr>
         
            `;
        
        }
}



