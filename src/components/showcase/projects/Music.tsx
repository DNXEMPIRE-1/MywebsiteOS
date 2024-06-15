import React, { useState } from 'react';
// @ts-ignore
import house from '../../../assets/audio/house_master.mp3';
// @ts-ignore
import edge from '../../../assets/audio/edge_unmastered.mp3';
// @ts-ignore
import dnb from '../../../assets/audio/break.mp3';
// @ts-ignore
import dnbDrums from '../../../assets/audio/dnb_drop_drums.mp3';
// @ts-ignore
import dubstep from '../../../assets/audio/Dubstep.mp3';
// @ts-ignore
import africa from '../../../assets/audio/africa.mp3';
// @ts-ignore
import badguy from '../../../assets/audio/badguy.mp3';
// @ts-ignore
import future from '../../../assets/audio/future.mp3';
// @ts-ignore
import sample from '../../../assets/audio/sample.mp3';
// @ts-ignore
import vybz from '../../../assets/audio/vybz.mp3';
// @ts-ignore
import trap from '../../../assets/audio/trap.mp3';


import houseProject from '../../../assets/pictures/projects/audio/houseProject.png';
import dnbDrumsProject from '../../../assets/pictures/projects/audio/dnbDrumsProject.png';
import dubstepProject from '../../../assets/pictures/projects/audio/dubstep.png';
import africaProject from '../../../assets/pictures/projects/audio/africa.png';
import badguyProject from '../../../assets/pictures/projects/audio/badguy.png';

import { MusicPlayer } from '../../general';

export interface MusicProjectsProps {}

