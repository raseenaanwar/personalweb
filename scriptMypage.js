const btn=document.querySelector('button')
const inputs=document.querySelector('form')

btn.addEventListener('click',()=>{
    Email.send({
        Host : "smtp.mailtrap.io",
        Username : "72c7012bbd5226",
        Password : "e11bfbcb394a80",
        To : 'abc@gma.com',
        From : inputs.elements["email"].value,
        Subject : "My Contact Informations",
        Body : inputs.elements["message"].value+"<br>"+inputs.elements["name"].value+inputs.elements["mobile"].value+inputs.elements["place"].value
    }).then(message => alert("The Email Sent Successfully")
    );
})
