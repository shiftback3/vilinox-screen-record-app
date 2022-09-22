<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-light " aria-label="Offcanvas navbar large">
    <div class="container">
      <ul class="navbar-nav">
        <li class="">
      <a class="navbar-brand d-flex" href="#"><span class="logo-bg"><img class="logo" src="@/assets/images/swarm.svg" alt=""></span><span class="logo-text mx-2">Adilo</span></a>

        </li>
     </ul>
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2" aria-controls="offcanvasNavbar2">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasNavbar2" aria-labelledby="offcanvasNavbar2Label">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasNavbar2Label">Offcanvas</h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-center flex-grow-1 pe-3">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Projects</a>
            </li>
            
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Tools & App
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Snapbyte Recorder</a></li>
                <hr class="dropdown-divider">
                <li><a class="dropdown-item" href="#">Audio Bounce</a></li>
                <li>
                  <hr class="dropdown-divider">
                </li>
                <li><a class="dropdown-item" href="#">Sugar Voice</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Channels</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contacts</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Analytics</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Settings</a>
            </li>
          </ul>
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3" role="search">
            <li class="nav-item" style="border-right: 1px solid gray;"><a class="nav-link" href="#">Help</a></li>
            <li class="nav-item"><a class="nav-link" href="#">
              <div class="d-flex profile justify-content-between align-items-center">
                            <!-- <img src="@/assets/images/profile-picture.png" alt="" class="img-fluid"> -->
                            <img class="avatar" src="@/assets/images/avatar.png" alt="">
                            <div class="text ps-3 pe-1">
                                <p class="fw-semibold mb-0 text-dark">Cody Fisher</p>
                                <p class="fs-12 mb-0">codyfisher@gmail.com</p>
                            </div>
                         </div>
                         </a>
                         </li>
              
          </ul>
        </div>
      </div>
    </div>
  </nav>
    </div>
</template>

<style>
     .logo{
    /* top: 28px;
left: 58px;
width: 26px;
height: 26px;
background: transparent url('img/swarm.png') 0% 0% no-repeat padding-box; */
opacity: 1;
margin-right: 5px;
margin-left: 5px;
margin-top: 5px;
margin-bottom: 5px;
    
  }
  .logo-text {
    top: 27px;
left: 109px;
width: 70px;
height: 31px;
text-align: left;
font: normal normal bold 28px/32px Helvetica;
letter-spacing: 0px;
color: #21455E;
opacity: 1;
  }
  .logo-bg{
    /* top: 22px;
left: 51px; */

display: block;
background: #FBBD71;
border-radius: 10px !important;
opacity: 1;


  }
  .nav-itme{
    color: #707070 !important;
  }
  .avatar{
    width: 40px;
    height: 40px;
    border-radius: 10px;
  }
   .bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }

      @media (min-width: 768px) {
        .bd-placeholder-img-lg {
          font-size: 3.5rem;
        }
      }

      .b-example-divider {
        height: 3rem;
        background-color: rgba(0, 0, 0, .1);
        border: solid rgba(0, 0, 0, .15);
        border-width: 1px 0;
        box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
      }

      .b-example-vr {
        flex-shrink: 0;
        width: 1.5rem;
        height: 100vh;
      }

      .bi {
        vertical-align: -.125em;
        fill: currentColor;
      }

      .nav-scroller {
        position: relative;
        z-index: 2;
        height: 2.75rem;
        overflow-y: hidden;
      }

      .nav-scroller .nav {
        display: flex;
        flex-wrap: nowrap;
        padding-bottom: 1rem;
        margin-top: -1px;
        overflow-x: auto;
        text-align: center;
        white-space: nowrap;
        -webkit-overflow-scrolling: touch;
      }
</style>