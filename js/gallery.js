// image_window = window.open("", "image_window", "width=200, height=100");

var previ = 0;
var current_category = '';

var gallery=`
<gallery>

    <image>
        <filename>potm2405b</filename>
        <title>NGC 4449</title>
        <object>NGC 4449</object>
        <description>
        Featured in this new image from the NASA/ESA/CSA James Webb Space Telescope is the dwarf galaxy NGC 4449. This galaxy, also known as Caldwell 21, resides roughly 12.5 million light-years away in the constellation Canes Venatici. It is part of the M94 galaxy group, which lies close to the Local Group that hosts our Milky Way.

NGC 4449 has been forming stars for several billion years, but it is currently experiencing a period of star formation at a much higher rate than in the past. Such unusually explosive and intense star formation activity is called a starburst and for that reason NGC 4449 is known as a starburst galaxy. In fact, at the current rate of star formation, the gas supply that feeds the production of stars would only last for another billion years or so. Starbursts usually occur in the central regions of galaxies, but NGC 4449 displays more widespread star formation activity, and the very youngest stars are observed both in the nucleus and in streams surrounding the galaxy. It's likely that the current widespread starburst was triggered by interaction or merging with a smaller companion; indeed, astronomers think NGC 4449's star formation has been influenced by interactions with several of its neighbours.

The image was captured by Webb's NIRCam, or Near-InfraRed Camera. In this image, the bright red spots correspond to regions rich in hydrogen that have been ionised by the radiation from the newly formed stars. The diffuse gradient of blue light around the central region shows the distribution of older stars. The compact light-blue regions within the red ionised gas, mostly concentrated in the galaxy's outer region, show the distribution of young star clusters.
        </description>
        <credit>ESA/Webb, NASA and CSA, A. Adamo (Stockholm University) and the FEAST JWST team </credit>
    </image>

    <image>
        <filename>potm2404b</filename>
        <title> Star-studded cluster</title>
        <object>NGC 6440</object>
        <description>
        This new image from the NASA/ESA/CSA James Webb Space Telescope features NGC 6440, a globular cluster that resides roughly 28 000 light-years from Earth in the constellation Sagittarius. The object was first discovered by William Herschel in May of 1786.

Globular clusters like NGC 6440 are roughly spherical, tightly packed, collections of old stars bound together by gravity. They can be found throughout galaxies, but often live on the outskirts. They hold hundreds of thousands to millions of stars that are on average about one light-year apart, but they can be as close together as the size of our Solar System. NGC 6440 is known to be a high-mass and metal-rich cluster that formed and is orbiting within the Galactic bulge, which is a dense, near-spherical region of old stars in the inner part of the Milky Way.

This image was obtained with 2023 data from Webb's Near-InfraRed Camera (NIRCam) as part of an observation programme to explore the stars in the cluster and to investigate details of the cluster's pulsars. A pulsar is a highly magnetised, rotating neutron star that emits a beam of electromagnetic radiation from their magnetic poles. To us, that beam appears as a short burst or pulse as the star rotates. Pulsars spin extremely fast. Astronomers have clocked the fastest pulsars at more than 716 rotations per second, but a pulsar could theoretically rotate as fast as 1500 rotations per second before slowly losing energy or breaking apart.

The new data obtained by the science team indicate the first evidence from Webb observations of abundance variations of helium and oxygen in stars in a globular cluster. These results open the window for future, in-depth investigations of other clusters in the Galactic bulge, which were previously infeasible with other telescope facilities given the significant crowding of stars in the cluster and the strong reddening caused by interstellar dust between the cluster and Earth.
        </description>
        <credit> ESA/Webb, NASA and CSA, P. Freire Acknowledgement: M. Cadelano and C. Pallanca </credit>
    </image>



    <image>
        <filename>potm2403b</filename>
        <title>I Zwicky 18</title>
        <object>I Zwicky 18</object>
        <description>
        The NASA/ESA/CSA James Webb Space Telescope has captured a spectacular view of the galaxy  I Zwicky 18 (I Zw 18) in this new image. The galaxy was first identified by Swiss astronomer Fritz Zwicky in the 1930's and resides roughly 59 million light-years from Earth.

This galaxy has gone through several sudden bursts of star formation. This galaxy is typical of the kinds of galaxies that inhabited the early Universe and it is classified as a dwarf irregular galaxy (much smaller than our Milky Way).

The new observations from Webb have revealed the detection of a set of candidate dusty evolved stars. It also provides details about Zw 18's two dominant star-forming regions. Webb's new data suggest that the dominant bursts of star formation in these regions occurred at different times. The strongest starburst activity is now believed to have happened more recently in the northwest lobe as compared to the galaxy's southeast lobe. This is based on the relative populations of younger versus older stars found in each of the lobes.
        </description>
        <credit>ESA/Webb, NASA, CSA, A. Hirschauer, M. Meixner et al. </credit>
    </image>

    <image>
        <filename>weic2408a</filename>
        <title>NGC 5468</title>
        <object>NGC 5468</object>
        <description>
        This image of NGC 5468, a galaxy located about 130 million light-years from Earth, combines data from the Hubble and James Webb space telescopes. This is the most distant galaxy in which Hubble has identified Cepheid variable stars. These are important milepost markers for measuring the expansion rate of the Universe. The distance calculated from Cepheids has been cross-correlated with a Type Ia supernova in the galaxy. Type Ia supernovae are so bright they are used to measure cosmic distances far beyond the range of the Cepheids, extending measurements of the Universe's expansion rate deeper into space.
        </description>
        <credit> NASA, ESA, CSA, STScI, A. Riess (JHU/STScI) </credit>
    </image>





    <image>
        <filename>weic2407a</filename>
        <title>NGC 604</title>
        <object>NGC 604</object>
        <description>
        This image from the NASA/ESA/CSA James Webb Space Telescope's NIRCam (Near-Infrared Camera) of star-forming region NGC 604 shows how stellar winds from bright, hot young stars carve out cavities in surrounding gas and dust.

The bright orange streaks in this image signify the presence of carbon-based molecules known as polycyclic aromatic hydrocarbons, or PAHs. As you travel further from the immediate cavities of dust where the star is forming, the deeper red signifies molecular hydrogen. This cooler gas is a prime environment for star formation. Ionised hydrogen from ultraviolet radiation appears as a white and blue ghostly glow.

NGC 604 is located in the Triangulum Galaxy (M33), 2.73 million light-years away from Earth. It provides an opportunity for astronomers to study a high concentration of very young, massive stars in a nearby region.
        </description>
        <credit> NASA, ESA, CSA, STScI</credit>
    </image>





    <image>
        <filename>weic2407e</filename>
        <title>NGC 604</title>
        <object>NGC 604</object>
        <description>
        This image from the NASA/ESA/CSA James Webb Space Telescope's MIRI (Mid-Infrared Instrument) of star-forming region NGC 604 shows how large clouds of cooler gas and dust glow at mid-infrared wavelengths. This region is a hotbed of star formation and home to more than 200 of the hottest, most massive kinds of stars, all in the early stages of their lives.

In the MIRI view of NGC 604, there are noticeably fewer stars than Webb's NIRCam image. This is because hot stars emit much less light at these wavelengths. Some of the stars seen in this image are red supergiants — stars that are cool but very large, hundreds of times the diameter of our Sun. The blue tendrils of material signify the presence of polycyclic aromatic hydrocarbons, or PAHs.
        </description>
        <credit>NASA, ESA, CSA, STScI </credit>
    </image>





    <image>
        <filename>potm2402a</filename>
        <title>NGC 1559</title>
        <object>NGC 1559</object>
        <description>
        This image features the barred spiral galaxy galaxy NGC 1559 as seen by the NASA/ESA/CSA James Webb Space Telescope. The galaxy hosts a visible central region with a distinct open pattern in the loosely-wound spiral arms. NGC 1559 resides approximately 35 million light-years away in the little-observed southern constellation Reticulum (The Reticule).

The data featured in this portrait make use of two of Webb's instruments: the Mid-InfraRed Instrument (MIRI) and Near-InfraRed Camera (NIRCam). Here MIRI captures the glow of interstellar dust grains, which trace out the interstellar medium, the fuel for future star formation. NIRCam shows the light from stars, even young stars hidden behind prodigious amounts of dust. NIRCam also captures emission from ionised nebulae around young stars.

The data were collected by the PHANGS team as part of an observing programme in which Webb will observe 55 galaxies that have also been mapped by the Atacama Large Millimeter/submillimeter Array (ALMA) radio telescope, the NASA/ESA Hubble Space Telescope and more. By combining Webb's unprecedented view of the dust and stars with data from these other facilities, the team aims to obtain a new, highly detailed view of how stars are born, live, and die in galaxies across the Universe. This is also a Treasury programme, which means that the data will have no exclusive access period and so the scientific community (and others, including the general public) can access the data immediately. This has the advantage that more research can be done with the data more quickly.

NGC 1559 has massive spiral arms that abound with star formation, and it is receding from us at a speed of about 1300 kilometres per second. Although NGC 1559 appears to sit near one of our nearest neighbours in the sky — the Large Magellanic Cloud (LMC) - this is just a trick of perspective. In reality, NGC 1559 is physically nowhere near the LMC in space; in fact it truly is a loner, lacking the company of any nearby galaxies or membership of any galaxy cluster.

NGC 1559 may be alone in space, but with Webb we are admiring from far away.
        </description>
        <credit>ESA/Webb, NASA and CSA, A. Leroy, J. Lee and the PHANGS Team</credit>
    </image>




    <image>
        <filename>weic2403h</filename>
        <title>NGC 1433</title>
        <object>NGC 1433</object>
        <description>
        This spiral galaxy was observed as part of the Physics at High Angular resolution in Nearby GalaxieS (PHANGS) program, a large project that includes observations from several space- and ground-based telescopes of many galaxies to help researchers study all phases of the star formation cycle, from the formation of stars within dusty gas clouds to the energy released in the process that creates the intricate structures revealed by Webb's new images.

NGC 1433 is 46 million light-years away in the constellation Horologium.


        </description>
        <credit> </credit>
    </image>

    
    <image>
        <filename>weic2403i</filename>
        <title>NGC 1512</title>
        <object>NGC 1512</object>
        <description>
        This spiral galaxy was observed as part of the Physics at High Angular resolution in Nearby GalaxieS (PHANGS) program, a large project that includes observations from several space- and ground-based telescopes of many galaxies to help researchers study all phases of the star formation cycle, from the formation of stars within dusty gas clouds to the energy released in the process that creates the intricate structures revealed by Webb's new images.

NGC 1512 is 30 million light-years away in the constellation Horologium.
        </description>
        <credit> </credit>
    </image>




    <image>
        <filename>potm2401a</filename>
        <title>A massive cluster is born </title>
        <object>N79</object>
        <description>
        This image from the NASA/ESA/CSA James Webb Space Telescope features an H II region in the Large Magellanic Cloud (LMC), a satellite galaxy of our Milky Way. This nebula, known as N79, is a region of interstellar atomic hydrogen that is ionised, captured here by Webb's Mid-InfraRed Instrument (MIRI).

N79 is a massive star-forming complex spanning roughly 1630 light-years in the generally unexplored southwest region of the LMC. N79 is typically regarded as a younger version of 30 Doradus (also known as the Tarantula Nebula), another of Webb's recent targets. Research suggests that N79 has a star formation efficiency exceeding that of 30 Doradus by a factor of two over the past 500 000 years. 

This particular image centres on one of the three giant molecular cloud complexes, dubbed N79 South (S1 for short). The distinct ‘starburst' pattern surrounding this bright object is a series of diffraction spikes. All telescopes which use a mirror to collect light, as Webb does, have this form of artifact which arises from the design of the telescope. In Webb's case, the six largest starburst spikes appear because of the hexagonal symmetry of Webb's 18 primary mirror segments. Patterns like these are only noticeable around very bright, compact objects, where all the light comes from the same place. Most galaxies, even though they appear very small to our eyes, are darker and more spread out than a single star, and therefore do not show this pattern.

At the longer wavelengths of light captured by MIRI, Webb's view of N79 showcases the region's glowing gas and dust. This is because mid-infrared light is able to reveal what is happening deeper inside the clouds (while shorter wavelengths of light would be absorbed or scattered by dust grains in the nebula). Some still-embedded protostars also appear in this field.

Star-forming regions such as this are of interest to astronomers because their chemical composition is similar to that of the gigantic star-forming regions observed when the Universe was only a few billion years old and star formation was at its peak. Star-forming regions in our Milky Way galaxy are not producing stars at the same furious rate as N79, and have a different chemical composition. Webb is now providing astronomers the opportunity to compare and contrast observations of star formation in N79 with the telescope's deep observations of distant galaxies in the early Universe.

These observations of N79 are part of a Webb programme that is studying the evolution of the circumstellar discs and envelopes of forming stars over a wide range in mass and at different evolutionary stages. Webb's sensitivity will enable scientists to detect for the first time the planet-forming dust discs around stars of similar mass to that of our Sun at the distance of the LMC.

This image includes 7.7-micron light shown in blue, 10 microns in cyan, 15 microns in yellow, and 21 microns in red (770W, 1000W, 1500W, and 2100W filters, respectively).
        </description>
        <credit>ESA/Webb, NASA and CSA, O. Nayak, M. Meixner </credit>
    </image>







    <image>
        <filename>supernova-encore3</filename>
        <title>Webb spots a second lensed supernova in a distant galaxy</title>
        <object>MACS J0138.0-2155</object>
        <description>
        In November 2023, the NASA/ESA/CSA James Webb Space Telescope observed a massive cluster of galaxies named MACS J0138.0-2155. Through an effect called gravitational lensing, first predicted by Albert Einstein, a distant galaxy named MRG-M0138 appears warped by the powerful gravity of the intervening galaxy cluster. In addition to warping and magnifying the distant galaxy, the gravitational lensing effect caused by MACS J0138 produces five different images of MRG-M0138.

In 2019, astronomers announced the surprising find that a stellar explosion, or supernova, had occurred within MRG-M0138, as seen in images from the NASA/ESA Hubble Space Telescope taken in 2016. When another group of astronomers examined the 2023 Webb images, they were astonished to find that seven years later, the same galaxy is home to a second supernova. 

Two images of the supernova are seen in the Webb NIRCam (Near-Infrared Camera) image above (see the annotated image that highlights these features version here), but an additional supernova image is expected to become visible around 2035.

In this image blue represents light at 1.15 and 1.5 microns (F115W+F150), green is 2.0 and 2.77 microns (F200W+277W), and red is 3.56 and 4.44 microns (F356W + F444W).


        </description>
        <credit>NASA, ESA, CSA, STScI, Justin Pierel (STScI) and Andrew Newman (Carnegie Institution for Science) </credit>
    </image>

    <image>
        <filename>potm2312a</filename>
        <title>Galactic gathering </title>
        <object>SDSS J1226+2152</object>
        <description>
        The vast galaxy cluster SDSS J1226+2152 in the constellation Coma Berenices is distorting the images of distant background galaxies into streaks and smears of light in this image from the NASA/ESA/CSA James Webb Space Telescope. This is a spectacular example of gravitational lensing, a phenomenon which occurs when a massive celestial object such as a galaxy cluster deforms spacetime and causes the path of light from more distant galaxies to be deflected, almost as if a monumental lens was redirecting it. This image is from a set of early science observations with Webb.

One of the most notable lensed galaxies in this rich field is named SGAS J12265.3+215220. In this image, it's the innermost lensed galaxy, just above and to the right of the central galaxy. This lies far beyond the foreground cluster in distance, giving us a view into the galaxy roughly two billion years after the big bang. Astronomers are now using this eagerly-awaited hoard of bright, gravitationally-lensed galaxies from Webb to explore star formation in distant galaxies.

Just like their optical namesakes, gravitational lenses can magnify as well as distort distant galaxies. This allows astronomers to observe the finer details of galaxies that would usually be too distant to clearly resolve. In the case of SGAS J122651.3+215220, the combination of gravitational lensing and Webb's unprecedented observational capabilities will allow astronomers to measure where, and how fast, stars are forming and also to gain an insight into the environments which support star formation in lensed galaxies.

Amid this spectacular display of gravitational lensing, a menagerie of spiral and elliptical galaxies in all shapes and sizes surround the galaxy cluster. Webb's sensitive infrared instruments have proven prodigious in picking out distant galaxies from the darkness of space. None of the tiny pinpricks in the patch of sky captured here is a star: each one is a galaxy. The variety of colours of the small, dim galaxies gives us hints at what we are seeing: many of the paler white galaxies will date back to the period of intense star formation known as cosmic noon, some two to three billion years after the big bang, while the few small orange and red systems are probably from even earlier in the Universe's history.
        </description>
        <credit>ESA/Webb, NASA and CSA, J. Rigby and the JWST TEMPLATES team</credit>
    </image>

    
    <image>
        <filename>weic2332b</filename>
        <title>Widefield view of Uranus</title>
        <object>Uranus</object>
        <description>
        This image of Uranus from NIRCam (Near-Infrared Camera) on the NASA/ESA/CSA James Webb Space Telescope shows the planet and its rings in new clarity. The planet's seasonal north polar cap gleams in a bright white, and Webb's exquisite sensitivity resolves Uranus' dim inner and outer rings, including the Zeta ring—the extremely faint and diffuse ring closest to the planet.

This Webb image also shows 14 of the planet's 27 moons: Oberon, Titania, Umbriel, Juliet, Perdita, Rosalind, Puck, Belinda, Desdemona, Cressida, Ariel, Miranda, Bianca, and Portia.

One day on Uranus is about 17 hours, so the planet's rotation is relatively quick. This makes it supremely difficult for observatories with a sharp eye like Webb to capture one simple image of the entire planet – storms and other atmospheric features, and the planet's moons, move visibly within minutes. This image combines several longer and shorter exposures of this dynamic system to correct for those slight changes throughout the observing time.

Webb's extreme sensitivity also picks up a smattering of background galaxies—most appear as orange smudges, and there are two larger, fuzzy white galaxies to the right of the planet in this field of view.
        </description>
        <credit>NASA, ESA, CSA, STScI</credit>
    </image>




    <image>
        <filename>weic2332a</filename>
        <title>Close-up view of Uranus</title>
        <object>Uranus</object>
        <description>
        This image of Uranus from NIRCam (Near-Infrared Camera) on the NASA/ESA/CSA James Webb Space Telescope shows the planet and its rings in new clarity. The Webb image exquisitely captures Uranus's seasonal north polar cap, including the bright, white, inner cap and the dark lane in the bottom of the polar cap. Uranus' dim inner and outer rings are also visible in this image, including the elusive Zeta ring—the extremely faint and diffuse ring closest to the planet.

This Webb image also shows 9 of the planet's 27 moons. They are the blue dots that surround the planet's rings. Clockwise starting at 2 o'clock, they are: Rosalind, Puck, Belinda, Desdemona, Cressida, Bianca, Portia, Juliet, and Perdita. The orbits of these moons share the 98-degree tilt of their parent planet relative to the plane of the solar system.

One day on Uranus is about 17 hours, so the planet's rotation is relatively quick. This makes it supremely difficult for observatories with a sharp eye like Webb to capture one simple image of the entire planet – storms and other atmospheric features, and the planet's moons, move visibly within minutes. This image combines several longer and shorter exposures of this dynamic system to correct for those slight changes throughout the observing time
        </description>
        <credit>NASA, ESA, CSA, STScI</credit>
    </image>




    <image>
        <filename>weic2331a</filename>
        <title>Star Cluster IC 348</title>
        <object>IC 348</object>
        <description>
        This image from the NIRCam (Near-Infrared Camera) instrument on the NASA/ESA/CSA James Webb Space Telescope shows the central portion of the star cluster IC 348. Astronomers combed the cluster in search of tiny, free-floating brown dwarfs: objects too small to be stars but larger than most planets. They found three brown dwarfs that are less than eight times the mass of Jupiter. The smallest weighs just three to four times as much as Jupiter, challenging theories for star formation.

The wispy curtains filling the image are interstellar material reflecting the light from the cluster's stars — what is known as a reflection nebula. The material also includes carbon-containing molecules known as polycyclic aromatic hydrocarbons, or PAHs. The bright star closest to the centre of the frame is actually a pair of type B stars in a binary system, the most massive stars in the cluster. Winds from these stars may help sculpt the large loop seen on the right side of the field of view.
        </description>
        <credit>NASA, ESA, CSA, STScI, and K. Luhman (Penn State University) and C. Alves de Oliveira (European Space Agency)</credit>
    </image>

    <image>
        <filename>weic2330e</filename>
        <title>Supernova Remnant</title>
        <object>Cassiopeia A</object>
        <description>
        A new high-definition image from the NASA/ESA/CSA James Webb Space Telescope's NIRCam (Near-Infrared Camera) release in December 2023 unveils intricate details of supernova remnant Cassiopeia A (Cas A), and shows the expanding shell of material slamming into the gas shed by the star before it exploded.

The most noticeable colours in Webb's newest image are clumps of bright orange and light pink that make up the inner shell of the supernova remnant. These tiny knots of gas, comprised of sulphur, oxygen, argon, and neon from the star itself, are only detectable by NIRCam's exquisite resolution, and give researchers a hint at how the dying star shattered like glass when it exploded.

The outskirts of the main inner shell looks like smoke from a campfire. This marks where ejected material from the exploded star is ramming into surrounding circumstellar material. Researchers say this white colour is light from synchrotron radiation, which is generated by charged particles travelling at extremely high speeds and spiralling around magnetic field lines.

There are also several light echoes visible in this image, most notably in the bottom right corner. This is where light from the star's long-ago explosion has reached, and is warming, distant dust, which glows as it cools down.
        </description>
        <credit>NASA, ESA, CSA, STScI, D. Milisavljevic (Purdue University), T. Temim (Princeton University), I. De Looze (University of Gent)</credit>
    </image>

    
    <image>
        <filename>potm2311a</filename>
        <title>A prominent protostar in Perseus</title>
        
        <description>
        This new Picture of the Month from the NASA/ESA/CSA James Webb Space Telescope reveals intricate details of the Herbig Haro object number 797 (HH 797). Herbig-Haro objects are luminous regions surrounding newborn stars (known as protostars), and are formed when stellar winds or jets of gas spewing from these newborn stars form shockwaves colliding with nearby gas and dust at high speeds. HH 797, which dominates the lower half of this image, is located close to the young open star cluster IC 348, near the eastern edge of the Perseus dark cloud complex. The bright infrared objects in the upper portion of the image are thought to host two further protostars.

This image was captured with Webb's Near-InfraRed Camera (NIRCam). Infrared imaging is a powerful way to study newborn stars and their outflows, because the youngest stars are invariably still embedded within the gas and dust from which they are formed. The infrared emission of the star's outflows penetrates the obscuring gas and dust, making Herbig-Haro objects ideal for observation with Webb's sensitive infrared instruments. Molecules excited by the turbulent conditions, including molecular hydrogen and carbon monoxide, emit infrared light that Webb can collect to visualise the structure of the outflows. NIRCam is particularly good at observing the hot (thousands of degree Celsius) molecules that are excited as a result of shocks.

Using ground-based observations, researchers have previously found that for cold molecular gas associated with HH 797, most of the red-shifted gas (moving away from us) is found to the south (bottom right), while the blue-shifted gas (moving towards us) is to the north (bottom left). A gradient was also found across the outflow, such that at a given distance from the young central star, the velocity of the gas near the eastern edge of the jet is more red-shifted than that of the gas on the western edge. Astronomers in the past thought this was due to the outflow's rotation. In this higher resolution Webb image, however, we can see that what was thought to be one outflow is in fact made up of two almost parallel outflows with their own separate series of shocks (which explains the velocity asymmetries). The source, located in the small dark region (bottom right of centre), and already known from previous observations, is therefore not a single but a double star. Each star is producing its own dramatic outflow. Other outflows are also seen in this image, including one from the protostar in the top right of centre along with its illuminated cavity walls.

HH 797 resides directly north of HH 211 (separated by approximately 30 arcseconds), which was the feature of a Webb image release in September 2023.
        </description>
        <credit>ESA/Webb, NASA and CSA, T. Ray (Dublin Institute for Advanced Studies)</credit>
    </image>




    <image>
        <filename>weic2328a</filename>
        <title>Sagittarius C</title>
        <object>Sagittarius C</object>
        <description>
        The full view of the NASA/ESA/CSA James Webb Space Telescope's NIRCam (Near-Infrared Camera) instrument reveals a 50 light-years-wide portion of the Milky Way's dense centre. An estimated 500,000 stars shine in this image of the Sagittarius C (Sgr C) region, along with some as-yet unidentified features. 

A vast region of ionised hydrogen, shown in cyan, wraps around an infrared-dark cloud, which is so dense that it blocks the light from distant stars behind it. Intriguing needle-like structures in the ionised hydrogen emission lack any uniform orientation. Researchers note the surprising extent of the ionised region, covering about 25 light-years. 

A cluster of protostars – stars that are still forming and gaining mass – are producing outflows that glow like a bonfire at the base of the large infrared-dark cloud, indicating that they are emerging from the cloud's protective cocoon and will soon join the ranks of the more mature stars around them. Smaller infrared-dark clouds dot the scene, appearing like holes in the starfield. 

Researchers say they have only begun to dig into the wealth of unprecedented high-resolution data that Webb has provided on this region, and many features bear detailed study. This includes the rose-coloured clouds on the right side of the image, which have never been seen in such detail.
        </description>
        <credit>NASA, ESA, CSA, STScI, S. Crowe (UVA)</credit>
    </image>




    <image>
        <filename>weic2327a</filename>
        <title>Galaxy cluster MACS0416</title>
        <object>MACS0416</object>
        <description>
        This panchromatic view of galaxy cluster MACS0416 was created by combining infrared observations from the NASA/ESA/CSA James Webb Space Telescope with visible-light data from the NASA/ESA Hubble Space Telescope. To make the image, in general the shortest wavelengths of light were colour-coded blue, the longest wavelengths red, and intermediate wavelengths green. The resulting wavelength coverage, from 0.4 to 5 microns, reveals a vivid landscape of galaxies that could be described as one of the most colourful views of the universe ever created.

MACS0416 is a galaxy cluster located about 4.3 billion light-years from Earth, meaning that the light from it that we see now left the cluster shortly after the formation of our Solar System. This cluster magnifies the light from more distant background galaxies through gravitational lensing. As a result, the research team has been able to identify magnified supernovae and even very highly magnified individual stars.

Those colours give clues to galaxy distances: the bluest galaxies are relatively nearby and often show intense star formation, as best detected by Hubble, while the redder galaxies tend to be more distant, or else contain copious amounts of dust, as best detected by Webb. The image reveals a wealth of details that it is only possible to capture by combining the power of both space telescopes.

In this image, blue represents data at wavelengths of 0.435, 0.606, 0.814, and 1.05 microns (Hubble filters F435W, F606W, F814W, and F105W). Green combines data at 0.90, 1.15, 1.5, 1.6, 2.0, and 2.77 microns (Hubble filter F160W and Webb filters F090W, F115W, F150W, F200W, and F277W). Red represents data at 3.56, 4.1, and 4.44 microns (Webb filters F356W, F410M and F444W).
        </description>
        <credit>NASA, ESA, CSA, STScI, J. Diego (Instituto de Física de Cantabria, Spain), J. D'Silva (U. Western Australia), A. Koekemoer (STScI), J. Summers and R. Windhorst (ASU), and H. Yan (U. Missouri)</credit>
    </image>

    <image>
        <filename>weic2326a</filename>
        <title>The Crab Nebula</title>
        <object>The Crab Nebula</object>
        <description>
        The NASA/ESA/CSA James Webb Space Telescope has gazed at the Crab Nebula in the search for answers about the supernova remnant's origins. Webb's NIRCam (Near-Infrared Camera) and MIRI (Mid-Infrared Instrument) have revealed new details in infrared light.

Similar to the Hubble optical wavelength image released in 2005, with Webb the remnant appears to consist of a crisp, cage-like structure of fluffy red-orange filaments of gas that trace doubly ionised sulphur (sulphur III). Within the remnant's interior, yellow-white and green fluffy ridges form large-scale loop-like structures, which represent areas where dust particles reside.

The area is composed of translucent, milky material. This material is emitting synchrotron radiation, which is emitted across the electromagnetic spectrum but becomes particularly vibrant thanks to Webb's sensitivity and spatial resolution. It is generated by particles accelerated to extremely high speeds as they wind around magnetic field lines. The synchrotron radiation can be traced throughout the majority of the Crab Nebula's interior.

Locate the wisps that follow a ripple-like pattern in the middle. In the centre of this ring-like structure is a bright white dot: a rapidly rotating neutron star. Further out from the core, follow the thin white ribbons of the radiation. The curvy wisps are closely grouped together, following different directions that mimic the structure of the pulsar's magnetic field. Note how certain gas filaments are bluer in colour. These areas contain singly ionised iron (iron II).
        </description>
        <credit>NASA, ESA, CSA, STScI, T. Temim (Princeton University)</credit>
    </image>

    
    <image>
        <filename>weic2324a</filename>
        <title>NGC 346</title>
        <object>NGC 346</object>
        <description>
        This new infrared image of NGC 346 from the NASA/ESA/CSA James Webb Space Telescope's Mid-Infrared Instrument (MIRI) traces emission from cool gas and dust. In this image blue represents silicates and sooty chemical molecules known as polycyclic aromatic hydrocarbons, or PAHs. More diffuse red emission shines from warm dust heated by the brightest and most massive stars in the heart of the region. Bright patches and filaments mark areas with abundant numbers of protostars. 

This image includes 7.7-micron light shown in blue, 10 microns in cyan, 11.3 microns in green, 15 microns in yellow, and 21 microns in red (770W, 1000W, 1130W, 1500W, and 2100W filters, respectively).
        </description>
        <credit>NASA, ESA, CSA, N. Habel (JPL), P. Kavanagh (Maynooth University)</credit>
    </image>

    <image>
        <filename>weic2323b</filename>
        <title>Europa</title>
        <object>Europa</object>
        <description>
        Webb's NIRCam (Near Infrared Camera) captured this picture of the surface of Jupiter's moon Europa. Webb identified carbon dioxide on the icy surface of Europa that likely originated in the moon's subsurface ocean. This discovery has important implications for the potential habitability of Europa's ocean. The moon appears mostly blue because it is brighter at shorter infrared wavelengths. The white features correspond with the chaos terrain Powys Regio (left) and Tara Regio (centre and right), which show enhanced carbon dioxide ice on the surface.
        </description>
        <credit>NASA, ESA, CSA, G. Villanueva (NASA/GSFC), S. Trumbo (Cornell Univ.), A. Pagan (STScI)</credit>
    </image>

    <image>
        <filename>weic2322a</filename>
        <title>Protostar</title>
        <object>HH 211</object>
        <description>
        Featured in this image from the NASA/ESA/CSA James Webb Space Telescope is Herbig-Haro 211 (HH 211), a bipolar jet travelling through interstellar space at supersonic speeds. At roughly 1,000 light-years away from Earth in the constellation Perseus, the object is one of the youngest and nearest protostellar outflows, making it an ideal target for Webb.

Herbig-Haro objects are luminous regions surrounding newborn stars, and are formed when stellar winds or jets of gas spewing from these newborn stars form shockwaves colliding with nearby gas and dust at high speeds. This spectacular image of HH 211 reveals an outflow from a Class 0 protostar, an infantile analogue of our Sun when it was no more than a few tens of thousands of years old and with a mass only 8% of the present-day Sun (it will eventually grow into a star like the Sun).

Infrared imaging is powerful in studying newborn stars and their outflows, because such stars are invariably still embedded within the gas from the molecular cloud in which they formed. The infrared emission of the star's outflows penetrates the obscuring gas and dust, making a Herbig-Haro object like HH 211 ideal for observation with Webb's sensitive infrared instruments. Molecules excited by the turbulent conditions, including molecular hydrogen, carbon monoxide and silicon monoxide, emit infrared light that Webb can collect to map out the structure of the outflows.

The image showcases a series of bow shocks to the southeast (lower-left) and northwest (upper-right) as well as the narrow bipolar jet that powers them in unprecedented detail — roughly 5 to 10 times higher spatial resolution than any previous images of HH 211. The inner jet is seen to “wiggle” with mirror symmetry on either side of the central protostar. This is in agreement with observations on smaller scales and suggests that the protostar may in fact be an unresolved binary star.
        </description>
        <credit>ESA/Webb, NASA, CSA, T. Ray (Dublin Institute for Advanced Studies)</credit>
    </image>

    <image>
        <filename>potm2308c</filename>
        <title>Grand design spiral</title>
        <object>M51</object>
        <description>
        The graceful winding arms of the grand-design spiral galaxy M51 stretch across this image from the NASA/ESA/CSA James Webb Space Telescope. Unlike the menagerie of weird and wonderful spiral galaxies with ragged or disrupted spiral arms, grand-design spiral galaxies boast prominent, well-developed spiral arms like the ones showcased in this image. This galactic portrait was captured by Webb's Mid-InfraRed Instrument (MIRI).

In this image the reprocessed stellar light by dust grains and molecules in the medium of the galaxy illuminate a dramatic filamentary medium. Empty cavities and bright filaments alternate and give the impression of ripples propagating from the spiral arms. The yellow compact regions indicate the newly formed star clusters in the galaxy.

M51 — also known as NGC 5194 — lies about 27 million light-years away from Earth in the constellation Canes Venatici, and is trapped in a tumultuous relationship with its near neighbour, the dwarf galaxy NGC 5195. The interaction between these two galaxies has made these galactic neighbours one of the better-studied galaxy pairs in the night sky. The gravitational influence of M51's smaller companion is thought to be partially responsible for the stately nature of the galaxy's prominent and distinct spiral arms. If you would like to learn more about this squabbling pair of galactic neighbours, you can explore earlier observations of M51 by the NASA/ESA Hubble Space Telescope here. 

This Webb observation of M51 is one of a series of observations collectively titled Feedback in Emerging extrAgalactic Star clusTers, or FEAST. The FEAST observations were designed to shed light on the interplay between stellar feedback and star formation in environments outside of our own galaxy, the Milky Way. Stellar feedback is the term used to describe the outpouring of energy from stars into the environments which form them, and is a crucial process in determining the rates at which stars form. Understanding stellar feedback is vital to building accurate universal models of star formation.

The aim of the FEAST observations is to discover and study stellar nurseries in galaxies beyond our own Milky Way. Before Webb became operative, other observatories such as the Atacama Large Millimetre Array in the Chilean desert and Hubble have given us a glimpse of star formation either at the onset (tracing the dense gas and dust clouds where stars will form) or after the stars have destroyed with their energy their natal gas and dust clouds. Webb is opening a new window into the early stages of star formation and stellar light, as well as the energy reprocessing of gas and dust. Scientists are seeing star clusters emerging from their natal cloud in galaxies beyond our local group for the first time. They will also be able to measure how long it takes for these stars to pollute with newly formed metals and to clean out the gas (these time scales are different from galaxy to galaxy). By studying these processes, we will better understand how the star formation cycle and metal enrichment are regulated within galaxies as well as what are the time scales for planets and brown dwarfs to form. Once dust and gas is removed from the newly formed stars, there is no material left to form planets.
        
        </description>
        <credit>ESA/Webb, NASA and CSA, A. Adamo (Stockholm University) and the FEAST JWST team</credit>
    </image>

    
    <image>
        <filename>weic2320c</filename>
        <title>
        Ring Nebula 
        </title>
        <object>Ring Nebula (M57)</object>
        
        <description>
The NASA/ESA/CSA James Webb Space Telescope has observed the well-known Ring Nebula with unprecedented detail. Formed by a star throwing off its outer layers as it runs out of fuel, the Ring Nebula is an archetypal planetary nebula. Also known as M57 and NGC 6720, it is both relatively close to Earth at roughly 2,500 light-years away.

This new image provides unprecedented spatial resolution and spectral sensitivity. In particular, Webb's MIRI (Mid-InfraRed Instrument) reveals particular details in the concentric features in the outer regions of the nebulae's ring (right).

There are some 20,000 dense globules in the nebula, which are rich in molecular hydrogen. In contrast, the inner region shows very hot gas. The main shell contains a thin ring of enhanced emission from
carbon-based molecules known as polycyclic aromatic hydrocarbons (PAHs). Roughly ten concentric arcs located just beyond the outer edge of the main ring. The arcs are thought to originate from the interaction of the central star with a low-mass companion orbiting at a distance comparable to that between the Earth and the dwarf planet Pluto. In this way, nebulae like the Ring Nebula reveal a kind of astronomical archaeology, as astronomers study the nebula to learn about the star that created it.
        </description>
        <credit>
        ESA/Webb, NASA, CSA, M. Barlow, N. Cox, R. Wesson
        </credit>
    </image>
    

    <image>
        <filename>elgordo1</filename>
        <title>
        El Gordo
        </title>
        <object>El Gordo</object>
        <description>
        A new image of the galaxy cluster known as “El Gordo” is revealing distant and dusty objects never seen before, and providing a bounty of fresh science. The infrared image, taken by the NASA/ESA/CSA James Webb Space Telescope, displays a variety of unusual, distorted background galaxies that were only hinted at in previous NASA/ESA Hubble Space Telescope images.

El Gordo is a cluster of hundreds of galaxies that existed when the universe was 6.2 billion years old, making it a “cosmic teenager.” It's the most massive cluster known to exist at that time. (“El Gordo” is Spanish for the “Fat One.”)

El Gordo acts as a gravitational lens, distorting and magnifying the light from distant background galaxies. Two of the most prominent features in the image include the Thin One, located just below and left of the image center, and the Fishhook, a red swoosh at upper right. Both are lensed background galaxies.
        </description>
        <credit>
        NASA, ESA, CSA, J. Diego (Instituto de Física de Cantabria), B. Frye (University of Arizona), P. Kamieneski (Arizona State University), T. Carleton (Arizona State University), R. Windhorst (Arizona State University), A. Pagan (STScI), J. Summers (Arizona State University), J. D'Silva (University of Western Australia), A. Koekemoer (STScI), A. Robotham (University of Western Australia)
        </credit>
    </image>
        
    <image>
        <filename>potm2307d</filename>
        <title>
        NGC 6822
        </title>
        <object>NGC 6822</object>
        <description>
        This image shows the irregular galaxy NGC 6822, as observed by the Mid-InfraRed Instrument (MIRI) mounted on the NASA/ESA/CSA James Webb Space Telescope. MIRI probes the mid-infrared, which in this case makes it perfectly suited to observe the dense regions of gas that suffuse this galaxy.

At mid-infrared wavelengths the emission of light by galactic dust is prominent, obscuring the galaxy's stars which themselves are faint at these longer wavelengths. Brilliant blue gas indicates light emitted by organic compounds called polycyclic aromatic hydrocarbons, which play a critical role in the formation of stars and planets. Cyan marks cooler patches of dust, while warmer dust is more orange.

Distant galaxies far beyond NGC 6822 are displayed in orange. The few galaxies that are relatively closer, meanwhile, are marked in green by their own light-emitting dust, which MIRI can pick out. Bright red and magenta colours indicate active areas of star formation in the galaxy. With so many stars, supernova explosions are routine, and an amazing example of a supernova remnant is visible in this image: a red ring just below the centre.
        </description>
        <credit>
        ESA/Webb, NASA and CSA, M. Meixner
        </credit>
    </image>
        




    <image>
        <filename>weic2319a</filename>
        <title>
        Herbig-Haro 46/47
        </title>
        <object>Herbig-Haro 46/47</object>
        <description>
        The NASA/ESA/CSA James Webb Space Telescope has captured a high-resolution image of a tightly bound pair of actively forming stars, known as Herbig-Haro 46/47, in near-infrared light. Look for them at the centre of the red diffraction spikes. The stars are buried deeply, appearing as an orange-white splotch. They are surrounded by a disc of gas and dust that continues to add to their mass.

Herbig-Haro 46/47 is an important object to study because it is relatively young — only a few thousand years old. Stars take millions of years to form. Targets like this also give researchers insight into how stars gather mass over time, potentially allowing them to model how our own Sun, a low-mass star, formed.

The two-sided orange lobes were created by earlier ejections from these stars. The stars' more recent ejections appear as blue, thread-like features, running along the angled diffraction spike that covers the orange lobes.

Actively forming stars ingest the gas and dust that immediately surrounds them in a disc (imagine an edge-on circle encasing them). When the stars ‘eat' too much material in too short a time, they respond by sending out two-sided jets along the opposite axis, settling down the star's spin, and removing mass from the area. Over millennia, these ejections regulate how much mass the stars retain.

Don't miss the delicate, semi-transparent blue cloud. This is a region of dense dust and gas, known as a nebula. Webb's crisp near-infrared image lets us see through its gauzy layers, showing off a lot more of Herbig-Haro 46/47, while also revealing a wide range of stars and galaxies that lie far beyond it. The nebula's edges transform into a soft orange outline, like a backward L along the right and bottom of the image.

The blue nebula influences the shapes of the orange jets shot out by the central stars. As ejected material rams into the nebula on the lower left, it takes on wider shapes, because there is more opportunity for the jets to interact with molecules within the nebula. Its material also causes the stars' ejections to light up.

Over millions of years the stars in Herbig-Haro 46/47 will form fully — clearing the scene.
        </description>
        <credit>
        NASA, ESA, CSA, J. DePasquale (STScI)
        </credit>
    </image>
        



    <image>
        <filename>weic2316a</filename>
        <title>
        Rho Ophiuchi cloud complex
        </title>
        <object>Rho Ophiuchi </object>
        <description>
        The first anniversary image from the NASA/ESA/CSA James Webb Space Telescope displays star birth like it's never been seen before, full of detailed, impressionistic texture. The subject is the Rho Ophiuchi cloud complex, the closest star-forming region to Earth. It is a relatively small, quiet stellar nursery, but you'd never know it from Webb's chaotic close-up. Jets bursting from young stars crisscross the image, impacting the surrounding interstellar gas and lighting up molecular hydrogen, shown in red. Some stars display the telltale shadow of a circumstellar disc, the makings of future planetary systems.

The young stars at the centre of many of these discs are similar in mass to the Sun or smaller. The heftiest in this image is the star S1, which appears amid a glowing cave it is carving out with its stellar winds in the lower half of the image. The lighter-coloured gas surrounding S1 consists of polycyclic aromatic hydrocarbons, a family of carbon-based molecules that are among the most common compounds found in space.
        </description>
        <credit>
        NASA, ESA, CSA, STScI, K. Pontoppidan (STScI), A. Pagan (STScI)
        </credit>
    </image>


     
        
    <image>
        <filename>potm2306a</filename>
        <title>
        Clash of the Titans
        </title>
        <object>NGC 3256</object>
        <description>
        The peculiar galaxy NGC 3256 dominates this image from the NASA/ESA/CSA James Webb Space Telescope. This Milky Way-sized galaxy lies about 120 million light-years away in the constellation Vela, and is a denizen of the Hydra-Centaurus Supercluster.

NGC 3256 may seem peaceful, a swirl of tightly entwined spiral arms set in a hazy cloud of light, but this image shows the aftermath of an ancient cosmic clash. This distorted galaxy is the wreckage of a head-on collision between two equally massive spiral galaxies which astronomers estimate to have met around 500 million years ago. The tumultuous past of NGC 3256 is captured in the long tendrils of shining dust and stars which extend outwards from the main body of the galaxy. The striking red and orange regions spread across the galaxy contain young stars created in the merger that are irradiating small dust grains, which then emit infrared light that is captured in astonishing detail by Webb's instruments. Further out, there are extended tidal features, which are mostly stars pulled out of the galaxies when they collided.

If you were asked to picture a galaxy collision, you might picture stars careening into one another with catastrophically explosive results. In reality, the spaces between the stars in a galaxy are vast; when galaxies collide, their clouds of stars pass through one another and mingle like two clouds of smoke. The gas and dust in colliding galaxies does interact, however, and with spectacular results. The galactic collision that created NGC 3256 triggered a luminous burst of star formation that can be seen in the brightest portions of this image. These infant stars shine most brightly at infrared wavelengths, light which can penetrate through obscuring dust in the galaxy, and which makes the stars perfect subjects for Webb.

This observation is one of several which take a detailed look at the physics of star formation and black hole growth in nearby merging galaxies, hoping to transform astronomers' understanding of galactic evolution. Capturing a selection of luminous infrared galaxies like NGC 3256 will help the astronomical community to understand how Webb can unravel the complex histories of nearby star-forming galaxies.
        </description>
        <credit>

        </credit>
    </image>
        
    <image>
        <filename>weic2315b</filename>
        <title>
        The Orion Bar region
        </title>
        <object>Orion Bar</object>
        <description>
        An international team of scientists have used data collected by the NASA/ESA/CSA James Webb Space Telescope to detect a molecule known as the methyl cation (CH3+) for the first time, located in the protoplanetary disc surrounding a young star. They accomplished this feat with a cross-disciplinary expert analysis, including key input from laboratory spectroscopists. The vital role of CH3+ in interstellar carbon chemistry has been predicted since the 1970s, but Webb's unique capabilities have finally made observing it possible in a region of space where planets capable of accommodating life could eventually form.

This image is NIRCam's view of the Orion Bar region studied by the team of astronomers. Bathed in harsh ultraviolet light from the stars of the Trapezium Cluster, it is an area of intense activity, with star formation and active astrochemistry. This made it a perfect place to study the exact impact that ultraviolet radiation has on the molecular makeup of the discs of gas and dust that surround new stars. The radiation erodes the nebula's gas and dust in a process known as photoevaporation; this creates the rich tapestry of cavities and filaments that fill the view. The radiation also ionises the molecules, causing them to emit light — not only does this create a beautiful vista, it also allows astronomers to study the molecules using the spectrum of their emitted light obtained with Webb's MIRI and NIRSpec instruments.
        </description>
        <credit>
        ESA/Webb, NASA, CSA, M. Zamani (ESA/Webb), the PDRs4All ERS Team
        </credit>
    </image>
        



    <image>
        <filename>arp220a</filename>
        <title>
        Merging galaxy Arp 220
        </title>
        <object>Arp 220</object>
        <description>
        Shining like a brilliant beacon amidst a sea of galaxies, Arp 220 lights up the night sky in this view from the NASA/ESA/CSA James Webb Space Telescope. Actually two spiral galaxies in the process of merging, Arp 220 glows brightest in infrared light, making it an ideal target for Webb. It is an ultra-luminous infrared galaxy (ULIRG) with a luminosity of more than a trillion suns. In comparison, our Milky Way galaxy has a much more modest luminosity of about ten billion suns.

Located 250 million light-years away in the constellation of Serpens, the Serpent, Arp 220 is the 220th object in Halton Arp's Atlas of Peculiar Galaxies. It is the nearest ULIRG and the brightest of the three galactic mergers closest to Earth.

The collision of the two spiral galaxies began about 700 million years ago. It sparked an enormous burst of star formation. About 200 huge star clusters reside in a packed, dusty region about 5,000 light-years across (about 5 percent of the Milky Way's diameter). The amount of gas in this tiny region is equal to all of the gas in the entire Milky Way galaxy.

Previous radio telescope observations revealed about 100 supernova remnants in an area of less than 500 light-years. The NASA/ESA Hubble Space Telescope uncovered the cores of the parent galaxies 1,200 light-years apart. Each of the cores has a rotating, star-forming ring blasting out the dazzling infrared light so apparent in this Webb view. This glaring light creates diffraction spikes — the starburst feature that dominates this image.

On the outskirts of this merger, Webb reveals faint tidal tails, or material drawn off the galaxies by gravity, represented in blue — evidence of the galactic dance that is occurring. Organic material represented in reddish-orange appears in streams and filaments across Arp 220.
        </description>
        <credit>
        NASA, ESA, CSA, K. Pontoppidan (STScI), A. Pagan (STScI)
        </credit>
    </image>
    



    <image>
        <filename>potm2303a</filename>
        <title>
        Cosmic seahorse
        </title>
        <object>SDSS J1226+2149</object>
        <description>
        Streaks of light and bright arcs betray the presence of a vast gravitational lens in this image from the NASA/ESA/CSA James Webb Space Telescope. A galaxy cluster in the foreground has magnified distant galaxies, warping their shapes and creating the bright smears of light spread throughout this image. This effect, referred to by astronomers as gravitational lensing, occurs when a massive celestial object such as a galaxy cluster causes a sufficient curvature of spacetime for light to be visibly bent around it, as if by a gargantuan lens.

One of the consequential effects of gravitational lensing is that it can magnify distant astronomical objects, letting astronomers study objects that would otherwise be too faint or far away. This useful quirk of gravitational lensing has also been used to reveal some of the most distant galaxies humanity has ever encountered. The long, bright, and distorted arc spreading out near the core is one such example. A distant galaxy known as the Cosmic Seahorse, its brightness is greatly magnified by the gravitational lens, which has enabled astronomers to study star formation there.

This image was captured by NIRCam, Webb's primary near-infrared camera, and contains the lensing galaxy cluster SDSS J1226+2149. It lies at a distance of around 6.3 billion light-years from Earth, in the constellation Coma Berenices. By combining Webb's sensitivity with the magnifying effect of gravitational lensing, astronomers were able to use this gravitational lens to explore the earliest stages of star formation in distant galaxies. To do so, they relied on earlier studies by the NASA/ESA Hubble Space Telescope, which provided the ‘prescription' for this gravitational lens. 

This image shows only one observation from a programme designed to probe star formation in distant galaxies. As well as revealing how quickly stars form and characterising the environments in these galaxies that gave rise to new stars, these observations will demonstrate the capabilities of Webb and provide richly detailed datasets to the astronomical community. Astronomers expect Webb's crystal-clear vision and cutting-edge instruments to provide new insights into star formation in distant, gravitationally lensed galaxies.
        </description>
        <credit>
        ESA/Webb, NASA and CSA, J. Rigby
        </credit>
    </image>

        
    <image>
        <filename>weic2307d</filename>
        <title>
        Wolf-Rayet 124
        </title>
        <object>Wolf-Rayet 124</object>
        
        <description>
        The luminous, hot star Wolf-Rayet 124 (WR 124) is prominent at the centre of the NASA/ESA/CSA James Webb Space Telescope's composite image combining near-infrared and mid-infrared wavelengths of light. The star displays the characteristic diffraction spikes of Webb's Near-infrared Camera (NIRCam), caused by the physical structure of the telescope itself. NIRCam effectively balances the brightness of the star with the fainter gas and dust surrounding it, while Webb's Mid-Infrared Instrument (MIRI) reveals the nebula's structure.

Background stars and galaxies populate the field of view and peek through the nebula of gas and dust that has been ejected from the ageing massive star. A history of the star's past episodes of mass loss can be read in the nebula's structure. Rather than smooth shells, the nebula is formed from random, asymmetric ejections. Bright clumps of gas and dust appear like tadpoles swimming toward the star, their tails streaming out behind them, blown back by the stellar wind.
        </description>
        <credit>
        NASA, ESA, CSA, STScI, Webb ERO Production Team
        </credit>
    </image>
        
    <image>
        <filename>weic2305a</filename>
        <title>
        Pandora's Cluster
        </title>
        <object>Pandora's Cluster</object>
        
        <description>
        Astronomers estimate 50 000 sources of near-infrared light are represented in this image from the NASA/ESA/CSA James Webb Space Telescope. Their light has travelled through various distances to reach the telescope's detectors, representing the vastness of space in a single image. A foreground star in our own galaxy, to the right of the image centre, displays Webb's distinctive diffraction spikes. Bright white sources surrounded by a hazy glow are the galaxies of Pandora's Cluster, a conglomeration of already-massive clusters of galaxies coming together to form a mega cluster. The concentration of mass is so great that the fabric of spacetime is warped by gravity, creating a natural, super-magnifying glass called a 'gravitational lens' that astronomers can use to see very distant sources of light beyond the cluster that would otherwise be undetectable, even to Webb.

These lensed sources appear red in the image, and often as elongated arcs distorted by the gravitational lens. Many of these are galaxies from the early Universe, with their contents magnified and stretched out for astronomers to study. 
        </description>
        <credit>
        NASA, ESA, CSA, I. Labbe (Swinburne University of Technology), R. Bezanson (University of Pittsburgh), A. Pagan (STScI)
        </credit>
    </image>
        
    <image>
        <filename>potm2301a</filename>
        <title>
        A Spiral Amongst Thousands
        </title>
        <object>LEDA 2046648</object>
        
        <description>
        A crowded field of galaxies throngs this Picture of the Month from the NASA/ESA/CSA James Webb Space Telescope, along with bright stars crowned with Webb's signature six-pointed diffraction spikes. The large spiral galaxy at the base of this image is accompanied by a profusion of smaller, more distant galaxies which range from fully-fledged spirals to mere bright smudges. Named LEDA 2046648, it is situated a little over a billion light-years from Earth, in the constellation Hercules.

One of Webb's principle science goals is to observe distant galaxies in the early universe to understand the details of their formation, evolution, and composition. Webb's keen infrared vision helps the telescope peer back in time, as the light from these distant galaxies is redshifted towards infrared wavelengths. Comparing these systems with galaxies in the local universe will help astronomers understand how galaxies grew to form the structure we see today. Webb will also probe the chemical composition of thousands of galaxies to shed light on how heavy elements were formed and built up as galaxies evolved.

To take full advantage of Webb's potential for galaxy archeology, astronomers and engineers must first calibrate the telescope's instruments and systems. Each of Webb's instruments contains a labyrinthine array of mirrors and other optical elements that redirect and focus starlight gathered by Webb's main mirror. This particular observation was part of the commissioning campaign for Webb's Near-InfraRed Imager and Slitless Spectrograph (NIRISS). As well as performing science in its own right, NIRISS supports parallel observations with Webb's Near-InfraRed Camera (NIRCam). NIRCam captured this galaxy-studded image while NIRISS was observing the white dwarf WD1657+343, a well-studied star. This allows astronomers to interpret and compare data from the two different instruments, and to characterise the performance of NIRISS.
        </description>
        <credit>
        ESA/Webb, NASA and CSA, A. Martel
        </credit>
    </image>

<image>
        <filename>weic2303a</filename>
        <title>
        Chameleon I
        </title>
        <object>Chameleon I</object>
        
        <description>
        This image by the NASA/ESA/CSA James Webb Space Telescope's Near-InfraRed Camera (NIRCam) features the central region of the Chameleon I dark molecular cloud, which resides 630 light years away. The cold, wispy cloud material (blue, centre) is illuminated in the infrared by the glow of the young, outflowing protostar Ced 110 IRS 4 (orange, upper left). The light from numerous background stars, seen as orange dots behind the cloud, can be used to detect ices in the cloud, which absorb the starlight passing through them. 

An international team of astronomers has reported the discovery of diverse ices in the darkest, coldest regions of a molecular cloud measured to date by studying this region. This result allows astronomers to examine the simple icy molecules that will be incorporated into future exoplanets, while opening a new window on the origin of more complex molecules that are the first step in the creation of the building blocks of life.
        </description>
        <credit>
        NASA, ESA, CSA, and M. Zamani (ESA/Webb); Science: F. Sun (Steward Observatory), Z. Smith (Open University), and the Ice Age ERS Team.
        </credit>
    </image>


<image>
        <filename>weic2301d</filename>
        <title>
        NGC 346
        </title>
        <object>NGC 346</object>
        
        <description>
        This image features NGC 346, one of the most dynamic star-forming regions in nearby galaxies, as seen by the NASA/ESA/CSA James Webb Space Telescope.

NCG 346 is located in the Small Magellanic Cloud (SMC), a dwarf galaxy close to our Milky Way. 
        </description>
        <credit>
        NASA, ESA, CSA, STScI, A. Pagan (STScI)
        </credit>
    </image>


<image>
        <filename>potm2212a</filename>
        <title>
        A Wreath of Star Formation
        </title>
        <object>NGC 7469</object>
        
        <description>
        This image is dominated by NGC 7469, a luminous, face-on spiral galaxy approximately 90 000 light-years in diameter that lies roughly 220 million light-years from Earth in the constellation Pegasus. Its companion galaxy IC 5283 is partly visible in the lower left portion of this image.

This spiral galaxy has recently been studied as part of the Great Observatories All-sky LIRGs Survey (GOALS) Early Release Science program with the NASA/ESA/CSA James Webb Space Telescope, which aims to study the physics of star formation, black hole growth, and feedback in four nearby, merging luminous infrared galaxies. Other galaxies studied as part of the survey include previous ESA/Webb Pictures of the Month II ZW 096 and IC 1623.

NGC 7469 is home to an active galactic nucleus (AGN), which is an extremely bright central region that is dominated by the light emitted by dust and gas as it falls into the galaxy's central black hole. This galaxy provides astronomers with the unique opportunity to study the relationship between AGNs and starburst activity because this particular object hosts an AGN that is surrounded by a starburst ring at a distance of a mere 1500 light-years. While NGC 7469 is one of the best studied AGNs in the sky, the compact nature of this system and the presence of a great deal of dust have made it difficult for scientists to achieve both the resolution and sensitivity needed to study this relationship in the infrared. Now, with Webb, astronomers can explore the galaxy's starburst ring, the central AGN, and the gas and dust in between.

Using Webb's MIRI, NIRCam and NIRspec instruments to obtain images and spectra of NGC 7469 in unprecedented detail, the GOALS team has uncovered a number of details about the object. This includes very young star-forming clusters never seen before, as well as pockets of very warm, turbulent molecular gas, and direct evidence for the destruction of small dust grains within a few hundred light-years of the nucleus — proving that the AGN is impacting the surrounding interstellar medium. Furthermore, highly ionised, diffuse atomic gas seems to be exiting the nucleus at roughly 6.4 million kilometres per hour — part of a galactic outflow that had previously been identified, but is now revealed in stunning detail with Webb. With analysis of the rich Webb datasets still underway, additional secrets of this local AGN and starburst laboratory are sure to be revealed.

A prominent feature of this image is the striking six-pointed star that perfectly aligns with the heart of NGC 7469. Unlike the galaxy, this is not a real celestial object, but an imaging artifact known as a diffraction spike, caused by the bright, unresolved AGN. Diffraction spikes are patterns produced as light bends around the sharp edges of a telescope. Webb's primary mirror is composed of hexagonal segments that each contain edges for light to diffract against, giving six bright spikes. There are also two shorter, fainter spikes, which are created by diffraction from the vertical strut that helps support Webb's secondary mirror.
        </description>
        <credit>
        ESA/Webb, NASA and CSA, L. Armus, A. S. Evans
        </credit>
    </image>


<image>
        <filename>carinanebula3</filename>
        <title>
        Jets
        </title>
        <object>Carina Nebula</object>
        
        <description>
        Scientists taking a “deep dive” into one of the iconic first images from the NASA/ESA/CSA James Webb Space Telescope have discovered dozens of energetic jets and outflows from young stars previously hidden by dust clouds. The discovery marks the beginning of a new era of investigating how stars like our Sun form, and how the radiation from nearby massive stars might affect the development of planets.

Dozens of previously hidden jets and outflows from young stars are revealed in this new image from Webb's Near-Infrared Camera (NIRCam). This image separates out several wavelengths of light from the First Image revealed on 12 July 2022, which highlights molecular hydrogen, a vital ingredient for star formation. 

The Cosmic Cliffs, a region at the edge of a gigantic, gaseous cavity within the star cluster NGC 3324, has long intrigued astronomers as a hotbed for star formation. While well-studied by the NASA/ESA Hubble Space Telescope, many details of star formation in NGC 3324 remain hidden at visible-light wavelengths. Webb is perfectly primed to tease out these long-sought-after details since it is built to detect jets and outflows seen only in the infrared at high resolution. Webb's capabilities also allow researchers to track the movement of other features previously captured by Hubble.

Recently, by analyzing data from a specific wavelength of infrared light (4.7 microns), astronomers discovered two dozen previously unknown outflows from extremely young stars revealed by molecular hydrogen. Webb's observations uncovered a gallery of objects ranging from small fountains to burbling behemoths that extend light-years from the forming stars. Many of these protostars are poised to become low mass stars, like our Sun.

Molecular hydrogen is a vital ingredient for making new stars and an excellent tracer of the early stages of their formation. As young stars gather material from the gas and dust that surround them, most also eject a fraction of that material back out again from their polar regions in jets and outflows. These jets then act like a snowplow, bulldozing into the surrounding environment. Visible in Webb's observations is the molecular hydrogen getting swept up and excited by these jets.

Previous observations of jets and outflows looked mostly at nearby regions and more evolved objects that are already detectable in the visual wavelengths seen by Hubble. The unparalleled sensitivity of Webb allows observations of more distant regions, while its infrared optimization probes into the dust-sampling younger stages. Together this provides astronomers with an unprecedented view into environments that resemble the birthplace of our solar system.

In analyzing the new Webb observations, astronomers are also gaining insights into how active these star-forming regions are, even in a relatively short time span. By comparing the position of previously known outflows in this region caught by Webb, to archival data by Hubble from 16 years ago, the scientists were able to track the speed and direction in which the jets are moving.

This science was conducted on observations collected as part of Webb's Early Release Observations Program. The paper was published in the Monthly Notices of the Royal Astronomical Society in December 2022. 

In this image, red, green, and blue were assigned to Webb's NIRCam data at 4.7, 4.44, and 1.87 microns (F470N, F444W, and F187N filters, respectively).
        </description>
        <credit>
        NASA, ESA, CSA, and STScI, J. DePasquale (STScI)
        </credit>
    </image>


<image>
        <filename>southernring3</filename>
        <title>
        Southern Ring Nebula
        </title>
        <object>Southern Ring Nebula</object>
        
        <description>
        This is an image of the Southern Ring Nebula (NGC 3132), captured by the NASA/ESA/CSA James Webb Space Telescope's Near-Infrared Camera (NIRCam) and Mid-Infrared Instrument (MIRI). The  image combines near- and mid-infrared light from three filters.

Webb's image traces the star's scattered outflows that have reached farther into the cosmos. Most of the molecular gas that lies outside the band of cooler gas is also cold. It is also far clumpier, consisting of dense knots of molecular gas that form a halo around the central stars.
        </description>
        <credit>
        NASA, ESA, CSA, STScI, O. De Marco (Macquarie University), J. DePasquale (STScI)
        </credit>
    </image>


<image>
        <filename>pillarsofcreation_composite</filename>
        <title>
        Pillars of Creation
        </title>
        <object>Eagle Nebula</object>
        
        <description>
        By combining images of the iconic Pillars of Creation from two cameras aboard the NASA/ESA/CSA James Webb Space Telescope, the Universe has been framed in its infrared glory. Webb's near-infrared image was fused with its mid-infrared image, setting this star-forming region ablaze with new details.

Myriad stars are spread throughout the scene. The stars primarily show up in near-infrared light, marking a contribution of Webb's Near-Infrared Camera (NIRCam). Near-infrared light also reveals thousands of newly formed stars – look for bright orange spheres that lie just outside the dusty pillars.

In mid-infrared light, the dust is on full display. The contributions from Webb's Mid-Infrared Instrument (MIRI) are most apparent in the layers of diffuse, orange dust that drape the top of the image, relaxing into a V. The densest regions of dust are cast in deep indigo hues, obscuring our view of the activities inside the dense pillars.

Dust also makes up the spire-like pillars that extend from the bottom left to the top right. This is one of the reasons why the region is overflowing with stars – dust is a major ingredient of star formation. When knots of gas and dust with sufficient mass form in the pillars, they begin to collapse under their own gravitational attraction, slowly heat up, and eventually form new stars. Newly formed stars are especially apparent at the edges of the top two pillars – they are practically bursting onto the scene.

At the top edge of the second pillar, undulating detail in red hints at even more embedded stars. These are even younger, and are quite active as they form. The lava-like regions capture their periodic ejections. As stars form, they periodically send out supersonic jets that can interact within clouds of material, like these thick pillars of gas and dust. These young stars are estimated to be only a few hundred thousand years old, and will continue to form for millions of years.

Almost everything you see in this scene is local. The distant universe is largely blocked from our view both by the interstellar medium, which is made up of sparse gas and dust located between the stars, and a thick dust lane in our Milky Way galaxy. As a result, the stars take center stage in Webb's view of the Pillars of Creation.

The Pillars of Creation is a small region within the vast Eagle Nebula, which lies 6,500 light-years away.
        </description>
        <credit>
        NASA, ESA, CSA, STScI, J. DePasquale (STScI), A. Pagan (STScI), A. M. Koekemoer (STScI)
        </credit>
    </image>


<image>
        <filename>potm2211b</filename>
        <title>
        Galactic Get-Together
        </title>
        <object>II ZW 96</object>
        
        <description>
        A merging galaxy pair cavort in this image captured by the NASA/ESA/CSA James Webb Space Telescope. This pair of galaxies, known to astronomers as II ZW 96, is roughly 500 million light-years from Earth and lies in the constellation Delphinus, close to the celestial equator. As well as the wild swirl of the merging galaxies, a menagerie of background galaxies are dotted throughout the image.
        </description>
        <credit>
        ESA/Webb, NASA and CSA, L. Armus, A. Evans; the Hubble Heritage Team (STScI/AURA)-ESA/Hubble Collaboration
        </credit>
    </image>


<image>
        <filename>weic2219a</filename>
        <title>
        Protostar L1527
        </title>
        <object>Protostar L1527</object>
        
        <description>
        The protostar L1527, shown in this image from the NASA/ESA/CSA James Webb Space Telescope, is embedded within a cloud of material that is feeding its growth. Material ejected from the star has cleared out cavities above and below it, whose boundaries glow orange and blue in this infrared view. The upper central region displays bubble-like shapes due to stellar ‘burps,' or sporadic ejections. Webb also detects filaments made of molecular hydrogen that has been shocked by past stellar ejections. Intriguingly, the edges of the cavities at upper left and lower right appear straight, while the boundaries at upper right and lower left are curved. The region at lower right appears blue, as there's less dust between it and Webb than the orange regions above it.
        </description>
        <credit>
        NASA, ESA, CSA, and STScI, J. DePasquale (STScI)
        </credit>
    </image>


<image>
        <filename>WLMb</filename>
        <title>
        Dwarf Galaxy WLM
        </title>
        <object>Dwarf Galaxy WLM</object>
        
        <description>
        This image shows a portion of the dwarf galaxy Wolf–Lundmark–Melotte (WLM) captured by the NASA/ESA/CSA James Webb Space Telescope's Near-Infrared Camera. The image demonstrates Webb's remarkable ability to resolve faint stars outside the Milky Way. 

This observation was taken as part of Webb's Early Release Science (ERS) program 1334, focused on resolved stellar populations. The dwarf galaxy WLM was selected for this program as its gas is similar to that which made up galaxies in the early Universe and it is relatively nearby, meaning that Webb can differentiate between its individual stars. Learn more about Webb's research of the dwarf galaxy WLM here.

The galaxy lies roughly 3 million light-years away.

This image includes 0.9-micron light shown in blue, 1.5-micron in cyan, 2.5-micron in yellow, and 4.3-micron in red (filters F090W, F150W, F250M, and F430M). 
        </description>
        <credit>
        NASA, ESA, CSA, STScI, and K. McQuinn (Rutgers University), A. Pagan (STScI).
        </credit>
    </image>


<image>
        <filename>weic2218d</filename>
        <title>
        Pillars of Creation
        </title>
        <object>Eagle Nebula</object>
        
        <description>
        The Pillars of Creation are set off in a kaleidoscope of colour in the NASA/ESA/CSA James Webb Space Telescope's near-infrared-light view. The pillars look like arches and spires rising out of a desert landscape, but are filled with semi-transparent gas and dust, and ever changing. This is a region where young stars are forming – or have barely burst from their dusty cocoons as they continue to form.

Protostars are the scene-stealers in this Near-Infrared Camera (NIRCam) image. These are the bright red orbs that sometimes appear with eight diffraction spikes. When knots with sufficient mass form within the pillars, they begin to collapse under their own gravity, slowly heat up, and eventually begin shining brightly.

Along the edges of the pillars are wavy lines that look like lava. These are ejections from stars that are still forming. Young stars periodically shoot out jets that can interact within clouds of material, like these thick pillars of gas and dust. This sometimes also results in bow shocks, which can form wavy patterns like a boat does as it moves through water. These young stars are estimated to be only a few hundred thousand years old, and will continue to form for millions of years.

Although it may appear that near-infrared light has allowed Webb to “pierce through” the background to reveal great cosmic distances beyond the pillars, the interstellar medium stands in the way, like a drawn curtain.

This is also the reason why there are no distant galaxies in this view. This translucent layer of gas blocks our view of the deeper universe. Plus, dust is lit up by the collective light from the packed “party” of stars that have burst free from the pillars. It's like standing in a well-lit room looking out a window – the interior light reflects on the pane, obscuring the scene outside and, in turn, illuminating the activity at the party inside.

Webb's new view of the Pillars of Creation will help researchers revamp models of star formation. By identifying far more precise star populations, along with the quantities of gas and dust in the region, they will begin to build a clearer understanding of how stars form and burst out of these clouds over millions of years.

The Pillars of Creation is a small region within the vast Eagle Nebula, which lies 6,500 light-years away.

Webb's NIRCam was built by a team at the University of Arizona and Lockheed Martin's Advanced Technology Center.
        </description>
        <credit>
        NASA, ESA, CSA, STScI; J. DePasquale, A. Koekemoer, A. Pagan (STScI).
        </credit>
    </image>



  

    <image>
        <filename>potm2210d</filename>
        <title>
        A Pair of Merging Galaxies 
        </title>
        <object>IC 1623</object>
        
        <description>
        This image from the NASA/ESA/CSA James Webb Space Telescope depicts IC 1623, an entwined pair of interacting galaxies which lies around 270 million light-years from Earth in the constellation Cetus. The two galaxies in IC 1623 are plunging headlong into one another in a process known as a galaxy merger. Their collision has ignited a frenzied spate of star formation known as a starburst, creating new stars at a rate more than twenty times that of the Milky Way galaxy.

In Webb's combined MIRI and NIRCam view of the galaxies, the gas being used as fuel by the stellar nurseries is especially apparent. Webb's ability to pierce the gaseous veil obscuring the bright galactic cores also causes prominent diffraction spikes to appear.
        </description>
        <credit>
        ESA/Webb, NASA and CSA, L. Armus and A. Evans
        </credit>
    </image>



    <image>
        <filename>WR140a</filename>
        <title>
        Webb Finds Star Duo Forms ‘Fingerprint' in Space
        </title>
        <object>Wolf-Rayet 140</object>
        
        <description>
        A new image from the NASA/ESA/CSA James Webb Space Telescope reveals a remarkable cosmic sight: at least 17 concentric dust rings emanating from a pair of stars. Located just over 5,000 light-years from Earth, the duo is collectively known as Wolf-Rayet 140.

Each ring was created when the two stars came close together and their stellar winds (streams of gas they blow into space) met, compressing the gas and forming dust. The stars' orbits bring them together about once every eight years; like the rings of a tree's trunk, the dust loops mark the passage of time.

In addition to Webb's overall sensitivity, its Mid-Infrared Instrument (MIRI) is uniquely qualified to study the dust rings, what Ryan Lau, the lead author from NSF's NOIRLab, and his colleagues call shells, because they are thicker and wider than they appear in the image. Webb's science instruments detect infrared light, a range of wavelengths invisible to the human eye.

MIRI detects the longest infrared wavelengths, which means it can often see cooler objects – including the dust rings – than Webb's other instruments can. MIRI's spectrometer also revealed the composition of the dust, formed mostly from material ejected by a type of star known as a Wolf-Rayet star.

A Wolf-Rayet star is born with at least 25 times more mass than our Sun and is nearing the end of its life, when it will likely collapse directly to black hole, or explode as a supernova. Burning hotter than in its youth, a Wolf-Rayet star generates powerful winds that push huge amounts of gas into space. The Wolf-Rayet star in this particular pair may have shed more than half its original mass via this process.
        </description>
        <credit>
        NASA, ESA, CSA, STScI, JPL-Caltech
        </credit>
    </image>




    <image>
        <filename>VV191a</filename>
        <title>
        A pair of galaxies
        </title>
        <object>VV 191</object>
        
        <description>
        By combining data from the NASA/ESA/CSA James Webb Space Telescope and the NASA/ESA Hubble Space Telescope, researchers were able to trace light that was emitted by the large white elliptical galaxy at left through the spiral galaxy at right and identify the effects of interstellar dust in the spiral galaxy. This image of galaxy pair VV 191 includes near-infrared light from Webb, and ultraviolet and visible light from Hubble.

Webb's near-infrared data also show us the galaxy's longer, extremely dusty spiral arms in far more detail, giving them an appearance of overlapping with the central bulge of the bright white elliptical galaxy on the left. Although the two foreground galaxies are relatively close astronomically speaking, they are not actively interacting.

Don't overlook the background scenery! Like many Webb images, this image of VV 191 shows many galaxies that lie great distances away. For example, two patchy spirals to the upper left of the elliptical galaxy have similar apparent sizes, but show up in very different colors. One is likely very dusty and the other very far away, but researchers need to obtain data known as spectra to determine which is which.
        </description>
        <credit>
        NASA, ESA, CSA, Rogier Windhorst (ASU), William Keel (University of Alabama), Stuart Wyithe (University of Melbourne), JWST PEARLS Team, Alyssa Pagan (STScI)
        </credit>
    </image>


    <image>
        <filename>potm2209a</filename>
        <title>
        Webb Reveals Complex Galactic Structures
        </title>
        <object>IC 5332</object>
        
        <description>
        This image from the NASA/ESA/CSA James Webb Space Telescope shows IC 5332, a spiral galaxy, in unprecedented detail thanks to observations from the Mid-InfraRed Instrument (MIRI). Its symmetrical spiral arms, which appear so clearly in Hubble's ultraviolet and visible-light image of IC 5332, are revealed as a complex web of gas, emitting infrared light at a variety of temperatures. Capturing light at these wavelengths requires very specialised instruments kept at very cold temperatures, and MIRI performs spectacularly at the task.

IC 5332 lies over 29 million light-years from Earth, and has a diameter of roughly 66 000 light-years, making it about a third smaller than the Milky Way. It is notable for being almost perfectly face-on with respect to Earth, allowing us to admire the symmetrical sweep of its spiral arms.
        </description>
        <credit>
        ESA/Webb, NASA and CSA, J. Lee and the PHANGS-JWST and PHANGS-HST Teams
        </credit>
    </image>


    <image>
        <filename>weic2214a</filename>
        <title>
        Neptune
        </title>
        <object>Neptune</object>
        
        <description>
        Webb's Near-Infrared Camera (NIRCam) image of Neptune, taken on 12 July 2022, brings the planet's rings into full focus for the first time in more than three decades.

The most prominent features of Neptune's atmosphere in this image are a series of bright patches in the planet's southern hemisphere that represent high-altitude methane-ice clouds. More subtly, a thin line of brightness circling the planet's equator could be a visual signature of global atmospheric circulation that powers Neptune's winds and storms. Additionally, for the first time, Webb has teased out a continuous band of high-latitude clouds surrounding a previously-known vortex at Neptune's southern pole.
        </description>
        <credit>
        NASA, ESA, CSA, and STScI
        </credit>
    </image>


    <image>
        <filename>weic2212a</filename>
        <title>
        Tarantula Nebula
        </title>
        <object>Tarantula Nebula</object>
        
        <description>
        In this mosaic image stretching 340 light-years across, Webb's Near-Infrared Camera (NIRCam) displays the Tarantula Nebula star-forming region in a new light, including tens of thousands of never-before-seen young stars that were previously shrouded in cosmic dust. The most active region appears to sparkle with massive young stars, appearing pale blue. Scattered among them are still-embedded stars, appearing red, yet to emerge from the dusty cocoon of the nebula. NIRCam is able to detect these dust-enshrouded stars thanks to its unprecedented resolution at near-infrared wavelengths.

To the upper left of the cluster of young stars, and the top of the nebula's cavity, an older star prominently displays NIRCam's distinctive eight diffraction spikes, an artefact of the telescope's structure. Following the top central spike of this star upward, it almost points to a distinctive bubble in the cloud. Young stars still surrounded by dusty material are blowing this bubble, beginning to carve out their own cavity. Astronomers used two of Webb's spectrographs to take a closer look at this region and determine the chemical makeup of the star and its surrounding gas. This spectral information will tell astronomers about the age of the nebula and how many generations of star birth it has seen.

Farther from the core region of hot young stars, cooler gas takes on a rust colour, telling astronomers that the nebula is rich with complex hydrocarbons. This dense gas is the material that will form future stars. As winds from the massive stars sweep away gas and dust, some of it will pile up and, with gravity's help, form new stars.
        </description>
        <credit>
        NASA, ESA, CSA, and STScI
        </credit>
    </image>


    <image>
        <filename>jupiter-auroras1</filename>
        <title>
        Auroras on Jupiter
        </title>
        <object>Jupiter</object>
        
        <description>
        With giant storms, powerful winds, auroras, and extreme temperature and pressure conditions, Jupiter has a lot going on. Now, the NASA/ESA/CSA James Webb Space Telescope has captured new images of the planet. Webb's Jupiter observations will give scientists even more clues to Jupiter's inner life.

This image comes from the observatory's Near-Infrared Camera (NIRCam), which has three specialized infrared filters that showcase details of the planet. Since infrared light is invisible to the human eye, the light has been mapped onto the visible spectrum. Generally, the longest wavelengths appear redder and the shortest wavelengths are shown as more blue. Scientists collaborated with citizen scientist Judy Schmidt to translate the Webb data into images.

This image was created from a composite of several images from Webb. Visible auroras extend to high altitudes above both the northern and southern poles of Jupiter. The auroras shine in a filter that is mapped to redder colors, which also highlights light reflected from lower clouds and upper hazes. A different filter, mapped to yellows and greens, shows hazes swirling around the northern and southern poles. A third filter, mapped to blues, showcases light that is reflected from a deeper main cloud. The Great Red Spot, a famous storm so big it could swallow Earth, appears white in these views, as do other clouds, because they are reflecting a lot of sunlight.
        </description>
        <credit>
        NASA, ESA, Jupiter ERS Team; image processing by Judy Schmidt
        </credit>
    </image>


    <image>
        <filename>weic2211a</filename>
        <title>
        Cartwheel Galaxy
        </title>
        <object>Cartwheel Galaxy</object>
        
        <description>
        This image of the Cartwheel and its companion galaxies is a composite from Webb's Near-Infrared Camera (NIRCam) and Mid-Infrared Instrument (MIRI), which reveals details that are difficult to see in the individual images alone.

This galaxy formed as the result of a high-speed collision that occurred about 400 million years ago. The Cartwheel is composed of two rings, a bright inner ring and a colourful outer ring. Both rings expand outward from the centre of the collision like shockwaves.

However, despite the impact, much of the character of the large, spiral galaxy that existed before the collision remains, including its rotating arms. This leads to the “spokes” that inspired the name of the Cartwheel Galaxy, which are the bright red streaks seen between the inner and outer rings. These brilliant red hues, located not only throughout the Cartwheel, but also the companion spiral galaxy at the top left, are caused by glowing, hydrocarbon-rich dust. 

In this near- and mid-infrared composite image, MIRI data are coloured orange while NIRCam data are coloured blue, yellow, and red. Amidst the red swirls of dust, there are many individual blue dots, which represent individual stars or pockets of star formation. NIRCam also defines the difference between the older star populations and dense dust in the core and the younger star populations outside of it.

Webb's observations capture Cartwheel in a very transitory stage. The form that the Cartwheel Galaxy will eventually take, given these two competing forces, is still a mystery. However, this snapshot provides perspective on what happened to the galaxy in the past and what it will do in the future.
        </description>
        <credit>
        NASA, ESA, CSA, STScI
        </credit>
    </image>


    <image>
        <filename>weic2208a</filename>
        <title>
        Galaxy get-together
        </title>
        <object>Stephan's Quintet</object>
        
        <description>
        An enormous mosaic of Stephan's Quintet is the largest image to date from the NASA/ESA/CSA James Webb Space Telescope, covering about one-fifth of the Moon's diameter. It contains over 150 million pixels and is constructed from almost 1,000 separate image files. The visual grouping of five galaxies was captured by Webb's Near-Infrared Camera (NIRCam) and Mid-Infrared Instrument (MIRI).

With its powerful, infrared vision and extremely high spatial resolution, Webb shows never-before-seen details in this galaxy group. Sparkling clusters of millions of young stars and starburst regions of fresh star birth grace the image. Sweeping tails of gas, dust and stars are being pulled from several of the galaxies due to gravitational interactions. Most dramatically, Webb's MIRI instrument captures huge shock waves as one of the galaxies, NGC 7318B, smashes through the cluster. These regions surrounding the central pair of galaxies are shown in the colours red and gold.

This composite NIRCam-MIRI image uses two of the three MIRI filters to best show and differentiate the hot dust and structure within the galaxy. MIRI sees a distinct difference in colour between the dust in the galaxies versus the shock waves between the interacting galaxies. The image processing specialists at the Space Telescope Science Institute in Baltimore opted to highlight that difference by giving MIRI data the distinct yellow and orange colours, in contrast to the blue and white colours assigned to stars at NIRCam's wavelengths.
        </description>
        <credit>
        NASA, ESA, CSA, and STScI
        </credit>
    </image>


    <image>
        <filename>weic2209a</filename>
        <title>
        Webb's First Deep Field
        </title>
        <object>SMACS 0723</object>
        
        <description>
        Thousands of galaxies flood this near-infrared image of galaxy cluster SMACS 0723. High-resolution imaging from the NASA/ESA/CSA James Webb Space Telescope combined with a natural effect known as gravitational lensing made this finely detailed image possible.

First, focus on the galaxies responsible for the lensing: the bright white elliptical galaxy at the centre of the image and smaller white galaxies throughout the image. Bound together by gravity in a galaxy cluster, they are bending the light from galaxies that appear in the vast distances behind them. The combined mass of the galaxies and dark matter act as a cosmic telescope, creating magnified, contorted, and sometimes mirrored images of individual galaxies.

Clear examples of mirroring are found in the prominent orange arcs to the left and right of the brightest cluster galaxy. These are lensed galaxies – each individual galaxy is shown twice in one arc. Webb's image has fully revealed their bright cores, which are filled with stars, along with orange star clusters along their edges.

Not all galaxies in this field are mirrored – some are stretched. Others appear scattered by interactions with other galaxies, leaving trails of stars behind them.

Webb has refined the level of detail we can observe throughout this field. Very diffuse galaxies appear like collections of loosely bound dandelion seeds aloft in a breeze. Individual “pods” of star formation practically bloom within some of the most distant galaxies – the clearest, most detailed views of star clusters in the early universe so far.

One galaxy speckled with star clusters appears near the bottom end of the bright central star's vertical diffraction spike – just to the right of a long orange arc. The long, thin ladybug-like galaxy is flecked with pockets of star formation. Draw a line between its “wings” to roughly match up its star clusters, mirrored top to bottom. Because this galaxy is so magnified and its individual star clusters are so crisp, researchers will be able to study it in exquisite detail, which wasn't previously possible for galaxies this distant. 

The galaxies in this scene that are farthest away – the tiniest galaxies that are located well behind the cluster – look nothing like the spiral and elliptical galaxies observed in the local universe. They are much clumpier and more irregular. Webb's highly detailed image may help researchers measure the ages and masses of star clusters within these distant galaxies. This might lead to more accurate models of galaxies that existed at cosmic “spring,” when galaxies were sprouting tiny “buds” of new growth, actively interacting and merging, and had yet to develop into larger spirals. Ultimately, Webb's upcoming observations will help astronomers better understand how galaxies form and grow in the early universe.
        </description>
        <credit>
        NASA, ESA, CSA, and STScI
        </credit>
    </image>

    <image>
        <filename>weic2411a</filename>
        <title>Horsehead Nebula</title>
        <object>Horsehead Nebula</object>
        
        <description>
        The James Webb Space Telescope has captured the sharpest infrared images to date of one of the most distinctive objects in our skies, the Horsehead Nebula. These observations show a part of the iconic nebula in a whole new light, capturing its complexity with unprecedented spatial resolution.

Webb's new images show part of the sky in the constellation Orion (The Hunter), in the western side of the Orion B molecular cloud. Rising from turbulent waves of dust and gas is the Horsehead Nebula, otherwise known as Barnard 33, which resides roughly 1300 light-years away. 

The nebula formed from a collapsing interstellar cloud of material, and glows because it is illuminated by a nearby hot star. The gas clouds surrounding the Horsehead have already dissipated, but the jutting pillar is made of thick clumps of material that is harder to erode. Astronomers estimate that the Horsehead has about five million years left before it too disintegrates. Webb's new view focuses on the illuminated edge of the top of the nebula's distinctive dust and gas structure.
        </description>
        <credit>
        NASA, ESA, CSA, and STScI
        </credit>
    </image>

    <image>
        <filename>SN1987a-1</filename>
        <title>SN 1987A</title>
        <object>SN 1987A</object>
        
        <description>
        The James Webb Space Telescope has begun the study of one of the most renowned supernovae, SN 1987A (Supernova 1987A). Located 168,000 light-years away in the Large Magellanic Cloud, SN 1987A has been a target of intense observations at wavelengths ranging from gamma rays to radio for nearly 40 years, since its discovery in February of 1987. New observations by Webb's NIRCam (Near-Infrared Camera) provide a crucial clue to our understanding of how a supernova develops over time to shape its remnant.

This image reveals a central structure like a keyhole. This center is packed with clumpy gas and dust ejected by the supernova explosion. The dust is so dense that even near-infrared light that Webb detects can't penetrate it, shaping the dark “hole” in the keyhole.

A bright, equatorial ring surrounds the inner keyhole, forming a band around the waist that connects two faint arms of hourglass-shaped outer rings. The equatorial ring, formed from material ejected tens of thousands of years before the supernova explosion, contains bright hot spots, which appeared as the supernova's shock wave hit the ring. Now spots are found even exterior to the ring, with diffuse emission surrounding it. These are the locations of supernova shocks hitting more exterior material.
        </description>
        <credit>
        NASA, ESA, CSA, and STScI
        </credit>
    </image>

    <image>
        <filename>saturn1</filename>
        <title>Saturn's rings shine in Webb's observations of ringed planet
</title>
        <object>Saturn</object>
        
        <description>
        On 25 June 2023, JWST turned to famed ringed world Saturn for its first near-infrared observations of the planet. The initial imagery from Webb's NIRCam (Near-Infrared Camera) is already fascinating researchers.

Saturn itself appears extremely dark at this infrared wavelength observed by the telescope, as methane gas absorbs almost all of the sunlight falling on the atmosphere. However, the icy rings stay relatively bright, leading to the unusual appearance of Saturn in the Webb image.

This image was taken as part of Webb Guaranteed Time Observation program 1247. The program included several very deep exposures of Saturn, which were designed to test the telescope's capacity to detect faint moons around the planet and its bright rings. Details in the orbital characteristics of newly discovered moons could help scientists put together a more complete picture of the current system of Saturn, as well as its past.

This new image of Saturn clearly shows details within the planet's ring system, along with several of the planet's moons – Dione, Enceladus, and Tethys. Additional deeper exposures (not shown here) will allow the team to probe some of the planet's fainter rings, not visible in this image, including the thin G ring and the diffuse E ring. Saturn's rings are made up of an array of rocky and icy fragments – the particles range in size from smaller than a grain of sand to a few as large as mountains on Earth. Researchers recently used Webb to explore Enceladus, and found a large plume jetting from the southern pole of the moon that contains both particles and plentiful amounts of water vapor – this plume feeds Saturn's E ring.
        </description>
        <credit>
        NASA, ESA, CSA, STScI, M. Tiscareno (SETI Institute), M. Hedman (University of Idaho), M. El Moutamid (Cornell University), M. Showalter (SETI Institute), L. Fletcher (University of Leicester), H. Hammel (AURA), J. DePasquale (STScI)
        </credit>
    </image>

    <image>
        <filename>EIGER1</filename>
        <title>Quasar J0100+2802</title>
        <object>Quasar J0100+2802</object>
        
        <description>
        There are more than 20,000 galaxies in this field. This JWST view is found between the Pisces and Andromeda constellations.

Researchers using Webb anchored their observations on quasar J0100+2802, an active supermassive black hole that acts like a beacon. It is at the centre of the image above, and appears tiny and pink with six prominent diffraction spikes.

The quasar is so luminous that it acts like a flashlight, illuminating the gas between it and the telescope. The team analyzed 117 galaxies that all existed approximately 900 million years after the big bang – focusing on 59 that lie in front of the quasar. The researchers could study not only the galaxies themselves, but also the illuminated gas surrounding them.

These galaxies existed just before the end of the Era of Reionisation, when the Universe contained a patchwork of gas – some opaque and some transparent (or ionised). 
        </description>
        <credit>
        NASA, ESA, CSA, and STScI
        </credit>
    </image>

    <image>
        <filename>potm2302a</filename>
        <title>Seeing Triple</title>
        <object>RX J2129</object>
        
        <description>
        This observation from the James Webb Space Telescope features the massive galaxy cluster RX J2129. Due to Gravitational lensing, this observation contains three different images of the same supernova-hosting galaxy, which you can see in closer detail here. Gravitational lensing occurs when a massive celestial body causes a sufficient curvature of spacetime to bend the path of light travelling past or through it, almost like a vast lens. In this case, the lens is the galaxy cluster RX J2129, located around 3.2 billion light-years from Earth in the constellation Aquarius. Gravitational lensing can cause background objects to appear strangely distorted, as can be seen by the concentric arcs of light in the upper right of this image.

Astronomers discovered the supernova in the triply-lensed background galaxy using observations from the NASA/ESA Hubble Space Telescope, and they suspected that they had found a very distant Type Ia supernova. These supernovae always produce a fairly consistent luminosity — at the same distance, one looks as bright as any other — which makes them particularly helpful to astronomers. As their distance from Earth is proportional to how dim they appear in the night sky, objects with known brightness can be used as 'standard candles' to measure astronomical distances. 

The almost uniform luminosity of a Type Ia supernova could also allow astronomers to understand how strongly the galaxy cluster RX J2129 is magnifying background objects, and therefore how massive the galaxy cluster is. As well as distorting the images of background objects, gravitational lenses can cause distant objects to appear much brighter than they would otherwise. If the gravitational lens magnifies something with a known brightness, such as a Type Ia supernova, then astronomers can use this to measure the ‘prescription' of the gravitational lens. 
        </description>
        <credit>
        NASA, ESA, CSA, and STScI
        </credit>
    </image>

    <image>
        <filename>weic2205a</filename>
        <title>Cosmic Cliffs</title>
        <object>Carina Nebula</object>
        
        <description>
        What looks much like craggy mountains on a moonlit evening is actually the edge of a nearby, young, star-forming region NGC 3324 in the Carina Nebula. Captured in infrared light by the Near-Infrared Camera (NIRCam) on the NASA/ESA/CSA James Webb Space Telescope, this image reveals previously obscured areas of star birth.

Called the Cosmic Cliffs, the region is actually the edge of a gigantic, gaseous cavity within NGC 3324, roughly 7,600 light-years away. The cavernous area has been carved from the nebula by the intense ultraviolet radiation and stellar winds from extremely massive, hot, young stars located in the centre of the bubble, above the area shown in this image. The high-energy radiation from these stars is sculpting the nebula's wall by slowly eroding it away.
        </description>
        <credit>
        NASA, ESA, CSA, and STScI
        </credit>
    </image>

    <image>
        <filename>weic2403b</filename>
        <title>IC 5332</title>
        <object>IC 5332</object>
        
        <description>
        Galaxy IC 5332 was observed as part of the Physics at High Angular resolution in Nearby GalaxieS (PHANGS) program, a large project that includes observations from several space- and ground-based telescopes of many galaxies to help researchers study all phases of the star formation cycle, from the formation of stars within dusty gas clouds to the energy released in the process that creates the intricate structures revealed by Webb's new images.

IC 5332 is 30 million light-years away in the constellation Sculptor.
        </description>
        <credit>
        NASA, ESA, CSA, and STScI
        </credit>
    </image>


    <image>
        <filename>weic2320d</filename>
        <title>
        Ring Nebula 
        </title>
        <object>Ring Nebula (M57)</object>
        <description>
        The NASA/ESA/CSA James Webb Space Telescope has observed the well-known Ring Nebula with unprecedented detail. Formed by a star throwing off its outer layers as it runs out of fuel, the Ring Nebula is an archetypal planetary nebula. Also known as M57 and NGC 6720, it is both relatively close to Earth at roughly 2,500 light-years away.

This new image provides unprecedented spatial resolution and spectral sensitivity. For example, the intricate details of the filament structure of the inner ring are particularly visible in this dataset.

There are some 20,000 dense globules in the nebula, which are rich in molecular hydrogen. In contrast, the inner region shows very hot gas. The main shell contains a thin ring of enhanced emission from carbon-based molecules known as polycyclic aromatic hydrocarbons (PAHs). Roughly ten concentric arcs are located just beyond the outer edge of the main ring. The arcs are thought to originate from the interaction of the central star with a low-mass companion orbiting at a distance comparable to that between the Earth and the dwarf planet Pluto. In this way, nebulae like the Ring Nebula reveal a kind of astronomical archaeology, as astronomers study the nebula to learn about the star that created it.
        </description>
        <credit>
        ESA/Webb, NASA, CSA, M. Barlow, N. Cox, R. Wesson
        </credit>
    </image>   

  <image>
        <filename>weic2218c</filename>
        <title>
        Pillars of Creation
        </title>
        <object>Eagle Nebula</object>
        
        <description>
        The NASA/ESA/CSA James Webb Space Telescope's mid-infrared view of the Pillars of Creation strikes a chilling tone. Thousands of stars that exist in this region disappear from view — and seemingly endless layers of gas and dust become the centrepiece.

The detection of dust by Webb's Mid-Infrared Instrument (MIRI) is extremely important — dust is a major ingredient for star formation. Many stars are actively forming in these dense blue-grey pillars. When knots of gas and dust with sufficient mass form in these regions, they begin to collapse under their own gravitational attraction, slowly heat up, and eventually form new stars.

Although the stars appear to be missing, they aren't. Stars typically do not emit much mid-infrared light. Instead, they are easiest to detect in ultraviolet, visible, and near-infrared light. In this MIRI view, two types of stars can be identified. The stars at the end of the thick, dusty pillars have recently eroded most of the more distant material surrounding them but they can be seen in mid-infrared light because they are still surrounded by cloaks of dust. In contrast, blue tones indicate stars that are older and have shed most of their gas and dust.

Mid-infrared light also details dense regions of gas and dust. The red region toward the top, which forms a delicate V shape, is where the dust is both diffuse and cooler. And although it may seem like the scene clears toward the bottom left of this view, the darkest grey areas are where densest and coolest regions of dust lie. Notice that there are many fewer stars and no background galaxies popping into view.

Webb's mid-infrared data will help researchers determine exactly how much dust is in this region — and what it's made of. These details will make models of the Pillars of Creation far more precise. Over time, we will begin to understand more clearly how stars form and burst out of these dusty clouds over millions of years.
        </description>
        <credit>
        NASA, ESA, CSA, STScI, J. DePasquale (STScI), A. Pagan (STScI)
        </credit>
    </image>


</gallery>
`;


