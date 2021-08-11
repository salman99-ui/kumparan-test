import React from 'react'
import {FaCheck} from 'react-icons/fa'
import {
        Phone, 
        Phone2 ,
        Satiesfied , 
        Transaction , 
        Coins , 
        Secure , 
        Fast , 
        Search ,
        Download ,
        Registration ,
        Pin , 
        Spend
    } from '../../assets'
import './home.scss' ;

function Index() {
    return (
        <div className="main-home">
            <div className="main-page">
                <div className="main-info">
                    <div className="desc">
                        <h3>Pembayaran Aman, Praktis dan Transparan</h3>
                        <p>
                            Sekarang pembayaran Angkot sudah bisa digital loh!
                            tidak perlu menggunakan uang cash lagi ataupun mendapatkan 
                            kembalian uang receh!
                            Gunakan Bill sebagai pembayaran HarianMu!
                        </p>
                        <a href="https://play.google.com/store/apps/details?id=bill.co.id">Unduh Bill!</a>
                    </div>
                </div>

                <div className="main-apps">
                    <diV>
                        <img src={Phone} width="220" height="300" />
                    </diV>
                </div>
            </div>


            
            
            <div className="satisfied">

                <h3>Gunakan Bill Di mana & Kapan saja</h3>

                <div className="saties-page">
                    <div className="s-img">
                        <img src={Satiesfied} />
                    </div>

                    <div className="info">
                        <p>Tidak perlu khawatir kelupaan dompet atau kekurangan cash !
                            Bill Indonesia sekarang bisa digunakan untuk :

                        </p>

                        <ul>
                            <li><FaCheck /> Bayar Angkot</li>
                            <li><FaCheck /> Pembayaran Warung</li>
                            <li><FaCheck /> Transaksi Sesama Teman</li>
                        </ul>
                    </div>
                </div>
            </div>



            <div className="advantage">
                <h3>Keuntungan menggunakan BILL Indonesia</h3>
                    <div className="main">
                        <div className="info">
                            <ul>
                                <li>
                                    <div className="bg" >
                                        <img src={Transaction} width="25" height="25" />
                                    </div>

                                    <span>Transaksi Non-Tunai</span> 
                                </li>

                                <li>
                                    <div className="bg" >
                                        <img src={Coins} width="25" height="25" />
                                    </div>
                                    
                                    <span>Tanpa Uang Receh</span> 
                                </li>

                                <li>
                                    <div className="bg" >
                                        <img src={Secure} width="25" height="25" />
                                    </div>
                                    
                                    <span>Aman</span> 
                                </li>

                                <li>
                                    <div className="bg" >
                                        <img src={Fast} width="25" height="25" />
                                    </div>
                                    
                                    <span>Cepat</span> 
                                </li>

                                <li>
                                    <div className="bg" >
                                        <img src={Search} width="25" height="25" />
                                    </div>
                                    
                                    <span>Transaksi Transparan</span> 
                                </li>
                            </ul>
                        </div>

                        <div className="apps">
                            <img src={Phone2} width="300" height="300" />
                        </div>
                    </div>
            </div>


            <div className="information">
                <h3>Unduh Bill Indonesia Sekarang </h3>
                <p>Caranya Mudah!</p>
                
                <div className="main">
                    <div className="card">
                        <div className="card-img">
                            <img src={Download} />
                        </div>

                        <h3>Unduh Bill Indonesia dari Playstore </h3>
                    </div>

                    <div className="card">
                        <div className="card-img">
                            <img src={Registration} />
                        </div>

                        <h3>Registrasi dan Isi Data</h3>
                    </div>

                    <div className="card">
                        <div className="card-img">
                            <img src={Pin} />
                        </div>

                        <h3>Membuat PIN </h3>
                    </div>

                    <div className="card">
                        <div className="card-img">
                            <img src={Spend} />
                        </div>

                        <h3>Gunakan Bill sebagai sarana transaksi</h3>
                    </div>
                </div>
                
                <div className="btn-footer">
                    <a href="https://play.google.com/store/apps/details?id=bill.co.id" className="btn">Unduh Bill</a>
                </div>
            </div>
        </div>
    )
}

export default Index
