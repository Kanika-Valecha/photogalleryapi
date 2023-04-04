var btn = document.getElementById("btn").addEventListener('click', getPost)
var con=0
var div = document.getElementById("cardDiv")
function getPost(){
    fetch(`https://jsonplaceholder.typicode.com/photos?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-11`).then((res)=>{
        return res.json()
    })
    .then((post)=>{
        for(let i = 0; i<1; i++){
            div.innerHTML+=`
                <div class="card col-3 m-1 mx-auto">
                    <img class="card-img-top" src="${post[con].thumbnailUrl}">
                    <div class="card-body">
                        <h5 class="card-title">${post[con].id}</5>
                        <p class="card-text">${post[con].title}</p>
                    </div>
                </div>
            `
            con=con+1
        }
    })
    .catch((error)=>{
        console.log(error)
    })
}