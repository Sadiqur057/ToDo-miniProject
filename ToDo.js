let notify = document.getElementById("notification");
const addToDo = async () => {
  let title = await document.getElementById("todo-title").value;
  let desc = await document.getElementById("todo-desc").value;
  let notifyContent = "";
  let err = false;

  // Checking for empty input
  if (!title || !desc) {
    notifyContent += `<div class="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>Error!</strong> Both field are required.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>`;
    notify.innerHTML = notifyContent;
    return (err = true);
  }

  // Checking for existing title
  for (const key in localStorage) {
    if (localStorage.hasOwnProperty(key)) {
      if (key == title) {
        notifyContent += `<div class="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>Error!</strong> Title already exist. Try another.
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>`;
        notify.innerHTML = notifyContent;
        return (err = true);
      }
    }
  }

  // if no error then save into localStorage of browser
  if (err == false) {
    localStorage.setItem(title, desc);
    displayToDO();
    notifyContent += `
          <div class="alert alert-success alert-dismissible fade show" role="alert">
              <strong>Success!</strong> ToDo added successfully.
              <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
          `;
    notify.innerHTML = notifyContent;
  }
  document.getElementById("todo-title").value = "";
  document.getElementById("todo-desc").value = "";
};

// Perform delete operation
const removeToDo = (key, elem) => {
  localStorage.removeItem(key);
  toDoElem =
    elem.parentElement.parentElement.parentElement.parentElement.parentElement
      .parentElement.parentElement.parentElement;
  toDoElem.remove();
  let notifyContent = "";
  notifyContent += `<div class="alert alert-warning alert-dismissible fade show" role="alert">
    <strong>Success!</strong> Your note has been deleted successfully from NoteBook.
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>`;
  notify.innerHTML = notifyContent;
};

// changes color marking done
const MarkDone = (elem) => {
  elem.classList.toggle("bg-success");
};

// display all existing todo list
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
                      <td><button  href="#" class="btn  btn-primary" onclick="MarkDone(this)">Complete</button></td>
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
