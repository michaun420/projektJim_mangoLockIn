import "./style2.css"
import photo from './trentwins.jpg'

function Trening(){

    return<><header>
    <h1>Sklep Mamur</h1>
</header>

<div class="container">
    <div class="left-banner">
        <h2>Lewy Banner</h2>
        <p></p>
    </div>

    <div class="main-content">
        <h1>Zadowolony użytkownik</h1>
        <p><img src={photo} alt="nie ma zdjecia" height="500px" width="500px"/></p>
        
    </div>


    <div class="right-banner">
        <h2></h2>
        <p>Treść prawego bannera.</p>
    </div>
</div>

<footer>
    <p>Kontakt:  <a href="mailto:sklep.mamur@poczta.com">Adres-Mailowy</a></p>
</footer></>
}

export default Trening