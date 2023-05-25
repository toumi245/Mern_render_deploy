import React from 'react'
import './style.css'
function Footer() {
  return (
    <footer class="footer">
    <div class="footer-left col-md-4 col-sm-6">
      <p class="about">
        <span> About the company</span> Welcome to our eCommerce site! We are a leading online retailer offering a wide range of products at competitive prices. Our mission is to provide a seamless and convenient shopping experience for our customers, with top-notch customer service and fast shipping.   </p>
      <div class="icons">
        <a href="#"><i class="fa fa-facebook"></i></a>
        <a href="#"><i class="fa fa-twitter"></i></a>
        <a href="#"><i class="fa fa-linkedin"></i></a>
        <a href="#"><i class="fa fa-google-plus"></i></a>
        <a href="#"><i class="fa fa-instagram"></i></a>
      </div>
    </div>
    <div class="footer-center col-md-4 col-sm-6">
      <div>
        <i class="fa fa-map-marker"></i>
        <p><span> Rue el jomhouria</span> Hammamet, Tunisie</p>
      </div>
      <div>
        <i class="fa fa-phone"></i>
        <p> (+216) 72 298 422</p>
      </div>
      <div>
        <i class="fa fa-envelope"></i>
        <p><a href="#"> office@HI-TECH.com</a></p>
      </div>
    </div>
    <div class="footer-right col-md-4 col-sm-6">
      <h2> HI<span> TECH</span></h2>
      <p class="menu">
        <a href="/"> Home</a> |
        <a href="#"> About</a> |
        <a href="#"> Services</a> |
        <a href="#"> Portfolio</a> |
        <a href="#"> News</a> |
        <a href="/contact"> Contact</a>
      </p>
      <p class="name"> HI-TECH &copy; 2023</p>
    </div>
  </footer>
  )
}
export default Footer
