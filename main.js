import './style.scss';
import * as bootstrap from 'bootstrap';
import 'boxicons';
import Swiper from 'swiper/bundle';
import 'swiper/css';
import {profileLists,courseLists} from './public/list.js';
import Chart from 'chart.js/auto';
import Swal from 'sweetalert2';


// to change theme 
let changeTheme=document.getElementById("change-theme");
let changeIcon=document.getElementById("change-icon");
changeTheme.addEventListener('click',()=>{
  document.body.classList.toggle('theme-active');
  changeIcon.classList.toggle('bxs-sun');
  changeIcon.classList.toggle('bxs-moon');
});

// to show nav 
let showNav=document.getElementById("show-nav");
let sideBar=document.getElementById('sidebar');
let closeNav=document.getElementById('close-nav');
showNav.addEventListener('click',()=>{
  sideBar.classList.toggle('active-nav');
});
closeNav.addEventListener('click',()=>{
  sideBar.classList.remove('active-nav');
})


// to rotate arrow 
let stArrow=document.querySelector("#st-arrow");
let emArrow=document.querySelector("#em-arrow");
let arrowS=document.querySelector('#s-arrow');
let arrowE=document.querySelector('#e-arrow');
arrowS.addEventListener('click',()=>{
  stArrow.classList.toggle('rotate');
})
arrowE.addEventListener('click',()=>{
  emArrow.classList.toggle('rotate');
})

// to loop profile card 
let rowProfile=document.getElementById('row-profile');
let num=0;
profileLists.forEach(x=>{
  rowProfile.innerHTML+=`
        <div class="col-12 col-md-6 col-lg-3">
        <div class="d-flex secondary align-items-center justify-content-start rounded py-3">
          <div class="position-relative ms-3">
            <img src="${x.img}" alt="" class=" rounded-circle profile">
            <span class="position-absolute bottom-0 start-100 translate-middle active-now border border-2 rounded-circle">
              <span class="visually-hidden">New alerts</span>
            </span>
          </div>
          <div class="justify-content-center flex-column ms-5" value='${num}'>
            <h6 class="t-l m-0">${x.name}</h6>
            <p class="text-warning fs-p mb-0 mt-1">${x.class}</p>
            <p class="green fs-p m-0 view" href="#" data-bs-toggle="modal" data-bs-target="#staticBackdrop">${x.action}</p>
          </div>
        </div>
      </div>
  `;
  num++;
})

rowProfile.lastElementChild.remove();


// for show detail profile 
let cardBody=document.getElementById("card-body");
let viewlists=document.querySelectorAll('.view');
viewlists.forEach(x=>{
  x.addEventListener('click',e=>{
      let id=e.target.parentElement.getAttribute('value');
      id=Number(id);
      let viewList= profileLists[id];
      cardBody.innerHTML=`
      <div class="d-flex justify-content-center">
      <div class="position-relative">
        <img src="${viewList.img}" alt="" width="100" class="rounded-circle d-block mx-auto border border-3 border-primary">
        <span class="position-absolute bottom-0 start-100 translate-middle p-2 active-now border border-3 border-light rounded-circle">
          <span class="visually-hidden">New alerts</span>
        </span>
      </div>
    </div>
    <div class="text-center">
      <h5 class="t-l my-2">${viewList.name}</h5>
    </div>
    <div class="px-md-3 mt-3">
      <p class="mb-1"><i class='bx bxs-map fs-5 t-l'></i><span class="t-l ms-2">From ${viewList.map}</span></p>
      <p><i class='bx bxs-heart fs-5 t-l'></i><span class="t-l ms-2">Single</span></p>
    </div>
    <hr class="t-l">
    <div class="p-md-3">
      <h6 class="t-l">Projects</h6>
      <div class="mt-3">
        <span class="t-l d-block mb-2">This is for me second challenge 😍 <br> Thanks Sayar Hein Htet Zan 😊 <br> <span class="fs-p">#SWD Project</span></span>
        <img src="${viewList.project1}" alt="" class="detail-img rounded shadow">
        <div class="mt-2 d-flex justify-content-between">
          <p class="t-l d-flex align-items-center"><i class='bx bx-like fs-5 me-2'></i> <span>Like</span></p>
          <p class="t-l d-flex align-items-center"><i class='bx bx-comment fs-5 me-2'></i> <span>Comment</span></p>
        </div>
      </div>
      <hr class="t-l">
      <div class="mt-3">
        <span class="t-l d-block mb-2">This is for me first challenge 😍 <br> <span class="fs-p">#SWD Project</span></span>
        <img src="${viewList.project2}" alt="" class="detail-img rounded shadow">
        <div class="mt-2 d-flex justify-content-between">
          <p class="t-l d-flex align-items-center"><i class='bx bx-like fs-5 me-2'></i> <span>Like</span></p>
          <p class="t-l d-flex align-items-center"><i class='bx bx-comment fs-5 me-2'></i> <span>Comment</span></p>
        </div>
      </div>
    </div>
      `;
  })
})


