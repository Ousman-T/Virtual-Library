// import the Media class:
const Media = require('./Media');
// create your Music class:
class Music extends Media {
    constructor(title, year, genre, artist, length){
        super(title, year, genre);
        this.artist = artist;
        this.length = length;
    }
    summary(){
        return `Title: ${this.title}, Artist: ${this.artist}, Year: ${this.year}, Genre: ${this.genre}, Length: ${this.length} seconds`
    }
    static shortestAlbum(musicArr){
        let shortest = musicArr[0];
        for(let i = 1; i < musicArr.length; i++){
            if(musicArr[i].length < shortest.length){
                shortest = musicArr[i];
            }
        }
        return shortest;
    }
}
// don't change below
module.exports = Music;
