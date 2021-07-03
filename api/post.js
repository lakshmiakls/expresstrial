const fs = require("fs");
const PATH = "./data.json";

class Posts {
    get() {
        return this.readData();
    }

    readData() {
        try{
            return JSON.parse(fs.readFileSync(PATH, 'utf-8'));
        }catch(e) {
            console.log(e);
            return `error in json data ${e}`;
        }
    }

    add(newPost) {
        const data = this.readData();
        data.results.unshift(newPost);
        this.storeData(data);
    }


    storeData(data) {
        try{
            fs.writeFileSync(PATH, JSON.stringify(data))
        }
        catch (e) {
            console.log(e);
        }
    }
}

module.exports = Posts;