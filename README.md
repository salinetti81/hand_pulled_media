# hand_pulled_media


section_2 directors section sandbox: 

  <section id="section_2">
    <h1 class="section_title">Directors</h1>
     <ul>

       <li ng-controller="BodyController as directorCtrl">
         <img src="http://sunfieldfarm.org/wp-content/uploads/2014/02/profile-placeholder.png" ng-click="directorCtrl.showContent()">
         <div ng-class="(directorCtrl.displayContent)?'active': '' " id="director">
         <h2>Director 1</h2>
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          <div class="video_container">
           <!-- 16:9 aspect ratio -->
            <div class="embed-responsive embed-responsive-16by9">
              <video class="embed-responsive-item" controls preload="none" src="video/logo.mp4"></video>
            </div>
            <video class="director_video" playsinline >
            <source src="video/place_holder_video.mp4" type="video/mp4">
            </video>
              <h5>Video 1</h5>
            <video class="director_video" playsinline >
            <source src="video/place_holder_video.mp4" type="video/mp4">
            </video>
              <h5>Video 2</h5>
            <video class="director_video" playsinline >
            <source src="video/place_holder_video.mp4" type="video/mp4">
            </video>
              <h5>Video 3</h5>
        <!--     <video class="director_video" playsinline >
            <source src="video/place_holder_video.mp4" type="video/mp4">
            </video>
              <h5>Video 4</h5> -->
          </div>
         </div>
       </li>

      <li ng-controller="BodyController as directorCtrl">
         <img src="http://sunfieldfarm.org/wp-content/uploads/2014/02/profile-placeholder.png" ng-click="directorCtrl.showContent()">
         <div ng-class="(directorCtrl.displayContent)?'active': '' " id="director">
         <h2>Director 2</h2>
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          <div class="video_container">
            <!-- 16:9 aspect ratio -->
            <div class="embed-responsive embed-responsive-16by9">
              <video class="embed-responsive-item" controls preload="none" src="video/place_holder_video.mp4"></video>
            </div>
            <video class="director_video" playsinline >
            <source src="video/place_holder_video.mp4" type="video/mp4">
            </video>
              <h5>Video 1</h5>
            <video class="director_video" playsinline >
            <source src="video/place_holder_video.mp4" type="video/mp4">
            </video>
              <h5>Video 2</h5>
            <video class="director_video" playsinline >
            <source src="video/place_holder_video.mp4" type="video/mp4">
            </video>
              <h5>Video 3</h5>
        <!--     <video class="director_video" playsinline >
            <source src="video/place_holder_video.mp4" type="video/mp4">
            </video>
              <h5>Video 4</h5> -->
          </div>
        </div>
      </li>

      <li ng-controller="BodyController as directorCtrl">
      
       <img src="http://sunfieldfarm.org/wp-content/uploads/2014/02/profile-placeholder.png" ng-click="directorCtrl.showContent()">
       <div ng-class="(directorCtrl.displayContent)?'active': '' " id="director">
       <h2>Director 3</h2>
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          <div class="video_container">
            <!-- 16:9 aspect ratio -->
            <div class="embed-responsive embed-responsive-16by9">
              <video class="embed-responsive-item" controls preload="none" src="video/place_holder_video.mp4"></video>
            </div>
            <video class="director_video" playsinline >
            <source src="video/place_holder_video.mp4" type="video/mp4">
            </video>
              <h5>Video 1</h5>
            <video class="director_video" playsinline >
            <source src="video/place_holder_video.mp4" type="video/mp4">
            </video>
              <h5>Video 2</h5>
            <video class="director_video" playsinline >
            <source src="video/place_holder_video.mp4" type="video/mp4">
            </video>
              <h5>Video 3</h5>
        <!--     <video class="director_video" playsinline >
            <source src="video/place_holder_video.mp4" type="video/mp4">
            </video>
              <h5>Video 4</h5> -->
        </div>
       </div>
      </li>

     </ul>
  </section>