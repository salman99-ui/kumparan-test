import React from 'react'
import {FaCalendar , FaEnvelope , FaMapMarkerAlt} from 'react-icons/fa'
import './bantuan.scss'


function Index() {
    return (
        <div className="bantuan">
            <h3 className="title">Butuh Bantuan ?</h3>

            <div className="form-bantuan">
            <div className="form">
                <form>
                    <h3>hubungi kami di </h3>

                    <input type="text" className="input" placeholder="Nama" />
                    <input type="text" className="input" placeholder="Email" />
                    <input type="text" className="input" placeholder="No Handphone" />
                    <textarea className="inputarea" placeholder="Pertanyaan">

                    </textarea>
                    <button className="btn-submit">Send</button>
                </form>
            </div>

            <div className="info">
                <h3>Temukan Kami</h3>
                <p><FaEnvelope color="black" /> info@bill.co.id </p>
                <p><FaMapMarkerAlt color="black" /> PIK 2 , North Jakarta</p>
                <p><FaCalendar /> Monday - Friday</p>
            </div>
            </div>
        </div>
    )
}

export default Index
