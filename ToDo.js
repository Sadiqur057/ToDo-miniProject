const addToDo = () => {
  let title = document.getElementById("todo-title").value;
  let desc = document.getElementById("todo-desc").value;
  let notify = document.getElementById("notification");
  let notifyContent = "";
  if (!title || !desc) {
    // Close the modal 
 


    notifyContent += `
        <div class="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>Error!</strong> Both field are required.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        `;
       
  }
  notify.innerHTML = notifyContent;
  localStorage.setItem(title, desc);
  displayToDO();
};
const removeToDo = (key, elem) => {
  localStorage.removeItem(key);
  toDoElem =
    elem.parentElement.parentElement.parentElement.parentElement.parentElement
      .parentElement.parentElement;
  toDoElem.remove();
};
const MarkDone = (elem) => {
  elem.classList.toggle("bg-success");
};


let displayContainer = document.getElementById("displayContainer");
const displayToDO = () => {
  let displayContent = "";
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
                      <td><a href="#" class="btn  btn-primary mb-1" id="status" onclick="MarkDone(this)">Complete</a></td>
                      <td><button type="button" class="btn btn-danger" onclick="removeToDo('${key}',this)">Remove</button></td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>`;
    }
  }
  displayContainer.innerHTML = displayContent;
};
displayToDO();


// Close the modal by ID

  