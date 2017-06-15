var chai = require("chai");
var chaiHttp = require("chai-http");
chai.use(chaiHttp);
var assert = require("assert");
const should = chai.should();

var server = require("../app.js");

const util = require("../helper/helper.js");

describe("helper arrange", () => {
  it("should return 5 arrange item", function() {
    let arr1 = [
      { searchString: "kat", priority: 23 },
      { searchString: "kat", priority: 2 },
      { searchString: "kat", priority: 2 },
      { katid: 222, priority: 0 },
      { katid: 211, priority: 0 }
    ];
    let arr2 = [
      { searchString: "kat", priority: 2 },
      { searchString: "kat", priority: 2 },
      { katid: 363, priority: 0 },
      { searchString: "kat", priority: 23 },
      { searchString: "kat", priority: 2 },
      { katid: 222, priority: 0 },
      { katid: 211, priority: 0 }
    ];
    should.equal(arr1.length, util.arrangeData(arr2).length);
  });
});

describe("helper arrange", () => {
  it("always generate 5 search gift candidate", function() {
    let arr1 = [
      { searchString: "kat", priority: 23 },
      { searchString: "kat", priority: 2 },
      { searchString: "kat", priority: 2 },
      { katid: 222, priority: 0 },
      { katid: 211, priority: 0 }
    ];
    let arr2 = [
      { searchString: "kat", priority: 2 },
      { searchString: "kat", priority: 2 },
      { katid: 363, priority: 0 }
    ];
    should.equal(5, util.arrangeData(arr2).length);
  });
});

describe("helper arrange", () => {
  it("should return 5 arrange item with the highest priority on top", function() {
    let arr2 = [
      { searchString: "kat", priority: 2 },
      { searchString: "kat", priority: 2 },
      { katid: 363, priority: 0 },
      { searchString: "kat", priority: 23 },
      { searchString: "kat", priority: 2 },
      { katid: 222, priority: 0 },
      { katid: 211, priority: 0 }
    ];
    should.equal(arr2[3], util.arrangeData(arr2)[0]);
  });
});

temp = {};
temp.recomendation = [
  {
    name: "Semua Suka",
    url: "https://www.facebook.com/erian.nurfitrianda/likes_all?lst=1754877951%3A100000027787122%3A1497359851",
    count: "425",
    data: [
      "Tentang Islam",
      "Mobile Legends: Bang bang",
      "OLX Indonesia",
      "PPM Manajemen",
      "George Shella Salon &amp; Baby Spa",
      "Smiling Baby &amp; Kids - Spa &amp; Salon",
      "Blu Plaza Bekasi",
      "Robert Kiyosaki"
    ]
  },
  {
    name: "Acara TV",
    url: "https://www.facebook.com/erian.nurfitrianda/likes_section_tv_shows?lst=1754877951%3A100000027787122%3A1497359851",
    count: "8",
    data: [
      "Halaqah Sentuhan Qalbu",
      "Salam Muslim",
      "Mama Dan Aa Curhat Donk",
      "GGRC ( Gudang Garam Rock Copentisi )",
      "Bola",
      "Teamlo Versus"
    ]
  },
  {
    name: "Musik",
    url: "https://www.facebook.com/erian.nurfitrianda/likes_section_music?lst=1754877951%3A100000027787122%3A1497359851",
    count: "13",
    data: [
      "Indonesian Drummers Balikpapan",
      "Maher Zain",
      "Winterlong",
      "Nasyid Islami",
      "Thank You Allah",
      "SIKSA KUBUR"
    ]
  },
  {
    name: "Buku",
    url: "https://www.facebook.com/erian.nurfitrianda/likes_section_books?lst=1754877951%3A100000027787122%3A1497359851",
    count: "18",
    data: [
      "Meme Islam Indonesia",
      "Komik Hadits Bukhari Muslim, 33 Pesan Nabi",
      "Muhammad Al-Fatih 1453",
      "Komik DKV4",
      "Comics",
      "Al qur&#039;an",
      "&quot;Kisah-Kisah Teladan Islami Penuh Hikmah&quot;",
      "Allah SWT Tuhanku - Muhammad SAW Nabiku - Al-Qur&#039;an Kitabku - Islam Agamaku"
    ]
  },
  {
    name: "Orang",
    url: "https://www.facebook.com/erian.nurfitrianda/likes_people?lst=1754877951%3A100000027787122%3A1497359851",
    count: "6",
    data: [
      "Nabi Muhammad s.a.w.",
      "Aa Gym",
      "Yusuf Mansur (Official)",
      "Mike Portnoy",
      "Dream Theater"
    ]
  },
  {
    name: "Aplikasi dan Permainan",
    url: "https://www.facebook.com/erian.nurfitrianda/likes_section_apps_and_games?lst=1754877951%3A100000027787122%3A1497359851",
    count: "1",
    data: ["Mobile Legends: Bang bang"]
  }
];

describe("POST - Recomend Gift", () => {
  it("should return a gift recomendation", done => {
    chai
      .request(server)
      .post("/recomendation")
      .send({ data: JSON.stringify(temp) })
      .end((err, result) => {
        result.should.have.status(200);
        result.body.should.be.a("object");
        result.body.should.have.property("hasil");
        done();
      });
  });
});
