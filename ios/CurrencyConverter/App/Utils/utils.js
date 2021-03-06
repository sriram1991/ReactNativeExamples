/* Utility properties and methods */
var Utils = {
	currency : [
		{ "key" : "AUD", "name" : "Australian Dollar(AUD)" },
		{ "key" : "BGN", "name" : "Bulgarian Lev(BGN)" },
		{ "key" : "BRL", "name" : "Brazil Real(BRL)" },
		{ "key" : "CAD", "name" : "Canadian Dollar(CAD)" },
		{ "key" : "CHF", "name" : "Swiss Franc(CHF)" },
		{ "key" : "CNY", "name" : "Chinese Yuan(CNY)" },
		{ "key" : "CZK", "name" : "Czech Republic Koruna(CZK)" },
		{ "key" : "DKK", "name" : "Danish Krone(DKK)" },
		{ "key" : "EUR", "name" : "Euro(EUR)" },
		{ "key" : "GBP", "name" : "British Pound(GBP)" },
		{ "key" : "HKD", "name" : "Hong Kong Dollar(HKD)" },
		{ "key" : "HRK", "name" : "Croatian Kuna(HRK)" },
		{ "key" : "HUF", "name" : "Hungarian Forint(HUF)" },
		{ "key" : "IDR", "name" : "Indonesian Rupiah(IDR)" },
		{ "key" : "ILS", "name" : "Israeli New Sheqel(ILS)" },
		{ "key" : "INR", "name" : "Indian Rupee(INR)" },
		{ "key" : "JPY", "name" : "Japanese Yen(JPY)" },
		{ "key" : "KRW", "name" : "South Korean Won(KRW)" },
		{ "key" : "MXN", "name" : "Mexican Peso(MXN)" },
		{ "key" : "MYR", "name" : "Malaysian Ringgit(MYR)" },
		{ "key" : "NOK", "name" : "Norwegian Krone(NOK)" },
		{ "key" : "NZD", "name" : "New Zealand Dollar(NZD)" },
		{ "key" : "PHP", "name" : "Philippine Peso(PHP)" },
		{ "key" : "PLN", "name" : "Polish Zloty(PLN)" },
		{ "key" : "RON", "name" : "Romanian Leu(RON)" },
		{ "key" : "RUB", "name" : "Russian Ruble(RUB)" },
		{ "key" : "SEK", "name" : "Swedish Krona(SEK)" },
		{ "key" : "SGD", "name" : "Singapore Dollar(SGD)" },
		{ "key" : "THB", "name" : "Thai Baht(THB)" },
		{ "key" : "TRY", "name" : "Turkish Lira(TRY)" },
		{ "key" : "ZAR", "name" : "South African Rand(ZAR)" }
		
	],
	symbol : {
		"AUD" : '&#36;',
		"BGN" : '&#36;',
		"BRL" : 'R$',
		"CAD" : '$',
		"CHF" : 'CHF',
		"CNY" : '&#x5713;',
		"CZK" : 'CZK',
		"DKK" : 'DKK',
		"EUR" : '&#x20AC;',
		"GBP" : '&#x00A3;',
		"HKD" : '$',
		"HRK" : 'HRK',
		"HUF" : 'HUF',
		"IDR" : 'IDR',
		"ILS" : '&#x20AA;',
		"INR" : '&#x20A8;',
		"JPY" : '&#x00A5;',
		"KRW" : '&#x20A9;',
		"MXN" : '$',
		"MYR" : 'MYR',
		"NOK" : 'kr',
		"NZD" : '$',
		"PHP" : '&#x20B1;',
		"PLN" : 'PLN',
		"RON" : 'RON',
		"RUB" : '&#x0440;&#x0443;&#x0431;',
		"SEK" : 'SEK',
		"SGD" : 'S$',
		"TRY" : 'TRY',
		"ZAR" : '&#x0052;'		
	},
	getIconUrl: function(icon) {
		//icon .pngs placed in github io repo
		return "http://jsphkhan.github.io/ReactNativeWeatherApp/assets/icons/10d.png";
	}
};

module.exports = Utils;


