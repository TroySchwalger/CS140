document.getElementById('myForm').addEventListener('submit',function(event) {
    event.preventDefault();
    //alert("Form submitted");

    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const bday = document.getElementById('bday').value;
    const password = document.getElementById('password').value;
    const state = document.getElementById('state').value;
    const age = document.getElementById('age').value;

    if (!fullname || !email || !password || !state) {
        alert("You need a name, email, password, and state.");
        return;
    }

    if (!age || age<18) {
        alert("You need to be at least 18 years old.");
        return;
    }

    const formData = {
        name: fullname,
        email: email,
        password: password,
        bday: bday,
        state: state,
        age: age
    };

    console.log(formData);
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "submit.json", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const message = document.getElementById('message');
            const response = JSON.parse(xhr.responseText);
            message.textContent = response.message;
            const form = document.getElementById('myForm');
            form.textContent = '';
        } else if (xhr.readyState === 4) {
            alert('Error submitting form.');
        }
    };
    xhr.send(JSON.stringify(formData));
    alert(`Success: ${fullname}`)
});