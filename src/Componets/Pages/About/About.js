import React from 'react'
import imgA from '../../../images/mukti.jpg'
import Footer from '../Footer/Footer'
import Navbar from '../Header/Navbar'

export default function About() {
  return (
    <div>
      <Navbar />
      <div className='container pt-3 pb-3'>
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <div className="card  border-0">

              <div className="card-body">

                <h2 className='card-title'>আমাদের গল্প</h2>

                <p> সাল ২০১৯</p>
                <p>
                  <small>
                    সদ্য মফস্বল থেকে সিলেটে আসা স্বপ্নবাজ তরুণী অনন্যা  রায় তখন সিলেট সরকারি মহিলা কলেজ এর ছাত্রী। মে মাসে এইচএসসি পরীক্ষার পর হাতখরচের জন্য টিউশনির বিকল্প খুঁজতে গিয়েই যাত্রা শুরু- ‘অনন্যা’ র। যাত্রা শুরু করা বা স্বপ্ন দেখা অনেক সহজ! কিন্তু সেই স্বপ্ন কে বাঁচাতে এবং বাস্তব করতে প্রয়োজন কঠোর পরিশ্রম এবং ইচ্ছাশক্তি।

                  </small>
                </p>
                <p>
                  <small> সময় পেড়িয়ে অনন্যা এবং তার সেই ভালো বন্ধুদের পরিশ্রম এবং কাজের জন্য  ‘অনন্যার’র পণ্য আজ আপনার হাতে।</small>
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
      <Footer />
    </div>
  )
}
