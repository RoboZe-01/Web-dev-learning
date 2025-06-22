// var h1 = document.createElement('h1')
// var root =document.querySelector('#root')



// h1.innerHTML="Using Javascript"
// root.appendChild(h1)




var h1 = React.createElement('h1',null,"Hello from React")
var parent = document.querySelector("#parent")
// console.log(parent)
var root = ReactDOM.createRoot(parent)
root.render(h1)

