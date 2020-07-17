// class Carousel {
//     constructor(containerID, slideID) {
//         this.container = document.querySelector(containerID);
//         this.slides = document.querySelectorAll(slideID);
//         this.interval = 2000;
//     }
//     _initProps() {
//         this.currentSlide = 0;
//         this.timerId = null;
//         this.isPlaying = true;
//         this.slidesCount = this.slides.length;
//         //this.swipeStart = null;
//         //this.swipeEnd = null;
        
//         this.LEFT_ARROW = 'ArrowLeft';
//         this.RIGHT_ARROW = 'ArrowRight';
//         this.SPACE = ' ';
//         this.FA_PAUSE = 'Pause';
//         this.FA_PLAY = 'Play';
//         this.FA_NEXT = 'Next';
//         this.FA_PREV = 'Prev';
//     }
//     _iniControls() {
//         let controls = document.createElement('div');
//         const PAUSE = `<span id="pause" class="control control--pause">${this.FA_PAUSE}</span>`;
//         const PREV = `<span id="prev" class="control control--prev">${this.FA_PREV}</span>`;
//         const NEXT = `<span id="next" class="control control--next">${this.FA_NEXT}</span>`;
//         controls.innerHTML = PAUSE + PREV + NEXT;
//         controls.setAttribute('class', 'controls');

//         this.container.append(controls);

//         this.pauseBtn = document.querySelector('#pause')
//         this.nextBtn = document.querySelector('#next');
//         this.prevBtn = document.querySelector('#prev');
//     }
//     _initIndicators() {
//         let indicators = document.createElement('ol');
//         indicators.setAttribute('class', 'indicators');

//         for (let i=0, n=this.slidesCount; i<n; i++) {
//             let indicator = document.createElement('li');
//             indicator.setAttribute('class', 'indicator');
//             indicator.setAttribute('data_slide_to', 'i');
            
//             i===0 && indicator.classList.add('active');
            
            
//             indicators.appendChild(indicator);
//         }

//         this.container.append(indicators);
//         this.indicatorsContainer = document.querySelector('.indicators')
//         this.indicators = document.querySelectorAll('.indicator');
//     }
//     _initListeners() {
//         this.pauseBtn.addEventListener('click', this.pausePlay.bind(this));
//         this.nextBtn.addEventListener('click', this.next.bind(this));
//         this.prevBtn.addEventListener('click', this.prev.bind(this));
//         this.indicatorsContainer.addEventListener('click', this._indicate.bind(this));
//         document.addEventListener('keydown', this._pressKey.bind(this));

//     }
//     _gotoNth(n) {
//         this.slides[this.currentSlide].classList.toggle('active');
//         this.indicators[this.currentSlide].classList.toggle('active');
//         this.currentSlide = (n + this.slidesCount) % this.slidesCount;
//         this.slides[this.currentSlide].classList.toggle('active');
//         this.indicators[this.currentSlide].classList.toggle('active');
//     }
//     _gotoNext() {
//         this._gotoNth (this.currentSlide + 1);
//     }
    
//     _gotoPrev() {
//         this._gotoNth (this.currentSlide - 1);
//     }
//     _play() {

//         this.timerId = setInterval(this._gotoNext.bind(this), this.interval);
//         this.pauseBtn.innerHTML = this.FA_PAUSE;
//         this.isPlaying = !this.isPlaying;
//     }
//     _pause () {
//         if (this.isPlaying) {
//         clearInterval(this.timerId);
//         this.pauseBtn.innerHTML = this.FA_PLAY;
//         this.isPlaying = !this.isPlaying;
//         }
//     }   
//     _indicate(e) {
//         let target = e.target;
//         if (target.classList.contains('indicator')) {
//             this._pause();
//             this._gotoNth(+target.getAttribute('data-slide-to'));
//         }
//     }
//     _pressKey(e) {
//         if (e.key=== this.LEFT_ARROW) this.prev();
//         if (e.key=== this.RIGHT_ARROW) this.next();
//         if (e.key=== this.SPACE) this.pausePlay();
//     }

//     pausePlay () {
//         if (this.isPlaying) this._pause();
//         else this._play();
//     }
            
//     next () {
//         this._pause();
//         this._gotoNext();
//     }
//     prev () {
//         this._pause();
//         this._gotoPrev();
//     }
//     init() {
//         this._initProps();
//         this._iniControls();
//         this._initIndicators();
//         this._initListeners();
        
//         this.timerId = setInterval(()=> {
//             this._gotoNext();
//         },this.interval);
        
//     }
// }

// class SwipeCarousel extends Carousel {
//     _initListeners() {
//         super._initListeners();
//         console.log('SwipeCarousel Listeners');
//         this.container.addEventListener('touchstart', this._swipeStart.bind(this));
//         this.container.addEventListener('touchend', this._swipeEnd.bind(this));
//     }
//     _swipeStart(e) {
//         this.swipeStartX = e.changedTouches[0].pageX;
//     }
//     _swipeEnd(e) {
//         this.swipeEndX = e.changedTouches[0].pageX;
//         this.swipeStartX - this.swipeEndX < -100 && this.prev();
//         this.swipeStartX - this.swipeEndX > 100 && this.next();
//     }
// }