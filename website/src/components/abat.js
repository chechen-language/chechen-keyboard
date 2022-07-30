import React from 'react'
import { Card } from 'ui-neumorphism';
import { GiCorn, GiVote, GiDrum, GiYarn, GiCurvyKnife, GiLockedChest, GiPistolGun, GiPitchfork, GiPolarStar, GiRose, GiRaven, GiPear, GiFingernail, GiFeather, GiIsland, GiTreeRoots, GiBroom, GiBeehive, GiHumanEar, GiSlippers, GiFruitBowl, GiShinyApple, GiMountainRoad, GiBigEgg, GiPumpkin, GiSpiderWeb, GiEagleHead, GiBellPepper, GiTooth, GiStrawberry, GiUmbrella, GiBigDiamondRing, GiFruitTree, GiRubberBoot, GiWaterFlask } from 'react-icons/gi';
import { MdCrib } from 'react-icons/md';
import { BiBorderNone } from 'react-icons/bi';

const ABAT = [{
    id: 1,
    characterBig: 'A',
    characterSmall: 'a',
    symbol: <MdCrib size='100%'/>,
    description: 'Aga',
}, {
    id: 2,
    characterBig: 'Ä',
    characterSmall: 'ä',
    symbol: <GiEagleHead size='100%' />,
    description: 'Ärzu',
}, {
    id: 3,
    characterBig: 'B',
    characterSmall: 'b',
    symbol: <GiBellPepper size='100%'/>,
    description: 'Burç',
}, {
    id: 4,
    characterBig: 'C',
    characterSmall: 'c',
    symbol: <GiTooth size='100%'/>,
    description: 'Cerg',
}, {
    id: 5,
    characterBig: 'Ċ',
    characterSmall: 'ċ',
    symbol: <GiStrawberry size='100%'/>,
    description: 'Ċazam',
}, {
    id: 6,
    characterBig: 'Ç',
    characterSmall: 'ç',
    symbol: <GiUmbrella size='100%'/>,
    description: 'Çetar',
}, {
    id: 7,
    characterBig: 'Ç̇',
    characterSmall: 'ç̇',
    symbol: <GiBigDiamondRing size='100%'/>,
    description: 'Ç̇urg',
}, {
    id: 8,
    characterBig: 'D',
    characterSmall: 'd',
    symbol: <GiFruitTree size='100%'/>,
    description: 'Ditt',
}, {
    id: 9,
    characterBig: 'E',
    characterSmall: 'e',
    symbol: <GiRubberBoot size='100%'/>,
    description: 'Etkaş',
}, {
    id: 10,
    characterBig: 'Ə',
    characterSmall: 'ə',
    symbol: <BiBorderNone size='100%'/>,
    description: 'Ç̇oġa ẋärk',
}, {
    id: 11,
    characterBig: 'F',
    characterSmall: 'f',
    symbol: <GiWaterFlask size='100%'/>,
    description: 'Flyaga',
}, {
    id: 12,
    characterBig: 'G',
    characterSmall: 'g',
    symbol: <GiSpiderWeb size='100%'/>,
    description: 'Gezgamaşa',
}, {
    id: 13,
    characterBig: 'Ġ',
    characterSmall: 'ġ',
    symbol: <GiPumpkin size='100%'/>,
    description: 'Ġabaq',
}, {
    id: 14,
    characterBig: 'H',
    characterSmall: 'h',
    symbol: <GiBigEgg size='100%'/>,
    description: 'Hoa',
}, {
    id: 15,
    characterBig: 'I',
    characterSmall: 'i',
    symbol: <GiMountainRoad size='100%'/>,
    description: 'Irxe',
}, {
    id: 16,
    characterBig: 'J',
    characterSmall: 'j',
    symbol: <GiShinyApple size='100%'/>,
    description: 'Jaƶ',
}, {
    id: 17,
    characterBig: 'K',
    characterSmall: 'k',
    symbol: <GiFruitBowl size='100%'/>,
    description: 'Kad',
}, {
    id: 18,
    characterBig: 'K̇',
    characterSmall: 'k̇',
    symbol: <GiSlippers size='100%'/>,
    description: 'K̇arxaş',
}, {
    id: 19,
    characterBig: 'L',
    characterSmall: 'l',
    symbol: <GiHumanEar size='100%'/>,
    description: 'Lerg',
}, {
    id: 20,
    characterBig: 'M',
    characterSmall: 'm',
    symbol: <GiBeehive size='100%'/>,
    description: 'Mazlaġa',
}, {
    id: 21,
    characterBig: 'N',
    characterSmall: 'n',
    symbol: <GiBroom size='100%'/>,
    description: 'Nuy',
}, {
    id: 22,
    characterBig: 'Ŋ',
    characterSmall: 'ŋ',
    symbol: <BiBorderNone size='100%'/>,
    description: 'Meran n',
}, {
    id: 23,
    characterBig: 'O',
    characterSmall: 'o',
    symbol: <GiTreeRoots size='100%'/>,
    description: 'Oram',
}, {
    id: 24,
    characterBig: 'Ö',
    characterSmall: 'ö',
    symbol: <GiIsland size='100%'/>,
    description: 'Özig',
}, {
    id: 25,
    characterBig: 'P',
    characterSmall: 'p',
    symbol: <GiFeather size='100%'/>,
    description: 'Pelag',
}, {
    id: 26,
    characterBig: 'Ṗ',
    characterSmall: 'ṗ',
    symbol: <GiFingernail size='100%'/>,
    description: 'Ṗelg',
}, {
    id: 27,
    characterBig: 'Q',
    characterSmall: 'q',
    symbol: <GiPear size='100%'/>,
    description: 'Qor',
}, {
    id: 28,
    characterBig: 'Q̇',
    characterSmall: 'q̇',
    symbol: <GiRaven size='100%'/>,
    description: 'Q̇ig',
}, {
    id: 29,
    characterBig: 'R',
    characterSmall: 'r',
    symbol: <GiRose size='100%'/>,
    description: 'Roza'
}, {
    id: 30,
    characterBig: 'S',
    characterSmall: 's',
    symbol: <GiPolarStar size='100%'/>,
    description: 'Seda'
}, {
    id: 31,
    characterBig: 'Ş',
    characterSmall: 'ş',
    symbol: <GiPitchfork size='100%'/>,
    description: 'Şad'
}, {
    id: 32,
    characterBig: 'T',
    characterSmall: 't',
    symbol: <GiPistolGun size='100%'/>,
    description: 'Tapça'
}, {
    id: 33,
    characterBig: 'Ṫ',
    characterSmall: 'ṫ',
    symbol: <GiLockedChest size='100%'/>,
    description: 'Ṫorkaz'
}, {
    id: 34,
    characterBig: 'U',
    characterSmall: 'u',
    symbol: <GiCurvyKnife size='100%'/>,
    description: 'Urs'
}, {
    id: 35,
    characterBig: 'Ü',
    characterSmall: 'ü',
    symbol: <GiYarn size='100%'/>,
    description: 'Üyrig'
}, {
    id: 36,
    characterBig: 'V',
    characterSmall: 'v',
    symbol: <GiDrum size='100%'/>,
    description: 'Vota'
}, {
    id: 37,
    characterBig: 'X',
    characterSmall: 'x',
    symbol: <GiVote size='100%'/>,
    description: 'Xarƶam'
}, {
    id: 38,
    characterBig: 'Ẋ',
    characterSmall: 'ẋ',
    symbol: <GiCorn size='100%'/>,
    description: 'Ẋäƶk̇a'
}];

export function Main() {
    const alphabet = ABAT.map(item => (
        <Card
            className="p-2 m-2 d-flex text-center flex-column"
            key={item.id}
            style={{
                width: '100px',
            }}
        >
            <h4 className='mb-4'>
                {item.characterBig}&nbsp;
                {item.characterSmall}
            </h4>
            {item.symbol}
            <p className='mt-3'>
                {item.description}
            </p>
        </Card>
    ))
  return (
    <Card
        className="p-2 d-flex flex-wrap justify-content-evenly"
    >
        {alphabet}
    </Card>
  )
}
