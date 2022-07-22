import React from 'react'
import imgA from '../../../images/mukti.jpg'
import Footer from '../Footer/Footer'
import Navbar from '../Header/Navbar'

export default function About() {
  return (
    <div>
      <Navbar/>
      <div className='container'>
        <div className="row row-cols-1 row-cols-md-2 g-4 border-0">
          <div className="col">
            <div className="card">

              <div className="card-body">

                <h2 className='card-title'>আমাদের গল্প</h2>

                <p> সাল ২০১৯</p>
                <p>
                  সদ্য মফস্বল থেকে সিলেটে আসা স্বপ্নবাজ তরুণী তখন সিলেট সরকারি কলেজ এর ইন্টার দ্বিতীয় বর্ষের ছাত্রী। ডিসেম্বরের কোন এক শীতে হাতখরচের জন্য টিউশনির বিকল্প খুঁজতে গিয়েই যাত্রা শুরু- ‘অনন্যা’ র।
                  তবে যাত্রা শুরু কিংবা স্বপ্ন দেখা যত-টা সহজ, বাস্তব ততটা নয়। রঙ্গিন স্বপ্ন গুলো বাস্তবের কাদা মেখে ভারী হয়ে যায় খুব সহজেই।
                </p>
                <p>
                  সময় পেড়িয়ে সেই ভালো বন্ধু দুজন আজ একে অপরের জীবন সঙ্গী আর তাদের স্বপ্নের ‘অনন্যার’র পণ্য আজ আপনার হাতে।
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={imgA} className="card-img-top" alt="..." />

            </div>
          </div>
        </div>

      </div>
      <Footer/>
    </div>
  )
}
