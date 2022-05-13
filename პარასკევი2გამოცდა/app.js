let topics = ["Internet Cats", "Meme's", "Typing", "Space", "Rick and Morty"];

let url = 'https://api.giphy.com/v1/gifs/search?';
let apikey = '3mIxmBZUIIPyb8R69gtxaW8Hsh74dFKV';
let limit = 10;

class Giphy {
    constructor(url) {
        this.url = url;
    }
}

class InternetCats extends Giphy {
    constructor(url, cat) {
        super(url)
        this.cat = cat;
    }

    async getCat() {
        const cats = await fetch(this.url + `&q=${this.cat}&limit=${limit}&api_key=${apikey}`);
        const res = await cats.json();
        console.log(res);
    }
}


class Meme extends Giphy {
    constructor(url, meme) {
        super(url)
        this.meme = meme;
    }

    async getMeme() {
        const memeUrl = await fetch(this.url + `&q=${this.meme}&limit=${limit}&api_key=${apikey}`);
        const memes = await memeUrl.json();
        console.log(memes);
    }
}


class Typing extends Giphy {
    constructor(url, typing) {
        super(url)
        this.typing = typing;
    }

    async getTyping() {
        const typingUrl = await fetch(this.url + `&q=${this.typing}&limit=${limit}&api_key=${apikey}`);
        const memes = await typingUrl.json();
        console.log(memes);
    }
}


class Space extends Giphy {
    constructor(url, space) {
        super(url)
        this.space = space;
    }

    async getSpace() {
        const spaceUrl = await fetch(this.url + `&q=${this.space}&limit=${limit}&api_key=${apikey}`);
        const space = await spaceUrl.json();
        console.log(space);
    }
}


class RickyAndMorty extends Giphy {
    constructor(url, rickyAndMorty) {
        super(url)
        this.rickyAndMorty = rickyAndMorty;
    }

    async getRickAndMorty() {
        const rickyAndMortyUrl = await fetch(this.url + `&q=${this.rickyAndMorty}&limit=${limit}&api_key=${apikey}`);
        const rickyAndMorty = await rickyAndMortyUrl.json();
        console.log(rickyAndMorty);
    }
}

let cat = new InternetCats(url, 'cat');
cat.getCat();

let meme = new Meme(url, 'memes');
meme.getMeme();

let typing = new Typing(url, 'typing');
typing.getTyping();

let space = new Space(url,'space');
space.getSpace();

let rickyAndMorty = new RickyAndMorty(url,'Rick and Morty');
rickyAndMorty.getRickAndMorty();



