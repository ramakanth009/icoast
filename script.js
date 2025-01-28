document.addEventListener("DOMContentLoaded", function() {
    const headerHTML = `
        <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
            <div class="container">
                <a class="navbar-brand" href="/index.html">BrandName</a>
                <button class="navbar-toggler" data-bs-target="#navbarNav" data-bs-toggle="collapse" type="button">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item"><a class="nav-link" href="/index.html">Home</a></li>
                        <li class="nav-item"><a class="nav-link" href="/services.html">Services</a></li>
                        <li class="nav-item"><a class="nav-link" href="/aboutus.html">About</a></li>
                        <li class="nav-item"><a class="nav-link" href="/contact.html">Contact</a></li>
                        <li class="nav-item"><a class="btn btn-primary" href="/contact.html">Get Started</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    `;

    const footerHTML = `
       <footer class="bg-dark text-white py-4">
      <div class="container">
        <div class="row footmain">
          <!-- Brand Quote Section -->
          <div class="col-md-3 footquote" onclick="toggleLogo()">
            <img src="./img/logoo.svg" alt="footlogo" style="height: 90px; display: none;" id="footerLogo">
            <h3>Your Brand's Success, Our Digital Mission&reg;</h3>
          </div>
    
          <!-- Navigation Links Section -->
          <div class="col-md-2">
            <h5>Navigate</h5>
            <ul class="list-unstyled">
              <li class="footname">
                <a class="text-white footlinks" href="/index.html">Home</a>
              </li>
              <li class="footname">
                <a class="text-white footlinks" href="/aboutus.html">About Us</a>
              </li>
              <li class="footname">
                <a class="text-white footlinks" href="/services.html">Services</a>
              </li>
              <li class="footname">
                <a class="text-white footlinks" href="/contact.html">Contact</a>
              </li>
              
            </ul>
          </div>
    
          <!-- Address Section -->
          <div class="col-md-3">
            <h5>Address</h5>
            <p>
              The Adam Tower <br />
              108 Adam Street, Unit 1505 <br />
              Vancouver, BC V6B 1A1 <br />
              Canada
            </p>
            <p class="seeaddress">
              <a href="https://maps.app.goo.gl/MArhCaVQ8uqQnL5bA">See on map ↗</a>
            </p>
          </div>
          <div class="col-md-3">
            <h5>Contact</h5>
            <a href="tel:+1 (604) 555-1234">+1 (604) 555-1234</a>
            <a href="mailto:info@yourbrandname.com">info@yourbrandname.com</a>
          </div>
    
          <!-- Social Media Links Section -->
          <div class="col-md-1 d-flex flex-column align-items-end">
            <!-- <h5>Follow Us</h5> -->
            <a class="text-white mb-2" href="#">
              <i class="fab fa-twitter fa-2x"></i>
            </a>
            <a class="text-white mb-2" href="#">
              <i class="fab fa-facebook fa-2x"></i>
            </a>
            <a class="text-white mb-2" href="#">
              <i class="fab fa-instagram fa-2x"></i>
            </a>
            <a class="text-white" href="#">
              <i class="fab fa-linkedin fa-2x"></i>
            </a>
            <a class="text-white" href="#">
              <i class="fab fa-whatsapp fa-2x"></i>
            </a>
          </div>
        </div>
        <div class="row footbottom">
         <p>&copy; 2023 Your Brand Name. All rights reserved. 
          <span><a href="/terms.html">Privacy Policy & Terms of Service.</a></p>
          </span>
          </div>
      </div>
    </footer>
    `;

    // Insert header and footer into their respective elements
    const headerElement = document.querySelector('header');
    if (headerElement) {
        headerElement.innerHTML = headerHTML;
    }

    const footerElement = document.querySelector('#footer');
    if (footerElement) {
        footerElement.innerHTML = footerHTML;
    }
});