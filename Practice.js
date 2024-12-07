
const addBtn=document.getElementById('btn2');
const ul=document.getElementById('ul');
let isInputActive=false;

// Function to update the list in local storage
function updateLocalStorage() {
    const items = Array.from(document.querySelectorAll('.Mname')).map((div) => div.textContent);
    localStorage.setItem('listItems', JSON.stringify(items));
}

function loadFromLocalStorage() {
    const storedItems = JSON.parse(localStorage.getItem('listItems')) || [];
    storedItems.forEach((item) => {
        const newDiv = document.createElement('div');
        const newLi = document.createElement('li');
        newDiv.className = 'Mname';
        newDiv.textContent = item;
        newLi.appendChild(newDiv);
        ul.append(newLi);

        newDiv.addEventListener('dblclick', () => {
            newDiv.remove();
            updateLocalStorage();
        });
    });
}

loadFromLocalStorage();


   addBtn.addEventListener('click',()=>{
    if(isInputActive){
        
        alert("Please complete the current input before adding a new one!");
        return;
    }

    let i=document.createElement('input');
    i.className='inp';
    document.body.appendChild(i);
    console.log("test for appending input")

    isInputActive=true;

    i.style.fontSize='1.2rem';
    i.style.textAlign='center';
    i.style.borderRadius='5px';
    i.style.border='none';
    i.style.outline='none';
    i.style.marginTop='2rem';
    i.style.padding='12px';

  
    i.addEventListener('keypress',(e)=>{
        if (e.key === 'Enter') {
            const inputValue = i.value.trim();
            if (inputValue === "") {
                alert("Input cannot be empty!"); 
                return; 
            }
            console.log("test to check if element is added")
            let newDiv = document.createElement('div');
            let newLi = document.createElement('li');
            newDiv.className = 'Mname';
            newDiv.textContent = inputValue;
            newLi.appendChild(newDiv);
            ul.append(newLi);
            i.remove();
            isInputActive=false;

           
            newDiv.addEventListener('dblclick', () => {
                newDiv.remove();
                console.log("Test for removal")
            });
        }
        
    });
   
   });


   