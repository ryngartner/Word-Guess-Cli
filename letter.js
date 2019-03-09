function letter(character){
    this.letter = character,
    this.isGuessed = false
    this.guessed = function() {
        if(this.isGuessed === true){
            return this.letter
        }
        else return "_";    
    }
}

module.exports = letter;

    