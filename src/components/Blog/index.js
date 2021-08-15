import React from 'react'
import {Blog1 , Blog2 , Blog3 , Blog4 , Blog5} from '../../assets'
import './blog.scss'

function Index() {
    return (
        <div className="blog">
            <div className="main-blog">
                <div className="main">
                    <div className="main-info">
                        <h3 className="title">Informasi dan Kabar Terbaru dari Bill</h3>
                        <p className="info">Jangan Ketinggalan berita dan promo terbaru dari Bill
                            Indonesia! serta ke ulasan pengguna terhadap Bill.
                        </p>

                        <a href="https://play.google.com/store/apps/details?id=bill.co.id" className="btn-download">Unduh Bill</a>
                    </div>
                    

                    <div className="main-img">
                        <img className="img" src={Blog1} />
                    </div>
                </div>
            </div>



            <div className="header">
                <h3>Berita Terbaru</h3>
            </div>


            <div className="content">
                <div className="main-content">
                    <div className="main-img">
                        <img className="img" src={Blog2} />
                    </div>

                    <div className="content-info">
                        <h3 className="content-title">Kerja sama Bill Indonesia dengan Angkot KWK</h3>
                        <p className="info">Bill Indonesia menjalin kerja sama dengan koperasi Angkutan KWK 
                            dalam memudahkan pembayaran
                        </p>
                    </div>
                </div>

                <div className="main-content2">
                    <div className="card">
                        <img className="card-img" src={Blog3} />
                        <p className="card-info">Top Up saldo Bill sudah bisa melalui banyak tempat loh . 
                            Ayo di lihat dimana saja bisa isi saldo
                        </p>
                    </div>

                    <div className="card">
                        <img className="card-img" src={Blog4} />
                        <p className="card-info">Ini jalur angkot yang sudah menggunakan Bill untuk pembayaran. Jalur kamu sudah belum?
                        </p>
                    </div>

                    <div className="card">
                        <img className="card-img" src={Blog5} />
                        <p className="card-info">Daftar warung baru yang mendaftar di Bill 
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Index
