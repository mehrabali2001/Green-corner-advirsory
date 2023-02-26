<header>
    <?php 
        include 'include/tophead.php';
      ?>
    <div class="sticky-top d-flex align-items-center">
        <div class="container d-flex align-items-center justify-content-between">
            <div class="logo">
                <a title=" Green Corner Advisory" href="index.php">
                    <img src="assets/img/logo.png" alt="Green Corner Advisory Logo" class="img-fluid pt-1" width="130px">
                </a>
            </div>
            <!-- Navbar Start -->
            <nav id="navbar" class="navbar">
                <ul>
                    <li><a title="Home" class="nav-link scrollto active" href="index.php">Home</a></li>
                    <li><a title="About Us" href="about.php">About Us</a></li>
                    <li><a title="Research" href="research.php">Research</a></li>
                    <li><a title="Products" href="products.php">Products</a></li>
                    <li class="dropdown"><a href="#"><span>More</span> <i class="bi bi-chevron-down"></i></a>
                        <ul>
                            <li><a title="Services" href="services.php">Services</a></li>
                            <li><a title="KYC Form" href="kyc.php">KYC Form</a></li>
                            <li><a title="RPM" href="rpm.php">RPM</a></li>
                            <li><a title="Complaints" href="complaints.php">Complaints</a></li>
                            <li><a title="Bank Details" href="bankdetails.php">Bank Details</a></li>
                            <li><a title="Careers" href="career.php">Careers</a></li>
                            <li><a title="FAQs" href="faq.php">FAQs</a></li>
                        </ul>
                    </li>
                    <li><a title="Contact" class="nav-link scrollto" href="contact.php">Contact</a></li>
                    <li>
                        <div id="inline-popups-1">
                            <a title="Book A Demo" class="getstarted scrollto" href="#book-demo-popup">Book Demo</a>
                        </div>
                        <div id="book-demo-popup" class="demo-popup mfp-with-anim mfp-hide">
                            <div class="demo-box">
                                <h4>BOOK A DEMO NOW</h4>
                                <h6>Experience  Green Corner Advisory products with a personalized demo</h6>
                                <p>Fill in your details below and we will contact you for a personalized presentation at
                                    a time and
                                    venue convenient to you.</p>
                                <p>Alternatively you can call on +919122442032 to speak to a sales specialist now. The
                                    demos are not
                                    charged.</p>
                                <form action="https://greencorneradvisory.com/assets/bookdemo.php" method="post"
                                    role="form" class="php-email-form">
                                    <div class="user-box">
                                        <input type="text" id="dname" name="dname" required>
                                        <label>Name</label>
                                    </div>
                                    <div class="user-box">
                                        <input type="phone" id="dphone" name="dphone" required>
                                        <label>Mobile Number</label>
                                    </div>
                                    <div class="user-box">
                                        <input type="text" id="dcity" name="dcity" required>
                                        <label>City</label>
                                    </div>
                                    <div class="user-box">
                                        <input type="text" id="dstate" name="dstate" required>
                                        <label>State</label>
                                    </div>
                                    <div class="user-box">
                                        <input type="text" id="dpincode" name="dpincode" required>
                                        <label>Pin Code</label>
                                    </div>
                                    <div class="custom-select">
                                        <select id="dservice" name="dservice" required>
                                            <option value="0">Category</option>
                                            <option value="EQUITY CASH">EQUITY CASH</option>
                                            <option value="EQUITY FUTURE">EQUITY FUTURE</option>
                                            <option value="EQUITY OPTION">EQUITY OPTION</option>
                                            <option value="MCX">MCX</option>
                                            <option value="MCX BULLIONS">MCX BULLIONS</option>
                                            <option value="MCX METALS">MCX METALS</option>
                                            <option value="MCX ENERGY">MCX ENERGY</option>
                                            <option value="INDEX">INDEX</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label class='checkbox'>
                                            <input type='checkbox' id="dcheckbox" name="dcheckbox"
                                                value='I Agree to Disclaimer' title='I Agree to Disclaimer' required />
                                            By signing up you agree to being contact by  Green Corner Advisory through sms,
                                            email or whatsapp.
                                            Any information you give us is held with the utmost care and security. Trade
                                            Show Advisory does
                                            not sell, rent or loan any identifiable information of customers or
                                            prospects to any third
                                            party.
                                        </label>
                                    </div>
                                    <div>
                                        <div class="loading">Loading</div>
                                        <div class="error-message"></div>
                                        <div class="sent-message">Your message has been sent. Thank you!</div>
                                    </div>
                                    <button type="submit">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>
                    </li>
                </ul>
                <i class="bi bi-list mobile-nav-toggle"></i>
            </nav>
            <!-- navbar -->
        </div>
    </div>
</header>