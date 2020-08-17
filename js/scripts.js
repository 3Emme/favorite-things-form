$(document).ready(function() {
  $("form#fav-form").submit(function(event) {
    const fav1 = $("input#fav1").val();
    const fav2 = $("input#fav2").val();
    const fav3 = $("input#fav3").val();
    let favarray = [fav1, fav2, fav3];
    let selectarray = [];
    

    $("#fav1ans").text(fav1);
    $("#fav2ans").text(fav2);
    $("#fav3ans").text(fav3);
    $("div#fav-display").show();

    selectarray.push(favarray[1],favarray[0],favarray[2]);

    $("#sel1ans").text(selectarray[0]);
    $("#sel2ans").text(selectarray[1]);
    $("#sel3ans").text(selectarray[2]);
    $("div#sel-display").show();

    event.preventDefault();
  });
});











// $(document).ready(function() {
//   $("#formOne").submit(function(event) {
//     const person1Input = $("input#person1").val();
//     const person2Input = $("input#person2").val();
//     const animalInput= $("input#animal").val();
//     const exclamationInput = $("input#exclamation").val();
//     const verbInput = $("input#verb").val();
//     const verbInput2 = $("input#verb2").val();
//     const nounInput = $("input#noun").val();
//     const placeInput = $("input#place").val();

//     $(".person1").text(person1Input);
//     $(".person2").text(person2Input);
//     $(".animal").text(animalInput);
//     $(".exclamation").text(exclamationInput);
//     $(".verb").text(verbInput);
//     $(".verb2").text(verbInput2);
//     $(".noun").text(nounInput);
//     $(".place").text(placeInput);

//     $("#story").show();

//     event.preventDefault();
//   });
// });