import React from 'react'
import {Foot , CEO} from '../../assets'
import './about.scss'

function Index() {
    return (
        <div className="about">
            <div className="main"
                 style={{backgroundImage : `url(${Foot})`}}
            >
                <h2>#BersamaBill</h2>
            </div>

            <div className="description">
                <h3 className="title">Apa Itu Bill Indonesia</h3>
                <p>Bill Indonesia adalah sarana melakukan transaksi dan pembayaran digital melalui aplikasi. Bill Indonesia
                    bertujuan untuk merangkum seluruh rakyat Indonesia tanpa terkecuali untuk memasuki dunia digital
                    bersama dan mulai menggunakan pembayaran non-tunai.

                    Bill Indonesia menargetkan untuk memberi kemudahan dalam transaksi sehari-hari, mulai dari trans-
                    portasi, belanja harian hingga transaksi sesama teman. Kami juga menjamin transaksi yang mudah dan

                    praktis, dan tentu saja aman dan cepat!
                </p>
            </div>


            <div className="teams">
                <div className="main">
                    <h3 className="team-title">Kenalkan Tim Dibalik Bill Indonesia</h3>
                    <div className="content-one">
                        <div className="card">
                             <img className="card-img" src={CEO}  />
                             <p className="card-name">Eka Gunawan R</p>
                             <p className="card-title">Founder & CEO</p>
                        </div>

                        <div className="card">
                             <img className="card-img" src={CEO}  />
                             <p className="card-name">Eka Gunawan R</p>
                             <p className="card-title">Founder & CEO</p>
                        </div>

                        <div className="card">
                             <img className="card-img" src={CEO}  />
                             <p className="card-name">Eka Gunawan R</p>
                             <p className="card-title">Founder & CEO</p>
                        </div>
                    </div>


                    <div className="content-two">
                        <div className="card">
                             <img className="card-img" src={CEO}  />
                             <p className="card-name">Eka Gunawan R</p>
                             <p className="card-title">Founder & CEO</p>
                        </div>

                        <div className="card">
                             <img className="card-img" src={CEO}  />
                             <p className="card-name">Eka Gunawan R</p>
                             <p className="card-title">Founder & CEO</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Index