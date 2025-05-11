let homeServices = document.querySelector('.homeServices');
let service = document.querySelector(".home-service");

let hideTimeout;

homeServices.addEventListener('mouseenter', function(event) {
    event.preventDefault(); // Prevent default link behavior
    service.style.display = "flex";
    
  });

homeServices.addEventListener('mouseleave', function(event) {
    event.preventDefault(); // Prevent default link behavior
    hideTimeout = setTimeout(() => {
        if (!service.matches(':hover')) {
            service.style.display = "none";
        }
    }, 200); 
  });
service.addEventListener('mouseenter', function(event) {
    event.preventDefault(); // Prevent default link behavior
    service.style.display = "flex";
    
  });

service.addEventListener('mouseleave', function(event) {
    event.preventDefault(); // Prevent default link behavior
    hideTimeout = setTimeout(() => {
        if (!service.matches(':hover')) {
            service.style.display = "none";
        }
    }, 200); 
  });