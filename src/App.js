import logo from './logo.svg';
import './App.css';
import pier from './assets/pier-on-the-beach.jpeg'
import park from './assets/360-photo-panorama-.jpeg'
import timesquare from './assets/times-square-nyc-360-view.jpeg'
import timethumb from './assets/download-door-png-transparent-image-and-clipart-12.png'

function App() {
  return (
    <div className="App">


        <a-scene>
    <a-assets>
      <img alt="a" id="timesquare-thumb" crossorigin="anonymous" src={timethumb}/>

      <audio id="click-sound" crossorigin="anonymous" src="https://cdn.aframe.io/360-image-gallery-boilerplate/audio/click.ogg"></audio>
      <img alt="e" id="pier" crossorigin="anonymous" src={pier}/>
      <img alt="f" id="park" crossorigin="anonymous" src={park}/>
      <img alt="g" id="timesquare" crossorigin="anonymous" src={timesquare}/>

    </a-assets>


    <a-sky id="image-360" radius="10" src="#pier"
           animation__fade="property: components.material.material.color; type: color; from: #FFF; to: #000; dur: 300; startEvents: fade"
           animation__fadeback="property: components.material.material.color; type: color; from: #000; to: #FFF; dur: 300; startEvents: animationcomplete__fade"></a-sky>


    <a-entity id="links" layout="type: line; margin: 2.5" position="0 -2 -4">
      <a-entity template="src: #link" data-src="#park" data-thumb="#timesquare-thumb"></a-entity>
      <a-entity template="src: #link" data-src="#pier" data-thumb="#timesquare-thumb"></a-entity>
      <a-entity template="src: #link" data-src="#timesquare" data-thumb="#timesquare-thumb"></a-entity>
    </a-entity>


    <a-entity camera look-controls>
      <a-cursor
        id="cursor"
        animation__click="property: scale; startEvents: click; from: 0.1 0.1 0.1; to: 1 1 1; dur: 150"
        animation__fusing="property: fusing; startEvents: fusing; from: 1 1 1; to: 0.1 0.1 0.1; dur: 1500"
        event-set__mouseenter="_event: mouseenter; color: springgreen"
        event-set__mouseleave="_event: mouseleave; color: black"
        raycaster="objects: .link"></a-cursor>
    </a-entity>
  </a-scene>



    </div>

  );
}


// <a-scene>
//   <a-assets>
//     <audio id="click-sound" src="https://cdn.aframe.io/360-image-gallery-boilerplate/audio/click.ogg"></audio>
//
//     <!-- Images. -->
//     <img id="pier" src="https://cdn.aframe.io/360-image-gallery-boilerplate/img/city.jpg">
//     <img id="city-thumb" src="https://cdn.aframe.io/360-image-gallery-boilerplate/img/thumb-city.jpg">
//     <img id="park" src="https://cdn.aframe.io/360-image-gallery-boilerplate/img/cubes.jpg">
//     <img id="cubes-thumb" src="https://cdn.aframe.io/360-image-gallery-boilerplate/img/thumb-cubes.jpg">
//     <img id="timesquare" src="https://cdn.aframe.io/360-image-gallery-boilerplate/img/sechelt.jpg">
//     <img id="sechelt-thumb" src="https://cdn.aframe.io/360-image-gallery-boilerplate/img/thumb-sechelt.jpg">
//   </a-assets>
//
//   <!-- 360-degree image. -->
//   <a-sky id="image-360" radius="10" src="#city"></a-sky>
//
//   <!-- Link template we will build. -->
//   <a-entity class="link"></a-entity>
//
//   <!-- Camera + Cursor. -->
//   <a-camera>
//     <a-cursor
//       id="cursor"
//       animation__click="property: scale; from: 0.1 0.1 0.1; to: 1 1 1; easing: easeInCubic; dur: 150; startEvents: click"
//       animation__clickreset="property: scale; to: 0.1 0.1 0.1; dur: 1; startEvents: animationcomplete__click"
//       animation__fusing="property: scale; from: 1 1 1; to: 0.1 0.1 0.1; easing: easeInCubic; dur: 150; startEvents: fusing"></a-cursor>
//   </a-camera>
// </a-scene>


export default App;
