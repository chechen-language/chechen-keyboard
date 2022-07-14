//
//  ContentView.swift
//  Chechen Latin Keyboard
//
//  Created by Yusuf Khasbulatov on 12.07.22.
//

import SwiftUI

class ELP: Identifiable, Decodable {
    let id: UUID?
    let characterBig: String
    let characterSmall: String
    let description: String
    
    init(cB: String, cS: String, d: String) {
        id = UUID()
        characterBig = cB
        characterSmall = cS
        description = d
    }
}

let ABAT_ALFA: [ELP] = [
    ELP(cB: "Ye", cS: "ye", d: "Alfa"),
    ELP(cB: "Ya", cS: "ya", d: "Alfa"),
    ELP(cB: "Yä", cS: "yä", d: "Alfa"),
    ELP(cB: "Yu", cS: "yu", d: "Alfa"),
    ELP(cB: "Yü", cS: "yü", d: "Alfa"),
]

let ABAT: [ELP] = [
    ELP(cB: "A", cS: "a", d: "Aga"),
    ELP(cB: "Ä", cS: "ä", d: "Ärzu"),
    ELP(cB: "B", cS: "b", d: "Burç"),
    ELP(cB: "C", cS: "c", d: "Cerg"),
    ELP(cB: "Ċ", cS: "ċ", d: "Ċazam"),
    ELP(cB: "Ç", cS: "ç", d: "Çetar"),
    ELP(cB: "Ç̇", cS: "ç̇", d: "Ç̇urg"),
    ELP(cB: "D", cS: "d", d: "Ditt"),
    ELP(cB: "E", cS: "e", d: "Etkaş"),
    ELP(cB: "Ə", cS: "ə", d: "Ç̇oġa ẋärk"),
    ELP(cB: "F", cS: "f", d: "Flyaga"),
    ELP(cB: "G", cS: "g", d: "Gezgamaşa"),
    ELP(cB: "Ġ", cS: "ġ", d: "Ġabaq"),
    ELP(cB: "H", cS: "h", d: "Hoa"),
    ELP(cB: "I", cS: "i", d: "Irxe"),
    ELP(cB: "J", cS: "j", d: "Jaƶ"),
    ELP(cB: "K", cS: "k", d: "Kad"),
    ELP(cB: "K̇", cS: "k̇", d: "K̇arxaş"),
    ELP(cB: "L", cS: "l", d: "Lerg"),
    ELP(cB: "M", cS: "m", d: "Mazlaġa"),
    ELP(cB: "N", cS: "n", d: "Nuy"),
    ELP(cB: "Ŋ", cS: "ŋ", d: "Meran n"),
    ELP(cB: "O", cS: "o", d: "Oram"),
    ELP(cB: "Ö", cS: "ö", d: "Özig"),
    ELP(cB: "P", cS: "p", d: "Pelag"),
    ELP(cB: "Ṗ", cS: "ṗ", d: "Ṗelg"),
    ELP(cB: "Q", cS: "q", d: "Qor"),
    ELP(cB: "Q̇", cS: "q̇", d: "Q̇ig"),
    ELP(cB: "R", cS: "r", d: "Roza"),
    ELP(cB: "S", cS: "s", d: "Seda"),
    ELP(cB: "Ş", cS: "ş", d: "Şad"),
    ELP(cB: "T", cS: "t", d: "Tapça"),
    ELP(cB: "Ṫ", cS: "ṫ", d: "Ṫorkaz"),
    ELP(cB: "U", cS: "u", d: "Urs"),
    ELP(cB: "Ü", cS: "ü", d: "Üyrig"),
    ELP(cB: "V", cS: "v", d: "Vota"),
    ELP(cB: "X", cS: "x", d: "Xarƶam"),
    ELP(cB: "Ẋ", cS: "ẋ", d: "Ẋäƶk̇a"),
    ELP(cB: "Y", cS: "y", d: "Yöẋ"),
    ELP(cB: "Z", cS: "y", d: "Zjuga")
]

var columnsAbat: [GridItem] = Array(repeating: .init(.fixed(CGFloat(ABAT.count))), count: 8);
var columnsAlfa: [GridItem] = Array(repeating: .init(.fixed(CGFloat(ABAT_ALFA.count))), count: 16);

struct ContentView: View {
    var body: some View {
        VStack {
            LazyVGrid(columns: columnsAbat) {
                ForEach(ABAT) { letter in
                    Text(letter.characterBig)
                    Text(letter.characterSmall)
                }
                ForEach(ABAT_ALFA) { letter in
                    Text(letter.characterBig)
                    Text(letter.characterSmall)
                }
            }
        }
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
