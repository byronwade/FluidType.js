const TypeConfig = {
    baseFontSize: 16,
    breakPoints: {
        sm: 576,
        md: 720,
        lg: 960,
        xl: 1140,
    },
    resizeSpeed: 2,
    perPixelResize: 30,
    maxEffectWidth: 333,
    minEffectWidth: 33,
    tags: {
        h1: {
            multiplier: 2
        },
        h2: {
            multiplier: 1.75
        },
        h3: {
            multiplier: 1.5
        }, 
        h4: {
            multiplier: 1.25
        },
        h5: {
            multiplier: 1
        },
        h6: {
            multiplier: 0.75
        },
        p: {
            multiplier: 1
        },
        span: {
            multiplier: 0.75
        }
    },
    units: 'px'
  }
  
  let currentWindowWidth = window.innerWidth;
  let diffWindowWidth = 0;
  
  const subscribeWindowWidth = function(e) {
    //console.log(window.innerWidth);
    const newWindowWidth = window.innerWidth;
    if(Math.abs(newWindowWidth - currentWindowWidth) >= TypeConfig.perPixelResize ) {
      diffWindowWidth = newWindowWidth - currentWindowWidth;
      currentWindowWidth = newWindowWidth;
    } else {
      diffWindowWidth = 0;
    }
    return;
  }
  
  const windowWidth = function(resizeEffect) {
  
    window.addEventListener('resize', resizeEffect);
  
    return function() { window.removeEventListener('resize', resizeEffect); alert('Time\'s up!') };
  } 
  
  const setBaseFontSize = function (inputFontSize) {
    TypeConfig.baseFontSize = inputFontSize;
  }
  
  const setResizeSpeed = function (inputSpeed) {
    TypeConfig.resizeSpeed = inputSpeed;
  }
  
  const setMinEffectWidth = function (inputWidth) {
    TypeConfig.minEffectWidth = inputWidth;
  }
  
  const setMaxEffectWidth = function (inputWidth) {
    TypeConfig.maxEffectWidth = inputWidth;
  }
  
  const withinEffectRange = function() {
    return window.innerWidth >= TypeConfig.minEffectWidth && window.innerWidth <= TypeConfig.innerWidth
  }
  
  const getTagFontSize = function(tag) {
    return TypeConfig.baseFontSize * TypeConfig.tags[tag].multiplier
  }
  
  const calculateNewFontSize = function(currentFontSize) {
    return currentFontSize + ((TypeConfig.resizeSpeed * diffWindowWidth) / diffWindowWidth) 
  }
  
  const resizedFontSizes = function() {
  
    const resultFonts = {}
  
    Object.keys(TypeConfig.tags).forEach(tagName => {
      const tagFontSize = getTagFontSize(tagName)
  
      resultFonts[tagName] = calculateNewFontSize(tagFontSize)
    })
  
    return resultFonts
  }
  
  const resizeAll = function () {
    subscribeWindowWidth();
    console.log(resizedFontSizes()) 
  }
  
  // The exported function is for testing - eventually an object with methods will be exported (like a common module)
  // When called, open the console in the browser and you can see the resize of the values (implementation in progress) of each tag for 10 seconds
  // until the the event listener stops listening for resize

  // ex: import FluidType from "fluidtype.js"

  export default () => {
    const unsubscribeWinowWidth = windowWidth(resizeAll);
  
    setTimeout(unsubscribeWinowWidth, 10000);
  }