// for loop courses 
let courseRow=document.getElementById('course-row');
courseLists.forEach(x=>{
  courseRow.innerHTML+=`
        <div class="swiper-slide course-slide">
          <div class="p-3 secondary course-media" id="course">
            <img src="${x.img}" width="55px" class="d-block ms-auto rounded-circle" alt="">
            <div class="">
              <h5 class="text-white mb-0 mt-5 mt-lg-3 media-h">${x.name}</h5>
              <p class="text-warning my-0">${x.course}</p>
              <span class="text-white-50 fs-c">${x.description}</span>
            </div>
          </div>
        </div>
  `;
})


// for course list 
new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    }
  },
});


// for chart js 
let delayed;
const ctx = document.getElementById('myChart');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'SASS', 'React Js'],
        datasets: [{
            label: '# Activity',
            data: [12, 16, 11, 10, 5, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.7)',
                'rgba(54, 162, 235, 0.7)',
                'rgba(255, 206, 86, 0.7)',
                'rgba(75, 192, 192, 0.7)',
                'rgba(153, 102, 255, 0.7)',
                'rgba(255, 159, 64, 0.7)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
      animation: {
        onComplete: () => {
          delayed = true;
        },
        delay: (context) => {
          let delay = 0;
          if (context.type === 'data' && context.mode === 'default' && !delayed) {
            delay = context.dataIndex * 300 + context.datasetIndex * 100;
          }
          return delay;
        },
      },
      scales: {
        x: {
          stacked: true,
        },
        y: {
          stacked: true
        }
      }
    }
});

// for chart 2 
const ctx1 = document.getElementById('myChart1');
const myChart1 = new Chart(ctx1, {
  type: 'doughnut',
  data: {
      labels: ['Morning', 'Afternoon','Evening', 'Night'],
      datasets: [{
          label: '# Screen Times',
          data: [10, 7, 3, 15],
          backgroundColor: [
              'rgba(255, 99, 132, 0.8)',
              'rgba(54, 162, 235, 0.8)',
              'rgba(255, 206, 86, 0.8)',
              'rgba(75, 192, 192, 0.8)',
          ],
          borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
          ],
          borderWidth: 1
      }]
  },
  options: {
    animation: {
      onComplete: () => {
        delayed = true;
      },
      delay: (context) => {
        let delay = 0;
        if (context.type === 'data' && context.mode === 'default' && !delayed) {
          delay = context.dataIndex * 300 + context.datasetIndex * 100;
        }
        return delay;
      },
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true
      }
    }
  }
  });


//  for login form 
let password=document.getElementById('pw');
let suPw=document.getElementById('supw');
let sucPw=document.getElementById('sucpw');
let suName=document.getElementById('su-name');
const eye=document.getElementById('eye');
const sucEye=document.getElementById('suceye');
const suEye=document.getElementById('sueye');
// console.log(suPw.type);

eye.addEventListener('click',()=>{
  if(password.type==='password'){
    password.type='text';
    eye.className='bx bx-hide';
  }else{
    password.type='password';
    eye.className='bx bx-show';
  }
});

suEye.addEventListener('click',function(){
  if(suPw.type==='password'){
    suPw.type='text';
    suEye.className='bx bx-hide';
  }else{
    suPw.type='password';
    suEye.className='bx bx-show';
  }
})

// sucEye.addEventListener('click',function(){
//   if(sucPw.type==='password'){
//     sucPw.type='text';
//     sucEye.className='bx bx-hide';
//   }else{
//     sucPw.type='password';
//     sucEye.className='bx bx-show';
//   }
// })

let signinForm=document.getElementById('sign-in-form');
let signupForm=document.getElementById('sign-up-form');
let login=document.getElementById('login');
let main=document.getElementById('main');
let signupBtn=document.getElementById('signup-btn');
let fgBtn=document.getElementById('fg-btn');
let fogBtn=document.getElementById('forgot-btn');
let signinBtn=document.getElementById('signin-btn');
let signinPage=document.getElementById('sign-in');
let signupPage=document.getElementById('sign-up');
let fgPage=document.getElementById('forgot');

// localStorage.setItem('userInfo',JSON.stringify([{username:"mmsit", userpw:"20000"}]))
let userInfo=JSON.parse(localStorage.getItem('userInfo')) || [];

