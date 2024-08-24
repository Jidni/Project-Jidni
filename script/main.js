let position =0;//2200
function rightbtnclicked(){
    let list = document.getElementById('slider_inner').children;
    position<1900? position+=500:{};
    for (let i = 0; i < list.length; i++) {
        const element = list[i];
        element.style="transform: translateX(-"+position+"%); transition: transform 1s;";
    }
    leftbtn.hidden = position==0
    rightbtn.hidden = position==2000
}
function leftbtnclicked(){
    let list = document.getElementById('slider_inner').children;
    position>100? position-=500:{};
    for (let i = 0; i < list.length; i++) {
        const element = list[i];
        element.style="transform: translateX(-"+position+"%); transition: transform 1s;";
    }
    leftbtn.hidden = position==0
    rightbtn.hidden = position==2000
}

// invitationLink

// Function to handle the "appear" event
function handleAppearEvent(event) {
    console.log('Element appeared:', event.target);
    document.getElementById("topNav").classList.remove("fixed-top")
    document.getElementById("topNav").classList.remove("bg-light")
    for(let i in document.getElementById("topNav").children){
        document.getElementById("topNav").children[i].classList.remove("text-dark")
    }
}
  /*
  // Function to handle the "disappear" event
  function handleDisappearEvent(event) {
    console.log('Element disappeared:', event.target);
    document.getElementById("topNav").classList.add("fixed-top")
    document.getElementById("topNav").classList.add("bg-light")
    for(let i in document.getElementById("topNav").children){
        document.getElementById("topNav").children[i].classList.add("text-dark")
    }
  }
  
  // Create the IntersectionObserver
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Trigger the "appear" event
        const appearEvent = new CustomEvent('appear', { detail: { element: entry.target } });
        entry.target.dispatchEvent(appearEvent);
      } else {
        // Trigger the "disappear" event
        const disappearEvent = new CustomEvent('disappear', { detail: { element: entry.target } });
        entry.target.dispatchEvent(disappearEvent);
      }
    });
  }, {
    threshold: [0] // Trigger the callback when any part of the element is visible or not
  });
  
  // Select the element to observe
  const element = document.getElementById('invitationLink')
  
  // Add event listeners for custom events
  element.addEventListener('appear', handleAppearEvent);
  element.addEventListener('disappear', handleDisappearEvent);
  
  // Start observing the element
  observer.observe(element);
  */