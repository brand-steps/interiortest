import React from 'react'
import imglogo from '../../../Images/My Forex Competition p-05.png'

const Footer = () => {
  return (
<footer style={{"backgroundColor": "black"}} class="relative pt-8 pb-6">
  <div class="container mx-auto px-4">
    <div class="flex flex-wrap text-left lg:text-left">
      <div class="w-full lg:w-6/12 px-4">
        <img  style={{ width: "160px" }}  src={imglogo} alt="" />
        {/* <h4 class="text-3xl fonat-semibold text-white">Let's keep in touch!</h4>
        <h5 class="text-lg mt-0 mb-2 text-white">
          Find us on any of these platforms, we respond 1-2 business days.
        </h5> */}
        <div class="mt-6 lg:mb-0 mb-6">
          <button style={{"backgroundColor" : "red"}} class=" text-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
            <i class="fab fa-twitter"></i></button><button  style={{"backgroundColor" : "red"}} class=" text-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
            <i class="fab fa-facebook-square"></i></button><button style={{"backgroundColor" : "red"}}  class=" text-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
            <i class="fab fa-whatsapp"></i></button><button  style={{"backgroundColor" : "red"}} class=" text-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
            <i class="fab fa-github"></i>
          </button>
        </div>
      </div>
      <div class="w-full lg:w-6/12 px-4">
        <div class="flex flex-wrap items-top mb-6">
          <div class="w-full lg:w-4/12 px-4 ml-auto">
            <span class="block uppercase text-white text-sm font-semibold mb-2">Program</span>
            <ul class="list-unstyled">
              <li>
                <a class="text-white hover:text-white font-semibold block pb-2 text-sm" href="">Basic </a>
              </li>
              <li>
                <a class="text-white hover:text-white font-semibold block pb-2 text-sm" href="">Amateur </a>
              </li>
              <li>
                <a class="text-white hover:text-white font-semibold block pb-2 text-sm" href="">Professional</a>
              </li>
            </ul>
          </div>
          <div class="w-full lg:w-4/12 px-4">
            <span class="block uppercase text-white text-sm font-semibold mb-2">Faq</span>
            <ul class="list-unstyled">

              <li>
                <a class="text-white hover:text-white font-semibold block pb-2 text-sm" href="">Basic </a>
              </li>
              <li>
                <a class="text-white hover:text-white font-semibold block pb-2 text-sm" href="">Amateur </a>
              </li>
              <li>
                <a class="text-white hover:text-white font-semibold block pb-2 text-sm" href="">Professional</a>
              </li>
            </ul>
          </div>
          <div class="w-full lg:w-4/12 px-4">
            <span class="block uppercase text-white text-sm font-semibold mb-2">Legal</span>
            <ul class="list-unstyled">    
              <li>
                <a class="text-white hover:text-white font-semibold block pb-2 text-sm" href="">Privacy Policy </a>
              </li>
              <li>
                <a class="text-white hover:text-white font-semibold block pb-2 text-sm" href="">Terms &amp; Conditions</a>
              </li>
              <li>
                <a class="text-white hover:text-white font-semibold block pb-2 text-sm" href="">Risk Disclosure </a>
              </li>
              <li>
                <a class="text-white hover:text-white font-semibold block pb-2 text-sm" href="">Anti-Money Laundering (AML) Guidelines</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <hr class="my-6 border-white"/>
    <div class="flex flex-wrap items-center md:justify-between justify-center">
      <div class="w-full md:w-4/12 px-4 mx-auto text-center">
        <div class="text-sm text-white font-semibold py-1">
          Copyright © <span id="get-current-year">2023</span><a   style={{"textDecoration" : "underline"}}   href="https://londonlogodesigners.co.uk/" class="text-white hover:text-gray-800" target="_blank">   MyForexCompetition </a> . All rights reserved.
        </div>
      </div>
    </div>
  </div>
</footer>

  )
}

export default Footer