
function saveCheckboxState(checkbox) {
    localStorage.setItem(checkbox.id, checkbox.checked);
}

function loadCheckboxState(checkbox) {
    const savedState = localStorage.getItem(checkbox.id);
    if (savedState !== null) {
        checkbox.checked = (savedState === 'true');
    }
}

function saveAllCheckboxStates() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        saveCheckboxState(checkbox);
    });
    alert("Data Stored Successfully");
}

function initializeCheckboxes() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        loadCheckboxState(checkbox);
    });

    let saveButton1 = document.getElementById('saveButton1');
    if (saveButton1) {
        saveButton1.addEventListener('click', saveAllCheckboxStates);
    }
    let saveButton2 = document.getElementById('saveButton2');
    if (saveButton2) {
        saveButton2.addEventListener('click', saveAllCheckboxStates);
    }
    let saveButton3 = document.getElementById('saveButton3');
    if (saveButton3) {
        saveButton3.addEventListener('click', saveAllCheckboxStates);
    }
    let saveButton4 = document.getElementById('saveButton4');
    if (saveButton4) {
        saveButton4.addEventListener('click', saveAllCheckboxStates);
    }
    let saveButton5 = document.getElementById('saveButton5');
    if (saveButton5) {
        saveButton5.addEventListener('click', saveAllCheckboxStates);
    }
    let saveButton6 = document.getElementById('saveButton6');
    if (saveButton6) {
        saveButton6.addEventListener('click', saveAllCheckboxStates);
    }
    let saveButton7 = document.getElementById('saveButton7');
    if (saveButton7) {
        saveButton7.addEventListener('click', saveAllCheckboxStates);
    }
    let saveButton8 = document.getElementById('saveButton8');
    if (saveButton8) {
        saveButton8.addEventListener('click', saveAllCheckboxStates);
    }
    let saveButton9 = document.getElementById('saveButton9');
    if (saveButton9) {
        saveButton9.addEventListener('click', saveAllCheckboxStates);
    }
    let saveButton10 = document.getElementById('saveButton10');
    if (saveButton10) {
        saveButton10.addEventListener('click', saveAllCheckboxStates);
    }
    let saveButton11 = document.getElementById('saveButton11');
    if (saveButton11) {
        saveButton11.addEventListener('click', saveAllCheckboxStates);
    }
    let saveButton12 = document.getElementById('saveButton12');
    if (saveButton12) {
        saveButton12.addEventListener('click', saveAllCheckboxStates);
    }
    let saveButton13 = document.getElementById('saveButton13');
    if (saveButton13) {
        saveButton13.addEventListener('click', saveAllCheckboxStates);
    }
    let saveButton14 = document.getElementById('saveButton14');
    if (saveButton14) {
        saveButton14.addEventListener('click', saveAllCheckboxStates);
    }
    let saveButton15 = document.getElementById('saveButton15');
    if (saveButton15) {
        saveButton15.addEventListener('click', saveAllCheckboxStates);
    }
    let saveButton16 = document.getElementById('saveButton16');
    if (saveButton16) {
        saveButton16.addEventListener('click', saveAllCheckboxStates);
    }
    let saveButton17 = document.getElementById('saveButton17');
    if (saveButton17) {
        saveButton17.addEventListener('click', saveAllCheckboxStates);
    }
    let saveButton18 = document.getElementById('saveButton18');
    if (saveButton18) {
        saveButton18.addEventListener('click', saveAllCheckboxStates);
    }
    let saveButton19 = document.getElementById('saveButton19');
    if (saveButton19) {
        saveButton19.addEventListener('click', saveAllCheckboxStates);
    }
    let saveButton20 = document.getElementById('saveButton20');
    if (saveButton20) {
        saveButton20.addEventListener('click', saveAllCheckboxStates);
    }

}

document.addEventListener('DOMContentLoaded', initializeCheckboxes);
