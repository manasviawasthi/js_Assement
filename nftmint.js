
// create a variable to hold your NFT's
const NFTs = [];
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_class,_name,_magic,_strength,_endurance,_weapon_choice) {
    console.log("Minted : "+_class+"=>"+_name)
    const NFT = {
        "class" : _class,
        "name" : _name,
        "magic": _magic,
        "strength": _strength,
        "endurance": _endurance,
        "weapon_choice": _weapon_choice    }
        NFTs.push(NFT);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i = 0; i<NFTs.length;i++){
        console.log("ID:\t\t\t\t"+(i+1))
        console.log("CLASS: \t\t\t"+NFTs[i].class);
        console.log("NAME:\t\t\t"+NFTs[i].name);
        console.log("MAGIC:\t\t\t"+NFTs[i].magic);
        console.log("STRENGTH:\t\t"+NFTs[i].strength);
        console.log("ENDURANCE:\t\t"+NFTs[i].endurance);
        console.log("WEAPON CHOICE:\t"+NFTs[i].weapon_choice+"\n");
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("Number of NFTs: "+NFTs.length);
}

// call your functions below this line
mintNFT("Warrior","Edwin",14,50,34,"Straight Sword");
mintNFT("Mage","Penny",44,23,32,"Magic Wand");
listNFTs();
getTotalSupply();
