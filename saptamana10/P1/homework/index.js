const fields = [
    { id: 'userName', label: 'Username', description: "(Must be at least 4 characters, letters and numbers only.)", valid: false, validationMsg: "Please enter a username." },
    { id: 'email', label: 'Email Adress', description: "We send your registration email to this address. (Double check your email address before continuing.)", valid: false, validationMsg: "Please enter a valid email address." },
    { id: 'firstName', label: 'First Name', description: "(Must be input.)", valid: false, validationMsg: "Please enter a First Name." },
    { id: 'lastName', label: 'Last Name', description: "(Must be input.)", valid: false, validationMsg: "Please enter a First Name." },
    { id: 'nickName', label: 'Nickname', description: "", valid: true, validationMsg: "Please enter a Nickname." },
    { id: 'phone', label: 'Phone', description: "(Must be at least 10 characters, numbers only.)", valid: false, validationMsg: "Please enter a Phone." }
];

const validationRules = {
    userName: new RegExp(/^[a-zA-Z,]{4,20}$/),
    email: new RegExp(/\S+@\S+\.\S+/),
    firstName: new RegExp(/^[a-zA-Z,]{1,20}$/),
    lastName: new RegExp(/^[a-zA-Z,]{1,20}$/),
    nickName: new RegExp(/^[a-zA-Z,]{1,15}$/),
    phone: new RegExp(/^[0-9]*$/),
};

const validateField = (event) => {
    const { id, value } = event.target;
    const fieldValidationMsg = document.getElementsByClassName(id)[0];
    const isFieldValid = validationRules[id].test(value);

    if (isFieldValid) {
        fieldValidationMsg.classList.remove('invalid');
        fieldValidationMsg.classList.add('notShown');
    } else {
        fieldValidationMsg.classList.remove('notShown');
        fieldValidationMsg.classList.add('invalid');
    }
};

const generateForm = () => {
    const bodyEl = document.getElementsByTagName("body")[0];
    bodyEl.append(document.createElement('form'));
    const formEl = document.getElementsByTagName('form')[0];
    fields.forEach(({ id, label, valid, description, validationMsg }) => {
        // create add label
        const labelEl = document.createElement('label');
        labelEl.setAttribute('id', id);
        labelEl.innerHTML = `${label.toUpperCase()}:`;

        const validationEl = document.createElement('div');
        validationEl.setAttribute('class', `${id} invalid`);
        validationEl.innerHTML = validationMsg;

        // create add input
        const inputEl = document.createElement('input');
        inputEl.addEventListener('input', validateField, id);
        inputEl.setAttribute('id', id);
        inputEl.setAttribute('type', id === 'email' ? id : id === 'phone' ? 'number' : 'text');

        // create add description
        const divEl = document.createElement('div');
        divEl.setAttribute('class', 'fieldDescription');
        divEl.innerHTML = description;

        // append everything
        if (!valid) {
            labelEl.append(validationEl);
        }
        labelEl.append(inputEl);
        labelEl.append(divEl);
        formEl.append(labelEl);
    });
};

generateForm();