function make_gallery() {
    parser = new DOMParser();
    xmlDoc = parser.parseFromString(gallery,"text/xml");
    var txt = "";
    x = xmlDoc.getElementsByTagName("filename");
    
    for (i = 0; i< x.length; i++) {
        img = x[i].childNodes[0].nodeValue;
        console.log(img);
        txt += '<img id = "'+i+'" class="thumb" src="images/gallery/thumb/'+img+'.jpg" onclick="refresh_image('+ i + ');">';
        
    }
    console.log(txt);
    document.getElementById("gallery").innerHTML += txt;

  }



function refresh_image(i) {

    console.log(i);

    // Get filename
    filename = xmlDoc.getElementsByTagName('filename')[i].childNodes[0].nodeValue

    // Set main image
    $('#image_image').attr('src', 'images/gallery/main/'+filename+'.jpg');

    // Set title
    title = xmlDoc.getElementsByTagName('title')[i].childNodes[0].nodeValue;
    $('#image_title').text(title);

    // Set title
    // object = xmlDoc.getElementsByTagName('object')[i].childNodes[0].nodeValue;
    // $('#image_object').text('>'+object);

    // Set credit
    credit = xmlDoc.getElementsByTagName('credit')[i].childNodes[0].nodeValue;
    $('#image_credit').html('<b>Credit:</b>'+credit);

    // Get description and format
    description = xmlDoc.getElementsByTagName('description')[i].childNodes[0].nodeValue;
    description = description.replace(/(?:\r\n|\r|\n)/g, '<br>');

    // Set description
    $('#image_description').html(description);

    // Show image + description
    $("#overlay").show();
    $("#image_container").show();

}

function hide_image() {
    $("#overlay").hide();
    $("#image_container").hide();
}


function hide_about() {
    $("#about").hide();
}

function show_about() {
    $("#about").show();
}


