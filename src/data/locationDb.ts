export interface CityEntry {
  id: number;
  name: string;
}

export interface LocationEntry {
  state: string;
  capital: string;
  cities: CityEntry[];
}

export const LOCATION_DB: LocationEntry[] = [
  {
    state: 'Andaman and Nicobar Islands',
    capital: 'Port Blair',
    cities: [{ id: 29, name: 'Port Blair' }]
  },
  {
    state: 'Andhra Pradesh',
    capital: 'Amaravati',
    cities: [
      { id: 123, name: 'Anantapur' },
      { id: 113, name: 'Chittoor' },
      { id: 130, name: 'Eluru' },
      { id: 85, name: 'Guntur' },
      { id: 8, name: 'Hyderabad' },
      { id: 121, name: 'Kadapa' },
      { id: 132, name: 'Kakinada' },
      { id: 125, name: 'Kurnool' },
      { id: 127, name: 'Machilipatnam' },
      { id: 117, name: 'Nellore' },
      { id: 126, name: 'Ongole' },
      { id: 136, name: 'Srikakulam' },
      { id: 54, name: 'Vijayawada' },
      { id: 134, name: 'Vizag' },
      { id: 135, name: 'Vizianagaram' }
    ]
  },
  {
    state: 'Arunachal Pradesh',
    capital: 'Itanagar',
    cities: [{ id: 20, name: 'Itanagar' }]
  },
  {
    state: 'Assam',
    capital: 'Dispur',
    cities: [
      { id: 138, name: 'Barpeta' },
      { id: 147, name: 'Dibrugarh' },
      { id: 143, name: 'Golaghat' },
      { id: 18, name: 'Guwahati' },
      { id: 144, name: 'Jorhat' },
      { id: 141, name: 'Nagaon' },
      { id: 140, name: 'Nalbari' },
      { id: 146, name: 'Sibsagar' },
      { id: 137, name: 'Silchar' },
      { id: 142, name: 'Tezpur' }
    ]
  },
  {
    state: 'Bihar',
    capital: 'Patna',
    cities: [
      { id: 189, name: 'Araria' },
      { id: 207, name: 'Arrah' },
      { id: 150, name: 'Aurangabad' },
      { id: 180, name: 'Banka' },
      { id: 183, name: 'Begusarai' },
      { id: 202, name: 'Bettiah' },
      { id: 181, name: 'Bhagalpur' },
      { id: 176, name: 'Bihar Sharif' },
      { id: 205, name: 'Buxar' },
      { id: 204, name: 'Chapra' },
      { id: 193, name: 'Darbhanga' },
      { id: 151, name: 'Gaya' },
      { id: 199, name: 'Hajipur' },
      { id: 179, name: 'Jamui' },
      { id: 174, name: 'Jehanabad' },
      { id: 186, name: 'Katihar' },
      { id: 185, name: 'Khagaria' },
      { id: 188, name: 'Kishanganj' },
      { id: 182, name: 'Lakhisarai' },
      { id: 191, name: 'Madhepura' },
      { id: 195, name: 'Madhubani' },
      { id: 200, name: 'Motihari' },
      { id: 184, name: 'Munger' },
      { id: 198, name: 'Muzaffarpur' },
      { id: 175, name: 'Nawada' },
      { id: 27, name: 'Patna' },
      { id: 187, name: 'Purnia' },
      { id: 192, name: 'Samastipur' },
      { id: 152, name: 'Sasaram' },
      { id: 178, name: 'Sheikhpura' },
      { id: 197, name: 'Sheohar' },
      { id: 196, name: 'Sitamarhi' },
      { id: 203, name: 'Siwan' },
      { id: 190, name: 'Supaul' }
    ]
  },
  {
    state: 'Chandigarh',
    capital: 'Chandigarh',
    cities: [{ id: 15, name: 'Chandigarh' }]
  },
  {
    state: 'Chhattisgarh',
    capital: 'Raipur',
    cities: [
      { id: 265, name: 'Ambikapur' },
      { id: 562, name: 'Bijapur' },
      { id: 259, name: 'Bilaspur' },
      { id: 250, name: 'Dantewada' },
      { id: 252, name: 'Dhamtari' },
      { id: 254, name: 'Durg' },
      { id: 249, name: 'Jagdalpur' },
      { id: 261, name: 'Janjgir' },
      { id: 267, name: 'Jashpur' },
      { id: 251, name: 'Kanker' },
      { id: 258, name: 'Kawardha' },
      { id: 263, name: 'Korba' },
      { id: 257, name: 'Mahasamund' },
      { id: 664, name: 'Narayanpur' },
      { id: 262, name: 'Raigarh' },
      { id: 30, name: 'Raipur' },
      { id: 253, name: 'Rajnandgaon' },
      { id: 264, name: 'Surajpur' }
    ]
  },
  {
    state: 'Dadra and Nagar Haveli',
    capital: 'Silvassa',
    cities: [{ id: 65, name: 'Silvassa' }]
  },
  {
    state: 'Daman and Diu',
    capital: 'Daman',
    cities: [{ id: 270, name: 'Daman' }]
  },
  {
    state: 'Delhi',
    capital: 'New Delhi',
    cities: [
      { id: 2, name: 'Delhi' },
      { id: 40, name: 'Gurgaon' },
      { id: 657, name: 'Kanjhawala' },
      { id: 467, name: 'Preet Vihar' },
      { id: 463, name: 'Rajouri Garden' },
      { id: 465, name: 'Sadar Bazar' },
      { id: 473, name: 'Saket' },
      { id: 466, name: 'Shahdara' },
      { id: 462, name: 'Vasant Vihar' }
    ]
  },
  {
    state: 'Goa',
    capital: 'Panaji',
    cities: [
      { id: 274, name: 'Margao' },
      { id: 26, name: 'Panjim' }
    ]
  },
  {
    state: 'Gujarat',
    capital: 'Gandhinagar',
    cities: [
      { id: 10, name: 'Ahmedabad' },
      { id: 296, name: 'Amreli' },
      { id: 56, name: 'Anand' },
      { id: 279, name: 'Bharuch' },
      { id: 58, name: 'Bhavnagar' },
      { id: 302, name: 'Bhuj' },
      { id: 287, name: 'Dahod' },
      { id: 36, name: 'Gandhinagar' },
      { id: 283, name: 'Godhra' },
      { id: 289, name: 'Himmatnagar' },
      { id: 301, name: 'Jamnagar' },
      { id: 298, name: 'Junagadh' },
      { id: 282, name: 'Kheda' },
      { id: 290, name: 'Mehsana' },
      { id: 62, name: 'Navsari' },
      { id: 291, name: 'Palanpur' },
      { id: 293, name: 'Patan' },
      { id: 299, name: 'Porbandar' },
      { id: 52, name: 'Rajkot' },
      { id: 51, name: 'Surat' },
      { id: 294, name: 'Surendranagar' },
      { id: 53, name: 'Vadodara' }
    ]
  },
  {
    state: 'Haryana',
    capital: 'Chandigarh',
    cities: [
      { id: 12, name: 'Ambala' },
      { id: 319, name: 'Bhiwani' },
      { id: 68, name: 'Faridabad' },
      { id: 326, name: 'Fatehabad' },
      { id: 322, name: 'Hissar' },
      { id: 318, name: 'Jhajjar' },
      { id: 323, name: 'Jind' },
      { id: 327, name: 'Kaithal' },
      { id: 328, name: 'Karnal' },
      { id: 329, name: 'Kurukshetra' },
      { id: 314, name: 'Nuh' },
      { id: 315, name: 'Palwal' },
      { id: 332, name: 'Panchkula' },
      { id: 324, name: 'Panipat' },
      { id: 313, name: 'Rewari' },
      { id: 320, name: 'Rohtak' },
      { id: 325, name: 'Sirsa' },
      { id: 321, name: 'Sonepat' },
      { id: 330, name: 'Yamuna Nagar' }
    ]
  },
  {
    state: 'Himachal Pradesh',
    capital: 'Shimla',
    cities: [
      { id: 337, name: 'Bilaspur' },
      { id: 342, name: 'Chamba' },
      { id: 338, name: 'Hamirpur' },
      { id: 340, name: 'Kullu' },
      { id: 339, name: 'Mandi' },
      { id: 334, name: 'Nahan' },
      { id: 33, name: 'Shimla' },
      { id: 335, name: 'Solan' },
      { id: 661, name: 'Una' }
    ]
  },
  {
    state: 'Jammu and Kashmir',
    capital: 'Srinagar',
    cities: [
      { id: 678, name: 'Anantnag' },
      { id: 671, name: 'Badgam' },
      { id: 677, name: 'Doda' },
      { id: 22, name: 'Jammu' },
      { id: 672, name: 'Kargil' },
      { id: 679, name: 'Kathua' },
      { id: 675, name: 'Kishtwar' },
      { id: 670, name: 'Kupwara' },
      { id: 668, name: 'Leh' },
      { id: 669, name: 'Poonch' },
      { id: 674, name: 'Rajauri' },
      { id: 676, name: 'Samba' },
      { id: 673, name: 'Shopian' },
      { id: 34, name: 'Srinagar' },
      { id: 680, name: 'Udhampur' }
    ]
  },
  {
    state: 'Jharkhand',
    capital: 'Ranchi',
    cities: [
      { id: 211, name: 'Bokaro' },
      { id: 219, name: 'Chaibasa' },
      { id: 217, name: 'Daltonganj' },
      { id: 208, name: 'Deoghar' },
      { id: 210, name: 'Dhanbad' },
      { id: 206, name: 'Dumka' },
      { id: 218, name: 'Garhwa' },
      { id: 209, name: 'Giridih' },
      { id: 201, name: 'Godda' },
      { id: 216, name: 'Gumla' },
      { id: 213, name: 'Hazaribagh' },
      { id: 220, name: 'Jamshedpur' },
      { id: 212, name: 'Koderma' },
      { id: 215, name: 'Lohardaga' },
      { id: 194, name: 'Pakur' },
      { id: 214, name: 'Ramgarh' },
      { id: 31, name: 'Ranchi' },
      { id: 307, name: 'Seraikela' }
    ]
  },
  {
    state: 'Karnataka',
    capital: 'Bengaluru',
    cities: [
      { id: 349, name: 'Bagalkot' },
      { id: 356, name: 'Ballari' },
      { id: 576, name: 'Belgaum' },
      { id: 6, name: 'Bengaluru' },
      { id: 333, name: 'Bidar' },
      { id: 422, name: 'Chamarajanagar' },
      { id: 381, name: 'Chickmagaluru' },
      { id: 391, name: 'Chikkaballapura' },
      { id: 379, name: 'Chitradurga' },
      { id: 378, name: 'Davangere' },
      { id: 371, name: 'Dharwad' },
      { id: 368, name: 'Gadag' },
      { id: 577, name: 'Gulbarga' },
      { id: 382, name: 'Hassan' },
      { id: 377, name: 'Haveri' },
      { id: 376, name: 'Karwar' },
      { id: 411, name: 'Kolar' },
      { id: 360, name: 'Koppal' },
      { id: 419, name: 'Mandya' },
      { id: 75, name: 'Mangalore' },
      { id: 49, name: 'Mysore' },
      { id: 344, name: 'Raichur' },
      { id: 416, name: 'Ramanagara' },
      { id: 380, name: 'Shimoga' },
      { id: 390, name: 'Tumakuru' },
      { id: 383, name: 'Udupi' },
      { id: 343, name: 'Yadgir' }
    ]
  },
  {
    state: 'Kerala',
    capital: 'Thiruvananthapuram',
    cities: [
      { id: 171, name: 'Alappuzha' },
      { id: 164, name: 'Kakkanad' },
      { id: 145, name: 'Kalpetta' },
      { id: 139, name: 'Kannur' },
      { id: 133, name: 'Kasaragod' },
      { id: 166, name: 'Kollam' },
      { id: 168, name: 'Kottayam' },
      { id: 148, name: 'Kozhikode' },
      { id: 149, name: 'Malappuram' },
      { id: 153, name: 'Palakkad' },
      { id: 665, name: 'Pandakkal' },
      { id: 177, name: 'Pathanamthitta' },
      { id: 154, name: 'Thrissur' },
      { id: 35, name: 'Trivandrum' }
    ]
  },
  {
    state: 'Madhya Pradesh',
    capital: 'Bhopal',
    cities: [
      { id: 13, name: 'Bhopal' },
      { id: 48, name: 'Gwalior' },
      { id: 46, name: 'Indore' },
      { id: 472, name: 'Jabalpur' },
      { id: 47, name: 'Ujjain' }
    ]
  },
  {
    state: 'Maharashtra',
    capital: 'Mumbai',
    cities: [
      { id: 3, name: 'Mumbai' },
      { id: 76, name: 'Nagpur' },
      { id: 372, name: 'Nashik' },
      { id: 42, name: 'Navi Mumbai' },
      { id: 81, name: 'Pimpri' },
      { id: 7, name: 'Pune' },
      { id: 353, name: 'Solapur' },
      { id: 41, name: 'Thane' }
    ]
  },
  {
    state: 'Manipur',
    capital: 'Imphal',
    cities: [{ id: 19, name: 'Imphal' }]
  },
  {
    state: 'Meghalaya',
    capital: 'Shillong',
    cities: [
      { id: 32, name: 'Shillong' },
      { id: 111, name: 'Tura' }
    ]
  },
  {
    state: 'Mizoram',
    capital: 'Aizawl',
    cities: [{ id: 11, name: 'Aizwal' }]
  },
  {
    state: 'Nagaland',
    capital: 'Kohima',
    cities: [
      { id: 107, name: 'Dimapur' },
      { id: 24, name: 'Kohima' }
    ]
  },
  {
    state: 'Odisha',
    capital: 'Bhubaneswar',
    cities: [
      { id: 14, name: 'Bhubhaneswar' },
      { id: 92, name: 'Cuttack' },
      { id: 91, name: 'Puri' },
      { id: 98, name: 'Sambalpur' }
    ]
  },
  {
    state: 'Pondicherry',
    capital: 'Puducherry',
    cities: [{ id: 28, name: 'Pondicherry' }]
  },
  {
    state: 'Puducherry',
    capital: 'Puducherry',
    cities: [
      { id: 106, name: 'Karaikal' },
      { id: 105, name: 'Yanam' }
    ]
  },
  {
    state: 'Punjab',
    capital: 'Chandigarh',
    cities: [
      { id: 159, name: 'Amritsar' },
      { id: 23, name: 'Jalandhar' },
      { id: 73, name: 'Ludhiana' },
      { id: 128, name: 'Mohali' },
      { id: 124, name: 'Patiala' }
    ]
  },
  {
    state: 'Rajasthan',
    capital: 'Jaipur',
    cities: [
      { id: 21, name: 'Jaipur' },
      { id: 221, name: 'Jodhpur' },
      { id: 45, name: 'Kota' },
      { id: 225, name: 'Udaipur' }
    ]
  },
  {
    state: 'Sikkim',
    capital: 'Gangtok',
    cities: [{ id: 17, name: 'Gangtok' }]
  },
  {
    state: 'Tamil Nadu',
    capital: 'Chennai',
    cities: [
      { id: 5, name: 'Chennai' },
      { id: 509, name: 'Coimbatore' },
      { id: 478, name: 'Madurai' },
      { id: 503, name: 'Salem' },
      { id: 492, name: 'Tiruchirappalli' }
    ]
  },
  {
    state: 'Telangana',
    capital: 'Hyderabad',
    cities: [
      { id: 8, name: 'Hyderabad' },
      { id: 490, name: 'Karimnagar' },
      { id: 488, name: 'Khammam' },
      { id: 491, name: 'Nizamabad' },
      { id: 489, name: 'Warangal' }
    ]
  },
  {
    state: 'Tripura',
    capital: 'Agartala',
    cities: [{ id: 9, name: 'Agartala' }]
  },
  {
    state: 'Uttar Pradesh',
    capital: 'Lucknow',
    cities: [
      { id: 72, name: 'Agra' },
      { id: 395, name: 'Aligarh' },
      { id: 442, name: 'Allahabad' },
      { id: 415, name: 'Bareilly' },
      { id: 39, name: 'Ghaziabad' },
      { id: 428, name: 'Gorakhpur' },
      { id: 38, name: 'Greater Noida' },
      { id: 260, name: 'Jhansi' },
      { id: 292, name: 'Kanpur' },
      { id: 25, name: 'Lucknow' },
      { id: 396, name: 'Mathura' },
      { id: 311, name: 'Meerut' },
      { id: 37, name: 'Noida' },
      { id: 451, name: 'Varanasi' }
    ]
  },
  {
    state: 'Uttarakhand',
    capital: 'Dehradun',
    cities: [
      { id: 169, name: 'Almora' },
      { id: 16, name: 'Dehradun' },
      { id: 167, name: 'Haridwar' },
      { id: 170, name: 'Nainital' },
      { id: 172, name: 'Rudrapur' }
    ]
  },
  {
    state: 'West Bengal',
    capital: 'Kolkata',
    cities: [
      { id: 400, name: 'Howrah' },
      { id: 4, name: 'Kolkata' }
    ]
  }
];
