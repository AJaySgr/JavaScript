function sendMail(parms){
    var tempParms{
        form_name   : document.getElementById("formName").value;
        to_name :  document.getElementById("toName").value;
        msg: document.getElementById("msg").value;
    }

    emailjs.send('gmail','template_hzpn2i8',tempParms)
        .then(function(res){
            console.log("Succes ",res.status);
        })
}






























// const form = document.querySelector('.contact_form');
// console.log(form);

// function sendMsg(e){
//         e.preventDefault();

// const name = document.querySelector('.name'),
//       email = document.querySelector('.email'),
//       msg = document.querySelector('.msg');
  
//       console.log(email);
// // Function send Email
// Email.send({
//     SecureToken : "31c241b0-e9ba-47ad-bd4c-f483c1a6d700",
//     To : 'gunthergunther04@gmail.com',
//     From : email.value,
//     Subject : "contact form",
//     Body : msg.value
// }).then(
//   message => alert(message)
// );
// }

// // add the event listner submit
// form.addEventListener('submit',sendMsg)