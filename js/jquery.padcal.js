/*
jquery.padca.js

The MIT License
Copyright (c) 2013 Yasufumi Minoda

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

(function($){

	$.fn.padcal = function(){
		var date = new Date();
		var year = date.getFullYear();
		var month = date.getMonth() + 1;
		var day = date.getDate();
		var text = year + "-" + (month < 10 ? "0" + month : month) + "-" + (day < 10 ? "0" + day : day);
		var w = [ "sun", "mon", "tue", "wed", "thu", "fri", "sat" ];

		return this.each(function(){
			if (this.tagName == "SPAN" || this.tagName == "INPUT")
			{
				var it = $(this);
				var text1 = "";
				if (this.tagName == "SPAN")
				{
					text1 = it.text();
				}
				else
				{
					text1 = it.val();
				}
				text1 = (text1 && text1 != ""  ? text1 : text);
				var y1 = text1.split("-")[0];
				var m1 = text1.split("-")[1];
				var d1 = text1.split("-")[2];
				var date1 = new Date(Number(y1), Number(m1) - 1, Number(d1));
				var year1 = date1.getFullYear();
				var month1 = date1.getMonth() + 1;
				var day1 = date1.getDate();
				it.css("display", "none")
					.addClass("padcal")
					.after("<div class='padcal-" + w[date1.getDay()] + "'><div></div><div>" + year1 + "/" + month1 + "</div>" + day1 + "</div>")
				if (this.tagName == "SPAN")
				{
					it.text(text1);
				}
				else
				{
					it.val(text1)
						.next().on("click", function(){
							var t = $(this);
							var dataDate2 = it.val();
							var y2 = dataDate2.split("-")[0];
							var m2 = dataDate2.split("-")[1];
							var d2 = dataDate2.split("-")[2];
							var date2 = new Date(Number(y2), Number(m2) - 1, Number(d2) + 1);
							var year2 = date2.getFullYear();
							var month2 = date2.getMonth() + 1;
							var day2 = date2.getDate();
							var text2 = year2 + "-" + (month2 < 10 ? "0" + month2 : month2) + "-" + (day2 < 10 ? "0" + day2 : day2);
							it.val(text2);
							t.attr("class", "")
								.addClass("padcal-" + w[date2.getDay()])
								.html("<div></div><div>" + year2 + "/" + month2 + "</div>" + day2 + "</div>" +
									"<div class='padcal-" + w[date2.getDay() == 0 ? 6 : date2.getDay() - 1] + " padcal-copy'>" +
										"<div></div>" +
										"<div>" + year2 + "/" + month2 + "</div>" +
									day2)
								.children("div.padcal-copy")
									.animate({
											top: "0px",
											opacity: 0
										},
										function(){
											$(this).remove();
										}
									);
						});
					it.on("change", function(){
						var dataDate3 = it.val();
						var y3 = dataDate3.split("-")[0];
						var m3 = dataDate3.split("-")[1];
						var d3 = dataDate3.split("-")[2];
						var date3 = new Date(Number(y3), Number(m3) - 1, Number(d3));
						var year3 = date3.getFullYear();
						var month3 = date3.getMonth() + 1;
						var day3 = date3.getDate();
						it.next().removeClass().addClass("padcal-" + w[date3.getDay()]).html("<div></div><div>" + year3 + "/" + month3 + "</div>" + day3 + "</div>");
					});
				}
			}
			else
			{
				return undefined;
			}
		});
	};
})(jQuery)
