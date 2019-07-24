import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectionsService {

  constructor() {
  }

  ageDriverArray: string[] = ['18-22', '23+', '25+', '28+'];
  typeVehicleArray: string[] = ['Cars with manual gearbox', 'Cars with automatic transmission', 'Expensive cars', 'Special cars'];
  pickupLocationArray: string[] = [
    'Afula HFAS01', 'Ashdod TLVS06', 'Beer Sheva BEVC01',
    'Beit Shemesh JRSN01', 'Bnei Brak Kahanman 106 TLVS01', 'Bnei Brak Mivtza', 'Kadesh TLVE01', 'Elad', 'Eilat ETHC01',
    'Eilat Ramon International Airport ETMT01', 'Haifa HFAC01', 'Herzliya TLVN01', 'Jerusalem King David JRSC01', 'Jerusalem Romema',
    'Jerusalem Talpiyot', 'Kfar Saba TLVN02', 'Kiryat Shmone  KSWC01', 'Petah Tikva TLVE02',
    'Nes Tziona TLVS04', 'Netanya TLVN03', 'Netivot', 'Rehovot TLVS05', 'Rishon LeZion TLVS03',
    'Tel Aviv  Hamelacha TLVC01', 'Tel Aviv Ben Gurion International Airport TLVT03', 'Tel Aviv Hayarkon', 'Tiberias HFAE01'];
  time: string[] = ['00:00', '00:30', '01:00', '01:30', '02:00', '02:30', '03:00', '03:30', '04:00', '04:30',
    '05:00', '05:30', '06:00', '06:30', '07:00', '07:30', '08:00', '08:30', '09:00', '09:30', '10:00', '10:30',
    '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30',
    '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00', '22:30',
    '23:00', '23:30'];

  monthOfYear: string[] = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];
  numberMonthOfYear: string[] = ['01', '02', '03', '04', '05', '06',
    '07', '08', '09', '10', '11', '12'];
  numberDayOfMonth: string[] = ['01', '02', '03', '04', '05', '06',
    '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18',
    '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];
  daysOfWeek: string[] = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Thursday', 'Saturday'];
  numberDaysOfWeek: string[] = [
    '01', '02', '03', '04', '05', '06', '07'];
  hours: string[] = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09',
    '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'];
  minutes: string[] = ['00', '15', '30', '45'];
  citiesOfIsrael: string[] = [];
  branches: string[] = [];
  currencies: string[] = ['USD', 'EUR', 'ILS'];

  countries: string[] = [
    'ALAND ISLANDS', 'AFGHANISTAN', 'ALBANIA', 'ALGERIA', 'AMERICAN', 'SAMOA', 'ANDORRA',
    'ANGOLA', 'ANGUILLA', 'ANTARCTICA', 'ANTIGUA AND BARBUDA', 'ARGENTINA', 'ARMENIA', 'ARUBA',
    'AUSTRALIA', 'AUSTRIA', 'AZERBAIJAN', 'BAHAMAS', 'BAHRAIN', 'BANGLADESH', 'BARBADOS', 'BELARUS',
    'BELGIUM', 'BELIZE', 'BENIN', 'BERMUDA', 'BHUTAN', 'BOLIVIA', 'BOSNIA AND HERZEGOWINA',
    'BOTSWANA', 'BOUVET ISLAND', 'BRAZIL', 'BRITISH INDIAN OCEAN TERRITORY', 'BRUNEI DARUSSALAM',
    'BULGARIA', 'BURKINA FASO', 'BURUNDI', 'CAMBODIA', 'CAMEROON', 'CANADA', 'CAPE VERDE',
    'CAYMAN ISLANDS', 'CENTRAL AFRICAN REPUBLIC', 'CHAD', 'CHILE', 'CHINA', 'CHRISTMAS ISLAND',
    'COLOMBIA', 'COMOROS', 'COOK ISLANDS', 'COSTA RICA', 'COTE DI VOIRE', 'CUBA', 'CYPRUS',
    'CZECH REPUBLIC', 'DENMARK', 'DJIBOUTI', 'DOMINICA', 'DOMINICAN REPUBLIC', 'ECUADOR', 'EGYPT',
    'EL SALVADOR', 'EQUATORIAL GUINEA', 'ERITREA', 'ESTONIA', 'ETHIOPIA', 'FAROE ISLANDS', 'FIJI',
    'FINLAND', 'FRANCE', 'FRENCH GUIANA', 'FRENCH POLYNESIA', 'FRENCH SOUTHERN TERRITORIES', 'GABON',
    'GAMBIA', 'GEORGIA', 'GERMANY', 'GHANA', 'GIBRALTAR', 'GREECE', 'GREENLAND', 'GRENADA',
    'GUADELOUPE', 'GUAM', 'GUATEMALA', 'GUINEA', 'GUINEA-BISSAU', 'GUYANA', 'HAITI',
    'HEARD AND MC DONALD ISLANDS', 'HONDURAS', 'HONG KONG', 'HUNGARY', 'ICELAND', 'INDIA',
    'INDONESIA', 'IRAQ', 'IRELAND', 'ISRAEL', 'ITALY', 'JAMAICA', 'JAPAN', 'JORDAN', 'KAZAKHSTAN',
    'KENYA', 'KIRIBATI', 'KUWAIT', 'KYRGYZSTAN', 'LAO PEOPLES DEMOCRATIC REPUBLIC', 'LATVIA',
    'LEBANON', 'LESOTHO', 'LIBERIA', 'LIBYAN ARAB JAMAHIRIYA', 'LIECHTENSTEIN', 'LITHUANIA',
    'LUXEMBOURG', 'MACAU', 'MADAGASCAR', 'MALAWI', 'MALAYSIA', 'MALDIVES', 'MALI', 'MALTA',
    'MARSHALL ISLANDS', 'MARTINIQUE', 'MAURITANIA', 'MAURITIUS', 'MAYOTTE', 'MEXICO', 'MONACO',
    'MONGOLIA', 'MONTSERRAT', 'MOROCCO', 'MOZAMBIQUE', 'MYANMAR', 'NAMIBIA', 'NAURU', 'NEPAL',
    'NETHERLANDS', 'NETHERLANDS ANTILLES', 'NEW CALEDONIA', 'NEW ZEALAND', 'NICARAGUA', 'NIGER', 'NIGERIA',
    'NIUE', 'NORFOLK ISLAND', 'NORTHERN MARIANA ISLANDS', 'NORWAY', 'OMAN', 'PAKISTAN', 'PALAU', 'PANAMA',
    'PAPUA NEW GUINEA', 'PARAGUAY', 'PERU', 'PHILIPPINES', 'PITCAIRN', 'POLAND', 'PORTUGAL', 'PUERTO RICO',
    'QATAR', 'REUNION', 'ROMANIA', 'RUSSIAN FEDERATION', 'RWANDA', 'SAINT HELENA', 'SAINT KITTS AND NEVIS',
    'SAINT LUCIA', 'SAINT PIERRE AND MIQUELON', 'SAINT VINCENT AND THE GRENADINES', 'SAMOA',
    'SAN MARINO', 'SAO TOME AND PRINCIPE', 'SAUDI ARABIA', 'SENEGAL', 'SERBIA AND MONTENEGRO',
    'SEYCHELLES', 'SIERRA LEONE', 'SINGAPORE', 'SLOVAKIA', 'SLOVENIA', 'SOLOMON ISLANDS', 'SOMALIA',
    'SOUTH AFRICA', 'SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS', 'SPAIN', 'SRI LANKA', 'SUDAN',
    'SURINAME', 'SVALBARD AND JAN MAYEN ISLANDS', 'SWAZILAND', 'SWEDEN', 'SWITZERLAND',
    'SYRIAN ARAB REPUBLIC', 'TAIWAN', 'TAJIKISTAN', 'THAILAND', 'TIMOR-LESTE', 'TOGO', 'TOKELAU',
    'TONGA', 'TRINIDAD AND TOBAGO', 'TUNISIA', 'TURKEY', 'TURKMENISTAN', 'TURKS AND CAICOS ISLANDS',
    'TUVALU', 'UGANDA', 'UKRAINE', 'UNITED ARAB EMIRATES', 'UNITED KINGDOM', 'UNITED STATES',
    'UNITED STATES MINOR OUTLYING ISLANDS', 'URUGUAY', 'UZBEKISTAN', 'VANUATU', 'VENEZUELA',
    'VIET NAM', 'WALLIS AND FUTUNA', 'ISLANDS', 'WESTERN SAHARA', 'YEMEN', 'ZAMBIA', 'ZIMBABWE'
  ];
}
