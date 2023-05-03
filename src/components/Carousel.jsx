import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

function Carousel() {
   const [ref] =
      useKeenSlider <
      HTMLDivElement >
      ({
         slides: {
            perView: 4,
         },
         loop: true,
      },
      [
         (slider) => {
            let timeout;
            let mouseOver = false;
            function clearNextTimeout() {
               clearTimeout(timeout);
            }
            function nextTimeout() {
               clearTimeout(timeout);
               if (mouseOver) return;
               timeout = setTimeout(() => {
                  slider.next();
               }, 2000);
            }
            slider.on("created", () => {
               slider.container.addEventListener("mouseover", () => {
                  mouseOver = true;
                  clearNextTimeout();
               });
               slider.container.addEventListener("mouseout", () => {
                  mouseOver = false;
                  nextTimeout();
               });
               nextTimeout();
            });
            slider.on("dragStarted", clearNextTimeout);
            slider.on("animationEnded", nextTimeout);
            slider.on("updated", nextTimeout);
         },
      ]);
   return (
      <div className="carousel-container">
         <div ref={ref} className="keen-slider">
            <div className="keen-slider__slide number-slide1">HTML</div>
            <div className="keen-slider__slide number-slide2">CSS</div>
            <div className="keen-slider__slide number-slide3">JavaScript</div>
            <div className="keen-slider__slide number-slide4">React</div>
            <div className="keen-slider__slide number-slide5">Node.js</div>
            <div className="keen-slider__slide number-slide6">Express</div>
            <div className="keen-slider__slide number-slide7">MongoDB</div>
            <div className="keen-slider__slide number-slide8">SCSS</div>
         </div>
      </div>
   );
}

export default Carousel;
