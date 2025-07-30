import { Injectable } from '@angular/core';
import { items } from './itemsmodel';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class Items {
  
  itemlist:items[]=[
      {
       placeId:"1",
       PlaceArea:"Hyderabad",
    placeName:"Charminar",
    placeDescription:"The Charminar (lit'four minarets') is a monument located in Hyderabad, Telangana, India. Constructed in 1591, the landmark is a symbol of Hyderabad and officially incorporated in the emblem of Telangana.",
    placePrice:"Adult: 20 Child: 10",
    placeCategory:"monument",
    placeImage:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/98/f7/df/charminar.jpg?w=600&h=500&s=1",
    },
    {
       placeId:"2",
       PlaceArea:"Hyderabad",
    placeName:"Golconda Fort",
    placeDescription:"The Golconda Fort is a majestic testament to history and architectural grandeur in the western region of Hyderabad, only 9 km from Hussain Sagar Lake. It dates back to 1143 when it was known as Mangal and has witnessed centuries of stories and reigns from Bahmani Sultans to Qutub Shahi rulers.",
    placePrice:"Adult: 20 Child: 10",
    placeCategory:"	Fort",
    placeImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqai5GcAZjoS0uxtr4eGVZ1NnC_RdMOqhqLA&s",
    },
    {
       placeId:"3",
       PlaceArea:"Hyderabad",
    placeName:"Ramoji Film City",
    placeDescription:"As one of the most iconic theme parks in Hyderabad, Ramoji Film City offers a perfect escape with the finest blend of fun and excitement.",
    placePrice:"Adult: 1450 Child: 750",
    placeCategory:"Film City",
    placeImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxNcgBRWw5a8JGPgS6oYgDrPUs_Zxa2HUfQQ&s",
    },
    {
       placeId:"4",
       PlaceArea:"Hyderabad",
    placeName:"Shri Jagannath Temple",
    placeDescription:"The temple located near Banjara hills Road no.12 (twelve) in Hyderabad is famous for its annual Rathyatra festival attended by thousands of devotees.",
    placePrice:"Free",
    placeCategory:"Temple",
    placeImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL4lWPnUunHEDOwsqy6UwnCzY5ASzLmRKgTg&s",
    },
    {
       placeId:"5",
       PlaceArea:"Hyderabad",
    placeName:"Salar Jung Museum",
    placeDescription:"The Salar Jung Museum is an art museum located at Dar-ul-Shifa, on the southern bank of the Musi River in the city of Hyderabad, Telangana, India.",
    placePrice:"Adult: 500 Child: 250",
    placeCategory:"Musem",
    placeImage:"https://map.sahapedia.org/admin/assets/images/202105191621412730_Banner.jpg?__imr__=bannerMuseum",
    },
    {
       placeId:"6",
       PlaceArea:"Hyderabad",
    placeName:"Birla Mandir",
    placeDescription:"Birla Mandir is a Hindu temple built on a 280 feet (85 m) high hillock called Naubath Pahad also known as “Mohabat Pahad” in early days on a 13 acres (53,000 m2) plot in Hyderabad, Telangana, India.",
    placePrice:"Free",
    placeCategory:"Temple",
    placeImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU0AycMF51wFk0y4c1Md-nS0h9w8TN3wxCEA&s",
    },
    {
       placeId:"7",
       PlaceArea:"Hyderabad",
    placeName:"Chowmahalla Palace",
    placeDescription:"Chowmahalla Palace, in Hyderabad's Old City, is a legacy of the Nizams, a tribute to their architecture, and a monument to Hyderabad's history.",
    placePrice:"Adult: 400 Child: 200",
    placeCategory:"Tourist attraction",
    placeImage:"https://www.hyderabadtourism.travel/images//v2/header-places/chowmahalla-palace-hyderabad-tourism-entryfee-timings-reviews-header.jpg",
    },
    {
       placeId:"8",
       PlaceArea:"Hyderabad",
    placeName:"Nehru Zoological Park",
    placeDescription:"The zoo occupies 380 acres and is adjacent to the 600-acre Mir Alam Tank. Nearly 100 species of birds, animals and reptiles are housed at the zoo.",
    placePrice:"Adult: 100 Child: 50",
    placeCategory:"Zoo",
    placeImage:"https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2024/01/02/2ecd80be85adcbedc24d3f4ab2a3f8ae_1000x1000.jpg",
    },
    {
       placeId:"9",
       PlaceArea:"Hyderabad",
    placeName:"Wonderla Amusement Park",
    placeDescription:"Experience unlimited fun and adventure at Wonderla Hyderabad – India's largest amusement park with thrilling rides, water slides, and family entertainment.",
    placePrice:"Adult: 1500 Child: 1000",
    placeCategory:"Park",
    placeImage:"https://holidayszone.in/images/sightseeing-places/hyderabad/wonderla-amusement-park-hyderabad.jpg",
    },
    {
       placeId:"10",
    placeName:"Shilparamam",
    PlaceArea:"Hyderabad",
    placeDescription:"Village known for its traditional crafts & cultural shows, featuring a model village, museum & lake.",
    placePrice:"Adult: 40 Child: 20",
    placeCategory:"Handicraft",
    placeImage:"https://www.hyderabadtourism.travel/images/visiting-places/headers/shilparamam-hyderabad-tourism-entry-fee-timings-holidays-reviews-header.jpg",
    },

    {
      placeId:"11",
      PlaceArea:"Chennai",
    placeName:"Arulmigu Sri Parthasarathyswamy Temple",
    placeDescription:"The Parthasarathy Temple is a 6th-century Hindu Vaishnavite temple dedicated to Vishnu in Chennai, India.",
    placePrice:"Free",
    placeCategory:"Temple",
    placeImage:"https://images.jdmagicbox.com/v2/comp/chennai/48/044p3028448/catalogue/arulmigu-sri-parthasarathy-swamy-temple-triplicane-chennai-temples-4hz7ggt.jpg",
    },
    {
      placeId:"12",
      PlaceArea:"Chennai",
    placeName:"Express Avenue",
    placeDescription:"The mall is situated near the Royapettah Clock Tower. The mall is built on an 8-acre site inside the historic Indian Express Estate and has four floors of retail space, a building for corporate offices and a hotel. Out of 10 acres, about 3.57 acres have been taken up by buildings.",
    placePrice:"Free",
    placeCategory:"Mall",
    placeImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfj0fABhX1IPwDFV0-6fgd4SzKxQHoed3s8w&s",
    },
    {
      placeId:"13",
      PlaceArea:"Chennai",
    placeName:"Snow Kingdom",
    placeDescription:"Indoor attraction featuring manmade snow, sledding, a mountain for climbing & upbeat music.",
    placePrice:"Adult: 750 Child: 500",
    placeCategory:"Indoor Snow",
    placeImage:"https://lh3.googleusercontent.com/p/AF1QipMQEZXmf9kh0h-BXuQbTGGMeiFm0f1r2PZOalba=s294-w294-h220-n-k-no",
    },
    {
      placeId:"14",
      PlaceArea:"Chennai",
    placeName:"Marina Beach",
    placeDescription:"Bustling urban beach featuring a long shoreline for basking & a variety of food stalls & shops.",
    placePrice:"Free",
    placeCategory:"Beach",
    placeImage:"https://lh3.googleusercontent.com/gpms-cs-s/AB8u6HYkb5bot5tLYIGWTeU_3cVrDwl1onE6R5EBUWlvdJfvJk9diUdhNalr2x7wS3yLGl4FTi-YOR_GvH1H5XH6Cq5nA5PqqkdgKy53Oxz98KK8oLfVSrbijKlFdJLvZrq2N_HXTRxE=s294-w294-h220-n-k-no",
    },
    {
      placeId:"15",
      PlaceArea:"Chennai",
    placeName:"Government Museum Chennai",
    placeDescription:"State collections including Indian art & sculpture, bronzes, anthropology & a children's section.",
    placePrice:"Adult: 250 Child: 150",
    placeCategory:"Museum",
    placeImage:"https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrsjhk4XjI6veyCRBbmTB15-pWxDubt_vORFnFQb2HoVZOfsMfhCa6vr6j4ZyuIQr6ua0RJat6z82nFasoTWPgWAAYv0JlHhd_WOfwoZxzFfQL8q4eKmePy-B5jw9xh4gUZF8CU=s294-w294-h220-n-k-no",
    },
    {
      placeId:"16",
      PlaceArea:"Chennai",
    placeName:"VGP Marine Kingdom",
    placeDescription:"Big aquarium with 5 aquatic zones, an underwater tunnel, touch-pool exhibit & live feeding shows.",
    placePrice:"Adult: 800 Child: 400",
    placeCategory:"Aquarium",
    placeImage:"https://travellerscribe.com/wp-content/uploads/2024/03/VGP-Marine-Kingdom.webp",
    },

    {
      placeId:"17",
      PlaceArea:"Bangalore",
    placeName:"Lalbagh Botanical Garden",
    placeDescription:"Botanical garden with an aquarium & glasshouse designed to mimic London's former Crystal Palace.",
    placePrice:"Adult: 50 Child: 25",
    placeCategory:"Botanical garden",
    placeImage:"https://lh3.googleusercontent.com/gps-cs-s/AC9h4npf5jFIwo2vZ4sMYjRJQ70745t0j47WXV3cWXFA6Wb-Bp1BP8avh9Qumj1FcjoZhH9SE1Q21iyF458hjJSGU_i2uZz51Zlt_aOAiISOy-GWkzovqvlKnOqadmai3mXDiBA-L9w=s294-w294-h220-n-k-no",
    },
    {
      placeId:"18",
      PlaceArea:"Bangalore",
    placeName:"ISKCON Bangalore",
    placeDescription:"Expansive, modern Hare Krishna temple campus, including shrines, food stalls & souvenir shops.",
    placePrice:"Free",
    placeCategory:"Temple",
    placeImage:"https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqFO2feuEtpy71EBJLN_Egn2JVu2abGsQwoBmEmCl31eevIDsoIqvdTa1EcdiQN-0_cR7EZRGWNIJuiCdLbeFfmUkZ4YM0y3BS0PTljcQvQ1dfa7o-Rtsz5odE5FGUh2hFbddjr=s294-w294-h220-n-k-no",
    },
    {
      placeId:"19",
      PlaceArea:"Bangalore",
    placeName:"Bengaluru Palace",
    placeDescription:"Modern royal palace modeled on Windsor Castle offering tours, outdoor concerts & an amusement park.",
    placePrice:"Adult: 100 Child: 50",
    placeCategory:"Historical place museum",
    placeImage:"https://www.fabhotels.com/blog/wp-content/uploads/2019/05/Bangalore-Palace_600.jpg",
    },
    {
      placeId:"20",
      PlaceArea:"Bangalore",
    placeName:"Palace of Tipu Sultan",
    placeDescription:"Tipu Sultan's Summer Palace, in Bangalore, India, is an example of Indo-Islamic architecture and was the summer residence of the Mysorean ruler Tipu Sultan.",
    placePrice:"Adult: 20 Child: 10",
    placeCategory:"Palace",
    placeImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScRxSx2KoeempE0ShfUifoWznU4Yp8sQoYlw&s",
    },
    {
      placeId:"21",
      PlaceArea:"Bangalore",
    placeName:"Jawaharlal Nehru Planetarium",
    placeDescription:"Planetarium with shows in Kannada & English, plus a science center for educational activities.",
    placePrice:"Adult: 100 Child: 50",
    placeCategory:"Planetarium",
    placeImage:"https://lh3.googleusercontent.com/p/AF1QipMLjjYXHcX8etqN-jT0XO0GHe5LGzjrTZPWaiDQ=s294-w294-h220-n-k-no",
    },
    {
      placeId:"22",
      PlaceArea:"Bangalore",
    placeName:"Bannerghatta National Park",
    placeDescription:"Spanning an area of 260.51 sq km., the Bannerghatta National Park boasts of a Lion and Tiger Safari, with enclosures that recreate their natural habitat.",
    placePrice:"Adult: 100 Child: 50",
    placeCategory:"National Park",
    placeImage:"https://lh3.googleusercontent.com/gps-cs-s/AC9h4npvPNvHdi2wLBFTwdOOxq-GLOOPMMaTDKjGJZHfjGfzBasfFMExz2mcuFryKVwfs_lgAM9h0d0YZLMjGaqCSm0-mJf7HfPZGldpztCwjTjDyMo_ViiM2_yeof7smTunA8NIEG7wPQ=s294-w294-h220-n-k-no",
    },
    {
      placeId:"23",
      PlaceArea:"Kochi",
    placeName:"Mattancherry Palace",
    placeDescription:"Kerala-style palace originally built by the Portuguese in 1555 and later renovated by the Dutch.",
    placePrice:"Adult: 250 Child: 150",
    placeCategory:"istory museum",
    placeImage:"https://lh3.googleusercontent.com/gps-cs-s/AC9h4no1QUekPTeNaDbbASmWImdDBGLZ4qR6r0h2ZIA1IF266GlxF3APZWq9_nGB6Ua76oL7f3LtJ-mLtvaIomAK7bqYfJrt6GtyWI5UdSG4vXgXmF67q0BdW3IoGsP0byNnEHEBD_X6eQ=s294-w294-h220-n-k-no",
    },
    {
      placeId:"24",
      PlaceArea:"Kochi",
    placeName:"Chottanikkara Bhagavathy Temple",
    placeDescription:"Hindu temple complex with shrines to multiple deities, sculptures & dramatic walls of lanterns.",
    placePrice:"Free",
    placeCategory:"Temple",
    placeImage:"https://lh3.googleusercontent.com/gps-cs-s/AC9h4no98WhDb0d0gNFFoQMnWOvqii08EXVL6IH_kcDN1B8cjuWtaUvT1ZF2Q9YBmBbAJoyiTwAfkbTETQ08hkaCNokuDXHsSjZ8Uw2H40oVS3Y5jtEI5iOLH1Ifb8ophIaG3Ykwk2ra=s294-w294-h220-n-k-no",
    },
    {
      placeId:"25",
      PlaceArea:"Kochi",
    placeName:"Hill Palace Museum",
    placeDescription:"Large 19th-century palace complex with an archeological & heritage museum, plus unique parks.",
    placePrice:"Adult: 50 Child: 25",
    placeCategory:"Archaeological museum",
    placeImage:"https://lh3.googleusercontent.com/gpms-cs-s/AB8u6HbIIWuKdWvmzYq9f_W6PRLU2hxbkFtnQQgoth9Ks3__YJkdFoLIfBFERtXQXpMTYR2M9K6trvyhAHVC-RDlKwUtOSbXqvXM9quDGfOT_DghipvLTGiyJkjTLUPR3TkIUygdEdrJ=s294-w294-h220-n-k-no",
    },
    {
      placeId:"26",
      PlaceArea:"Kochi",
    placeName:"GREAT K V Kathakali centre",
    placeDescription:"Founded in 1990, this traditional arts center presents masked Kathakali dance shows & martial arts.",
    placePrice:"Adult: 500 Child: 250",
    placeCategory:"Dance school",
    placeImage:"https://lh3.googleusercontent.com/p/AF1QipMJPj85ztjYqNzrVyWeWXxc0ID_P7Dmd4jQdi-b=s294-w294-h220-n-k-no",
    },
    {
      placeId:"27",
      PlaceArea:"Kochi",
    placeName:"Kerala Museum",
    placeDescription:"Local history & culture are showcased with sound & light shows, doll collections & art exhibits.",
    placePrice:"Adult: 150 Child: 75",
    placeCategory:"Museum",
    placeImage:"https://lh3.googleusercontent.com/gpms-cs-s/AB8u6HZe4q7FuH9U_zuuCNklEN5XMzVSXDSipKRx36r2xwz14D7nII8su39xTFEW1igSPVJuCgtEmT9MSA8PRSCk1wIGDRBJc3KUbxrN72EefPFnEc_iB5qTLsqAhhll4twd_jR2xIK1=s294-w294-h220-n-k-no",
    },
    {
      placeId:"28",
      PlaceArea:"Kochi",
    placeName:"Fort Kochi",
    placeDescription:"Fort Kochi formerly also known as Fort Cochin, is a region of Kochi city in Kerala, India. Fort Kochi takes its name from the Fort Manuel of Kochi.",
    placePrice:"Adult: 250 Child: 150",
    placeCategory:"Fort ",
    placeImage:"https://lh3.googleusercontent.com/gpms-cs-s/AB8u6HZGdIT1v6MOJjTdyEpyR5Dw0WaufY0Ig9nk3r4myG909zgGKDq6GFnZSpnd5r1pzP5mIh8FofNFkSKWjY6fTzqJMrA41L_siN3LVlmkf4NzmVPWoXBLepeKW31P3YMQ3wlx_UqN1w=s294-w294-h220-n-k-no",
    },
    {
    placeId:"29",
    PlaceArea:"Visakhapatnam",
    placeName:"Sri Varahalakshmi Narasimha Swamy Vari Devasthanam",
    placeDescription:"Hilltop Hindu temple with a monumental shrine dedicated to Narasimha, an incarnation of Vishnu.",
    placePrice:"Free",
    placeCategory:"Temple",
    placeImage:"https://lh3.googleusercontent.com/gpms-cs-s/AB8u6HbN74QY3X6ProfvNnAZ84MGhoHTvk9aJtB331HyWgr0GcjajX9xq6x1TsUXlq-LFXNSwsuSxL-FztFmwOCRS4FmhHwkmXDm1nQcBQ_mk68c7CI2pNFqLcjF7Jj9cUwZp-A3t_km=s294-w294-h220-n-k-no",
    },
    {
    placeId:"30",
    PlaceArea:"Visakhapatnam",
    placeName:"VMRDA INS Kursura Submarine Museum",
    placeDescription:"Submarine museum & former navy vessel offering cabin tours by retired military personnel.",
    placePrice:"Adult: 70 Child: 35",
    placeCategory:"VMRDA INS Kursura Submarine Museum",
    placeImage:"https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrt4Beigg3cnw0VxdGiFaFiHY950hzy7QSYL1CyPW4wn6wPDuTIR_nF3HMFeIY_8fuj6qtf3ERpqhOXPnRgEvtVCYisKFnrXRJNtkGRw7ps5xlHgaMFXFi9hDurHcIAxtQ-d0g=s294-w294-h220-n-k-no",
    },
    {
    placeId:"31",
    PlaceArea:"Visakhapatnam",
    placeName:"Borra Caves",
    placeDescription:"Tours of limestone caves formed up to 150 million years ago by water and filled with stalagmites.",
    placePrice:"Adult: 60 Child: 30",
    placeCategory:"Tourist attraction",
    placeImage:"https://lh3.googleusercontent.com/gpms-cs-s/AB8u6HaAQj328AcQo5WkddLMUAN82MipvCjmEcSfgBxmXijlW7L367u8uUizownt2f6xLkP-0bKDJECcprtjUilycc0pL0ouqScoG930NDIxH3P9tf1fvGmnTtUHN_oRunTLnBXbKK5U=s294-w294-h220-n-k-no",
    },
    {
    placeId:"32",
    PlaceArea:"Visakhapatnam",
    placeName:"Indira Gandhi Zoological Park",
    placeDescription:"Big wildlife park, toured by vehicle or on foot, showcasing diverse animals, including white tigers.",
    placePrice:"Adult: 200 Child: 100",
    placeCategory:"Zoo",
    placeImage:"https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrP_5KTXc1Dy5DXIUZ2UoZ2MQw6GVlYT-64qk-2SE1Et_NIYGGUjCsXTWKUVq5JW417q0EsLJvUZwvlGWjcrxVZHz2MvFfp2s5Q0hozHuMhSzNpNX6oDH4c2k1J19Wy-Q3r7d5tXg=s294-w294-h220-n-k-no",
    },
    {
    placeId:"33",
    PlaceArea:"Visakhapatnam",
    placeName:"Rushikonda Beach",
    placeDescription:"Bustling, curved beach with clear water, food vendors & water sports like diving & jet skiing.",
    placePrice:"Free",
    placeCategory:"Beach",
    placeImage:"https://lh3.googleusercontent.com/gps-cs-s/AC9h4noqKcfYwpmOxGrio-T3w6lYQhm4HaQ4Wp6u38Nulxa-DlBSA92YZUtX6ss157yTqvbNKN07lbF5hpyPiz-_8mTvftG1wnh9OzfR6BIqr9VS5mQYC3_d4ksCjtvQmKXwaeCmmMQ=s294-w294-h220-n-k-no",
    },
    {
    placeId:"34",
    PlaceArea:"Visakhapatnam",
    placeName:"Kambalakonda Wildlife Sanctuary",
    placeDescription:"Forest reserve sheltering rare flora like the Indian screw tree, plus leopards, pangolins & birds.",
    placePrice:"Adult: 20 Child: 10",
    placeCategory:"Wildlife park",
    placeImage:"https://lh3.googleusercontent.com/gpms-cs-s/AB8u6HZGBxCiQ-xrgN45aNArYLYGgr2JWBAsLVx_medtuYUf_TGDDy772aD8Z3ADJt7fkS0NtklBBrRw_EKQ-MfW6EtK4Wd2xN1eQzcl83GRtk2IpYxaQ1ZYyM7BKk0kFHNeY_5HMWnFWQ=s294-w294-h220-n-k-no",
    },
    {
      placeId:"35",
      PlaceArea:"Goa",
      placeName:"Palolem Beach",
      placeDescription:"Uncrowded stretch of white sand with calm waters, a restaurant and silent disco music parties.",
      placePrice:"Free",
      placeCategory:"Beach",
      placeImage:"https://lh3.googleusercontent.com/gps-cs-s/AC9h4no0w4PEt6GL2fJNE6ldKFb0MbGpMkTcxyHMQhJqWXvlI--VwMahLeQh-BOTwJr_EbBBHDgORr6UljGo_J_54uxXfasp-sTQ3WSP99mppMcGeXupRuzrkFQh6SU6lfjR1Fxdykx7=s294-w294-h220-k-no",
    },
    {
      placeId:"36",
      PlaceArea:"Goa",
      placeName:"Dudhsagar Falls",
      placeDescription:"3-streamed waterfall, named for its milky waters, with swimming pools surrounded by forest.",
      placePrice:"Free",
      placeCategory:"Scenic point",
      placeImage:"https://lh3.googleusercontent.com/gps-cs-s/AC9h4nofGO3IN8yjY6pSJkHPv9PenkP0n1pQQGw5Tv4jvBYHIo53gtCIIpk4BaKgpP7J0FgTc8dkdu-YKRdy_sbjqgybzdVebbVTxH5Wo9-GsbKRPi0Chdt7cYPcmz6sORn7ey1V6X6a=s1360-w1360-h1020-rw",
    },
    {
      placeId:"37",
    PlaceArea:"Goa",
    placeName:"Fort Aguada",
    placeDescription:"1612 Portuguese fortress offering ocean views & an abandoned lighthouse erected in 1864.",
    placePrice:"Adult: 250 Child: 150",
    placeCategory:"Fortress",
    placeImage:"https://lh3.googleusercontent.com/gps-cs-s/AC9h4np0wmYHPILZ-m_jYLJrynrcchHaQz9a9jPC9FOmAoD97k_TTMu2LFFFXxSdl5oVJOUuA5Md4f01POf7fP3PEVmR9tivTcGwn-TZCMriG29TS1x-KnnYNFkQXcHBGn06DQh5YdkT=s294-w294-h220-k-no",
    },
    {
      placeId:"38",
    PlaceArea:"Goa",
    placeName:"Baga Beach",
    placeDescription:"Busy beach & recreation area with water sports, eateries, bars, nightspots & a festive atmosphere.",
    placePrice:"Free",
    placeCategory:"Beach",
    placeImage:"https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrhQGvmhAmkTrEzu1zcjNXrkwJU5iLSybWwTvVlc48suGgWikogl45RkIuxE9_WoEh1XVw9Es_wOXtE65tK0H4ukclGBhzig0f7gEoNQmeNt7FEuEKlpi8-jGcpMd8crrN2_hrn=s294-w294-h220-k-no",
    },
    {
      placeId:"39",
    PlaceArea:"Mumbai",
    placeName:"Gateway Of India Mumbai",
    placeDescription:"Grand, Indo-Saracenic-style, 26m-tall triumphal stone arch, built on the waterfront in 1924.",
    placePrice:"Free",
    placeCategory:"Historical landmark",
    placeImage:"https://lh3.googleusercontent.com/gps-cs-s/AC9h4npdYTCK4JNgoFXydOuB4kRljkcyW29ZozU0e8wHe4lgVha_dXgQE64EwcjnruFDil1A3pOslVzi8k563Sekh_rRCsZhskAVATfvkB6sBOk5cFC9AAtnoiq6nsZ9cTj-IajNJUBKiw=s294-w294-h220-n-k-no",
    },
    {
      placeId:"40",
    PlaceArea:"Mumbai",
    placeName:"Elephanta Caves",
    placeDescription:"Island with an ornately sculpted, 7th-century cave temple dedicated to the Hindu god Shiva.",
    placePrice:"Adult: 600 Child: 300",
    placeCategory:"Historical place",
    placeImage:"https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrJmKhRsNscu8_bjwWwG2AfgTJLcIwiiljWO-NprleDfNb0UJMQJiZXZpeHOwbnDhiv_QTvzIBtpVa2iCYyDyQ_c3_uzr4uadvL4AhODDU5p-FORHZLMDE-1YfpFKjRiod0S7Qd=s1360-w1360-h1020-rw",
    },
    {
      placeId:"41",
    PlaceArea:"Mumbai",
    placeName:"Chhatrapati Shivaji Maharaj Vastu Sangrahalaya",
    placeDescription:"Grand museum with Indo-Saracenic architecture featuring history exhibits, cultural art & education.",
    placePrice:"Adult: 700 Child: 350",
    placeCategory:"History museum",
    placeImage:"https://lh3.googleusercontent.com/p/AF1QipMp5mYHBtWTlScT_c8afK0fw1TvamDYqr7PBZ6D=s294-w294-h220-n-k-no",
    },
    {
      placeId:"42",
    PlaceArea:"Mumbai",
    placeName:"Global Vipassana Pagoda",
    placeDescription:"Built to honour Buddha, this Golden pagoda with a massive stone dome features a meditation hall.",
    placePrice:"Free",
    placeCategory:"Pagoda",
    placeImage:"https://lh3.googleusercontent.com/gpms-cs-s/AB8u6HYrAfF3BaSiRu-iO8C68_xTuS60nFGKPIG5E6hXEe4opCh-sjJZOT3dgH2MRY9iyYB5JXbz1CJa-Cz8WsROx5liQOfTgK2Uj9qO2tvYtVBnrZQE4CrDH1czUcE3T7NecPkcUj_ClQ=s294-w294-h220-n-k-no",
    },
    {
      placeId:"43",
    PlaceArea:"Mumbai",
    placeName:"Mani Bhavan Gandhi Sangrahalaya",
    placeDescription:"Highlighting Gandhi's life, this home features his room, a library, photos, films & other displays.",
    placePrice:"Adult: 20 Child: 10",
    placeCategory:"Historical place museum",
    placeImage:"https://lh3.googleusercontent.com/gps-cs-s/AC9h4nq30uyOdu0q5vapuYoVN-gtlK30MzHeI3h8UU34Al2R3X9FSE3Y1FTMKYm8w6ldLKG2WyMsUDb3uPs1spRV7ecMJRWl1_XaIJHlzmMEXLL_HuVz2VmEL_UpHREgR88-Wznq2iAIPA=s294-w294-h220-n-k-no",
    },
    {
      placeId:"44",
    PlaceArea:"Mumbai",
    placeName:"Shri Mahalakshmi Devi Temple, Mumbai",
    placeDescription:"Famous seaside Hindu temple built in the 18th century with images of 3 goddess & flower stalls.",
    placePrice:"Free",
    placeCategory:"Temple",
    placeImage:"https://lh3.googleusercontent.com/gpms-cs-s/AB8u6HbDXJ5uAALAJg299YYszeYR0UD4bUmHROopdTNWbcWUzx2xTvff6Z4GLuD5jhuLKENNIqfKs__BcI_fpIeTPlQ4iWpb9aPLqnWiOiePcPaW3mzbG_0NIk1KylMr41U1xspuSJRWkQ=s294-w294-h220-n-k-no",
    },
    {
      placeId:"45",
    PlaceArea:"Bhubaneswar",
    placeName:"Lingaraj Temple",
    placeDescription:"Ancient Hindu temple compound featuring carved stone towers, courtyards & numerous shrines.",
    placePrice:"Free",
    placeCategory:"Temple",
    placeImage:"https://lh3.googleusercontent.com/gpms-cs-s/AB8u6HYcEUHQOPa2K4OZAUe1HIWax7I9mwV9ZspbXv1APK5a-ye0A6PyZZqtv44TrQ1_2Q6rUzM8sqyxnqxKspBIYqcFo7ULrjmOuhSilM3DVszjYOhewDoBnBf-OAmWssmTzTx2bhY=s294-w294-h220-n-k-no",
    },
    {
      placeId:"46",
    PlaceArea:"Bhubaneswar",
    placeName:"Udayagiri and Khandagiri Caves",
    placeDescription:"Elaborately carved cave dwellings dating to the 1st c. BCE, topped by an 18th-c. CE Jain temple.",
    placePrice:"Adult: 250 Child: 150",
    placeCategory:"Historical landmark",
    placeImage:"https://lh3.googleusercontent.com/gpms-cs-s/AB8u6HYWdFjSTVXIgLODfF3HMCoPzJMfKubdNIOuJ__6IDEd3Fh7klVTA7ORK5MbqmYDHKzH82wjCqJ-eqMGe0iQerDrE2Hc_VWqZNpyq3Gd7KMMBeySRYBDj8ITTdrPt5c_CDj7doEcIw=s294-w294-h220-n-k-no",
    },
    {
      placeId:"47",
    PlaceArea:"Bhubaneswar",
    placeName:"Nandankanan Zoological Park",
    placeDescription:"Zoo with 1,500+ animals, including white tigers & pangolins, plus a botanical garden & scenic lake.",
    placePrice:"Adult: 100 Child: 50",
    placeCategory:"Zoo",
    placeImage:"https://lh3.googleusercontent.com/gpms-cs-s/AB8u6HZ1fR8Y_zMhBbNyTlH4Js0am-ByCJVTtPlZKtR238ZkbIm-GwOJoFU5eqhC5CRPJ5rckcaIEGllu9wV071EUc1gkI0B3Ab-_z3ip2gIn6IkywgLt5tYtgmMkeYq-TJUCIQR31Bu=s294-w294-h220-n-k-no",
    },
    {
      placeId:"48",
    PlaceArea:"Bhubaneswar",
    placeName:"Rajarani Temple, Bhubaneswar",
    placeDescription:"A large lawn abuts this 11th-century stone Hindu temple known for its intricate sculptures.",
    placePrice:"Adult: 250 Child: 150",
    placeCategory:"Temple",
    placeImage:"https://lh3.googleusercontent.com/gps-cs-s/AC9h4noRj7_Dap9qeCrFpCpi9QYaUo8jKGmHK5337vlAjIU9kOZetynyMJ974Qo-6o4ebQC43Ojl7TIXxZp6A_rfi4wyZuhyW7JGqbAF2b3mEFWWK-phyWfaEwiqmfuFqdnAO02L7p_y-g=s294-w294-h220-n-k-no",
    },
    {
      placeId:"49",
    PlaceArea:"Bhubaneswar",
    placeName:"Odisha State Tribal Museum",
    placeDescription:"Museum displaying tribal costumes, jewelry, art, household objects, musical instruments & more.",
    placePrice:"Adult: 50 Child: 25",
    placeCategory:"Ethnographic museum",
    placeImage:"https://lh3.googleusercontent.com/gpms-cs-s/AB8u6HbkSApBuwWaWe2PMAueSqkK4o3mDV0c2dxG3Drc1CaWlJvKlGx1Xwr9-x5W_jxFecMvnOnnSqSNqLwI0Afeba1la2UCRY3CN8HI4n3Wgb3_K2kb_2mBbxuMeDPTnBwWWfqO-jEY=s294-w294-h220-n-k-no",
    },
    {
      placeId:"50",
    PlaceArea:"Bhubaneswar",
    placeName:"Biju Patnaik Park",
    placeDescription:"Sprawling city park featuring expansive green spaces, manicured gardens, playgrounds & trails.",
    placePrice:"Free",
    placeCategory:"Park",
    placeImage:"https://lh3.googleusercontent.com/gpms-cs-s/AB8u6Hah2E2Tny26DElnE0bElUwf4-lXPuw40t9bdBJOLcFTa1UJCe2Oo7Wm2FM26hD5bi0xwy_erxNUH_6KBeKZyxn0KGXuizqGW_y3j2cz9x0FHFGx0FrmtZkOiOWQNI2sFg=s294-w294-h220-n-k-no",
    },
    {
      placeId:"51",
    PlaceArea:"Bhubaneswar",
    placeName:"Shree Parsurameswara Temple",
    placeDescription:"This Orissan Hindu temple from the Shailodbhava period is dedicated to Shiva & features carvings.",
    placePrice:"Free",
    placeCategory:"Temple",
    placeImage:"https://lh3.googleusercontent.com/gpms-cs-s/AB8u6HbpA8RzAEDXlid242_VrjbXIFMKE2u7HrBcX-yYbDwx41ysad62YjlGZ5q4RQgwmVUQDJ8sqvIj-JxPF6GYMXb1MZvFtj8wiEg8ndXmfWSIB4GTHdDx6MMZpGVyroOASWRgFeFh=s1360-w1360-h1020-rw",
    },
    {
      placeId:"52",
    PlaceArea:"Bhubaneswar",
    placeName:"Chausath Yogini Temple, Hirapur",
    placeDescription:"Roofless, round 9th-century temple with over 50 carvings of goddess-like figures known as yoginis.",
    placePrice:"Free",
    placeCategory:"Temple",
    placeImage:"https://lh3.googleusercontent.com/gpms-cs-s/AB8u6HbL5fUzTaB8bJs3IkBkcfEWhin9gHsHoqWQxqijAIpD0qKit70iDdJrPmfevo9pp9MemVTTU7ijvOW_42acEjn7dfjEjRIl0ZLesA8pIdjmLJvNgxaQLaNeJFsja7eJlMtQkikj=s294-w294-h220-n-k-no",
    },
  ]
  getItems(){
    return of(this.itemlist);
  }

 addItems(proobj:items){
    
    let ob=new Items(); 
    let prokeys=Object.keys(proobj);
    let obkeys=Object.keys(ob) ;
    if(obkeys.every(k=>prokeys.includes(k))) 
    {
      
    return "Item added successfully";
    }
    else{
      this.itemlist.push(proobj);
      return "something went wrong"
    }
  }


  deleteItem(pid:any){
    const index=this.itemlist.findIndex((e)=>e.placeId==pid);
    if(index!=-1){
      this.itemlist.splice(index,1);
      return "deleted successfully"
    }
    else{
      return "something went wrong"
    }
  }

  updateItem(obj:any){
    const index=this.itemlist.findIndex((e)=>e.placeId==obj.placeId);
    this.itemlist.splice(index,1,obj);
    return "product updated"
  }

  getItemById(pid:any){
    return this.itemlist.find(e=>e.placeId==pid);
  }

}
