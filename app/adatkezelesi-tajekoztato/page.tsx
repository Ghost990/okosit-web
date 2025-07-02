import CookieConsent from "@/components/CookieConsent";

export const metadata = {
  title: "Adatkezelési tájékoztató | OkosIT",
  description: "Információk az OkosIT adatkezelési gyakorlatáról és az Ön személyes adatainak védelméről",
};

export default function AdatkezelesiTajekoztato() {
  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 max-w-7xl">
        <div className="prose prose-lg prose-indigo mx-auto">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Adatkezelési tájékoztató
          </h1>
          
          <div className="mt-10">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">1. Bevezetés</h2>
            <p>
              Az OkosIT elkötelezett a felhasználók személyes adatainak védelme iránt. 
              Jelen adatkezelési tájékoztató célja, hogy ismertesse, milyen adatokat gyűjtünk 
              Önről weboldalunk használata során, valamint hogyan használjuk, továbbítjuk és védjük ezeket az adatokat.
            </p>
            <p>
              Ez a tájékoztató összhangban van az Európai Unió Általános Adatvédelmi Rendeletével (GDPR) 
              és a magyar adatvédelmi törvényekkel.
            </p>
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">2. Adatkezelő</h2>
            <p>
              Név: OkosIT<br />
              E-mail: info@okosit.hu<br />
              Weboldal: www.okosit.hu
            </p>
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">3. Kezelt adatok köre</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6">3.1 Weboldal látogatása során gyűjtött adatok</h3>
            <p>
              Weboldalunk használata során az alábbi adatokat gyűjtjük:
            </p>
            <ul>
              <li>Látogatás időpontja</li>
              <li>Meglátogatott oldalak</li>
              <li>Használt eszköz típusa</li>
              <li>Használt böngésző típusa</li>
              <li>IP cím (anonimizált formában)</li>
              <li>Hivatkozási forrás</li>
            </ul>
            <p>
              Ezen adatokat kizárólag analitikai célokra, a weboldalunk használatának elemzésére, 
              valamint a felhasználói élmény javítására használjuk.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6">3.2 Cookie-k (sütik) használata</h3>
            <p>
              Weboldalunk cookie-kat (sütiket) használ, amelyek a felhasználói élmény javítását szolgálják. 
              A cookie-k olyan kis adatfájlok, amelyeket az Ön böngészője tárol az eszközén.
            </p>
            <p>
              Weboldalunkon az alábbi típusú cookie-kat használjuk:
            </p>
            <ul>
              <li><strong>Feltétlenül szükséges cookie-k:</strong> Ezek nélkülözhetetlenek a weboldal működéséhez.</li>
              <li><strong>Analitikai cookie-k:</strong> Segítenek nekünk megérteni, hogyan használják a látogatók a weboldalt, és csak az Ön hozzájárulása esetén aktiválódnak.</li>
            </ul>
            <p>
              Az analitikai cookie-k használatához az Ön kifejezett hozzájárulása szükséges, amelyet a weboldalunkon megjelenő cookie-kezelő sáv segítségével adhat meg vagy utasíthat el.
            </p>
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">4. Google Analytics használata</h2>
            <p>
              Weboldalunk a Google Analytics szolgáltatást használja a látogatói forgalom elemzésére. 
              A Google Analytics cookie-kat helyez el az Ön eszközén, amelyek segítségével adatokat gyűjt 
              arról, hogyan használja weboldalunkat.
            </p>
            <p>
              A Google Analytics által gyűjtött főbb adatok:
            </p>
            <ul>
              <li>Megtekintett oldalak</li>
              <li>A weboldalon töltött idő</li>
              <li>Honnan érkezett a látogató</li>
              <li>Milyen eszközt és böngészőt használ</li>
              <li>Demográfiai adatok (nem, kor) - kizárólag anonimizált, aggregált formában</li>
            </ul>
            <p>
              Fontos megjegyezni, hogy a Google Analytics:
            </p>
            <ul>
              <li>Csak az Ön kifejezett hozzájárulása esetén aktiválódik</li>
              <li>IP címek anonimizálásával működik weboldalunkon</li>
              <li>Adatai nem kerülnek összekapcsolásra egyéb személyes azonosításra alkalmas információkkal</li>
            </ul>
            <p>
              A Google Analytics szolgáltatással kapcsolatos további információkért látogasson el a 
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer"> Google adatvédelmi irányelveihez</a>.
            </p>
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">5. Az adatkezelés jogalapja</h2>
            <p>
              Az adatkezelés jogalapja a GDPR 6. cikk (1) bekezdésének a) pontja szerint az Ön önkéntes hozzájárulása, 
              amelyet a weboldalunkon megjelenő cookie-kezelő sávon adhat meg.
            </p>
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">6. Az adatok tárolásának időtartama</h2>
            <p>
              Az analitikai célból gyűjtött adatokat 26 hónapig tároljuk, majd automatikusan törlésre kerülnek.
            </p>
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">7. Az Ön jogai</h2>
            <p>
              A GDPR értelmében Önnek joga van:
            </p>
            <ul>
              <li>Tájékoztatást kérni az adatkezelésről</li>
              <li>Hozzáférést kérni a tárolt személyes adataihoz</li>
              <li>Kérni az adatok helyesbítését vagy törlését</li>
              <li>Az adatkezelés korlátozását kérni</li>
              <li>Tiltakozni az adatkezelés ellen</li>
              <li>Adathordozhatósághoz való jog</li>
              <li>A hozzájárulás bármikor történő visszavonásához való jog</li>
            </ul>
            <p>
              Jogainak gyakorlásához vagy bármilyen adatvédelemmel kapcsolatos kérdéssel forduljon hozzánk 
              az info@okosit.hu e-mail címen.
            </p>
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">8. Adatbiztonság</h2>
            <p>
              Megteszünk minden észszerű és megfelelő biztonsági intézkedést a személyes adatok védelmének 
              biztosítása érdekében az adatvesztés, visszaélés, vagy módosítás ellen.
            </p>
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">9. Kapcsolat</h2>
            <p>
              Ha bármilyen kérdése van az adatkezeléssel kapcsolatban, kérjük, vegye fel velünk a kapcsolatot 
              az info@okosit.hu e-mail címen.
            </p>
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">10. Változások az adatkezelési tájékoztatóban</h2>
            <p>
              Fenntartjuk a jogot, hogy ezt az adatkezelési tájékoztatót bármikor módosítsuk. 
              A módosításokról a weboldalunkon tájékoztatjuk a felhasználókat.
            </p>
            <p>
              Utolsó frissítés: 2025. július 1.
            </p>
          </div>
        </div>
      </div>
      <CookieConsent disableOverlay privacyPolicyUrl="/adatkezelesi-tajekoztato" />
    </>
  );
}
