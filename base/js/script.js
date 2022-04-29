// $(function () {
// jQuery goes here...
// Fades
// Uncomment this line to fade out the red box on page load
// $(".red-box").fadeTo(2000, 0.5);
// $(".green-box").fadeTo(2000, 0);
// $(".blue-box").hide(1000);
// $(".blue-box").show(1000);
// $(".blue-box").slideUp(1000);
// $(".blue-box").slideDown(1000);
// $(".blue-box2").slideUp(1000);
// $(".blue-box2").slideDown(1500);
// $(".green-box").fadeToggle();
// $(".green-box").fadeToggle();
// $(function () {
//   $(".blue-box").animate(
//     {
//       marginLeft: "200px",
//       opacity: "0",
//       height: "50px",
//       marginTop: "25px",
//     },
//     1000,
//     "linear"
//   );
// });
// $(".red-box").fadeTo(1000, 0.2);
// $(".green-box").delay(1000).fadeTo(1000, 0.5);
// $(".blue-box").delay(1000).fadeTo(1000, 0.8);
// $(function () {
//   $(".red-box").fadeTo(1000, 0.2, function () {
//     $(".green-box").fadeTo(1000, 0.2, function () {
//       $(".blue-box").fadeTo(1000, 0.2);
//     });
//   });
// });
// function inside function
// $(function () {
//   $(".red-box").slideUp(1000, function () {
//     $(".red-box").slideDown(1000).animate(
//       {
//         opacity: "0.2",
//         marginLeft: "200px",
//       },
//       1000
//     );
//   });
// });
// $(function () {
//   $(".lightbox").delay(500).fadeIn(1000);
// });
// Change css of elements - list-items
// $("li:last").css("background-color", "rgba(180, 180, 30, 0.8)");
// $("li:first").css("background-color", "rgba(180, 180, 30, 0.8)");
// $("li:even").css("background-color", "rgba(180, 180, 30, 0.8)");
// $("li:odd").css("background-color", "rgba(180, 180, 30, 0.8)");
// $("input:selected").css("background-color", "rgba(180, 180, 30, 0.8)");
// $(function () {
//   $("input[type=submit], p").css(
//     "background-color",
//     "rgba(180, 180, 30, 0.8)"
//   );
// });
// Jquery methods for Traversal
// $("#list").find("li").css("background-color", "rgba(180, 180, 30, 0.8)");
// $("#list").children("li").css("background-color", "rgba(180, 180, 30, 0.8)");
// $("#list").parent("div").css("background-color", "rgba(180, 180, 30, 0.8)");
// $("#list").siblings(":header").css("background-color", "rgba(180, 180, 30, 0.8)");
// $("#list").next().css("background-color", "rgba(180, 180, 30, 0.8)");
// $("#list").prev().css("background-color", "rgba(180, 180, 30, 0.8)");
// vælg alle header elementer
// $("body").find(":header").css("background-color", "rgba(180, 180, 30, 0.8)");
// // alle input child elementer med password input
// $("form")
//   .children("input:password")
//   .css("background-color", "rgba(180, 180, 30, 0.8)");
// $(function () {
// $("#list").find("li").filter(":even").css("background-color", "rgba(180, 180, 30, 0.8)");
// $("#list")
//   .find("li")
//   .filter(function (index) {
//     return index % 3 === 1;
//   })
//   .css("background-color", "rgba(180, 180, 30, 0.8)");
// $("li").eq(2).css("background-color", "rgba(180, 180, 30, 0.8)");
// $("li").eq(-2).css("background-color", "rgba(180, 180, 30, 0.8)");
// $("li").not(":first").css("background-color", "rgba(180, 180, 30, 0.8)");
//   $("li")
//     .not(function (index) {
//       return index % 3 === 2;
//     })
//     .css("background-color", "rgba(180, 180, 30, 0.8)");
// });
// add children og siblings
// $(function () {
// $("ul ul:first").append("<li>i'm gonna be the last sub-item");
// $("<li>i'm gonna be the last sub-item</li>").appendTo("ul ul:first");
// $("ul ul").prepend("<li>i'm gonna be the first sub-item");
// $("<h4>Alexander Frisdahl</h4>").prependTo("#content");
// $(".red-box").after("<div class='red-box'> Another red box");
// $(".blue-box").before("<div class='blue-box'> Another blue box");
//   $(".blue-box").before(function () {
//     return "<div class='blue-box'>blue 2";
//   });
//   $(".blue-box").before($(".red-box"));
//   $("p").after($("#list"));
// });
// $(function (index) {
// $("li").replaceWith(function () {
//   return "<li>replaced with function</li>";
// });
//   var firstListItem = $("li:first");
//   $("p:first").replaceWith(firstListItem);
// });
// Challenge - replace all red and blue boxes with a green one
// $(".blue-box, .red-box").replaceWith("<div class='green-box'>replaced with green</div>");
// remove all direct children of the form element which are not textarea, input type text, and add a new line to the form
// $(function () {
//   $("li").remove();
//   $("form").children().not("input:text, textarea, br").remove();
// });
// $("form").children().not("input:text, textarea, br").remove();
// var detachedListItem = $("li").detach();
// $("#content").append(detachedListItem);

