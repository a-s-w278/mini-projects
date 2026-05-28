const note=document.querySelector("ul");
const button=document.querySelector("button");
const rightPanel=document.querySelector(".rightPanel");

function createNote()
{
    const form=document.createElement("form");
    const input=document.createElement("input");
    input.placeholder="Enter Title here";
    const textArea=document.createElement("textarea");
    textArea.placeholder="Enter Content here";
    const noteobj=
    {
        title:input,
        content:textArea
    };
    const saveButton=document.createElement("button");
    saveButton.classList.add("saveButton");
    saveButton.textContent="save";
    form.append(input,textArea,saveButton);
    saveButton.addEventListener("click",(event)=>saveNote(event,form,noteobj));
    rightPanel.innerHTML="";
    rightPanel.append(form);
}

button.addEventListener("click",createNote);

function saveNote(event,form,noteobj)
{
    event.preventDefault();
    const savedNote=
    {
        title:noteobj.title.value,
        content:noteobj.content.value
    };
    form.remove();
    const li=document.createElement("li");
    const noteButton=document.createElement("button");
    noteButton.textContent=savedNote.title;
    noteButton.classList.add("noteButton");
    li.append(noteButton);
    note.append(li);
    noteButton.addEventListener("click",()=>view(savedNote,noteButton));
}

function view(noteobj,noteButton)
{
    const viewBlock=document.createElement("div");
    viewBlock.classList.add("viewBlock");
    const viewTitle=document.createElement("p");
    viewTitle.textContent=noteobj.title;
    viewTitle.classList.add("viewTitle");
    const viewContent=document.createElement("p");
    viewContent.textContent=noteobj.content;
    viewContent.classList.add("viewContent");
    const editButton=document.createElement("button");
    editButton.textContent="edit";
    editButton.classList.add("editButton");
    viewBlock.append(viewTitle,viewContent,editButton);
    rightPanel.innerHTML="";
    rightPanel.append(viewBlock);
    editButton.addEventListener("click",(event)=>editNote(event,noteobj,noteButton,viewBlock));
}

function editNote(event,noteobj,noteButton,viewBlock)
{
    event.preventDefault();
    viewBlock.remove();
    const editForm=document.createElement("form");
    const editInput=document.createElement("input");
    editInput.value=noteobj.title;
    const editTextArea=document.createElement("textarea");
    editTextArea.value=noteobj.content;
    const editSaveButton=document.createElement("button");
    editSaveButton.textContent="save";
    editSaveButton.classList.add("editSaveButton");
    editForm.append(editInput,editTextArea,editSaveButton);
    rightPanel.innerHTML="";
    rightPanel.append(editForm);
    editSaveButton.addEventListener("click",(event)=>editSave(event,editForm,noteobj,noteButton,editInput,editTextArea));
}

function editSave(event,form,noteobj,noteButton,editInput,editTextArea)
{
    event.preventDefault();
    noteobj.title=editInput.value;
    noteobj.content=editTextArea.value;
    noteButton.textContent=noteobj.title;
    form.remove();
}