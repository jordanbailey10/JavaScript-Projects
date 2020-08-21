function my_Dictionary() {
    var Mypet = {
        Species:"Dog",
        Color:"Blonde",
        Breed:"Sheperd Mix",
        Age: 9,
        Sound:"Bark!"
    };
    delete Mypet.Sound;
    document.getElementById("Dictionary").innerHTML = Mypet.Sound;
}