// $("p:first").empty();

// $(".red-box, .blue-box, .green-box").empty();

// attr(), prop(), val()
// var specialLink = $("#special-link");
// console.log(specialLink.attr("href"));

// specialLink.attr("href", "https");
// console.log(specialLink.attr("href"));

// var checkbox = $("input:checkbox");
// console.log(checkbox.prop("checked"));
// console.log(checkbox.prop("checked"));

// var textInput = $("input:text");
// console.log(textInput.val());

// var range = $("input[type='range']");
// console.log(range.val());

// $(function () {
// var galleryImage = $(".gallery").find("img").first();
// var images = [
//   "images/laptop-mobile_small.jpg",
//   "images/laptop-on-table_small.jpg",
//   "images/people-office-group-team_small.jpg",
// ];
// var i = 0;
// setInterval(function () {
//   i = (i + 1) % images.length;
//   galleryImage.fadeOut(function () {
//     $(this).attr("src", images[i]);
//     $(this).fadeIn();
//   });
//   console.log(galleryImage.attr("src"));
// }, 10000);
// $(".gallery").css("display", "none");
// var redBox = $(".red-box");
// redBox.css("width", "80px");
// var properties = $("p").css(["font-size", "line-height"]);
// console.log(properties);
// redBox.css("user-select", "none");
// $("a").addClass("fancy-link");
// $("p").addClass("large emphasize");
// $("li li").addClass(function (index) {
//   $(this).addClass("item-" + index);
// });
// $("div").addClass(function (index, currentClass) {
//   if (currentClass === "dummy") {
//     return "red-box";
//   }
// });
// $(".blue-box").removeClass("blue-box").addClass("green-box");
// var gallery = $(".gallery");
// var images = [
//   "images/laptop-mobile_small.jpg",
//   "images/laptop-on-table_small.jpg",
//   "images/people-office-group-team_small.jpg",
// ];
// gallery.data("availableImages", images);
// gallery.data("name", "The awesome Gallery");
// gallery.removeData("name");
// console.log(gallery.data());
// var firstPar = $("p:first");
// console.log(firstPar.data("mydata"));
// var firstPar = $("p:first");
// console.log(firstPar.text());
// console.log(firstPar.html());
// var secondPar = $("p:last");
// $("p:first").append(secondPar);
// firstPar.text("<strong>Hello</strong> world!");
// firstPar.html("<strong>Hello</strong> world!");
// Challenge - When you click the red-box the div opacity will be 50%
// $("#btn-click").click(function (event) {
//   alert("button was clicked");
//   console.log(event);
// });
// $(".red-box").click(function (event) {
//   $(this).fadeTo(1000, 0.5);
//   console.log(event);
// });
// Hover effect
// $("#btn-hover").hover(function () {
//   alert("button was hovered");
// });
// $(".green-box").hover(function () {
//   console.log("hello");
//   $(this).text("this box was hovered");
// });
// var blueBox = $(".blue-box");
// blueBox.mouseenter(function () {
//   $(this).fadeTo(500, 0.7);
// });
// blueBox.mouseleave(function () {
//   $(this).stop().fadeTo(500, 1);
// });
// // hover(handlerIn, handlerOut)
// blueBox.hover(
//   function () {
//     $(this).fadeTo(500, 0.5);
//   },
//   function () {
//     $(this).stop().fadeTo(500, 1);
//   }
// );

