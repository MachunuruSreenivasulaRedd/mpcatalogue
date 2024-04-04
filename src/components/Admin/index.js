import React, {useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import './index.css'
import Popup from 'reactjs-popup';
import ListContext from '../../context/ListContext'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaArrowLeftLong } from "react-icons/fa6";
import 'reactjs-popup/dist/index.css';

const stateConstituency = [{id:1,"name":"Andhra Pradesh", "constituencies":"25"},{"id":2,"name":"Arunachal Pradesh", "constituencies":"2"},{"id":3,"name":"Assam", "constituencies":"14"},{"id":4,"name":"Bihar", "constituencies":"40"},{"id":5,"name":"Chattisgarh", "constituencies":"11"},{"id":6,"name":"Goa", "constituencies":"2"},{"id":7,"name":"Gujarat", "constituencies":"26"},{"id":8,"name":"Haryana", "constituencies":"10"},{"id":9,"name":"Himachal Pradesh", "constituencies":"4"},{"id":10,"name":"Jharkhand", "constituencies":"14"},{"id":11,"name":"Karanataka", "constituencies":"28"},{"id":12,"name":"Kerala", "constituencies":"20"},{"id":13,"name":"Madhya Pradesh", "constituencies":"29"},{"id":14,"name":"Maharashtra", "constituencies":"48"},{"id":15,"name":"Manipur", "constituencies":"2"},
{"id":16,"name":"Meghalaya", "constituencies":"2"},{"id":17,"name":"Mizoram", "constituencies":"1"},{"id":18,"name":"Nagaland", "constituencies":"1"},{"id":19,"name":"Odisha", "constituencies":"21"},{"id":20,"name":"Punjab", "constituencies":"13"},{"id":21,"name":"Rajasthan", "constituencies":"25"},{"id":22,"name":"Sikkim", "constituencies":"1"},{"id":23,"name":"Tamilnadu", "constituencies":"39"},{"id":24,"name":"Telangana", "constituencies":"17"},{"id":25,"name":"Tripura", "constituencies":"2"},{"id":26,"name":"Uttar Pradesh", "constituencies":"80"},{"id":27,"name":"Uttarakhand", "constituencies":"5"},{"id":28,"name":"West Bengal", "constituencies":"42"},{"id":29,"name":"Andamon and Nicobar Islands", "constituencies":"1"},{"id":30,"name":"Chandigarh", "constituencies":"1"},{"id":31,"name":"Dadra and Nagar Haveli and Daman and Diu", "constituencies":"1"},
{"id":32,"name":"Lakshadweep", "constituencies":"1"},{"id":33,"name":"Delhi", "constituencies":"7"},{"id":34,"name":"Puducherry", "constituencies":"1"},]
const constituencies=["North Mumbai","Mumbai North-East","Mumbai-North-Central","Mumbai-North-West","Mumbai-South-Central","Mumbai South"]
const states=["Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chattisgarh","Goa","Gujarat","Haryana","Himachal Pradesh","Jharkhand","Karnataka","Kerala" ,"madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamilnadu","Telangana","Tripura","UttarPradesh","Uttarakhand","WestBengal","Andaman and NicobarIslands","chandigarh","Dadra and Nagar Haveli and Daman and Diu","Lakshadweeep","Delhi","puducherry","Ladakh"]
const stateWiseDetails= [{id:1,name:"Andhra Pradesh", constituencies:25},{id:2,name:"Arunachal Pradesh", constituencies:2},{id:3,name:"Assam",constituencies:14},{id:4,name:"Bihar", "constituencies":"40"},{id:5,name:"Chattisgarh", "constituencies":"11"},{id:6,name:"Goa", "constituencies":"2"},{id:7,name:"Gujarat", "constituencies":"26"},{id:8,name:"Haryana", "constituencies":"10"},{id:9,name:"Himachal Pradesh", "constituencies":"4"},{id:10,name:"Jharkhand", "constituencies":"14"},{id:11,name:"Karanataka", "constituencies":"28"},{id:12,name:"Kerala", "constituencies":"20"},{id:13,name:"Madhya Pradesh", "constituencies":"29"},{id:14,name:"Maharashtra", "constituencies":"48"},{id:15,name:"Manipur", "constituencies":"2"},
{id:16,name:"Meghalaya", "constituencies":"2"},{id:17,name:"Mizoram", "constituencies":"1"},{id:18,name:"Nagaland", "constituencies":"1"},{id:19,name:"Odisha", "constituencies":"21"},{id:20,name:"Punjab", "constituencies":"13"},{id:21,name:"Rajasthan", "constituencies":"25"},{id:22,name:"Sikkim", "constituencies":"1"},{id:23,name:"Tamilnadu", "constituencies":"39"},{id:24,name:"Telangana", "constituencies":"17"},{id:25,name:"Tripura", "constituencies":"2"},{id:26,name:"Uttar Pradesh", "constituencies":"80"},{id:27,name:"Uttarakhand", "constituencies":"5"},{id:28,name:"West Bengal", "constituencies":"42"},{id:29,name:"Andamon and Nicobar Islands", "constituencies":"1"},{id:30,"name":"Chandigarh", "constituencies":"1"},{id:31,name:"Dadra and Nagar Haveli and Daman and Diu", "constituencies":"1"},
{id:32,name:"Lakshadweep", "constituencies":"1"},{id:"33",name:"Delhi", "constituencies":"7"},{id:34,name:"Puducherry", "constituencies":"1"}]
const data = [{"id":1,"de":[{"Amalapuram":"East Godavari"},
    {"Anakapalli":"Visakhapatnam"},
    {"Araku"	:"Srikakulam"},
    {"Bapatla":"Guntur"},
    {"Bapatla":	"Prakasam"},
    {"Chittoor":	"Chittoor"},
   {"Eluru":	"West Godavari"},
    {"Guntur":	"Guntur"},
    {"Kakinada":	"East Godavari"},
    {"Kakinada":	"Visakhapatnam"},
    {"Machilipatnam":	"West Godavari"},
    {"Machilipatnam":	"Krishna"},
    {"Narsapuram":	"East Godavari"},
    {"Narasaraopet":	"Guntur"},
    {"Nellore"	:"Nellore"},
    {"Nellore":	"Prakasam"},
    {"Ongole"	:"Prakasam"},
    {"Rajahmundry":	"East Godavari"},
    {"Rajampet"	:"Chittoor"},
    {"Srikakulam":	"Srikakulam"},
    {"Tirupati":	"Chittoor"},
    {"Tirupati"	:"Nellore"},
    {"Vijayawada":	"Krishna"},
    {"Visakhapatnam":	"Visakhapatnam"},
    {"Vizianagaram":	"Vizianagaram"}]},
    {"id": 2,"de":[{"ArunachalWest": "Arunachal West"},
        {"ArunachalEast": "ArunachalEast"}]},
    {"id":3,"de":[{"Autonomous District":	"Karbi Anglong and Dima Hasao districts"},
        {"Barpeta":"Barpeta district"},
        {"Dhubri":	"Dhubri district"},
        {"Dibrugarh"	:"Dibrugarh district"},
        {"Gauhati":	"Kamrup Metropolitan, Kamrup Rural, and Darrang districts"},
        {"Jorhat":	"Jorhat district"},
        {"Kaliabor":	"Nagaon district"},
        {"Karimganj":	"Karimganj, Hailakandi, and Cachar districts"},
        {"Lakhimpur":	"Lakhimpur district"},
        {"Mangaldoi":	"Darrang, Udalguri, and Mangaldai districts"},
        {"Nawgong"	:"Nowgong district"},
        {"Silchar":	"Cachar district"},
        {"Tezpur"	:"Sonitpur, Biswanath, and Lakhimpur districts"},
        {"Kokrajhar":"Kokrajhar, Chirang, Baksa, and Udalguri districts"}]},
        {"id":4,"de":	[{"Araria":	"Araria district"},
        {"Aurangabad":	"Aurangabad district"},
        {"Banka":"	Banka district"},
        {"Begusarai	":"Begusarai district"},
        {"Bhagalpur	":"Bhagalpur district"},
        {"Buxar	":"Buxar district"},
        {"Darbhanga":"	Darbhanga district"},
        {"Gaya":"	Gaya district"},
        {"Gopalganj	":"Gopalganj district"},
        {"Hajipur":"	Vaishali district"},
        {"Jahanabad":"	Jehanabad district"},
        {"Jamui	":"Jamui district"},
        {"Karakat":"	Rohtas district"},
        {"Katihar":"	Katihar district"},
        {"Khagaria":"	Khagaria district"},
        {"Kishanganj":"	Kishanganj district"},
        {"Madhepura	":"Madhepura district"},
        {"Madhubani	":"Madhubani district"},
        {"Maharajganj":"	Siwan district"},
        {"Munger":"	Munger district"},
        {"Muzaffarpur":"	Muzaffarpur district"},
        {"Nalanda":"	Nalanda district"},
        {"Nawada":"	Nawada district"},
        {"Paschim ":"Champaran	West Champaran district"},
        {"Patna Sahib":"	Patna district"},
        {"Pataliputra":"	Patna district"},
        {"Purvi":" Champaran	East Champaran district"},
        {"Purnia":"	Purnia district"},
        {"Rosera	":"Samastipur district"},
        {"Saharsa	":"Saharsa district"},
        {"Samastipur	":"Samastipur district"},
        {"Saran	":"Saran district"},
        {"Sasaram	":"Rohtas district"},
        {"Sheohar":"	Sheohar district"},
        {"Sitamarhi	":"Sitamarhi district"},
        {"Siwan":"	Siwan district"},
        {"Supaul":"	Supaul district"},
        {"Ujiarpur":"	Samastipur district"},
        {"Vaishali":"	Vaishali district"},
        {"Valmiki Nagar":"West Champaran"}]},
        {"id":5,"de":[{"Bastar":"	Bastar district and parts of Dantewada, and Kondagaon districts"},
        {"Bilaspur":"	Bilaspur district and parts of Bilaspur division"},
        {"Durg":"	Durg district and parts of Rajnandgaon and Durg districts"},
        {"Janjgir-Champa":"	Janjgir-Champa district and parts of Bilaspur division"},
        {"Kanker":"	Kanker district and parts of Bastar district"},
        {"Korba":"	Korba district and parts of Korba and Surguja districts"},
        {" Mahasamund":"	Mahasamund district and parts of Raipur and Mahasamund districts"},
        {" Raigarh":"	Raigarh district and parts of Raigarh district"},
        {"Raipur":"	Raipur district and parts of Dhamtari, Raipur, and Mahasamund districts"},
        {"Rajnandgaon":"	Rajnandgaon district and parts of Rajnandgaon district"},
        {"Surguja":"	Surguja district and parts of Surguja district"}]},
    {"id":6	,"de":[{"North Goa":"North Goa district"},
        {"South Goa"	:"South Goa district"}]},
    {"id":7,"de":[{"Ahmedabad East"	:"Ahmedabad district"},
        {"Ahmedabad West":"	Ahmedabad district"},
        {"Amreli":"	Amreli district and part of Bhavnagar district"},
        {"Anand	":"Anand district and part of Kheda district"},
        {"Banaskantha":"	Banaskantha district"},
        {"Bardoli	":"Surat district and part of Tapi district"},
        {"Bharuch	":"Bharuch district and part of Surat district"},
        {"Bhavnagar	":"Bhavnagar district"},
        {"Chhota Udaipur":"	Chhota Udaipur district"},
        {" Dahod	":"Dahod district"},
        {"Gandhinagar":"	Gandhinagar district"},
        {"Jamnagar	":"Jamnagar district"},
        {"Junagadh":"	Junagadh district"},
        {"Kachchh":"	Kachchh district"},
        {"Kheda	":"Kheda district and part of Anand district"},
        {"Mahesana	":"Mahesana district"},
        {" Navsari	":"Navsari district"},
        {" Panchmahal":"	Panchmahal district"},
        {"Patan	":"Patan district"},
        {"Porbandar	":"Porbandar district"},
        {"Rajkot	":"Rajkot district"},
        {"Sabarkantha":"	Sabarkantha district"},
        {"Surat	":"Surat district"},
        {"Surendranagar":"	Surendranagar district"},
        {"Vadodara	":"Vadodara district"},
        {"Valsad":"	Valsad district and part of Navsari district"}]},
    {"id":8,"de":[{"Ambala":	"Ambala district and parts of Yamunanagar district"},
    {"Bhiwani-Mahendragarh":"	Bhiwani and Mahendragarh districts"},
    {"Faridabad":"	Faridabad district"},
    {"Gurgaon":"	Gurgaon district and parts of Rewari district"},
    {"Hisar":"	Hisar district and parts of Fatehabad district"},
    {" Karnal":"	Karnal district and parts of Karnal district"},
    {"  Kurukshetra":"	Kurukshetra district and parts of Karnal district"},
    {"  Rohtak":"	Rohtak district"},
    {"  Sirsa":"	Sirsa district and parts of Fatehabad district"},
    {"  Sonipat":"	Sonipat district"}]},
    {"id":9,"de":[{"Hamirpur":"Hamirpur"},
    {"Kangra":"	Kangra"},
    {"Mandi":"Mandi"},
    {"Shimla":"	Shimla"}]},
    {"id":10,"de":	[{"Chatra":"Chatra district"},
    {"Dhanbad":"	Dhanbad district and parts of Dhanbad district"},
    {"  Dumka":"	Dumka district and parts of Dumka district"},
    {" Giridih":"	Giridih district"},
    {" Godda":"	Godda district and parts of Godda district"},
   {"Khunti":"Khunti district"},
        {"Koderma":"	Koderma district"},
        {"Lohardaga":"	Lohardaga district"},
        {"Palamu":"	Palamu district"},
        {"Ranchi":"	Ranchi district and parts of Ranchi district"},
        {"Rajmahal":"	Sahibganj district"},
        {"Singhbhum	West":" Singhbhum district and parts of West Singhbhum district"}]},
    {"id":11,"de":[{"Bagalkot":"Bagalkot district"},
    {"Bangalore Central":"	Bangalore Urban district"},
    {"Bangalore North":"	Bangalore Urban district"},
    {"Bangalore Rural":"	Bangalore Rural district"},
    {"Bangalore South":"	Bangalore Urban district"},
    {"Belgaum":"	Belgaum district"},
    {"Bellary":"	Bellary district"},
    {"Bidar	":"Bidar district"},
    {"Bijapur":"Bijapur district"},
        {"Chamarajanagar":"	Chamarajanagar district"},
        {"Chikkballapur":"	Chikkaballapur district"},
        {"Chikkodi":"	Belgaum district"},
        {"Chitradurga":"	Chitradurga district"},
        {"Dakshina Kannada":"	Dakshina Kannada district"},
        {"Davanagere":"	Davanagere district"},
        {"Dharwad":"	Dharwad district"},
        {"Gulbarga":"	Gulbarga district"},
        {" Hassan":"	Hassan district"},
        {"Haveri":"	Haveri district"},
        {"Kolar":"	Kolar district"},
        {"Koppal":"	Koppal district"},
        {"Mandya":"	Mandya district"},
        {"Mysore":"	Mysore district"},
        {"Raichur":"	Raichur district"},
        {"Shimoga":"	Shimoga district"},
        {"Tumkur":"	Tumkur district"},
        {"Udupi Chikmagalur":"	Udupi and Chikmagalur districts"},
        {"Uttara Kannada":"	Uttara Kannada district"}]},
    {"id":12,"de":	[{"Alappuzha":"Alappuzha district"},
    {"Attingal":"	Thiruvananthapuram district"},
    {"Chalakudy	":"Thrissur district and parts of Ernakulam district"},
    {"Ernakulam	":"Ernakulam district"},
    {"Idukki":"	Idukki district and parts of Kottayam district"},
    {"Kannur":"	Kannur district"},
    {"Kasaragod":"	Kasaragod district"},
    {"Kollam":"	Kollam district"},
    {"Kottayam":"	Kottayam district"},
    {"Kozhikode":"	Kozhikode district"},
    {"Malappuram":"	Malappuram district"},
    {"Mavelikkara":"	Alappuzha district and parts of Kollam district"},
    {"Palakkad":"	Palakkad district"},
    {"Pathanamthitta":"	Pathanamthitta district"},
    {" Ponnani":"	Malappuram district"},
    {"Thiruvananthapuram":"Thiruvananthapuram district"},
        {"Thrissur":"	Thrissur district"},
        {"Vadakara":"	Kozhikode district and parts of Kannur district"},
        {"Wayanad  ":"	Wayanad"},
        {"Thiruvalla ":"	Pathanamthitta"}]},
    {"id":13,"de":[{"Balaghat":"Balaghat"},
    {"Balaghat-ST":"	Balaghat"},
    {"Betul":"	Betul"},
    {"Bhopal":"	Bhopal"},
    {"Bhind":"	Bhind"},
    {"Chhindwara":"	Chhindwara"},
    {"Damoh":"	Damoh"},
    {"Dewas	":"Dewas"},
    {"Dhar":"	Dhar"},
    {"Hoshangabad":"	Hoshangabad"},
    {"Indore":"	Indore"},
    {"Jabalpur":"	Jabalpur"},
    {"Khandwa":"	Khandwa"},
    {"Khargone":"	Khargone"},
    {"Khajuraho":"	Chhatarpur"},
    {"Mandsaur":"	Mandsaur"},
    {"Mandla":"	Mandla"},
    {"Morena":"	Morena"},
    {"Narsinghpur":"	Narsinghpur"},
    {"Rajgarh":"	Rajgarh"},
    {"Ratlam":"	Ratlam"},
    {"Rewa":"	Rewa"},
    {"Satna":"	Satna"},
    {"Seoni	":"Seoni"},
    {"Shahdol":"	Shahdol"},
    {"Sidhi":"	Sidhi"},
    {"Tikamgarh":"	Tikamgarh"},
    {"Ujjain":"	Ujjain"},
        {"Vidisha":"	Vidisha"}]},
    {"id":14,"de":[{"Ahmednagar"	:"Ahmednagar district"},
    {"Akola":"	Akola district"},
    {"Amravati":"	Amravati district"},
    {"Aurangabad":"	Aurangabad district"},
    {" Baramati":"	Pune district"},
    {" Beed":"	Beed district"},
    {"Bhandara-Gondiya":"	Bhandara and Gondia districts"},
    {"Bhiwandi":"	Thane district"},
    {"Buldhana":"	Buldhana district"},
    {"Chandrapur":"	Chandrapur district"},
    {"Dhule":"	Dhule district"},
    {"Dindori":"	Nashik district"},
    {"Gadchiroli-Chimur":"	Gadchiroli and parts of Chandrapur district"},
    {"Hatkanangle":"	Kolhapur district"},
    {"Hingoli":"	Hingoli district"},
    {" Jalgaon":"	Jalgaon district"},
    {"Jalna":"Jalna district"},
        {"Kalyan":"	Thane district"},
        {"Kolhapur":"	Kolhapur district"},
        {"Latur":"	Latur district"},
        {"Madha":"	Solapur district"},
        {"Maval":"	Pune district"},
        {"Mumbai North":"	Mumbai suburban district"},
        {"Mumbai North Central":"	Mumbai suburban district"},
        {"Mumbai North East	":"Mumbai suburban district"},
        {"Mumbai North West":"	Mumbai suburban district"},
        {"Mumbai South":"	Mumbai district"},
        {"Mumbai South Central":"	Mumbai suburban district"},
        {"Nagpur":"	Nagpur district"},
        {"Nanded":"	Nanded district"},
        {"Nandurbar":"	Nandurbar district"},
        {"Nashik":"	Nashik district"},
        {"Osmanabad":"	Osmanabad district"},
        {"Palghar":"	Palghar district"},
        {"Parbhani":"	Parbhani district"},
        {"Pune":"	Pune district"},
        {"Raigad":"	Raigad district"},
        {"Ramtek":"	Nagpur district"},
        {"Ratnagiri-Sindhudurg":"	Ratnagiri and Sindhudurg districts"},
        {"Raver":"	Jalgaon district"},
        {"Sangli":"	Sangli district"},
        {"Satara":"	Satara district"},
        {"Shirdi":"	Ahmednagar district"},
        {"Shirur":"	Pune district"},
        {"Solapur":"	Solapur district"},
        {"Thane":"	Thane district"},
        {"Wardha":"	Wardha district"},
        {"Yavatmal-Washim":"	Yavatmal and Washim districts"}]},
    {"id":15,"de":[{"Inner Manipur":"Imphal East and Imphal West districts"},
    {"Outer Manipur":	"Chandel, Churachandpur, Senapati, Tamenglong, Ukhrul, and parts of Thoubal and Kangpokpi districts"}]},
    {"id":16,"de":[{"Shillong":"East Khasi Hills, West Khasi Hills, South West Khasi Hills, and Ri Bhoi districts"},
    {"Tura	West":"Garo Hills, East Garo Hills, South Garo Hills, and North Garo Hills districts"}]},
    {"id":17,"de":[{"Mizoram":	"All districts of Mizoram"}]},
    {"id":18,"de":[{"Nagaland":"All districts of Nagaland"}]},
    {"id":19,"de":[{"Aska":	"Ganjam district"},
    {" Balasore":"	Balasore district"},
    {" Bargarh":"	Bargarh district"},
    {"Berhampur":"	Ganjam district"},
    {"Bhadrak":"	Bhadrak district"},
    {"Bhubaneswar":"	Khordha district"},
    {"Bolangir":"	Bolangir district"},
    {"Cuttack":"	Cuttack district"},
    {"Dhenkanal	":"Dhenkanal district"},
    {"Jagatsinghpur":"	Jagatsinghpur district"},
    {"Jajpur":"	Jajpur district"},
    {"Kandhamal":"	Kandhamal district"},
    {"Kendrapara":"	Kendrapara district"},
    {"Keonjhar":"	Keonjhar district"},
    {"Koraput":"	Koraput district"},
    {"Mayurbhanj":"	Mayurbhanj district"},
    {"Nabarangpur":"	Nabarangpur district"},
    {"Puri":"	Puri district"},
    {"Sambalpur":"	Sambalpur district"},
    {"Sundargarh":"	Sundargarh district"},
    {" Kalahandi":"	Kalahandi district"}]},
    {"id":20,"de":[{"Amritsar":"Amritsar district"},
    {"Anandpur Sahib":"Rupnagar, and parts of Nawanshahr and Mohali districts"},
    {"Bathinda":"	Bathinda district"},
    {"Faridkot":"	Faridkot district"},
    {"Fatehgarh Sahib":"	Fatehgarh Sahib district"},
    {"Ferozepur":"	Ferozepur district"},
    {"Gurdaspur":"	Gurdaspur district"},
    {"Hoshiarpur":"	Hoshiarpur district"},
    {"Jalandhar":"	Jalandhar district"},
    {"Khadoor Sahib":"	Tarn Taran district"},
    {"Ludhiana":"	Ludhiana district"},
    {"Patiala":"	Patiala district"},
        {"Sangrur":"	Sangrur district"}]},
    {"id":21,"de":[{"Ajmer":"Ajmer distric"},
    {"Alwar":"	Alwar district"},
        {" Banswara":"	Banswara district"},
        {" Barmer":"	Barmer district"},
        {"Bhilwara":"	Bhilwara district"},
        {"Chittorgarh":"	Chittorgarh district"},
        {"Churu":"	Churu district"},
        {"Dausa":"	Dausa district"},
        {"Ganganagar":"	Ganganagar district"},
        {"Jaipur":"	Jaipur district"},
        {"Jaipur Rural":"	Jaipur district"},
        {"Jalore":"	Jalore district"},
        {"Jhalawar-Baran":"	Jhalawar and Baran districts"},
        {"Jhunjhunu":"	Jhunjhunu district"},
        {"Jodhpur":"	Jodhpur district"},
        {"Karauli-Dholpur":"	Karauli and Dholpur districts"},
        {"Kota":"	Kota district"},
        {"Nagaur":"	Nagaur district"},
        {"Pali":"	Pali district"},
        {"Rajsamand":"	Rajsamand district"},
        {"Sikar":"	Sikar district"},
        {"Tonk-Sawai Madhopur":"	Tonk and Sawai Madhopur districts"},
        {"Udaipur":"	Udaipur district"},
        {"Bharatpur":"	Bharatpur district"},
        {"Gwalior":"	Gwalior district"}]},
    {"id":22,"de":[{"Sikkim"	:"All districts of Sikkim"}]},
    {"id":23,"de":[{"Tamilnadu":	"Chennai Central	Chennai Chennai North	Chennai"},
        {"Chennai ":"South	Chennai"},
        {"Sriperumbudur":"	Kancheepuram"},
        {"Kancheepuram":"	Kancheepuram"},
        {"Arakkonam	":"Vellore"},
        {"Vellore":"	Vellore"},
        {"Krishnagiri":"	Krishnagiri"},
        {"Dharmapuri":"	Dharmapuri"},
        {"Tiruvannamalai":"	Tiruvannamalai"},
        {"Arani":"	Tiruvannamalai"},
        {"Viluppuram":"	Viluppuram"},
        {"Kallakurichi":"	Viluppuram"},
        {"Salem":"	Salem"},
        {"Namakkal":"	Namakkal"},
        {"Erode":"	Erode"},
        {"Tiruppur":"	Tiruppur"},
        {"Nilgiris":"	Nilgiris"},
        {"Coimbatore":"	Coimbatore"},
        {"Pollachi":"	Coimbatore"},
        {"Dindigul":"	Dindigul"},
        {"Karur":"	Karur"},
        {"Tiruchirappalli":"	Tiruchirappalli"},
        {"Perambalur":"	Perambalur"},
        {"Cuddalore":"	Cuddalore"},
        {"Chidambaram":"	Cuddalore"},
        {"Mayiladuthurai":"	Mayiladuthurai"},
        {"Nagapattinam":"	Nagapattinam"},
        {"Thanjavur":"	Thanjavur"},
        {"Sivaganga":"	Sivaganga"},
        {"Madurai":"	Madurai"},
        {"Theni":"	Theni"},
        {"Virudhunagar":"	Virudhunagar"},
        {"Ramanathapuram":"	Ramanathapuram"},
        {"Thoothukkudi":"	Thoothukkudi"},
        {"Tenkasi":"	Tenkasi"},
        {"Tirunelveli":"	Tirunelveli"},
        {"Kanniyakumari":"	Kanniyakumari"}]},
    {"id":24,"de":[{"Adilabad":"Adilabad district"},
    {"Bhongir":"	Yadadri Bhuvanagiri district"},
    {"Chevella":"	Rangareddy district"},
    {"Hyderabad":"	Hyderabad district"},
    {"Karimnagar":"	Karimnagar district"},
    {"Khammam":"	Khammam district"},
    {"Mahabubabad":"	Warangal (Rural) and Bhadradri Kothagudem districts"},
    {"Malkajgiri":"	Medchal-Malkajgiri district"},
    {"Medak":"	Medak district"},
    {"Nagarkurnool":"	Nagarkurnool district"},
    {"Nalgonda":"	Nalgonda district"},
    {"Nizamabad":"	Nizamabad district"},
    {"Peddapalle":"	Peddapalli district"},
    {"Secunderabad":"	Hyderabad district"},
    {"Warangal":"	Warangal (Urban) and Warangal (Rural) districts"},
    {"Zahirabad":"	Sangareddy district"},
    {"Nizamabad":"	Nizamabad district"}]},
    {"id":25,"de":[{"Tripura East":	"East Tripura district"},
    {"Tripura West":"	West Tripura district"}]},
    {"id":26,"de":[{"Saharanpur":"Saharanpur"},
    {"Kairana":"Shamli, Saharanpur, Muzaffarnagar"},
    {"Muzaffarnagar":"Muzaffarnagar"},
    {"Bijnor":"	Bijnor"},
    {"Nagina":"	Bijnor, Moradabad, Amroha"},
    {"Moradabad":"	Moradabad"},
    {"Rampur":"	Rampur"},
    {"Sambhal":"	Sambhal, Moradabad"},
    {"Amroha":"	Amroha"},
    {"Meerut":"	Meerut"},
    {"Baghpat":"	Baghpat"},
    {"Ghaziabad	":"Ghaziabad"},
    {"Gautam Buddha Nagar":"	Gautam Buddha Nagar"},
        {"Bulandshahr":"	Bulandshahr"},
        {"Aligarh":"	Aligarh"},
        {"Hathras":"	Hathras, Aligarh"},
        {"Mathura":"	Mathura"},
        {"Agra":"	Agra"},
        {"Fatehpur Sikri":"	Agra, Firozabad"},
        {"Firozabad":"	Firozabad"},
        {"Mainpuri":"	Mainpuri"},
        {"Etah":"	Etah"},
        {"Badaun":"	Badaun"},
        {"Aonla":"	Bareilly"},
        {"Bareilly":"	Bareilly"},
        {"Pilibhit":"	Pilibhit"},
        {" Shahjahanpur":"	Shahjahanpur"},
        {"Kheri":"	Kheri"},
        {"Dhaurahra":"	Lakhimpur Kheri"},
        {"Sitapur":"	Sitapur"},
        {"Hardoi":"	Hardoi"},
        {"Misrikh":"	Hardoi, Unnao, Lucknow"},
        {"Unnao":"	Unnao"},
        {"Mohanlalganj":"	Lucknow"},
        {"Lucknow":"	Lucknow"},
        {"Rae Bareli":"	Rae Bareli"},
        {"Amethi":"	Amethi"},
        {"Sultanpur":"	Sultanpur"},
        {"Pratapgarh":"	Pratapgarh"},
        {"Farrukhabad":"	Farrukhabad"},
        {"Etawah":"	Etawah"},
        {"Kannauj":"	Kannauj"},
        {"Kanpur":"	Kanpur Nagar"},
        {"Akbarpur":"	Kanpur Dehat, Kannauj, Auraiya"},
        {"Jalaun":"	Jalaun"},
        {"Jhansi":"	Jhansi"},
        {"Hamirpur":"	Hamirpur"},
        {"Banda":"	Banda"},
        {"Fatehpur":"	Fatehpur"},
        {"Kaushambi":"	Kaushambi"},
        {"Phulpur":"	Allahabad"},
        {"Allahabad	":"Allahabad"},
        {"Barabanki":"	Barabanki"},
        {"Faizabad":"	Faizabad"},
        {"Ambedkar Nagar":"	Ambedkar Nagar"},
        {"Bahraich":"	Bahraich"},
        {"Kaiserganj":"	Bahraich, Sitapur, Barabanki"},
        {"Shrawasti":"	Shrawasti"},
        {"Gonda":"	Gonda"},
        {"Domariyaganj":"	Siddharthnagar, Basti, Sant Kabir Nagar"},
        {"Basti":"	Basti"},
        {"Sant Kabir Nagar":"	Sant Kabir Nagar"},
        {"Maharajganj":"	Maharajganj"},
        {"Gorakhpur":"	Gorakhpur"},
        {"Kushinagar":"	Kushinagar"},
        {"Deoria":"	Deoria"},
        {"Bansgaon":"	Gorakhpur, Maharajganj"},
        {"Lalganj":"	Azamgarh, Ghazipur, Ballia"},
        {"Azamgarh":"	Azamgarh"},
        {"Ghosi	Mau": "Ghazipur, Ballia"},
        {"Salempur":"	Deoria, Ghazipur"},
        {"Ballia":"	Ballia"},
        {"Jaunpur":"	Jaunpur"},
        {"Machhlishahr":"	Jaunpur, Bhadohi, Mirzapur"},
        {"Ghazipur":"	Ghazipur"},
        {"Chandauli":"	Chandauli"},
        {"Varanasi":"	Varanasi"},
        {"Bhadohi":"	Bhadohi"},
        {"Mirzapur":"	Mirzapur"},
        {"Robertsganj":"	Sonbhadra"}]},
    {"id":27,"de":[{"Almora":"Almora district"},
    {"Garhwal":"	Pauri Garhwal district"},
    {"Hardwar":"	Haridwar district"},
    {"Nainital-Udhamsingh":" Nagar	Nainital and Udham Singh Nagar districts"},
    {"Tehri Garhwal":"	Tehri Garhwal district"}]},
    {"id":28,"de":[{"Cooch Behar":"Cooch Behar"},
    {"Alipurduars":"	Alipurduar"},
    {"Jalpaiguri":"	Jalpaiguri"},
    {"Darjeeling":"	Darjeeling"},
    {"Raiganj":"	Uttar Dinajpur"},
    {"Balurghat":"	Dakshin Dinajpur"},
    {"Maldaha":" Uttar	Malda"},
    {"Maldaha ":"Dakshin	Malda"},
    {"Jangipur":"	Murshidabad"},
    {"Baharampur":"	Murshidabad"},
    {"Murshidabad":"	Murshidabad"},
    {"Krishnanagar":"	Nadia"},
    {"Ranaghat":"	Nadia"},
    {"Bangaon":"	North 24 Parganas"},
    {"Barrackpore":"	North 24 Parganas"},
    {"Dum Dum":"	North 24 Parganas"},
    {"Barasat":"	North 24 Parganas"},
    {"Basirhat":"	North 24 Parganas"},
    {"Jaynagar":"	South 24 Parganas"},
    {"Mathurapur":"	South 24 Parganas"},
    {"Diamond Harbour":"	South 24 Parganas"},
    {"Jadavpur":"	Kolkata, South 24 Parganas"},
    {"Kolkata Dakshin":"	Kolkata"},
    {"Kolkata Uttar":"	Kolkata"},
    {"Howrah":"	Howrah"},
    {"Uluberia":"	Howrah"},
        {"Hooghly":"	Hooghly"},
        {"Arambagh":"	Hooghly"},
        {"Tamluk":"	Purba Medinipur"},
        {"Kanthi":"	Purba Medinipur"},
        {"Ghatal":"	Paschim Medinipur"},
        {"Jhargram":"	Jhargram, Paschim Medinipur"},
        {"Medinipur":"	Paschim Medinipur"},
        {"Purulia":"	Purulia"},
        {"Bankura":"	Bankura"},
        {"Bishnupur":"	Bankura"},
        {"Bardhaman Purba":"	Purba Bardhaman"},
        {"Bardhaman Durgapur":"	Paschim Bardhaman"},
        {"Asansol":"	Paschim Bardhaman"},
        {"Bolpur":"	Birbhum"},
        {"Birbhum":"	Birbhum"}]},
    {"id":29,"de":[{"Andaman and Nicobar Islands":"Entire union territory"}]},
    {"id":30,"de":[{"Chandigarh":"Entire union territory"}]},
    {"id":31,"de":[{"Dadra and Nagar Haveli and Daman and Diu":"Entire union territory"}]},
    {"id":32,"de":[{"Lakshadweep":"Entire union territory"}]},
    {"id":33,"de":[{"Chandni Chowk":"North Delhi district and parts of North West Delhi district"},
    {"East Delhi":"	East Delhi district"},
    {"New Delhi	Central":" Delhi district and parts of South Delhi district"},
    {"North East Delhi":"	North East Delhi district"},
    {"North West Delhi":"	North West Delhi district"},
    {"South Delhi":"	South Delhi district"},
    {"West Delhi":"West Delhi district"}]},
    {"id":34,"de":[{"Puducherry":"Entire union territory"}]}]
