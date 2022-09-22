<template>
    <div>
        <div class="d-flex flex-column flex-shrink-0 p-3 bg-light" style="height:100vh">
    
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <a href="#" class="nav-link active" aria-current="page">
          <img class="mx-3" src="@/assets/images/video-player.svg" alt="">
          My Recordings
        </a>
      </li>
      <li>
        <a href="#" class="nav-link">
            <i class="bi bi-share mx-4"></i>
         <span>Requested</span> 
        </a>
      </li>
      
    </ul>
    
  </div>
    </div>
</template>
<style>
  .active {
    background: #E2E5ED 0% 0% no-repeat padding-box !important;
border: 1px solid #0DABD838 !important;
border-radius: 10px !important;
color: #21455E !important;
opacity: 1;
  } 
  .nav-link{
    text-align: left;
/* font: normal normal 300 16px/25px Poppins; */
letter-spacing: 0px;
color: #21455E;
opacity: 1;
  } 
</style>