import logo from './logo.svg';
import './App.css';
import skyscene from './assets/6.jpeg'

function App() {
  return (
    <div className="App">

        <a-scene>
    
      <a-sky id="image-360" radius="10" src={skyscene}></a-sky>
    </a-scene>


    </div>

  );
}


// <a-scene>
//   <a-assets>
//     <audio id="click-sound" src="https://cdn.aframe.io/360-image-gallery-boilerplate/audio/click.ogg"></audio>
//
//     <!-- Images. -->
//     <img id="city" src="https://cdn.aframe.io/360-image-gallery-boilerplate/img/city.jpg">
//     <img id="city-thumb" src="https://cdn.aframe.io/360-image-gallery-boilerplate/img/thumb-city.jpg">
//     <img id="cubes" src="https://cdn.aframe.io/360-image-gallery-boilerplate/img/cubes.jpg">
//     <img id="cubes-thumb" src="https://cdn.aframe.io/360-image-gallery-boilerplate/img/thumb-cubes.jpg">
//     <img id="sechelt" src="https://cdn.aframe.io/360-image-gallery-boilerplate/img/sechelt.jpg">
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