const btnList=[
    {"id":1,"name":"candidates"},
    {"id":2,"name":"Go to user view"}
]
const overlayStyles={
overflowY:"auto",
borderRadius:"10px",
display:"flex",
justifyContent:"center",
backgroundColor:"transparent"
}

function Admin(){
    const [isUserActive, setUserActive] = useState(false)
    const [isAdd, setCandidate] = useState(false)
    const [constituency, setconstituency] = useState()
    const [state, setState] = useState()
    const [name, setName] = useState("")
    const [party, setparty] = useState("")
    const [wiki, setwiki] = useState("")
    const [about, setAbout] = useState("")
    const [symbol, setsymbol] = useState("")
    const [image, setimage] = useState()
    const [youtube, setTube] = useState("")
    const [X, setX] = useState("")
    const [instagram, setinsta] = useState("")
    const [showList,setList]= useState(true)
    const [filteredList,setFilteredList]=useState([])
    const [editState,setEditState]=useState()
    const [showmenu,setMenu]=useState(true)
    const [showStates,setShowStates]=useState(true)
    const [showSections,setSections] =useState(false)
    const [stateDetails,setStateDetails]=useState([])
    const [showConstituencyDetails,setConstituencyDetails]=useState(false)
    const [activeBtnId,setBtnId]=useState(1)
    const [filteredConstituency,setFilteredConstituencies]=useState([])
    let counter = -1
    const addCandidate = Id => {
        setCandidate(!isAdd)
        setBtnId(Id)
        setShowStates(!showStates)
        setList(!showList)
    }
    const userSetter = id => {
        setUserActive({ isUserActive: !isUserActive })
        setBtnId(id)
    }
    const listCandidates = () => {
        setList(!showList)
        setShowStates(!showStates)
        setCandidate(false)
    }
    const toggleMenubar = () => {
        setMenu(!showmenu)
    }
    const showStatesList = () => {
        setShowStates(!showStates)
        setSections(!showSections)
    }
    const getStateDetails = id => {
        const details = data.filter(item => item.id===id)
        setState(states[id-1])
        const {de}=details[0]
        setStateDetails(de)
        console.log(details)
        setShowStates(false)

    }
    const getConstituencyDetails = constituency => {
        setconstituency(constituency)
        setConstituencyDetails(true)
        setStateDetails([])
    }
    const changeState = stateName => {
        setState(stateName)
        const constituencyid = stateWiseDetails.filter(item =>item.name===stateName)
        const {id} =constituencyid[0]
        const {de} = data[id-1]
        setFilteredConstituencies([...de])
        
    }
    const goBack = () => {
        setConstituencyDetails(false)
        setShowStates(true)
        setState()
        setconstituency()
        setStateDetails([])
    }
    return (
        <ListContext.Consumer>
            {value => {
                const {mpList, onAddCandidate } = value
                const search=`${state}`
                const getCandidates = () => {
                    setStateDetails([])
                    setConstituencyDetails(true)
                    const list = stateWiseDetails.filter(item => item.name===state)
                    if(list.length>0){
                    setFilteredList([data[list[0].id]])
                    setShowStates(false)
                    setConstituencyDetails(true)
                    }
                    else{
                        setFilteredList([])
                        setSections(false)
                        setShowStates(true)
                    }
                
                }
                
                const changeThisState = id => {}
                const key = mpList.length
                return (
                    <div>
                        {isUserActive ? <Navigate to="/mplist" /> : <div className='adminContainer'>
                            <div className={showmenu ? 'menuContainer':'hideMenuContainer'}>
                                <div className='navHeader'>
                            <h1 className='salutation'>BharatPol</h1>
                            <button type="button" className='closeMenu' onClick={()=>toggleMenubar()}><GiHamburgerMenu /></button>
                            </div>
                            <div className='UpdatesContainer'>
                        
                                    <button className={activeBtnId=== 1 ? "selected": 'btn'}  onClick={()=>listCandidates(1)}>Candidates</button>
                                    <button className={activeBtnId=== 2 ? "selected": 'btn'}  onClick={()=>userSetter(2)}>Go to user view</button>
                            </div>
                            </div>
                            <div >
                                <div className='headerContainer'>
                                <button type="button" className={showmenu ? 'hideMenu': 'showMenu'} onClick={()=>toggleMenubar()}><GiHamburgerMenu /></button>
                                <h1 className='highLighter'>LOK SABHA <br/>Candidates List</h1>
                                <div className='selectors'>
                            <div className='input'>
                                        <select value={state} id="stateName" onChange={e => changeState(e.target.value)}>
                                        <option selected="selected" disabled="disabled" id="stateHeader">Select State</option>
                                            {states.map(item => (
                                                <option value={item}>{item}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className='input'>
                                    
                                        <select value={constituency} id="constituencyName" onChange={e => setconstituency(e.target.value)}>
                                        <option selected="selected" disabled="disabled" id="constituencyHeader">Select Constituency</option>
                                            {filteredConstituency.map(item => (
                                            <option value={Object.keys(item)}>{Object.keys(item)}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <button  className='goBtn' type="button" onClick={e=> getCandidates(e)}>Go </button>
                                    
                                    <Popup modal trigger={<button className='btn' onClick={()=>addCandidate(3)}>Add</button>} position="center"   >
                                   {close=>(
                                <form className='addFormContainer' onSubmit={() => onAddCandidate({ key, name, party, wiki, about, youtube, X, symbol, image })}>
                                <h1 className='clicker'>Add Candidate</h1>
                                <button className='addcancelBtn' type="button" onClick={()=>close()}>Cancel</button>
                                    <div className='input'>
                                        <label htmlFor="formState" className='selection'>Select State</label>
                                        <select value={state} id="formState" onChange={e => setState(e.target.value)}>
                                            {states.map(item => (
                                                <option value={item}>{item}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className='input'>
                                        <label htmlFor='formConst' className='selection'>select constituency</label>
                                        <select value={constituency} id="formConst" onChange={e => setconstituency(e.target.value)}>
                                            <option value="North Mumbai">North Mumbai</option>
                                            <option value="Maharastra">Maharashtra</option>
                                            <option value="Mumbai North-East">Mumbai North-East</option>
                                            <option value="Mumbai North-central">Mumbai North-central</option>
                                            <option value="Mumbai North-west">Mumbai North West</option>
                                            <option value="Mumbai South-central">Mumbai South-central</option>
                                            <option value="Mumbai South">Mumbai South</option>
                                        </select>
                                    </div>
                                    <div className='input'>
                                        <label htmlFor='name' className='name'>Candidate Name</label>
                                        <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} placeholder='Enter Candidate Name' />
                                    </div>
                                    <div className='input'>
                                        <label htmlFor='photo' className='photo'>Upload Photo</label>
                                        <input type="file" id="photo" value={image} placeholder='upload Image' onClick={e => setimage(e.target.value)} />
                                    </div>
                                    <div className='input'>
                                        <label htmlFor='party' className='party'>Party</label>
                                        <input type="text" id="party" placeholder='Enter Party Name' value={party} onChange={e => setparty(e.target.value)} />
                                    </div>
                                    <div className='input'>
                                        <label htmlFor='wikilink' className='link'>Enter Wiki Link</label>
                                        <input type="text" id="wikilink" placeholder='Enter Wiki Link' value={wiki} onChange={e => setwiki(e.target.value)} />
                                    </div>
                                    <div className='input'>
                                        <label htmlFor='Partylink' className='link'>Logo Link</label>
                                        <input type="text" id="partylink" placeholder='Enter Party Link' value={symbol} onChange={e => setsymbol(e.target.value)} />
                                    </div>
                                    <div className='input'>
                                        <label htmlFor='summary' className='summary'>About</label>
                                        <input type="text" id="summary" placeholder='Give Summary of Candidate' value={about} onChange={e => setAbout(e.target.value)} />
                                    </div>
                                    <div className='input'>
                                        <label htmlFor='youtube' className='link'>Enter Youtube Link</label>
                                        <input type="text" id="youtube" placeholder='Enter Youtube Link' value={youtube} onChange={e => setTube(e.target.value)} />
                                    </div>
                                    <div className='input'>
                                        <label htmlFor='instagram' className='link'>Enter Instagram Link</label>
                                        <input type="text" id="instagram" placeholder='Enter Instagram Link' value={instagram} onChange={e => setinsta(e.target.value)} />
                                    </div>
                                    <div className='input'>
                                        <label htmlFor='x' className='link'>Enter X Link</label>
                                        <input type="text" id="X" placeholder='Enter X Link' value={X} onChange={e => setX(e.target.value)} />
                                    </div>
                                    <button className='addCanBtn' type="submit" onClick={() => onAddCandidate({ key, name, party, wiki, about, youtube, X, symbol, image })}>Add</button>
                                    
                                </form>
                                )}
                            </Popup>
                                    < br/>
                                    {/* <button onClick={()=>showStatesList()} type="button" className='showstatebtn'>States</button> */}
                                    <div className='itemsList'>
                                        
                                        <span className='spanner'>State:</span> {state}<br/> <span className='spanner'>Constituency:</span> {constituency}</div>
                                    </div>
                                    </div>
                                    <div className={showStates ? 'showStates': 'hideStates'}>
                                        <div className='statsContainer'>
                                            <div className='firstCard'>
                                                <h3>Total States</h3>
                                                <p className='highlight'>28</p>
                                            </div>
                                            <div className='secondCard'>
                                            <h3>Total UT's</h3>
                                                <p className='highlight'>6</p>
                                            </div>
                                            
                                            <div className='thirdCard'>
                                            <h3>Total states and UT</h3>
                                                <p className='highlight'>34</p>
                                            </div>
                                            </div>
                                
                                    
                                        <table className='sectionStates'>
                                            <tbody>
                                            <tr>
                                            <th>State/Union Territory</th>
                                            <th className='noconstituencies'>Number of Constituencies</th>
                                            <th>Edit/Delete</th>
                                            </tr>
                                    {stateConstituency.map(item => (
                                        
                                            <tr>
                                            <td ><button onClick={()=>getStateDetails(item.id)} key={item.id} className='stateColumn'>{item.name}</button></td>
                                            <td ><button onClick={()=>getStateDetails(item.id)} key={item.id}>{item.constituencies}</button></td>
                                            <td><Popup  modal nested overlayStyle={overlayStyles} trigger={<button className='editBtn'>Edit</button>}>
                                            {close => (
                                                <form className='editFormContainer'>
                                                    <h3>Edit Details</h3>
                                                <div className='input'>
                                        <label htmlFor="formState" className='selection'> State</label>
                                        <input type='text' value={item.name} id="formstate" onChange={e=>setEditState(e.target.value)}/>
                                    </div>
                                    <div className='input'>
                                        <label htmlFor="formState" className='selection'>Constituency</label>
                                        <input type='text' value={item.constituencies} id="formstate" onChange={e=>setEditState(e.target.value)}/>
                                    </div>
                                    <button className='cancelBtn' type="button" onClick={()=>close()}>Cancel</button>
                                    <button className='saveBtn' type='button'>Save Changes</button>
                                    
                                                </form>
                                            )}
                                            </Popup>
                                            <Popup  modal overlayStyle={overlayStyles} trigger={<button className='deleteBtn'>Delete</button>}>
                                               {close=>(
                                                <form className='editFormContainer'>
                
                                                    <div className='delPopup'>
                                                    <p>Do you want to delete this row?</p>
                                                    <div className='buttons'>
                                                <button className='delBtn' type="button">Confirm</button>
                                                <button className='delCancel' type="button" onClick={()=>close()}>Cancel</button>
                                                </div>
                                                </div>
                                                </form>
                                               )}
                                            </Popup>
                                                </td>
                                            </tr>
                                            
                                
                                    ))}
                                    <tr><td>Total Constituencies</td>
                                    <td className='tot'>536</td>
                                    <td></td>
                                    </tr>
                                    </tbody>
                                    </table>
                                    </div>
                                    <div className={stateDetails.length>0 ? 'showStateDetails':'hideStateDetails'}>
                                        <button className='backBtn' type="button" onClick={()=>goBack()}><FaArrowLeftLong className='arrow'/>Back</button>
                                        <div className='stats'>
                                        <div className='firstCard'>
                                                <h4>constituencies in {state}</h4>
                                                <p className='highlight'>{stateDetails.length}</p>
                                            </div>
                                            <div className='secondCard'>
                                                <h4>Voters in {state}</h4>
                                                <p className='highlight'>2000</p>
                                            </div>
                                            </div>
                                        <table className='stateDetails'>      
                                            <tbody>
                                                <tr>
                                            <th>State Name</th>
                                               <th>Constituency</th>
                                                <th>Total Voters</th>
                                                <th>Last Election Winner Party</th>
                                                <th>Edit/Delete</th>
                                                </tr>
                                                {stateDetails.length>0 && stateDetails.map(item => (
                                                    <tr>
                                                        <td>{state}</td>
                                                        <td><button className='candidateBtn' onClick={()=>getConstituencyDetails(Object.keys(item))}>{Object.keys(item)}</button></td>
                                                        <td>2000</td>
                                                        <td>YSRCP</td>
                                                        <td><Popup  modal overlayStyle={overlayStyles} trigger={<button className='editBtn'>Edit</button>}>
                                                {close => (
                                                <form className='editFormContainer'>
                                                    <h3>Edit Details</h3>
                                                <div className='input'>
                                        <label htmlFor="formState" className='selection'>State</label>
                                        <input type='text' value={item.name} id="formstate" onChange={e=>setEditState(e.target.value)}/>
                                    </div>
                                    <div className='input'>
                                        <label htmlFor="formState" className='selection'>Constituency</label>
                                        <input type='text' value={constituency} id="formstate" onChange={e=>setEditState(e.target.value)}/>
                                    </div>
                                    <div className='input'>
                                        <label htmlFor="formState" className='selection'>Total Voters</label>
                                        <input type='text' value="2000" id="formstate" onChange={e=>setEditState(e.target.value)}/>
                                    </div>
                                    <div className='input'>
                                        <label htmlFor="formState" className='selection'>Last Winner Party</label>
                                        <input type='text' value="YSRCP" id="formstate" onChange={e=>setEditState(e.target.value)}/>
                                    </div>
                                    <button className='cancelBtn' type="button" onClick={()=>close()}>Cancel</button>
                                    <button className='saveBtn' type='button'>Save Changes</button>
                                    
                                                </form>
                                                )}
                                            </Popup>
                                            <Popup  modal overlayStyle={overlayStyles} trigger={<button className='deleteBtn'>Delete</button>}>
                                                {close => (
                                                <form className='editFormContainer'>
                
                                                    <div className='delPopup'>
                                                    <p>Do you want to delete this row?</p>
                                                <button className='delBtn' type="button">Confirm</button>
                                                <button className='delCancel' type="button" onClick={()=>close()}>Cancel</button>
                                                </div>
                                                </form>
                                                )}
                                            </Popup></td>
                                                    </tr>
                                                ))}
                                                <tr><td>Total Constituencies</td>
                                    <td className='tot'>{stateDetails.length}</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className={showConstituencyDetails ? 'showConstituency':'hideConstituency'}>
                                    <button className='backBtn' type="button" onClick={()=>goBack()}><FaArrowLeftLong className='arrow'/>Back</button>
                                        <div className='constList'>
                                            <h3>State:<span className='namer'>{state}</span></h3>
                                            <h3>Constituency:<span className='namer'>{constituency}</span></h3>
                                       
                                        <table className="">
                                            <tbody>
                                                <tr>
                                                    <th>Party Name</th>
                                                    <th>Party Logo</th>
                                                    <th>Candidate Name</th>
                                                    <th>Candidate Details</th>
                                                    <th>Wiki Link</th>
                                                    <th>Youtube Link</th>
                                                    <th>Facebook Link</th>
                                                    <th>Instagram Link</th>
                                                    <th>X Link</th>
                                                    <th>Edit</th>
                                                </tr>
                                                <tr>
                                                    <td>YSRCP</td>
                                                    <td><img src="https://www.ysrcongress.com/sites/default/files/article_images/2013/12/19/fan.jpg" alt="ysrcp logo" className='partyLogo'/></td>
                                                    <td>Pinipe Viswarup</td>
                                                    <td>Pinipe Viswarup, (born on 2 October 1962) is an Indian politician who has worked as Rural Water Supply Minister in YS Rajasekhara Reddy’s cabinet and continued in the same position during Rosaiah’s cabinet.</td>
                                                    <td><a href="https://en.wikipedia.org/wiki/Pinipe_Viswarup" target="_blank" rel='noopener'>click here</a></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td><Popup  modal overlayStyle={overlayStyles} trigger={<button className='editBtn'>Edit</button>}>
                                                {close => (
                                                <form className='editFormContainer'>
                                                    <h3>Edit Details</h3>
                                                <div className='input'>
                                        <label htmlFor="formState" className='selection'>State</label>
                                        <input type='text' value="YSRCP" id="formstate" onChange={e=>setEditState(e.target.value)}/>
                                    </div>
                                    <div className='input'>
                                        <label htmlFor="formState" className='selection'>Party Logo</label>
                                        <input type='text' value="https://www.ysrcongress.com/sites/default/files/article_images/2013/12/19/fan.jpg" id="formstate" onChange={e=>setEditState(e.target.value)}/>
                                    </div>
                                    <div className='input'>
                                        <label htmlFor="formState" className='selection'>Candidate Name</label>
                                        <input type='text' value="Pinipe vishwarup" id="formstate" onChange={e=>setEditState(e.target.value)}/>
                                    </div>
                                    <div className='input'>
                                        <label htmlFor="formState" className='selection'>Candidate Details</label>
                                        <input type='text' value="Pinipe Viswarup, (born on 2 October 1962) is an Indian politician who has worked as Rural Water Supply Minister in YS Rajasekhara Reddy’s cabinet and continued in the same position during Rosaiah’s cabinet." id="formstate" onChange={e=>setEditState(e.target.value)}/>
                                    </div>
                                    <div className='input'>
                                        <label htmlFor="formState" className='selection'>Wiki Link</label>
                                        <input type='text' value="https://en.wikipedia.org/wiki/Pinipe_Viswarup" id="formstate" onChange={e=>setEditState(e.target.value)}/>
                                    </div>
                                    <div className='input'>
                                        <label htmlFor="formState" className='selection'>Youtube Link</label>
                                        <input type='text' value="https://en.wikipedia.org/wiki/Pinipe_Viswarup" id="formstate" onChange={e=>setEditState(e.target.value)}/>
                                    </div>
                                    <div className='input'>
                                        <label htmlFor="formState" className='selection'>Facebook Link</label>
                                        <input type='text' value="https://en.wikipedia.org/wiki/Pinipe_Viswarup" id="formstate" onChange={e=>setEditState(e.target.value)}/>
                                    </div>
                                    <div className='input'>
                                        <label htmlFor="formState" className='selection'>Instagram Link</label>
                                        <input type='text' value="https://en.wikipedia.org/wiki/Pinipe_Viswarup" id="formstate" onChange={e=>setEditState(e.target.value)}/>
                                    </div>
                                    <div className='input'>
                                        <label htmlFor="formState" className='selection'>X Link</label>
                                        <input type='text' value="https://en.wikipedia.org/wiki/Pinipe_Viswarup" id="formstate" onChange={e=>setEditState(e.target.value)}/>
                                    </div>
                            
                                    <button className='cancelBtn' type="button" onClick={()=>close()}>Cancel</button>
                                    <button className='saveBtn' type='button'>Save Changes</button>
                                                </form>
                                                )}
                                            </Popup>
                                                    <Popup  modal overlayStyle={overlayStyles} trigger={<button className='deleteBtn'>Delete</button>}>
                                                
                                                {close=>(
                                                <form className='editFormContainer'>
                
                                                    <div className='delPopup'>
                                                    <p>Do you want to delete this row?</p>
                                                <button className='delBtn' type="button">Confirm</button>
                                                <button className='delCancel' type="button" onClick={()=>close()}>Cancel</button>
                                                </div>
                                                </form>
                                                )}
                                            </Popup></td>
                                                    
                                                </tr>
                                                <tr>
                                                    <td>TDP</td>
                                                    <td><img src="https://res.cloudinary.com/dollmqugm/image/upload/v1711944349/tdp_vqvnot.png" alt="ysrcp logo" className='partyLogo'/></td>
                                                    <td>Aithabathula Anandarao</td>
                                                    <td>Aithabathula Anandarao (born on 9 October 1965) is an Indian politician who has worked as Rural Water Supply Minister in YS Rajasekhara Reddy’s cabinet and continued in the same position during Rosaiah’s cabinet.</td>
                                                    <td><a href="https://myneta.info/andhra2014/candidate.php?candidate_id=3101" target="_blank" rel='noopener'>click here</a></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td><Popup  modal overlayStyle={overlayStyles} trigger={<button className='editBtn'>Edit</button>}>
                                                   {close=>(
                                                <form className='editFormContainer'>
                                                    <h3>Edit Details</h3>
                                                <div className='input'>
                                        <label htmlFor="formState" className='selection'> State</label>
                                        <input type='text' value="TDP" id="formstate" onChange={e=>setEditState(e.target.value)}/>
                                    </div>
                                    <div className='input'>
                                        <label htmlFor="formState" className='selection'> Constituency</label>
                                        <input type='text' value={constituency} id="formstate" onChange={e=>setEditState(e.target.value)}/>
                                    </div>
                                    <button className='cancelBtn' type="button" onClick={()=>close()}>Cancel</button>
                                    <button className='saveBtn' type='button'>Save Changes</button>
                                   
                                                </form>
                                            )}
                                            </Popup>
                                                    <Popup  modal overlayStyle={overlayStyles} trigger={<button className='deleteBtn'>Delete</button>}>
                                               {close=>(
                                                <form className='editFormContainer'>
                
                                                    <div className='delPopup'>
                                                    <p>Do you want to delete this row?</p>
                                                <button className='delBtn' type="button">Confirm</button>
                                                <button className='delCancel' type="button" onClick={()=>close()}>Cancel</button>
                                                </div>
                                                </form>
                                               )}
                                            </Popup></td>
                                                    
                                                </tr>
                                            </tbody>
                                        </table>
                                        </div>
                                        </div>
                                    {/* <div className={showSections ? 'sections':'hideStates'}>
                                        <div className='section'>Member</div>
                                        <div className='section'>Party</div>
                                        <div className='section1'>Votes</div>
                                        <div className='section2'>Details</div>
                                    </div>
                                    {filteredList.length > 0 &&
                                <div className='contentContainer'>
                              
                                    {filteredList[0].map(item=> (
                                       <div id="itemSection">
                                        <div className='member'>
                                            <img src={item.image} alt={item.name} className='candidateImage' />
                                            <p className='canName'>{item.name}</p>
                                        </div>
                                        <div className='PartyNames'>{item.party}</div>
                                        <div className='votes'>1000</div>
                                        <div className='details'>{item.summary}</div></div>
                                    ))}
                                
                                </div>
            } */}
                                
                                </div>
                        </div>}
                    </div>
                )
            } }
        </ListContext.Consumer>
    )

}

 export default Admin