function live() {
  var bgUrl = localStorage.getItem('bgUrl');
  var selectedTheme = localStorage.getItem('selectedOption');
  var containers = document.querySelectorAll('div:not(#particles-js):not(#settingsContainer):not(#contextItem):not(#contextMenu):not(#cloak):not(#menu):not(#sidebar):not(.themesExcluded), .tabBtn');

  function applyTheme(bgColor, bgImageOrGradient) {
    containers.forEach(container => container.style.backgroundColor = bgColor);
    document.body.style.background = bgImageOrGradient;
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.height = "100%";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
  }
  if(bgUrl === null || bgUrl === 'none' || bgUrl === '') {
    switch(selectedTheme) {
      case 'deepsea':
        applyTheme('rgba(30, 30, 30, 0.8)', "linear-gradient(to bottom right, rgb(40, 40, 40), rgb(25, 25, 25), black)");
        break;
      default:
        applyTheme('rgba(30, 30, 30, 0.8)', "linear-gradient(to bottom right, rgb(40, 40, 40), rgb(25, 25, 25), black)");;
    }
  }
  /* Ripple Effect for buttons */
  [].map.call(document.querySelectorAll('[anim="ripple"]'), el => {
    el.addEventListener('mousedown', e => {
      e = e.touches ? e.touches[0] : e;
      const r = el.getBoundingClientRect(),
        d = Math.sqrt(Math.pow(r.width, 2) + Math.pow(r.height, 2)) * 2;
      el.style.cssText = `--s: 0; --o: 1;`;
      el.offsetTop;
      el.style.cssText = `--t: 1; --o: 0; --d: ${d}; --x:${e.clientX - r.left}; --y:${e.clientY - r.top};`
      if(el.classList.contains('90px')) {
        el.style.width = '90px';
      }
    })
  })
  /* Background Check */
  document.addEventListener('DOMContentLoaded', function() {
    if(bgUrl === 'none' || bgUrl === null || bgUrl === '') {
      console.log('[❌] Custom Background');
    }
    else {
      document.body.style.backgroundImage = `url(${bgUrl})`;
      document.getElementById('particles-js').remove();
      console.log('[✔️] Custom Background');
    }
  });
  console.log('[✔️] Themes Loaded');
}
live();
