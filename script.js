let main = document.getElementById('main')
console.log(main.innerHTML);
let width = window.innerWidth
const btn = document.getElementById('btn')

window.addEventListener('resize',()=>{
    width = window.innerWidth;
    if(width < 600){
        main.innerHTML = `<div class="left">
        <div class="person-one person">
          <div class="person-info">
            <img src="./photo1.png" alt="" class="person-image">
            <h5>Bill Mahoney</h5>
          </div>
          <div class="job-container">
            <p class="job">product owner</p>
          </div>
        </div>
        <div class="person-one person">
          <div class="person-info">
            <img src="./photo3.png" alt="" class="person-image">
            <h5> Shae Le</h5>
          </div>
          <div class="job-container">
            <p class="job">product owner</p>
          </div>
        </div>
        <div class="person-one person">
          <div class="person-info">
            <img src="./photo5.png" alt="" class="person-image">
            <h5>Griff Richards</h5>
          </div>
          <div class="job-container">
            <p class="job"> Developer</p>
          </div>
        </div>
        </div>
        
        <div class="right">
        <div class="person-one person">
          <div class="person-info">
            <img src="./photo2.png" alt="" class="person-image">
            <h5>Saba Cabrera</h5>
          </div>
          <div class="job-container">
            <p class="job">art director</p>
          </div>
        </div>
        <div class="person-one person">
          <div class="person-info">
            <img src="./photo4.png" alt="" class="person-image">
            <h5>Skylah Lu</h5>
          </div>
          <div class="job-container">
            <p class="job">ux designer</p>
          </div>
        </div>
        <div class="person-one person">
          <div class="person-info">
            <img src="./photo6.png" alt="" class="person-image">
            <h5>Stan John</h5>
          </div>
          <div class="job-container">
            <p class="job">developer</p>
          </div>
        </div>
        </div>`
    
    } else{
        main.innerHTML = `<div class="left">
          <div class="person-one person">
            <div class="person-info">
              <img src="./photo1.png" alt="" class="person-image">
              <h5>Bill Mahoney</h5>
            </div>
            <div class="job-container">
              <p class="job">product owner</p>
            </div>
          </div>
          <div class="person-one person">
            <div class="person-info">
              <img src="./photo4.png" alt="" class="person-image">
              <h5>Skylah Lu</h5>
            </div>
            <div class="job-container">
              <p class="job">ux designer</p>
            </div>
          </div>
        </div>
        <div class="mid">
          <div class="person-one person">
            <div class="person-info">
              <img src="./photo2.png" alt="" class="person-image">
              <h5>Saba Cabrera</h5>
            </div>
            <div class="job-container">
              <p class="job">art director</p>
            </div>
          </div>
          <div class="person-one person">
            <div class="person-info">
              <img src="./photo5.png" alt="" class="person-image">
              <h5>Griff Richards</h5>
            </div>
            <div class="job-container">
              <p class="job"> Developer</p>
            </div>
          </div>
        </div>
        <div class="right">
          <div class="person-one person">
            <div class="person-info">
              <img src="./photo3.png" alt="" class="person-image">
              <h5> Shae Le</h5>
            </div>
            <div class="job-container">
              <p class="job">product owner</p>
            </div>
          </div>
          <div class="person-one person">
            <div class="person-info">
              <img src="./photo6.png" alt="" class="person-image">
              <h5>Stan John</h5>
            </div>
            <div class="job-container">
              <p class="job">developer</p>
            </div>
        </div>`
    }
})
// if(width < 600){
//     main.innerHTML = `<div class="left">
//     <div class="person-one person">
//       <div class="person-info">
//         <img src="./photo1.png" alt="" class="person-image">
//         <h5>Bill Mahoney</h5>
//       </div>
//       <div class="job-container">
//         <p class="job">product owner</p>
//       </div>
//     </div>
//     <div class="person-one person">
//       <div class="person-info">
//         <img src="./photo3.png" alt="" class="person-image">
//         <h5> Shae Le</h5>
//       </div>
//       <div class="job-container">
//         <p class="job">product owner</p>
//       </div>
//     </div>
//     <div class="person-one person">
//       <div class="person-info">
//         <img src="./photo5.png" alt="" class="person-image">
//         <h5>Griff Richards</h5>
//       </div>
//       <div class="job-container">
//         <p class="job"> Developer</p>
//       </div>
//     </div>
//     </div>
    
//     <div class="right">
//     <div class="person-one person">
//       <div class="person-info">
//         <img src="./photo2.png" alt="" class="person-image">
//         <h5>Saba Cabrera</h5>
//       </div>
//       <div class="job-container">
//         <p class="job">art director</p>
//       </div>
//     </div>
//     <div class="person-one person">
//       <div class="person-info">
//         <img src="./photo4.png" alt="" class="person-image">
//         <h5>Skylah Lu</h5>
//       </div>
//       <div class="job-container">
//         <p class="job">ux designer</p>
//       </div>
//     </div>
//     <div class="person-one person">
//       <div class="person-info">
//         <img src="./photo6.png" alt="" class="person-image">
//         <h5>Stan John</h5>
//       </div>
//       <div class="job-container">
//         <p class="job">developer</p>
//       </div>
//     </div>
//     </div>`

// }
console.log(width);