const MusicProjects: React.FC<MusicProjectsProps> = (props) => {
    const [currentSong, setCurrentSong] = useState<string>('');

    return (
        <div className="site-page-content">
            <h1>Music & Sound</h1>
            <h3>Ventures</h3>
            <br />
            <div className="text-block">
                <p>
                    Music has been a passion of mine for my whole life. When I
                    was 20 years old, I downloaded FL Studio and started to
                    produce my own music. I found a wonderful community on
                    reddit called r/edmproduction.
                </p>
                <br />
                <p>
                    I don't release the music that I make publicly as I not only
                    find it difficult to finish songs, but also it's not a
                    priority of mine since I produce mostly because I enjoy the
                    process of learning and creating. However if I am going to
                    dedicate a whole page of my portfolio to my music, you bet
                    I'll have some examples to showoff.
                </p>
                <br />
                <p>
                    Below are some more recent Musical Endeavors I've been
                    working on. I hope you enjoy the music and enjoy the stories
                    behind each of the tracks.
                </p>
            </div>
            <h2>Exploring house</h2>
            <br />
            <p>
                In 2017 to now I went through a phase of really enjoying house, pop and EDM. Inspired, I decided to take a stab at
                making some house tracks.
            </p>
            <br />
            <p>
                I failed a few times as I wasn't really able to nail the style
                and groove I was going for but ultimately ended up creating the
                piece below.
            </p>
            <br />

            <MusicPlayer
                src={house}
                title="Timeless"
                subtitle="Dennis Nzioki - 2020"
                currentSong={currentSong}
                setCurrentSong={setCurrentSong}
            />

            <br />
            <br />
            <div className="captioned-image">
                <img src={houseProject} alt="" />
                <p>
                    <sub>
                        <b>Figure 1:</b> A screenshot of the project file of
                        Timeless. 64 tracks in total.
                    </sub>
                </p>
            </div>
            <p>
                I love so much about this track. I'm particularly very proud of
                the composition and the trichotomy of the happy upbeat energy in
                the intro and first drop, into the rich and euphoric bridge,
                before delving into the darkness of the final build and drop. I
                had an absolute blast making this back in the fall of 2020, and
                every time I revisit it to tweak it just a little more, I have
                so much fun.
            </p>
            <br />
            <p>
                After making this track around fall 2020, my interest for house
                overall was tapering off.
            </p>
            <br />
            <h2>Mid-Tempo?</h2>
            <br />
            <p>
                Only about a month after taking a step away from house I started
                working on a mid-tempo track which I called edge. I did a lot of
                experimenting with this track, and to this day I'm very proud
                with how it turned out. I never got around to finishing it up
                and giving it a proper outro, but I'm still very happy with it's
                current state.
            </p>
            <br />
            <MusicPlayer
                src={edge}
                title="Edge [W.I.P.]"
                subtitle="Dennis Nzioki - 2024"
                currentSong={currentSong}
                setCurrentSong={setCurrentSong}
            />
            <br />
            <p>
                This track is so dark and I love it! The bass and percussion are
                the obvious stars of the piece, and I had a blast designing each
                of them. The bass in this song is layered with a lot of textures
                and they really give it a lot of the character it needs to be
                the driving force of the track. The percussion on the other hand
                gives the track a lot of depth in the high end so when
                juxtaposed with the bass it radiates this dark and mysterious
                vibe.
            </p>
            <br />
            <h2>My love for Drum & Bass</h2>
            <br />
            <p>
                I've always loved drum & bass, and over the years I feel like I
                always come back to it. My first song I ever made was a DnB
                track and as I've continued to make music over these last few
                years the way I produce DnB really reflects my specific taste at
                that time. It's very fun looking back at the various DnB styles
                I've taken stabs at over time and how my taste has evolved.
            </p>
            <br />
            <p>
                The track below is a snip-it from a DnB track I started work on
                back in 2021. I recently decided to pick it up again and work on
                it more because I loved the idea, bassline and especially the
                drums. Below is a short demo of the track including a small
                buildup and drop.
            </p>
            <br />
            <MusicPlayer
                src={dnb}
                title="Break [Demo]"
                subtitle="Dennis Nzioki - 2019/2024"
                currentSong={currentSong}
                setCurrentSong={setCurrentSong}
            />
            <br />
            <p>
                When I picked up work on it again I decided to totally remix the drums 
                and I'm super proud with how they turned out. So proud in fact, I wanted to show
                them off some more on their own! Below are the drums in the
                above track, but isolated. I have also included the sub bass
                because it is drum and bass after all!
            </p>
            <br />
            <MusicPlayer
                src={dnbDrums}
                title="Break [Drums and Sub]"
                subtitle="Dennis Nzioki - 2019/2024"
                currentSong={currentSong}
                setCurrentSong={setCurrentSong}
            />
            <br />
            <div className="captioned-image">
                <img src={dnbDrumsProject} alt="" />
                <p>
                    <sub>
                        <b>Figure 2:</b> Drums and sub for the track Break. See
                        if you can follow along in the image as the audio above
                        plays!
                    </sub>
                </p>
            </div>
            <br />
            <p>
                There are a lot of layers to DnB drums, and I honestly find them
                the hardest to mix and get right since the sound design of DnB
                so often wants to fight in the same frequency range as the
                drums. Because of this I use very aggressive sidechain to keep
                the drums clear while giving me the freedom to not have to
                overly eq the bass and general sound design. I also find that
                parallel compression on drums in DnB can be an absolute life
                saver to keep the drums controlled but still hard hitting.
            </p>
            <br />
            <h2> More Projects</h2>
            <br />
            <MusicPlayer
                src={sample}
                title="Dubstep sample"
                subtitle="Dennis Nzioki - 2019/2024"
                currentSong={currentSong}
                setCurrentSong={setCurrentSong}
            />
            
            <br />
            <MusicPlayer
                src={dubstep}
                title="Dubstep lots of good different tunes"
                subtitle="Dennis Nzioki - 2019/2024"
                currentSong={currentSong}
                setCurrentSong={setCurrentSong}
            />
            <br />
            <div className="captioned-image">
                <img src={dubstepProject} alt="" />
                <p>
                    <sub>
                        <b>Figure 2:</b> Dubstep lots of good different tunes!
                    </sub>
                </p>
            </div>
            <br />
            <br />
            <MusicPlayer
                src={dubstep}
                title="african beat remix"
                subtitle="Dennis Nzioki - 2019/2024"
                currentSong={currentSong}
                setCurrentSong={setCurrentSong}
            />
            <br />
            <div className="captioned-image">
                <img src={dubstepProject} alt="" />
                <p>
                    <sub>
                        <b>Figure 2:</b> african beat remix tunes!
                    </sub>
                </p>
            </div>
            <br />
            <br />
            <MusicPlayer
                src={badguy}
                title="Billie Eilish- Bad Guy"
                subtitle="Dennis Nzioki - 2019/2024"
                currentSong={currentSong}
                setCurrentSong={setCurrentSong}
            />
            <br />
            <div className="captioned-image">
                <img src={badguyProject} alt="" />
                <p>
                    <sub>
                        <b>Figure 2:</b> Billie Eilish- Bad Guy Beat with few modifications!
                    </sub>
                </p>
            </div>
            <br />
           
            <MusicPlayer
                src={future}
                title="Future House(stock plugins)"
                subtitle="Dennis Nzioki - 2019/2024"
                currentSong={currentSong}
                setCurrentSong={setCurrentSong}
            />
            <br />
            
    
            <MusicPlayer
                src={trap}
                title="DARK TRAP BEAT !! ALL STOCK SOUNDS !!"
                subtitle="Dennis Nzioki - 2019/2024"
                currentSong={currentSong}
                setCurrentSong={setCurrentSong}
            />
            
            <br />
            <MusicPlayer
                src={vybz}
                title="vybz kartel hi lmms remake"
                subtitle="Dennis Nzioki - 2019/2024"
                currentSong={currentSong}
                setCurrentSong={setCurrentSong}
            />
            
            
            
            <br />
            <h2>The Future of my music</h2>
            <br />
            <p>
                I enjoy making music and will continue to make music as long as
                I can. I think soon enough I will be releasing music publicly
                since I feel like my personal style has slowly developed into
                something I am proud of over these last few years. I also want
                to one day make an album, but that is a long ways away.
            </p>
            <br />
            <p>
                I am aware this section of my portfolio is rather short, but
                it's because I am very selective with what I want to show off to
                the world. I only
                recently have been feeling very content with the stuff I've made
                and I'm very excited to see what I can do for the future. Thanks
                for listening I hope you enjoyed!
            </p>
            <br />
        </div>
    );
};

// const styles: StyleSheetCSS = {};

export default MusicProjects;