// .on() er en god metode, når man gerne vil have den samme funktion til flere events
// $(".gallery").on("click keydown", function () {
//   $(this).find("img", function())
// });

// $(function () {
//   var images = [
//     "images/laptop-mobile_small.jpg",
//     "images/laptop-on-table_small.jpg",
//     "images/people-office-group-team_small.jpg",
//   ];
//   var i = 0;
//   var galleryImg = $(".gallery").find("img");
//   galleryImg.on("click", switchImg);
//   function switchImg() {
//     i = (i + 1) % images.length;
//     galleryImg.fadeOut(function () {
//       galleryImg.attr("src", images[i]).fadeIn();
//     });
//   }

// $(function () {
// $("#content").on("click", "p", function () {
//   $(this).slideUp();
// });
// $("#content").append("<p>this is the new text</p>");

// $(function () {
//   $("body").on("mouseenter", "li", function () {
//     $(this).css("color", "green");
//   });

//   $("body").on("mouseleave", "li", function () {
//     $(this).css("color", "black");
//   });

// $(function () {
// $("#btn-click").click(
//   {
//     user: "Peter",
//     domain: "Frisdahl-marketing.dk",
//   },
//   function (event) {
//     greetUser(event.data);
//   }
// );
// function greetUser(userdata) {
//   username = userdata.user || "anonymous";
//   domain = userdata.domain || "anonymous";
//   alert("Welcome back " + username + "! from " + domain);
// }

$(function () {
  var galleryItems = $(".gallery").find("img");
  galleryItems.css("width", "33%").css("opacity", "0.7");
  $(galleryItems).mouseenter(function () {
    $(this).stop().fadeTo(500, 1);
  });
  $(galleryItems).mouseleave(function () {
    $(this).stop().fadeTo(500, 0.7);
  });
  galleryItems.click(function () {
    var source = $(this).attr("src");
    var image = $("<img>").attr("src", source).css("width", "100%");
    $(".lightbox").empty().append(image).fadeIn(500);
    $(".lightbox").on("click", function () {
      $(this).stop().fadeOut(500);
    });
  });
});

// $(function () {
// funktion hvis bruger trykker på højre pil-tast

//   $("html").keydown(function (event) {
//     console.log(event.which);
//     var rightArrow = 39;
//     var pressedKey = event.which;
//     console.log(pressedKey);

//     if (pressedKey == rightArrow) {
//       $(".blue-box").stop().animate({
//         marginLeft: "+=10px",
//       });
//     }
//   });
// });

// $(function () {
//   var inputFields = $("input:text, input:password, textarea");
//   inputFields.focus(function () {
//     $(this).css("box-shadow", "0 0 4px #666");
//   });

//   inputFields.blur(function () {
//     $(this).css("box-shadow", "none");
//   });

//   $("#name, #email, #password").blur(function () {
//     var text = $(this).val();
//     if (text.length < 3) {
//       $(this).css("box-shadow", "0 0 4px red");
//     } else {
//       $(this).css("box-shadow", "0 0 4px green");
//     }
//   });