signinForm.addEventListener('submit',(e)=>{
  e.preventDefault();
  // console.log(e);
  let name=document.getElementById('name');
  let pw=document.getElementById('pw');
  
  if(userInfo[0]){
    if(name.value== userInfo[0].username && pw.value== userInfo[0].userpw){
      login.classList.add('d-none');
      main.classList.remove('d-none');
      inAlert();
      name.value='';
      pw.value='';
    }else if(name.value== userInfo[0].username && pw.value!== userInfo[0].userpw){
      Swal.fire({
        icon: 'error',
        title: 'Incorrect Password',
        text: 'Please try again!',
      })
    }else if(name.value!==userInfo[0].username && pw.value==userInfo[0].userpw){
      Swal.fire({
        icon: 'error',
        title: 'Incorrect Username',
        text: 'Please try again!',
      })
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Incorrect information',
        text: 'Please try again!',
        footer: '<a>Check your username or password ?</a>'
      })
    }
  }else{
    Swal.fire({
      icon: 'error',
      title: `' Your account isn't create '`,
      text: 'Please create your account!',
      footer: '<a>You can sign up ?</a>'
    });
    name.value='';
    pw.value='';
  }
})

signupForm.addEventListener('submit',(e)=>{
  e.preventDefault();
  // console.log(e);
  let minute=document.getElementById('minute');
  let warn=document.getElementById('warning');

  
  // added to localstorage 
  if(userInfo[0]){
    Swal.fire({
      title: 'Are you sure to create new account?',
      text: "You have already account",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Okay'
    }).then((result)=>{
      if(result.isConfirmed){
        let count=0;
        let minCount=setInterval(minCounter,1000);
        warn.classList.remove('d-none');
    
        function minCounter(){
          minute.innerText= ++count + 's';
        }
    
        setTimeout(createAcc,60000);
    
        function createAcc(){
          signupPage.classList.add('d-none');
          signinPage.classList.remove('d-none');
          if(!userInfo){
            userInfo=[];
          }
          
          let infoObj={
            username : suName.value,
            userpw : suPw.value
          }
          
          userInfo[0]= infoObj;
          localStorage.removeItem('userInfo');
          localStorage.setItem("userInfo",JSON.stringify(userInfo));
        
          suName.value='';
          suPw.value='';
        
          clearInterval(minCount);
          upAlert();
        }
      }else{
        signupPage.classList.add('d-none');
        signinPage.classList.remove('d-none');
        suName.value='';
        suPw.value='';
      }
    })

    
  }else{
    signupPage.classList.add('d-none');
    signinPage.classList.remove('d-none');
    if(!userInfo){
      userInfo=[];
    }
    
    let infoObj={
      username : suName.value,
      userpw : suPw.value
    }
    
    userInfo[0]= infoObj;
    localStorage.removeItem('userInfo');
    localStorage.setItem("userInfo",JSON.stringify(userInfo));
  
    suName.value='';
    suPw.value='';
  
    upAlert();
  }
  
})

signupBtn.addEventListener('click',()=>{
  signinPage.classList.add('d-none');
  signupPage.classList.remove('d-none');
})

signinBtn.addEventListener('click',()=>{
  signupPage.classList.add('d-none');
  signinPage.classList.remove('d-none');
})

fogBtn.addEventListener('click',()=>{
  let second=document.getElementById('second');
  if(userInfo[0]){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Okay'
    }).then((result) => {
      let fgName=document.getElementById('fg-name');
      let fgPw=document.getElementById('fgpw');
      if (result.isConfirmed) {
        signupPage.classList.add('d-none');
        signinPage.classList.add('d-none');
        fgPage.classList.remove('d-none');

        let count=0;
        let secCount= setInterval(counter,1000);
        function counter(){
          second.innerText= ++count + "s";
          if(second.innerText=='60s'){
            second.innerText= '😎';
          }
        }
  
        setTimeout(function(){
          fgName.value= userInfo[0].username;
          fgPw.value=userInfo[0].userpw;

          Swal.fire(
            'Hello User!',
            'This is your recent password',
            'success'
          );

          clearInterval(secCount);
        },60000);
      }
    })
  }else{
    Swal.fire({
      icon: 'error',
      title: `' Your account isn't create '`,
      text: `' So, You can't see your info! '`,
      footer: '<a>You can sign up ?</a>'
    });
  }
})

fgBtn.addEventListener('click',()=>{
  signupPage.classList.add('d-none');
  fgPage.classList.add('d-none');
  signinPage.classList.remove('d-none');
})


// for sweet alert 
function upAlert(){
  Swal.fire(
    'Sign Up Successfully!',
    'Please Sign In!',
    'success'
  )
}
function inAlert(){
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  
  Toast.fire({
    icon: 'success',
    title: 'Sign In successfully'
  })
}

// console.log(userInfo);




