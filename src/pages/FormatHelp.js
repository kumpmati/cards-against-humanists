import React from "react";
import { Link } from "react-router-dom";

function FormatHelp() {
  return (
    <div className="container wide">
      <Link className="back-link" to="/">
        Takaisin
      </Link>
      <div>
        <h1>Korttien muotoiluohjeet</h1>
        <section>
          <h2>Yleinen</h2>
          <p>
            Käytä kortteja kirjoittaessa <b>hyvää kielioppia</b> ja niitä
            äidinkielen tunneilla opittuja sääntöjä (
            <b>paitsi jos kortin hauskuus kärsii seurauksena</b>), eli lauseet
            alkavat isolla kirjaimella ja päättyvät pisteeseen/kysymysmerkkiin
            yms.
          </p>
          <p>
            Älä laita yksityishenkilöiden koko nimiä kortteihin, niin ei
            tarvitse huolehtia siitä että joku suuttuu. Pelkät
            etunimet/sukunimet/lempinimet ovat kuitenkin ihan ok, esim.{" "}
            <b>Kumpulainen</b> tai <b>Mika</b>.
          </p>
          <p>
            Pelin ideasta johtuen poliittisesti epäkorrektit kysymykset ja
            vastaukset ovat osa peliä ja siis sallittuja, mutta kuitenkin täytyy
            pitää järki päässä{" "}
            <b>
              eikä laittaa liian loukkaavia sanoja, rasismia tai muuta
              vihapuhetta kortteihin
            </b>
            , korttien ideana on kuitenkin olla vitsikkäitä. Asiattomat kortit
            poistetaan tietokannasta.
          </p>
        </section>
        <section>
          <h2>Vastauskortit</h2>
          <p>
            Pelissä sekä kysymys- että vastauskortit valitaan täysin
            satunnaisesti, joten yritä käyttää sellaisia
            sanontoja/asioita/lauseita jotka ovat hauskoja useassa kontekstissa,
            eikä vain yhteen vastauskorttiin liitettynä.
          </p>
          <p>
            Kirjoita vastaus sellaisessa muodossa että se sopisi mahdollisimman
            moneen kysymyskorttiin. Kortin ei tarvitse sopia kaikkiin
            kysymyksiin, mutta kuitenkaan ei haluta sellaisia kortteja joka
            kuulostavat kieliopillisesti järkeviltä vain yhteen kysymyskorttiin
            liitettynä.
          </p>
          <p>
            Asioista puhuttaessa esim. nominatiivi (<b>Kalja</b>,{" "}
            <b>Pieni hevonen</b>) ja partitiivi (<b>Kaljaa</b>,{" "}
            <b>Pientä hevosta</b>) toimivat hyvin.
          </p>
          <p>
            Tekemisissä esim. essiivi (<b>Teekkarina oleminen</b>), partitiivi (
            <b>Teekkarina olemista</b>)
          </p>
        </section>
        <section>
          <h2>Kysymyskortit</h2>
          <p>
            Vastauskortin paikkaa merkittäessä kuuluu käyttää kolmea alaviivaa (
            _ ) yhteen kirjoitettuna ( ___ ). Kysymyskorttiin tarvittavien
            korttien määrä ei kuitenkaan riipu tyhjistä paikoista, vaan se
            annetaan erikseen.
          </p>
          <p>
            Vastauskortin paikkaa ei ole pakko laittaa jos vastaus tulee kortin
            tekstin jälkeen.
          </p>
          <p>
            Esim. <b>Mikä tekee teekkarin iloiseksi?</b>
            <br></br>eikä<br></br>
            <b>Mikä tekee teekkarin iloiseksi? ___.</b>
          </p>
          <p>
            Teksti kannattaa muotoilla siten ettei vastauskortin tarvitse olla
            tietyssä taivutusmuodossa, ja niin että siihen käy sekä tekemiset,
            olemiset että asiat.
          </p>
        </section>
      </div>
    </div>
  );
}

export default FormatHelp;
