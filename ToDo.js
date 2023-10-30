const addToDo=()=>{
    let title = document.getElementById('todo-title').value;
    let desc = document.getElementById('todo-desc').value;
    localStorage.setItem(title,desc);
}


let displayContainer = document.getElementById("displayContainer");
let displayContent = ""
const displayToDO = () =>{
    for (let key in localStorage) {
        if (localStorage.hasOwnProperty(key)) {
            displayContent += `<div class="row m-4">
            <div class="card">
              <div class="card-body row">
                <div class="col-sm-9 mb-3 mb-sm-0">
                  <h5 class="card-title">${key}</h5>
                  <p class="card-text">${localStorage[key]}</p>
                </div>
                <div class="col-sm-3 p-4">
                  <table>
                    <tr>
                      <td><a href="#" class="btn btn-primary mb-1">Complete</a></td>
                      <td><a href="#" class="btn btn-danger mb-1">Remove</a></td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>`
        }
        
    }
    displayContainer.innerHTML = displayContent;
}
displayToDO();