//   $(function () {
//     $("#checkbox").change(function () {
//       var isChecked = $(this).is(":checked");
//       if (isChecked) {
//         $(this).add("label[for='cb']").css("box-shadow", "0 0 4px #181");
//       } else {
//         $(this).add("label[for='cb']").css("box-shadow", "0 0 4px #811");
//       }
//     });
//   });

//   $(function () {
//     $("#selection").change(function () {
//       var selectedOption = $(this).find(":selected").text();
//       if (selectedOption) {
//         alert("dette er valg nummer: " + selectedOption);
//       }
//     });
//   });

//   $(function () {
//     $("form").submit(function (event) {
//       var textarea = $("#message");
//       if (textarea.val().trim() == "") {
//         textarea.css("box-shadow", "0 0 4px #811");
//         event.preventDefault();
//       } else {
//         // form will be submitted
//       }
//     });
//   });

//   var form = $("form");
//   enableFastFeedback(form);

//   $(function () {
//     form.submit(function (event) {
//       var name = $("#name").val();
//       var password = $("#password").val();
//       var message = $("#message").val();
//       var isChecked = $("#checkbox").is(":checked");
//       var email = $("#email").val();

//       validateNameField(name, event);
//       validatePasswordField(password, event);
//       validateMessageField(message, event);
//       validateEmailField(email, event);
//       validateCheckedField(isChecked, event);
//     });
//   });

//   // FastFeedback
//   function enableFastFeedback(formElement) {
//     var nameInput = formElement.find("#name");
//     var passwordInput = formElement.find("#password");
//     var emailInput = formElement.find("#email");
//     var messageInput = formElement.find("#message");
//     var checkboxInput = formElement.find("#checkbox");

//     nameInput.blur(function (event) {
//       var name = $(this).val();
//       validateNameField(name, event);

//       if (!validateName(name)) {
//         $(this).css({ "box-shadow": "0 0 4px #811", border: "1px solid #600" });
//       } else {
//         $(this).css({ "box-shadow": "0 0 4px #181", border: "1px solid #600" });
//       }
//     });

//     passwordInput.blur(function (event) {
//       var password = $(this).val();
//       validatePasswordField(password, event);

//       if (!validatePassword(password)) {
//         $(this).css({ "box-shadow": "0 0 4px #811", border: "1px solid #600" });
//       } else {
//         $(this).css({ "box-shadow": "0 0 4px #181", border: "1px solid #600" });
//       }
//     });

//     emailInput.blur(function (event) {
//       var email = $(this).text();
//       validateEmailField(email, event);

//       if (!validateEmail(email)) {
//         $(this).css({ "box-shadow": "0 0 4px #811", border: "1px solid #600" });
//       } else {
//         $(this).css({ "box-shadow": "0 0 4px #181", border: "1px solid #600" });
//       }
//     });

//     messageInput.blur(function (event) {
//       var message = $(this).val();
//       validateMessageField(message, event);

//       if (!validateMessage(message)) {
//         $(this).css({ "box-shadow": "0 0 4px #811", border: "1px solid #600" });
//       } else {
//         $(this).css({ "box-shadow": "0 0 4px #181", border: "1px solid #600" });
//       }
//     });

//     checkboxInput.blur(function (event) {
//       var isChecked = $(this).is(":checked");
//       validateCheckedField(isChecked, event);

//       if (isChecked) {
//         $(this).css({ "box-shadow": "0 0 4px #811", border: "1px solid #600" });
//       } else {
//         $(this).css({ "box-shadow": "0 0 4px #181", border: "1px solid #600" });
//       }
//     });
//   }

//   // valideringer
//   function validateNameField(name, event) {
//     if (!validateName(name)) {
//       $("#name-feedback").text("Please enter at least 5 characters");
//       event.preventDefault();
//     } else {
//       $("#name-feedback").text("");
//     }
//   }

//   function validatePasswordField(password, event) {
//     if (!validatePassword(password)) {
//       $("#password-feedback").text(
//         "The password should be 6 characters and a number"
//       );
//       event.preventDefault();
//     } else {
//       $("#password-feedback").text("");
//     }
//   }

