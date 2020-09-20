

// const req=fetch("https://api.github.com/users");

// console.log(req)

// /*---------------------------------AJAX------------------------------- */

// const butt=document.getElementById("butt")
// butt.addEventListener("click", addText )

// function addText(){

//     let xhr= new XMLHttpRequest()
//     console.log(xhr)
//     //open
//     xhr.open("GET", "test.txt")
//     //onload
//     // xhr.onload= function(){
//     //     // this
//     //         if(xhr.status === 200){
//     //             console.log("this request is status" + xhr.status)
//     //         }
//     // }

//     // READY STATE 
//     console.log("Ready State is ", xhr.readyState)

// xhr.onreadystatechange = function(){
//     console.log("Ready State is ", xhr.readyState)

//     if(xhr.status === 200 && this.readyState == 4)
//     console.log("Ready State is ", xhr.readyState)
//     const cont=document.getElementById("cont") ;
//     cont.innerHTML=this.responseText;

// }
//     //send
//     xhr.send();

// }


// /*-------------------- json------------------------ */

// const cont01=document.getElementById("stud")
// const cont02=document.getElementById("students")

// const butt01=document.getElementById("butt01")
// const butt02=document.getElementById("butt02")

// butt01.addEventListener("click", addStud)
// function addStud(){

//     let xhr= new XMLHttpRequest()
//     console.log(xhr)
//     //open
//     xhr.open("GET", "student.json", true)
    
//     xhr.onload= function(){
//         // this
//             if(xhr.status === 200){
//                 console.log("this request is status" + xhr.status)

//                // cont01.innerHTML= this.responseText 
//                console.log(this.responseText)
//                let student=JSON.parse(this.responseText) 
//                let stud=document.createElement("div")
//                stud.innerHTML= `<ul>
//                <li>${student.id}</li>
//                <li>${student.name}</li>
//                <li>${student.email}</li>
//                </ul>`
//                cont01.appendChild(stud)

//             }
//     }
    
//     //send
//     xhr.send();    
// }

// butt02.addEventListener("click", addStuds)
// function addStuds(){

//     let xhr=new XMLHttpRequest;
//     xhr.open('GET', 'students.json', true)
    
//     xhr.onload= function (){
//         if(this.status === 200){
//             console.log(this)
//             let students=JSON.parse(this.responseText)
//             console.log(students)
//             students.forEach(stud => {
//                 let studentsCont=document.createElement("div")
//                 studentsCont.innerHTML=`<ul>
//                 <li>${stud.id}</li>
//                 <li>${stud.name}</li>
//                 <li>${stud.email}</li>
//                 </ul>`
//                 cont02.appendChild(studentsCont)
//             });
            

//         }
//     }
//     xhr.send();
// }


// /*------------------------------external api---------------------------------------------- */

// const cont03=document.getElementById('users')
// const butt03=document.getElementById('butt03')

// butt03.addEventListener('click', addUsers)

// function addUsers(){
//     let xhr= new XMLHttpRequest();
//     xhr.open('GET', 'https://api.github.com/users', true)
//     xhr.onload= function(){
//         if(this.status === 200){
//             console.log(xhr)
//             let users=JSON.parse(this.responseText)
//             console.log(users)
//             users.forEach(user => {
//                 let usersCont=document.createElement("div")
//                 usersCont.innerHTML=`<ul>
//                 <li>${user.id}</li>
//                 <li><img src="${user.avatar_url}" width="50" height="50"></li>
//                 <li>${user.login}</li>
//                 </ul>`
//                 cont03.appendChild(usersCont)

//         })  
//     }
// }
//     xhr.send();

// }




let xhr= new XMLHttpRequest();
console.log(xhr)