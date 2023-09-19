const rawList = {
    tykkelser: [
        { nom: 16, r18: 16.8, r12: 17.0, id: "37" },
        { nom: 19, r18: 20.0, r18f: 'fast', r12: 21.0, id: "36" },
        { nom: 22, r18: 23.1, r12: 23.7, r12f: 'fast', id: "1" },
        { nom: 23, r18: 24.2, r18f: 'fast', r12: 25.2, id: "2" },
        { nom: 24, r18: "-", r12: 26.2,id: "3" },
        { nom: 25, r18: 26.2, r18f: 'fast', r12: 27.0, id: "4" },
        { nom: 27, r18: 29.0, r18f: 'fast', r12: "-", id: "31" },
        { nom: 28, r18: 29.0, r18f: 'fast', r12: 29.7,  id: "5" },
        { nom: 29, r18: 30.1, r12: 30.8,  id: "6" },
        { nom: 30, r18: 31.2, r12: 31.8,  id: "7" },
        { nom: 31, r18: 32.2, r12: 32.8,  id: "32" },
        { nom: 32, r18: 33.2, r18f: 'fast', r12: 33.8,  id: "8" },
        { nom: 33, r18: 34.2, r12: 34.8, id: "9" },
        { nom: 34, r18: 35.3, r12: 36.1, r12f: 'fast',  id: "10" },
        { nom: 35, r18: 36.4, r12: 37.1,  id: "11" },
        { nom: 38, r18: 39.4 , r18f: 'fast', r12: 39.9, r12f: 'fast', id: "12" },
        { nom: 39, r18: 40.9, r12: "-",  id: "31" },
        { nom: 40, r18: 41.6, r12: 42.4,  id: "13" },
        { nom: 41, r18: 42.4, r12: "-",  id: "30" },
        { nom: 42, r18: 43.8, r12: 44.0,  id: "14" },
        { nom: 43, r18: 44.5, r12: 46.8,  id: "15" },
        { nom: 44, r18: 45.5,r18f: 'fast', r12: 46.8,  id: "16" },
        { nom: 45, r18: 46.8, r12: 47.8,  id: "17" },
        { nom: 46, r18: 47.7, r12: 48.8,  id: "18" },
        { nom: 47, r18: 48.7, r12: 49.8,  id: "19" },
        { nom: 48, r18: 49.7, r12: 50.9,  id: "28" },
        { nom: 50, r18: 51.7, r18f: 'fast', r12: 53.2, r12f: 'fast', id: "20" },
        { nom: 54, r18: "-", r12: 57.0, id: "29" },
        { nom: 56, r18: 57.9, r12: 59.4,  id: "22" },
        { nom: 62, r18: 63.7, r12: 66.0,  id: "35" },
        { nom: 63, r18: 65.0,  r18f: 'fast', r12: 67.0,  id: "23" },
        { nom: 66, r18: 68.1, r12: 70.1,  id: "26" },
        { nom: 72, r18: "-", r12: 76.9, id: "33" },
        { nom: 75, r18: 77.3,r18f: 'fast', r12: 79.7, id: "27" },
    ],
    sentrumsBredder: [
        { nom: 75, r18: 77.3, r12: 78.1, mkv: 3.8, id: "1" },
        { nom: 85, r18: 87.2, r12: 88.4, mkv: 3.8, id: "2" },
        { nom: 90, r18: 92.6, r12: 93.6, mkv: 3.8,id: "3" },
        { nom: 100, r18: 102.9, r12: 104.0, mkv: 3.8, id: "4" },
        { nom: 105, r18: 108, r12: 109.3, mkv: 3.8,  id: "5" },
        { nom: 110, r18: 113.1, r12: 116.0, mkv: 3.8,  id: "6" },
        { nom: 113, r18: "-", r12: 119.7, mkv: 3.8,  id: "7" },
        { nom: 114, r18: 117.3, r12: 118.6, mkv: 3.8,  id: "8" },
        { nom: 115, r18: 118.3, r12: 119.5, mkv: 3.8,  id: "9" },
        { nom: 125, r18: 128.5, r12: 130.5, mkv: 3.8,  id: "10" },
        { nom: 127, r18: 130.6, r12: 132.0, mkv: 3.8,  id: "11" },
        { nom: 128, r18: 131.1, r12: 133.5, mkv: 4.0,  id: "12" },
        { nom: 130, r18: 133.6, r12: 135.1, mkv: 4.0,  id: "13" },
        { nom: 132, r18: 135.7, r12: 137.1, mkv: 4.0,  id: "14" },
        { nom: 135, r18: 138.8, r12: 140.3, mkv: 4.0,  id: "15" },
        { nom: 140, r18: 143.8, r12: 145.3, mkv: 4.2,  id: "16" },
        { nom: 142, r18: 146.2, r12: 146.2, mkv: 4.2,  id: "17" },
        { nom: 150, r18: 154.1, r12: 155.8, mkv: 4.2,  id: "18" },
        { nom: 152, r18: 156.3, r12: 157.9, mkv: 4.2,  id: "19" },
        { nom: 155, r18: 159.3, r12: 161.0, mkv: 4.2,  id: "20" },
        { nom: 160, r18: 164.4, r12: 166.2, mkv: 4.2,  id: "21" },
        { nom: 165, r18: 169.6, r12: 171.5, mkv: 4.4,  id: "22" },
        { nom: 166, r18: 170.6, r12: 172.5, mkv: 4.4,  id: "23" },
        { nom: 170, r18: 174.8, r12: 176.7, mkv: 4.4,  id: "24" },
        { nom: 172, r18: 176.8, r12: 178.5, mkv: 4.4,  id: "25" },
        { nom: 175, r18: 179.8, r12: 181.7, mkv: 4.4,  id: "26" },
        { nom: 180, r18: 184.9, r12: 186.9, mkv: 4.4,  id: "27" },
        { nom: 186, r18: 191.7, r12: 193.1, mkv: 4.4,  id: "28" },
        { nom: 195, r18: 201.3, r12: 202.8, mkv: 4.6,  id: "29" },
        { nom: 200, r18: 206.5, r12: 208.0, mkv: 4.6,  id: "30" },
        { nom: 210, r18: 216.8, r12: 218.4, mkv: 4.6,  id: "31" },
        { nom: 215, r18: 222.0, r12: 223.6, mkv: 4.6,  id: "32" },
        { nom: 225, r18: 232.5, r12: 234.0, mkv: 4.6,  id: "33" },
    ],
    sideBredder: [
        { nom: 75, r18: 79.0, r12: "-", id: "1" },
        { nom: 95, r18: 98.4, r12: "-", id: "2" },
        { nom: 100, r18: 105.6, r12: "-",id: "3" },
        { nom: 110, r18: 114.0, r12: 118.0, id: "4" },
        { nom: 112, r18: 116, r12: 118.0,  id: "5" },
        { nom: 113, r18: "-", r12: 119.7,  id: "6" },
        { nom: 115, r18: 119, r12: "-",  id: "7" },
        { nom: 125, r18: 131.4, r12: "-",  id: "8" },
        { nom: 150, r18: 157.2, r12: "-",  id: "9" },
        { nom: 175, r18: 183, r12: "-",  id: "10" },
        { nom: 200, r18: 209, r12: "-",  id: "11" },
    ]
}

export default rawList