//   function validateMessageField(message, event) {
//     if (!validateMessage(message)) {
//       $("#message-feedback").text("please write a message");
//       event.preventDefault();
//     } else {
//       $("#message-feedback").text("");
//     }
//   }

//   function validateCheckedField(isChecked, event) {
//     if (!isChecked) {
//       $("#checkbox-feedback").text("Please agree to this");
//     } else {
//       $("#checkbox-feedback").text("");
//     }
//   }

//   function validateEmailField(email, event) {
//     if (!validateEmail(email)) {
//       $("#email-feedback").text("This email sucks");
//       event.preventDefault();
//     } else {
//       $("#email-feedback").text("");
//     }
//   }

//   // funktioner
//   function validateEmail(email) {
//     return email.length >= 8;
//   }

//   function validateName(name) {
//     return name.length >= 5;
//   }

//   function validatePassword(password) {
//     return password.length >= 6 && /.*[0-9].*/.test(password);
//   }

//   function validateMessage(message) {
//     return message.trim() != "";
//   }

$(function () {
  // $.get(), $.post(), $.ajac(), $.getJSON()
  // $.load()
  // $("#code").load("js/script.js");
  // $("#code").load("js/script.js", function (response, status) {
  //   if (status === "error") {
  //     alert("could not find file");
  //   }
  //   console.log(response);
  // });
  //JSON
  // header("Acces-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE");
  // header(
  //   "Acces-Control-Allow-headers: Content-Type, X-Auth-Token, Origin, Authorization"
  // );
  // $.getJSON();
  // var flickrApiUrl = "https://www.flickr.com/services/feeds/photos_public.gne";
  // $.get(flickrApiUrl, {
  //   // options...
  //   tags: "sun, beach",
  //   tagmode: "any",
  //   format: "json",
  // })
  //   .done(function () {
  //     // succes/eventhandler
  //     console.log(data);
  //   })
  //   .fail(function () {
  //     alert("ajax call failed");
  //   });
  // var people = "https://swapi.dev/api/people";
  // $.getJSON(people)
  //   .done(function (data) {
  //     $.each(data.results, function (index, karakter) {});
  //     console.log(data);
  //   })
  //   .fail(function () {
  //     console.log("API kunne ikke hentes");
  //   });
  // var pokeApiUrl = "https://pokeapi.co/api/v2/generation/1";
  // var pokemonByName = "https://pokeapi.co/api/v2/pokemon/";
  // $.getJSON(pokeApiUrl)
  //   .done(function (data) {
  //     console.log(data);
  //     $.each(data.pokemon_species, function (index, pokemon) {
  //       var name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
  //       var link = $("<a></a>")
  //         .attr("id", pokemon.name)
  //         .attr("href", "#")
  //         .append($("<strong></strong>").text(name));
  //       var par = $("<p></p>")
  //         .html("Pokémon species no." + (index + 1) + " is ")
  //         .append(link);
  //       link.click(function (event, index) {
  //         $.getJSON(pokemonByName + pokemon.name).done(function (details) {
  //           var pokemonDiv = $("#pokemon-details");
  //           pokemonDiv.empty();
  //           pokemonDiv.append("<h2>" + name + "</h2>");
  //           pokemonDiv.append(
  //             "<img src='" + details.sprites.front_default + "'>"
  //           );
  //           pokemonDiv.append(
  //             "<img src='" + details.sprites.back_default + "'>"
  //           );
  //           pokemonDiv.append(
  //             "<img src='" + details.sprites.front_shiny + "'>"
  //           );
  //           pokemonDiv.append("<img src='" + details.sprites.back_shiny + "'>");
  //         });
  //         event.preventDefault();
  //       });
  //       par.appendTo("#pokemon");
  //     });
  //   })
  //   .fail(function () {
  //     console.log("Request to Pokeapi failed.");
  //   })
  //   .always(function () {
  //     console.log("Pokémon is awesome");
  //   });
});
