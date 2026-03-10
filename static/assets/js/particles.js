function particles() {
    var p = document.getElementById("particles-js");
    if (p) {
      document.getElementById("particles-js").remove();
    }
    var particlesDiv = document.createElement("div");
    particlesDiv.id = "particles-js";
    document.body.insertBefore(particlesDiv, document.body.firstChild);
    var selectedTheme = localStorage.getItem("selectedOption");

    var newConfig = {
      "particles": {
        "number": {
          "value": 67,
          "density": {
            "enable": true,
            "value_area": 2880
          }
        },
        "color": {
          "value": "#ffffff"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 9,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 9
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.568,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 8,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 512,
          "color": "#ffffff",
          "opacity": 1,
          "width": 1.4400000000000002
        },
        "move": {
          "enable": true,
          "speed": 6,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "grab"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    };

    if (selectedTheme === "starry") {
      particlesJS("particles-js", newConfig);
    } else if (selectedTheme === "magma") {
      particlesJS("particles-js", newConfig);
    } else if (selectedTheme === "swamp") {
      particlesJS("particles-js", newConfig);
    } else if (selectedTheme === "sunset") {
      particlesJS("particles-js", newConfig);
    } else if (selectedTheme === "midnight") {
      particlesJS("particles-js", newConfig);
    } else if (selectedTheme === "deepsea") {
      particlesJS("particles-js", newConfig);
    }
    if (selectedTheme === null) {
      particlesJS("particles-js", newConfig);
    }

    // Check if Particles are enabled
    var particles = localStorage.getItem("particles");
    if (particles === "disabled" || !particles) {
      return '';
    } else {
        particlesJS("particles-js", {
           "particles": {
            "number": {
            "value": 0,
            "density": {
            "enable": true,
            "value_area": 800
                }
            },
            "color": {
            "value": "#32cf32"
                },
            },
        });
    }
  }

document.addEventListener('DOMContentLoaded', function() {
  particles();

});
