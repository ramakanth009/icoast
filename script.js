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
      <div class="row">
        <div class="col-md-4">
          <h5>BrandName</h5>
          <p>A108 Adam Street, New York, NY 535022</p>
        </div>
        <div class="col-md-4">
          <h5>Useful Links</h5>
          <ul class="list-unstyled">
            <li>
              <a class="text-white" href="/index.html">Home</a>
            </li>
            <li>
              <a class="text-white" href="/aboutus.html">About Us</a>
            </li>
            <li>
              <a class="text-white" href="/services.html">Services</a>
            </li>
            <li>
              <a class="text-white" href="contact.html">Contact</a>
            </li>
          </ul>
        </div>
        <div class="col-md-4">
          <h5>Follow Us</h5>
          <a class="text-white me-2" href="#">
            <i class="fab fa-twitter fa-2x"></i>
          </a>
          <a class="text-white me-2" href="#">
            <i class="fab fa-facebook fa-2x"></i>
          </a>
          <a class="text-white me-2" href="#">
            <i class="fab fa-instagram fa-2x"></i>
          </a>
          <a class="text-white" href="#">
            <i class="fab fa-linkedin fa-2x"></i>
          </a>
        </div>
      </div>
    </div>
  </footer>
    `;
});