// CA/EN text switcher. Translations are plain key -> string, matched to elements via
// data-i18n (textContent/innerHTML), data-i18n-alt (img alt) and data-i18n-content (meta content).
(function () {
  'use strict';

  var translations = {
    ca: {
      'nav.club': 'El club',
      'nav.valors': 'Valors',
      'nav.patrocinadors': 'Patrocinadors',

      'hero.eyebrow': 'CLUB DE TENNIS TAULA · GRÀCIA, BARCELONA',
      'hero.h1': "Juga a tennis taula<br>al cor de Gràcia",
      'hero.p': "Entrenaments per a tots els nivells, de l'iniciació a la competició, i equips competint a les diferents lligues (catalanes i estatals).",

      'xifres.eyebrow': 'LLUÏSOS EN XIFRES',
      'xifres.title': 'Un club que no para de créixer',
      'stat1': 'anys de trajectòria de Lluïsos de Gràcia',
      'stat2': 'equips federats',
      'stat3': 'socis',
      'stat4': 'participacions en lligues i competicions cada temporada',
      'stat5': 'infants als nostres campus cada estiu',

      'club.eyebrow': 'EL CLUB',
      'club.title': 'Entrenar, competir i fer colla',
      'pillar1.title': 'Entrenaments',
      'pillar1.body': 'Grups per nivell de dilluns a divendres, amb entrenadors del club.',
      'pillar2.title': 'Competició',
      'pillar2.body': "Equips a la Lliga Sènior, la Lliga de Veterans, la Copa Catalana i els Equips Estatals (equips masculins i femenins).",
      'pillar3.title': 'Comunitat',
      'pillar3.body': "La secció de tennis taula de l'associació Lluïsos de Gràcia: jugadors de totes les edats i nivells que comparteixen sala, entrenaments i equips.",

      'timeline.title': 'La nostra història',
      'milestone1.strong': "Neix l'escola",
      'milestone1.p': "Un grup reduït de nens i nenes comença a entrenar sota la direcció tècnica d'en Fabio, que encara forma part de l'equip tècnic avui.",
      'milestone2.year': 'Escolar',
      'milestone2.strong': 'Competicions escolars i Circuit Promeses',
      'milestone2.p': 'Els primers anys es limiten a les competicions escolars i al Circuit Promeses, centrat en categories per edats i generalment no federades.',
      'milestone3.year': 'Provincial',
      'milestone3.strong': 'Obrim la porta a les lligues provincials',
      'milestone3.p': 'Comença una cursa de fons que portarà diversos podis en campionats de Catalunya i en competicions estatals.',
      'milestone4.year': 'Avui',
      'milestone4.strong': "Divisió d'Honor i aposta pel femení",
      'milestone4.p': "Ascens del primer equip a la Divisió d'Honor estatal i, ara, l'obertura d'una nova etapa a les lligues nacionals femenines.",

      'entity.eyebrow': 'DES DE 1855',
      'entity.p1': "L'ETT forma part de Lluïsos de Gràcia, una associació sociocultural i esportiva sense ànim de lucre fundada a la Vila de Gràcia, declarada entitat d'utilitat pública des del 2009.",
      'entity.p2': "Fidels als valors de l'entitat, sempre hem obert les portes a tothom que vulgui jugar, amb independència de l'edat o del nivell de competitivitat.",

      'team.title1': 'La junta',
      'team.body1': "Una colla de voluntaris, alguns de fa anys i altres de nou, que es reparteixen la tresoreria, la compra i el manteniment del material, la gestió d'esdeveniments interns i les xarxes socials, entre moltes altres tasques. Actualment en formen part 11 persones, i la porta sempre és oberta a qui vulgui participar-hi.",
      'team.title2': 'Equip tècnic',
      'team.body2': "12 entrenadors i entrenadores s'encarreguen dels grups de totes les edats i nivells, molts d'ells formats al mateix club. Sempre afavorim que les noves generacions amb ganes de fer-ho s'hi puguin anar incorporant.",

      'valors.eyebrow': 'ELS NOSTRES VALORS',
      'valors.title': 'Més enllà de guanyar',
      'card1.title': 'Participar i millorar, per sobre de guanyar',
      'card1.body': "Donem tant o més valor a l'esforç i a la millora constant que al resultat. Volem jugadors que es presentin a competir, que participin i que vagin creixent partit a partit, sigui quin sigui el nivell del rival o del marcador.",
      'card2.title': 'Un espai per a tothom',
      'card2.body': "Obrim les portes a tothom que vulgui formar-ne part, independentment de l'edat i del nivell, més o menys competitiu. Hi ha lloc tant per qui vol competir com per qui només vol entrenar per aprendre i divertir-se.",
      'card3.title': 'Fet a casa',
      'card3.body': "Som un club on es creix i es fa créixer. Des dels entrenadors fins al primer equip de Divisió d'Honor, ens enorgulleix que la majoria s'hagin format i hagin progressat a casa nostra. I sempre amb les portes obertes a tothom que vingui d'altres llocs amb ganes de sumar-s'hi i créixer amb nosaltres.",
      'card4.title': 'Fair play i respecte',
      'card4.body': 'Competir és donar el millor de nosaltres mateixos, sense perdre mai el respecte pels altres. Volem ser bons rivals: jugadors i equips que competeixen netament, respecten les decisions arbitrals i reconeixen el mèrit i el nivell del contrincant.',

      'patro.eyebrow': 'PATROCINADORS',
      'patro.title': 'Empreses que ens acompanyen',
      'sponsor.alt': 'Daruma — Serveis lingüístics i traducció',

      'footer.tagline': 'Secció de Tennis Taula',
      'footer.sponsorCta': 'Ets una empresa i vols col·laborar amb el club? Escriu-nos',
      'footer.bottom': '© Lluïsos de Gràcia · Secció de Tennis Taula, des de 2008',

      'meta.title': 'Lluïsos de Gràcia · Tennis Taula',
      'meta.description': 'Club de tennis taula a Gràcia, Barcelona. Entrenaments per a tots els nivells i equips a les lligues catalanes i estatals.'
    },
    en: {
      'nav.club': 'The club',
      'nav.valors': 'Values',
      'nav.patrocinadors': 'Sponsors',

      'hero.eyebrow': 'TABLE TENNIS CLUB · GRÀCIA, BARCELONA',
      'hero.h1': "Play table tennis<br>in the heart of Gràcia",
      'hero.p': "Training for every level, from first steps to competition, with teams playing across the Catalan and Spanish leagues.",

      'xifres.eyebrow': 'LLUÏSOS IN NUMBERS',
      'xifres.title': 'A club that keeps growing',
      'stat1': 'years of Lluïsos de Gràcia history',
      'stat2': 'federated teams',
      'stat3': 'members',
      'stat4': 'league and competition entries every season',
      'stat5': 'children at our camps every summer',

      'club.eyebrow': 'THE CLUB',
      'club.title': 'Train, compete and build friendships',
      'pillar1.title': 'Training',
      'pillar1.body': "Level-based groups Monday to Friday, with the club's own coaches.",
      'pillar2.title': 'Competition',
      'pillar2.body': "Teams in the Senior League, the Veterans League, the Copa Catalana and the National Teams (men's and women's).",
      'pillar3.title': 'Community',
      'pillar3.body': "The table tennis section of the Lluïsos de Gràcia association: players of every age and level sharing a hall, training sessions and teams.",

      'timeline.title': 'Our history',
      'milestone1.strong': 'The school is born',
      'milestone1.p': "A small group of children starts training under Fabio's technical direction — he's still part of the coaching staff today.",
      'milestone2.year': 'School',
      'milestone2.strong': 'School competitions and Circuit Promeses',
      'milestone2.p': "The first years are limited to school competitions and the Circuit Promeses, an age-category circuit that's mostly non-federated.",
      'milestone3.year': 'Provincial',
      'milestone3.strong': 'We open the door to the provincial leagues',
      'milestone3.p': "It's the start of a long climb that will bring podium finishes at Catalan championships and national competitions.",
      'milestone4.year': 'Today',
      'milestone4.strong': "Divisió d'Honor and a push for women's table tennis",
      'milestone4.p': "The first team's promotion to the national Divisió d'Honor and, now, a new chapter opening in the women's national leagues.",

      'entity.eyebrow': 'SINCE 1855',
      'entity.p1': "The ETT is part of Lluïsos de Gràcia, a non-profit sociocultural and sports association founded in the Vila de Gràcia, declared a public-interest entity since 2009.",
      'entity.p2': "True to the entity's values, we've always opened our doors to anyone who wants to play, regardless of age or competitive level.",

      'team.title1': 'The board',
      'team.body1': "A group of volunteers, some long-standing and others new, who share the treasury, buying and maintaining equipment, running internal events, social media and many other tasks. 11 people currently make up the board, and the door is always open to anyone who wants to get involved.",
      'team.title2': 'Coaching staff',
      'team.body2': "12 coaches run the groups across every age and level, many of them trained at the club itself. We always make room for new generations who want to join the coaching staff.",

      'valors.eyebrow': 'OUR VALUES',
      'valors.title': 'Beyond winning',
      'card1.title': 'Taking part and improving, above winning',
      'card1.body': "We value effort and steady improvement as much as, or more than, the result. We want players who show up to compete, take part, and keep growing match after match, whatever the level of the rival or the scoreline.",
      'card2.title': 'A place for everyone',
      'card2.body': "We open our doors to anyone who wants to join, regardless of age or how competitive they are. There's room both for those who want to compete and for those who just want to train, learn and have fun.",
      'card3.title': 'Homegrown',
      'card3.body': "We're a club where people grow, and where we help them grow. From the coaches to the Divisió d'Honor first team, we're proud that most of them trained and progressed right here. And our doors are always open to anyone coming from elsewhere who wants to join in and grow with us.",
      'card4.title': 'Fair play and respect',
      'card4.body': "Competing means giving our best without ever losing respect for others. We want to be good rivals: players and teams who compete cleanly, respect the referee's decisions, and recognise the merit and level of their opponents.",

      'patro.eyebrow': 'SPONSORS',
      'patro.title': 'Companies by our side',
      'sponsor.alt': 'Daruma — Language and translation services',

      'footer.tagline': 'Table Tennis Section',
      'footer.sponsorCta': 'Are you a business interested in partnering with the club? Get in touch',
      'footer.bottom': '© Lluïsos de Gràcia · Table Tennis Section, since 2008',

      'meta.title': 'Lluïsos de Gràcia · Table Tennis',
      'meta.description': 'Table tennis club in Gràcia, Barcelona. Training for every level, with teams competing in the Catalan and Spanish leagues.'
    }
  };

  var STORAGE_KEY = 'lldg-lang';
  var metaDescription = document.querySelector('meta[data-i18n-content]');

  function applyLang(lang) {
    var dict = translations[lang] || translations.ca;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key] != null) el.innerHTML = dict[key];
    });

    document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-alt');
      if (dict[key] != null) el.setAttribute('alt', dict[key]);
    });

    if (metaDescription) {
      var key = metaDescription.getAttribute('data-i18n-content');
      if (dict[key] != null) metaDescription.setAttribute('content', dict[key]);
    }

    document.documentElement.lang = lang;
    document.querySelectorAll('.langBtn').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* ignore */ }
  }

  document.querySelectorAll('.langBtn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      applyLang(btn.getAttribute('data-lang'));
    });
  });

  var saved = null;
  try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) { /* ignore */ }
  if (saved === 'en' || saved === 'ca') applyLang(saved);
})();
