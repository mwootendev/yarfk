/*
   Copyright 2012 Michael Wooten

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/

var com = com || {};
com.robotfindskitten = com.robotfindskitten || {};

com.robotfindskitten.NonKittenItemNames = (function(rfk, global) {

  var nonKittenItems = [
    "\"I pity the fool who mistakes me for kitten!\", sez Mr. T.",
    "That's just an old tin can.",
    "It's an altar to the horse god.",
    "A box of dancing mechanical pencils. They dance! They sing!",
    "It's an old Duke Ellington record.",
    "A box of fumigation pellets.",
    "A digital clock. It's stuck at 2:17 PM.",
    "That's just a charred human corpse.",
    "I don't know what that is, but it's not kitten.",
    "An empty shopping bag. Paper or plastic?",
    "Could it be... a big ugly bowling trophy?",
    "A coat hanger hovers in thin air. Odd.",
    "Not kitten, just a packet of Kool-Aid(tm).",
    "A freshly-baked pumpkin pie.",
    "A lone, forgotten comma, sits here, sobbing.",
    "ONE HUNDRED THOUSAND CARPET FIBERS!!!!!",
    "It's Richard Nixon's nose!",
    "It's Lucy Ricardo. \"Aaaah, Ricky!\", she says.",
    "You stumble upon Bill Gates' stand-up act.",
    "Just an autographed copy of the Kama Sutra.",
    "It's the Will Rogers Highway. Who was Will Rogers, anyway?",
    "It's another robot, more advanced in design than you but strangely immobile.",
    "Leonard Richardson is here, asking people to lick him.",
    "It's a stupid mask, fashioned after a beagle.",
    "Your State Farm Insurance(tm) representative!",
    "It's the local draft board.",
    "Seven 1/4\" screws and a piece of plastic.",
    "An 80286 machine.",
    "One of those stupid \"Homes of the Stars\" maps.",
    "A signpost saying \"TO KITTEN\". It points in no particular direction.",
    "A hammock stretched between a tree and a volleyball pole.",
    "A Texas Instruments of Destruction calculator.",
    "It's a dark, amphorous blob of matter.",
    "Just a pincushion.",
    "It's a mighty zombie talking about some love and prosperity.",
    "\"Dear robot, you may have already won our 10 MILLION DOLLAR prize...\"",
    "It's just an object.",
    "A mere collection of pixels.",
    "A badly dented high-hat cymbal lies on its side here.",
    "A marijuana brownie.",
    "A plush Chewbacca.",
    "Daily hunger conditioner from Australasia",
    "Just some stuff.",
    "Why are you touching this when you should be finding kitten?",
    "A glorious fan of peacock feathers.",
    "It's some compromising photos of Babar the Elephant.",
    "A copy of the Weekly World News. Watch out for the chambered nautilus!",
    "It's the proverbial wet blanket.",
    "A \"Get Out of Jail Free\" card.",
    "An incredibly expensive \"Mad About You\" collector plate.",
    "Paul Moyer's necktie.",
    "A haircut and a real job. Now you know where to get one!",
    "An automated robot-hater. It frowns disapprovingly at you.",
    "An automated robot-liker. It smiles at you.",
    "It's a black hole. Don't fall in!",
    "Just a big brick wall.",
    "You found kitten! No, just kidding.",
    "Heart of Darkness brand pistachio nuts.",
    "A smoking branding iron shaped like a 24-pin connector.",
    "It's a Java applet.",
    "An abandoned used-car lot.",
    "A shameless plug for Crummy: http://www.crummy.com/",
    "A shameless plug for the UCLA Linux Users Group: http://linux.ucla.edu/",
    "A can of Spam Lite.",
    "This is another fine mess you've gotten us into, Stanley.",
    "It's scenery for \"Waiting for Godot\".",
    "This grain elevator towers high above you.",
    "A Mentos wrapper.",
    "It's the constellation Pisces.",
    "It's a fly on the wall. Hi, fly!",
    "This kind of looks like kitten, but it's not.",
    "It's a banana! Oh, joy!",
    "A helicopter has crashed here.",
    "Carlos Tarango stands here, doing his best impression of Pat Smear.",
    "A patch of mushrooms grows here.",
    "A patch of grape jelly grows here.",
    "A spindle, and a grindle, and a bucka-wacka-woom!",
    "A geyser sprays water high into the air.",
    "A toenail? What good is a toenail?",
    "You've found the fish! Not that it does you much good in this game.",
    "A Buttertonsils bar.",
    "One of the few remaining discoes.",
    "Ah, the uniform of a Revolutionary-era minuteman.",
    "A punch bowl, filled with punch and lemon slices.",
    "It's nothing but a G-thang, baby.",
    "IT'S ALIVE! AH HA HA HA HA!",
    "This was no boating accident!",
    "Wait! This isn't the poker chip! You've been tricked! DAMN YOU, MENDEZ!",
    "A livery stable! Get your livery!",
    "It's a perpetual immobility machine.",
    "\"On this spot in 1962, Henry Winkler was sick.\"",
    "There's nothing here; it's just an optical illusion.",
    "The World's Biggest Motzah Ball!",
    "A tribe of cannibals lives here. They eat Malt-O-Meal for breakfast, you know.",
    "This appears to be a rather large stack of trashy romance novels.",
    "Look out! Exclamation points!",
    "A herd of wild coffee mugs slumbers here.",
    "It's a limbo bar! How low can you go?",
    "It's the horizon. Now THAT'S weird.",
    "A vase full of artificial flowers is stuck to the floor here.",
    "A large snake bars your way.",
    "A pair of saloon-style doors swing slowly back and forth here.",
    "It's an ordinary bust of Beethoven... but why is it painted green?",
    "It's TV's lovable wisecracking Crow! \"Bite me!\", he says.",
    "Hey, look, it's war. What is it good for? Absolutely nothing. Say it again.",
    "It's the amazing self-referential thing that's not kitten.",
    "A flamboyant feather boa. Now you can dress up like Carol Channing!",
    "\"Sure hope we get some rain soon,\" says Farmer Joe.",
    "\"How in heck can I wash my neck if it ain't gonna rain no more?\" asks Farmer Al.",
    "\"Topsoil's all gone, ma,\" weeps Lil' Greg.",
    "This is a large brown bear. Oddly enough, it's currently peeing in the woods.",
    "A team of arctic explorers is camped here.",
    "This object here appears to be Louis Farrakhan's bow tie.",
    "This is the world-famous Chain of Jockstraps.",
    "A trash compactor, compacting away.",
    "This toaster strudel is riddled with bullet holes!",
    "It's a hologram of a crashed helicopter.",
    "This is a television. On screen you see a robot strangely similar to yourself.",
    "This balogna has a first name, it's R-A-N-C-I-D.",
    "A salmon hatchery? Look again. It's merely a single salmon.",
    "It's a rim shot. Ba-da-boom!",
    "It's creepy and it's kooky, mysterious and spooky. It's also somewhat ooky.",
    "This is an anagram.",
    "This object is like an analogy.",
    "It's a symbol. You see in it a model for all symbols everywhere.",
    "The object pushes back at you.",
    "A traffic signal. It appears to have been recently vandalized.",
    "\"There is no kitten!\" cackles the old crone. You are shocked by her blasphemy.",
    "This is a Lagrange point. Don't come too close now.",
    "The dirty old tramp bemoans the loss of his harmonica.",
    "Look, it's Fanny the Irishman!",
    "What in blazes is this?",
    "It's the instruction manual for a previous version of this game.",
    "A brain cell. Oddly enough, it seems to be functioning.",
    "Tea and/or crumpets.",
    "This jukebox has nothing but Cliff Richards albums in it.",
    "It's a Quaker Oatmeal tube, converted into a drum.",
    "This is a remote control. Being a robot, you keep a wide berth.",
    "It's a roll of industrial-strength copper wire.",
    "Oh boy! Grub! Er, grubs.",
    "A puddle of mud, where the mudskippers play.",
    "Plenty of nothing.",
    "Look at that, it's the Crudmobile.",
    "Just Walter Mattheau and Jack Lemmon.",
    "Two crepes, two crepes in a box.",
    "An autographed copy of \"Primary Colors\", by Anonymous.",
    "Another rabbit? That's three today!",
    "It's a segmentation fault. Core dumped, by the way.",
    "A historical marker showing the actual location of /dev/null.",
    "Thar's Mobius Dick, the convoluted whale. Arrr!",
    "It's a charcoal briquette, smoking away.",
    "A pizza, melting in the sun.",
    "It's a \"HOME ALONE 2: Lost in New York\" novelty cup.",
    "A stack of 7 inch floppies wobbles precariously.",
    "It's nothing but a corrupted floppy. Coaster anyone?",
    "A section of glowing phosphor cells sings a song of radiation to you.",
    "This TRS-80 III is eerily silent.",
    "A toilet bowl occupies this space.",
    "This peg-leg is stuck in a knothole!",
    "It's a solitary vacuum tube.",
    "This corroded robot is clutching a mitten.",
    "\"Hi, I'm Anson Williams, TV's 'Potsy'.\"",
    "This subwoofer was blown out in 1974.",
    "Three half-pennies and a wooden nickel.",
    "It's the missing chapter to \"A Clockwork Orange\".",
    "It's a burrito stand flyer. \"Taqueria El Ranchito\".",
    "This smiling family is happy because they eat LARD.",
    "Roger Avery, persona un famoso de los Estados Unidos.",
    "Ne'er but a potted plant.",
    "A parrot, kipping on its back.",
    "A forgotten telephone switchboard.",
    "A forgotten telephone switchboard operator.",
    "It's an automated robot-disdainer. It pretends you're not there.",
    "It's a portable hole. A sign reads: \"Closed for the winter\".",
    "Just a moldy loaf of bread.",
    "A little glass tub of Carmex. ($.89) Too bad you have no lips.",
    "A Swiss-Army knife. All of its appendages are out. (toothpick lost)",
    "It's a zen simulation, trapped within an ASCII character.",
    "It's a copy of \"The Rubaiyat of Spike Schudy\".",
    "It's \"War and Peace\" (unabridged, very small print).",
    "A willing, ripe tomato bemoans your inability to digest fruit.",
    "A robot comedian. You feel amused.",
    "It's KITT, the talking car.",
    "Here's Pete Peterson. His batteries seem to have long gone dead.",
    "\"Blup, blup, blup\", says the mud pot.",
    "More grist for the mill.",
    "Grind 'em up, spit 'em out, they're twigs.",
    "The boom box cranks out an old Ethel Merman tune.",
    "It's \"Finding kitten\", published by O'Reilly and Associates.",
    "Pumpkin pie spice.",
    "It's the Bass-Matic '76! Mmm, that's good bass!",
    "\"Lend us a fiver 'til Thursday\", pleas Andy Capp.",
    "It's a tape of '70s rock. All original hits! All original artists!",
    "You've found the fabled America Online disk graveyard!",
    "Empty jewelboxes litter the landscape.",
    "It's the astounding meta-object.",
    "Ed McMahon stands here, lost in thought. Seeing you, he bellows, \"YES SIR!\"",
    "...thingy???",
    "It's 1000 secrets the government doesn't want you to know!",
    "The letters O and R.",
    "A magical... magic thing.",
    "It's a moment of silence.",
    "It's Sirhan-Sirhan, looking guilty.",
    "It's \"Chicken Soup for the Kitten-seeking Soulless Robot.\"",
    "It is a set of wind-up chatter teeth.",
    "It is a cloud shaped like an ox.",
    "You see a snowflake here, melting slowly.",
    "It's a big block of ice. Something seems to be frozen inside it.",
    "Vladimir Lenin's casket rests here.",
    "It's a copy of \"Zen and The Art of Robot Maintenance\".",
    "This invisible box contains a pantomime horse.",
    "A mason jar lies here open. It's label reads: \"do not open!\".",
    "A train of thought chugs through here.",
    "This jar of pickles expired in 1957.",
    "Someone's identity disk lies here.",
    "\"Yes!\" says the bit.",
    "\"No!\" says the bit.",
    "A dodecahedron bars your way.",
    "Mr. Hooper is here, surfing.",
    "It's a big smoking fish.",
    "You have new mail in /var/spool/robot",
    "Just a monitor with the blue element burnt out.",
    "A pile of coaxial plumbing lies here.",
    "It's a rotten old shoe.",
    "It's a hundred-dollar bill.",
    "It's a Dvorak keyboard.",
    "It's a cardboard box full of 8-tracks.",
    "Just a broken hard drive containg the archives of Nerth Pork.",
    "A broken metronome sits here, it's needle off to one side.",
    "A sign reads: \"Go home!\"",
    "A sign reads: \"No robots allowed!\"",
    "It's the handheld robotfindskitten game, by Tiger.",
    "This particular monstrosity appears to be ENIAC.",
    "This is a tasty-looking banana creme pie.",
    "A wireframe model of a hot dog rotates in space here.",
    "Just the empty husk of a locust.",
    "You disturb a murder of crows.",
    "It's a copy of the robotfindskitten EULA.",
    "It's Death.",
    "It's an autographed copy of \"Secondary Colors,\" by Bob Ross.",
    "It is a marzipan dreadnought that appears to have melted and stuck.",
    "It's a DVD of \"Crouching Monkey, Hidden Kitten\", region encoded for the moon.",
    "It's Kieran Hervold.  Damn dyslexia!",
    "A non-descript box of crackers.",
    "Carbonated Water, High Fructose Corn Syrup, Color, Phosphoric Acid, Flavors, Caffeine.",
    "\"Move along! Nothing to see here!\"",
    "It's the embalmed corpse of Vladimir Lenin.",
    "A coupon for one free steak-fish at your local family diner.",
    "A set of keys to a 2001 Rolls Royce. Worthless.",
    "A gravestone stands here.  \"Izchak Miller, ascended.\"",
    "Someone has written \"ad aerarium\" on the ground here.",
    "A large blue eye floats in midair.",
    "This appears to be a statue of Perseus.",
    "There is an opulent throne here.",
    "It's a squad of Keystone Kops.",
    "This seems to be junk mail addressed to the finder of the Eye of Larn.",
    "A wondrous and intricate golden amulet.  Too bad you have no neck.",
    "The swampy ground around you seems to stink with disease.",
    "An animate blob of acid.  Being metallic, you keep well away.",
    "It's a copy of Knuth with the chapter on kitten-search algorithms torn out.",
    "A crowd of people, and at the center, a popular misconception.",
    "It's a blind man. When you touch, he exclaims \"It's a kitten prospecting robot!\"",
    "It's a lost wallet. It's owner didn't have pets, so you discard it.",
    "This place is called Antarctica. There is no kitten here.",
    "It's a mousetrap, baited with soap.",
    "A book with \"Don't Panic\" in large friendly letters across the cover.",
    "A compendium of haiku about metals.",
    "A discredited cosmology, relic of a bygone era.",
    "A hollow voice says \"Plugh\".",
    "A knight who says \"Either I am an insane knave, or you will find kitten.\"\",     ",
    "A neural net -- maybe it's trying to recognize kitten.",
    "A screwdriver.",
    "A statue of a girl holding a goose like the one in Gottingen, Germany.",
    "A tetradrachm dated \"42 B.C.\"",
    "A voice booms out \"Onward, kitten soldiers...\"",
    "An eminently forgettable zahir.",
    "Apparently, it's Edmund Burke.",
    "For a moment, you feel something in your hands, but it disappears!",
    "Here is a book about Robert Kennedy.",
    "Hey, robot, leave those lists alone.",
    "Ho hum.  Another synthetic a posteriori.",
    "It's Asimov's Laws of Robotics.  You feel a strange affinity for them.",
    "It's Bach's Mass in B-minor!",
    "It's a bug.",
    "It's a synthetic a priori truth!  Immanuel would be so pleased!",
    "It's the Tiki Room.",
    "Just some old play by a Czech playwright, and you can't read Czech.",
    "Kitten is the letter 'Q'.  Oh, wait, maybe not.",
    "Quidquid Latine dictum sit, kitten non est.",
    "Sutro Tower is visible at some distance through the fog.",
    "The Digital Millennium Copyright Act of 1998.",
    "The United States Court of Appeals for the Federal Circuit.",
    "The non-kitten item like this but with \"false\" and \"true\" switched is true.\", ",
    "The non-kitten item like this but with \"true\" and \"false\" switched is false.",
    "This is the chapter called \"A Map of the Cat?\" from Feynman's autobiography.\",  ",
    "This is the forest primeval.",
    "Werner's \"Pocket Field Guide to Things That Are Not Kitten\".",
    "You found nettik, but that's backwards.",
    "You have found some zinc, but you must not stop here, for you must find kitten.\", ",
    "\"50 Years Among the Non-Kitten Items\", by Ann Droyd.",
    "\"Robot may not injure kitten, or, through inaction, ...\"",
    "\"Address Allocation for Private Internets\" by Yakov Rekhter et al.",
    "\"Mail Routing and the Domain System\" by Craig Partridge.",
    "\"The Theory and Practice of Oligarchical Collectivism\" by Emmanuel Goldstein.\", ",
    "\"201 Kitten Verbs, Fully Conjugated\".  You look for \"find\".",
    "A card shark sits here, practicing his Faro shuffle.  He ignores you.",
    "A copy of DeCSS.  They're a dime a dozen these days.",
    "A demonic voice proclaims \"There is no kitten, only Zuul\".  You flee.",
    "A lotus.  You make an interesting pair.",
    "A milk carton, with a black and white picture of kitten on the side.",
    "Any ordinary robot could see from a mile away that this wasn't kitten.",
    "A stegosaurus, escaped from the stegosaurusfindsrobot game.  It finds you.",
    "Baling wire and chewing gum.",
    "Chewing gum and baling wire.",
    "Here is no kitten but only rock, rock and no kitten and the sandy road.",
    "Hey, I bet you thought this was kitten.",
    "It is an ancient mariner, and he stoppeth one of three.",
    "It pleases you to be kind to what appears to be kitten -- but it's not!",
    "It's a blatant plug for Ogg Vorbis, http://www.vorbis.com/",
    "It's a business plan for a new startup, kitten.net.",
    "It's a revised business plan for a new startup, my.kitten.net.",
    "It's a square.",
    "It seems to be a copy of \"A Tail of Two Kitties\".",
    "It's the Donation of Constantine!",
    "It's this message, nothing more.",
    "Lysine, an essential amino acid.  Well, maybe not for robots.",
    "No kitten here.",
    "The score for a Czech composer's \"Kitten-Finding Symphony in C\".",
    "This looks like Bradley's \"Appearance and Reality\", but it's really not.",
    "This non-kitten item no verb.",
    "You feel strangely unfulfilled.",
    "You hit the non-kitten item.  The non-kitten item fails to yowl.",
    "You suddenly yearn for your distant homeland.",
    "You've found the snows of yesteryear!  So that's where they all went to.",
    "Approaching.  One car.  J.  Followed by.  Two car.  M, M.  In five. Minutes.",
    "Free Jon Johansen!",
    "Free Dmitry Sklyarov!",
    "One person shouts \"What do we want?\" The crowd answers \"Free Dmitry!\"",
    "Judith Platt insults librarians.",
    "This map is not the territory.",
    "\"Go back to Libraria!\", says Pat Schroeder.",
    "This is a porcelain kitten-counter.  0, 0, 0, 0, 0...",
    "An old bootable business card, unfortunately cracked down the middle.",
    "A kitten sink, for washing kitten (if only kitten liked water).",
    "A kitten source (to match the kitten sink).",
    "If it's one thing, it's not another.",
    "If it's not one thing, it's another.",
    "A caboodle.",
    "A grin.",
    "A hedgehog.  It looks like it knows something important.",
    "You've found... Oh wait, that's just a cat.",
    "Robot should not be touching that.",
    "Air Guitar!!!  NA na NA na!!",
    "An aromatherapy candle burns with healing light.",
    "You find a bright shiny penny.",
    "It's a free Jon Johansen!",
    "It's a free Dmitry Sklyarov!",
    "The rothe hits!  The rothe hits!",
    "It's an Internet chain letter about sodium laureth sulfate.",
    "Ed Witten sits here, pondering string theory.",
    "Something is written here in the dust.  You read: \"rJbotf ndQkttten\".",
    "We wish you a merry kitten, and a happy New Year!",
    "Run away!  Run away!",
    "You can see right through this copy of Brin\'s \"Transparent Society\".",
    "This copy of \"Steal This Book\" has been stolen from a bookstore.",
    "It's Roya Naini.",
    "This kit is the fourteenth in a series of kits named with Roman letters.",
    "This is the tenth key you've found so far.",
    "You find a fraud scheme in which loans are used as security for other loans.",
    "It's the phrase \"and her\", written in ancient Greek.",
    "It's the author of \"Randomness and Mathematical Proof\".",
    "It's the crusty exoskeleton of an arthropod!",
    "It's Emporer Shaddam the 4th's planet!",
    "It's the triangle leg adjacent to an angle divided by the leg opposite it.",
    "It's a bottle of nail polish remover.",
    "You found netkit! Way to go, robot!",
    "It's the ASCII Floating Head of Seth David Schoen!",
    "A frosted pink party-cake, half eaten.",
    "A bitchin' homemade tesla coil.",
    "Conan O'Brian, sans jawbone.",
    "It's either a mirror, or another soulless kitten-seeking robot.",
    "Preoccupation with finding kitten prevents you from investigating further.",
    "Fonzie sits here, mumbling incoherently about a shark and a pair of waterskis.",
    "The ghost of your dance instructor, his face a paper-white mask of evil.",
    "A bag of groceries taken off the shelf before the expiration date.",
    "A book: Feng Shui, Zen: the art of randomly arranging items that are not kitten.",
    "This might be the fountain of youth, but you'll never know.",
    "Tigerbot Hesh.",
    "Stimutacs.",
    "A canister of pressurized whipped cream, sans whipped cream.",
    "The non-kitten item bites!",
    "A chain hanging from two posts reminds you of the Gateway Arch.",
    "A mathematician calculates the halting probability of a Turing machine.",
    "A number of short theatrical productions are indexed 1, 2, 3, ... n.",
    "A technical university in Australia.",
    "It is -- I just feel something wonderful is about to happen.",
    "It's a Cat 5 cable.",
    "It's a U.S. president.",
    "It's a piece of cloth used to cover a stage in between performances.",
    "The ionosphere seems charged with meaning.",
    "This tomography is like, hella axial, man!",
    "It's your favorite game -- robotfindscatan!",
    "Just a man selling an albatross.",
    "The intermission from a 1930s silent movie.",
    "It's an inverted billiard ball!",
    "The spectre of Sherlock Holmes wills you onwards."
  ];

  var NonKittenItemNames = function() {};

  NonKittenItemNames.prototype = {
    randomItem : function() {
      return nonKittenItems[Math.floor(Math.random() * nonKittenItems.length)];
    }
  };

  return NonKittenItemNames;

})(com.robotfindskitten || {}, this);

com.robotfindskitten.ColorGenerator = (function(rfk, global) {

    var COLORS = ["red", "green", "yellow", "blue", "magenta", "cyan"];
    var ColorGenerator;

    ColorGenerator = function() {};

    ColorGenerator.prototype.randomColor = function randomColor() {
      return COLORS[Math.floor(Math.random() * COLORS.length)];
    };

    return ColorGenerator;

})(com.robotfindskitten || {}, this);

com.robotfindskitten.CharacterGenerator = (function(rfk, global) {

    var CharacterGenerator;

    CharacterGenerator = function() {};

    CharacterGenerator.prototype.randomCharacter = function randomCharacter() {
      var exclamationIndex = "!".charCodeAt(0);
      return String.fromCharCode(Math.floor(Math.random() *
        ((126 - exclamationIndex + 1)) + exclamationIndex));
    };

    return CharacterGenerator;

})(com.robotfindskitten || {}, this);

com.robotfindskitten.Screen = (function(rfk, global) {

    var BACKGROUND_COLOR = "black";

    var Screen = function(canvas) {
      this.canvas = canvas;
      this.context = canvas.getContext("2d");

      this.context.font = "1em Courier, Monospace";
      this.context.textBaseline = "top";

      this.fontWidth = this.context.measureText("M").width;
      this.fontHeight = this.calculateHeight();
    };

    Screen.prototype.calculateHeight = function calculateHeight() {
      var heightElement = document.createElement("span");
      heightElement.style.fontFamily = "Courier, Monospace";
      heightElement.style.fontSize = "1em";
      heightElement.style.position = "absolute";
      heightElement.style.visibility = "hidden";

      heightElement.appendChild(document.createTextNode("M"));

      var body = document.getElementsByTagName("body")[0];

      body.appendChild(heightElement);

      var height = heightElement.offsetHeight;

      body.removeChild(heightElement);

      return height;
    };

    Screen.prototype.drawScreenItem = function drawScreenItem(screenItem) {
      this.context.save();

      this.context.fillStyle = screenItem.color;
      this.context.fillText(screenItem.character,
        screenItem.x * this.fontWidth,
        screenItem.y * this.fontHeight);

      this.context.restore();
    };

    Screen.prototype.clearScreen = function clearScreen() {
      this.context.save();

      this.context.fillColor = BACKGROUND_COLOR;
      this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

      this.context.restore();
    };

    Screen.prototype.clearScreenItem = function clearScreenItem(screenItem) {
      this.context.save();

      this.context.fillColor = BACKGROUND_COLOR;
      this.context.fillRect(screenItem.x * this.fontWidth,
                            screenItem.y * this.fontHeight,
                            this.fontWidth,
                            this.fontHeight);

      this.context.restore();
    };

    Screen.prototype.getMaxX = function getMaxX() {
      return (this.canvas.width / this.fontWidth) - 1;
    };

    Screen.prototype.getMaxY = function getMaxY() {
      return (this.canvas.height / this.fontHeight) - 1;
    };

    Screen.prototype.randomX = function randomX() {
      return Math.floor(Math.random() * this.getMaxX());
    };

    Screen.prototype.randomY = function randomY() {
      return Math.floor(Math.random() * this.getMaxY());
    };

    return Screen;

})(com.robotfindskitten || {}, this);

com.robotfindskitten.Robot = (function(rfk, global) {

  var Robot = function(screen) {

    this.screen = screen;

    this.character = "#";
    this.color = "grey";
    this.x = 0;
    this.y = 0;
  };

  Robot.prototype.move = function move(x, y) {
    this.x = x;
    this.y = y;
  };

  Robot.prototype.draw = function draw() {
    this.screen.drawScreenItem(this);
  };

  Robot.prototype.erase = function draw() {
    this.screen.clearScreenItem(this);
  };

  Robot.prototype.drawGraphic = function drawGraphic(x, y) {

    // [-]
    this.screen.drawScreenItem({"character" : "[", "color" : "blue", "x" : x, "y" : y});
    this.screen.drawScreenItem({"character" : "-", "color" : "cyan", "x" : x+1, "y" : y});
    this.screen.drawScreenItem({"character" : "]", "color" : "blue", "x" : x+2, "y" : y});

    // (+)=C
    this.screen.drawScreenItem({"character" : "(", "color" : "blue", "x" : x, "y" : y+1});
    this.screen.drawScreenItem({"character" : "+", "color" : "red", "x" : x+1, "y" : y+1});
    this.screen.drawScreenItem({"character" : ")", "color" : "blue", "x" : x+2, "y" : y+1});
    this.screen.drawScreenItem({"character" : "=", "color" : "cyan", "x" : x+3, "y" : y+1});
    this.screen.drawScreenItem({"character" : "C", "color" : "cyan", "x" : x+4, "y" : y+1});

    // | |
    this.screen.drawScreenItem({"character" : "|", "color" : "blue", "x" : x, "y" : y+2});
    this.screen.drawScreenItem({"character" : "|", "color" : "blue", "x" : x+2, "y" : y+2});

    // OOO
    this.screen.drawScreenItem({"character" : "O", "color" : "gray", "x" : x, "y" : y+3});
    this.screen.drawScreenItem({"character" : "O", "color" : "gray", "x" : x+1, "y" : y+3});
    this.screen.drawScreenItem({"character" : "O", "color" : "gray", "x" : x+2, "y" : y+3});
  };

  return Robot;

})(com.robotfindskitten || {}, this);

com.robotfindskitten.Kitten = (function(rfk, global) {

  var characterGenerator = new rfk.CharacterGenerator();
  var colorGenerator = new rfk.ColorGenerator();

  var Kitten;

  Kitten = function(screen, x, y) {
    this.screen = screen;
    this.character = characterGenerator.randomCharacter();
    this.color = colorGenerator.randomColor();
    this.x = x;
    this.y = y;
  };

  Kitten.prototype.draw = function draw() {
    this.screen.drawScreenItem(this);
  };

  Kitten.prototype.erase = function draw() {
    this.screen.clearScreenItem(this);
  };

  Kitten.prototype.drawGraphic = function drawGraphic(x, y) {
    // |\_/|
    this.screen.drawScreenItem({"character" : "|", "color" : "orange", "x" : x+1, "y" : y});
    this.screen.drawScreenItem({"character" : "\\", "color" : "orange", "x" : x+2, "y" : y});
    this.screen.drawScreenItem({"character" : "_", "color" : "orange", "x" : x+3, "y" : y});
    this.screen.drawScreenItem({"character" : "/", "color" : "orange", "x" : x+4, "y" : y});
    this.screen.drawScreenItem({"character" : "|", "color" : "orange", "x" : x+5, "y" : y});

    // |o o|__
    this.screen.drawScreenItem({"character" : "|", "color" : "orange", "x" : x+1, "y" : y+1});
    this.screen.drawScreenItem({"character" : "o", "color" : "green", "x" : x+2, "y" : y+1});
    this.screen.drawScreenItem({"character" : "o", "color" : "green", "x" : x+4, "y" : y+1});
    this.screen.drawScreenItem({"character" : "|", "color" : "orange", "x" : x+5, "y" : y+1});
    this.screen.drawScreenItem({"character" : "_", "color" : "orange", "x" : x+6, "y" : y+1});
    this.screen.drawScreenItem({"character" : "_", "color" : "orange", "x" : x+7, "y" : y+1});

    // =-*-=__\
    this.screen.drawScreenItem({"character" : "=", "color" : "white", "x" : x+1, "y" : y+2});
    this.screen.drawScreenItem({"character" : "-", "color" : "white", "x" : x+2, "y" : y+2});
    this.screen.drawScreenItem({"character" : "*", "color" : "red", "x" : x+3, "y" : y+2});
    this.screen.drawScreenItem({"character" : "-", "color" : "white", "x" : x+4, "y" : y+2});
    this.screen.drawScreenItem({"character" : "=", "color" : "white", "x" : x+5, "y" : y+2});
    this.screen.drawScreenItem({"character" : "_", "color" : "orange", "x" : x+6, "y" : y+2});
    this.screen.drawScreenItem({"character" : "_", "color" : "orange", "x" : x+7, "y" : y+2});
    this.screen.drawScreenItem({"character" : "\\", "color" : "orange", "x" : x+8, "y" : y+2});

    // c_c__(___)
    this.screen.drawScreenItem({"character" : "c", "color" : "orange", "x" : x, "y" : y+3});
    this.screen.drawScreenItem({"character" : "_", "color" : "orange", "x" : x+1, "y" : y+3});
    this.screen.drawScreenItem({"character" : "c", "color" : "orange", "x" : x+2, "y" : y+3});
    this.screen.drawScreenItem({"character" : "_", "color" : "orange", "x" : x+3, "y" : y+3});
    this.screen.drawScreenItem({"character" : "_", "color" : "orange", "x" : x+4, "y" : y+3});
    this.screen.drawScreenItem({"character" : "(", "color" : "orange", "x" : x+5, "y" : y+3});
    this.screen.drawScreenItem({"character" : "_", "color" : "orange", "x" : x+6, "y" : y+3});
    this.screen.drawScreenItem({"character" : "_", "color" : "orange", "x" : x+7, "y" : y+3});
    this.screen.drawScreenItem({"character" : "_", "color" : "orange", "x" : x+8, "y" : y+3});
    this.screen.drawScreenItem({"character" : ")", "color" : "orange", "x" : x+9, "y" : y+3});
  };

  return Kitten;

})(com.robotfindskitten || {}, this);

com.robotfindskitten.NonKittenItems = (function(rfk, global) {

  var characterGenerator = new rfk.CharacterGenerator();
  var colorGenerator = new rfk.ColorGenerator();
  var nonKittenItemNames = new rfk.NonKittenItemNames();

  var NonKittenItems;

  NonKittenItems = function(screen) {
    this.screen = screen;
    this.nonKittenItems = [];
  }

  NonKittenItems.prototype.initialize = function(totalNkiCount) {

    this.nonKittenItems.length = 0;

    for (var nkiCount = 0; nkiCount < totalNkiCount; nkiCount++)
    {
      var x = this.screen.randomX();
      var y = this.screen.randomY();

      if (!this.nonKittenItems[y])
      {
        this.nonKittenItems[y] = [];
      }

      while (this.nonKittenItems[y] && this.nonKittenItems[y][x])
      {
        x = this.screen.randomX();
      }

      this.nonKittenItems[y][x] = { "character" : characterGenerator.randomCharacter(),
                                    "color" : colorGenerator.randomColor(),
                                    "x" : x,
                                    "y" : y,
                                    "text" : nonKittenItemNames.randomItem()};
    }
  };

  NonKittenItems.prototype.draw = function draw() {

    for (var y in this.nonKittenItems) {

      for (var x in this.nonKittenItems[y]) {
        this.screen.drawScreenItem(this.nonKittenItems[y][x]);
      }
    }
  };

  NonKittenItems.prototype.isNkiAtLocation = function isNkiAtLocation(x, y) {
    return ((this.nonKittenItems[y]) !== undefined && (this.nonKittenItems[y][x] !== undefined));
  };

  NonKittenItems.prototype.getNkiAtLocation = function getNkiAtLocation(x, y) {
    return this.nonKittenItems[y][x];
  };

  return NonKittenItems;

})(com.robotfindskitten || {}, this);

com.robotfindskitten.Heart = (function(rfk, global) {

  var Heart;

  Heart = function(screen) {
    this.screen = screen;
  };

  Heart.prototype.drawGraphic = function drawGraphic(x, y) {
    // .::. .::.
    this.screen.drawScreenItem({"character" : ".", "color" : "red", "x" : x, "y" : y});
    this.screen.drawScreenItem({"character" : ":", "color" : "red", "x" : x+1, "y" : y});
    this.screen.drawScreenItem({"character" : ":", "color" : "red", "x" : x+2, "y" : y});
    this.screen.drawScreenItem({"character" : ".", "color" : "red", "x" : x+3, "y" : y});
    this.screen.drawScreenItem({"character" : ".", "color" : "red", "x" : x+5, "y" : y});
    this.screen.drawScreenItem({"character" : ":", "color" : "red", "x" : x+6, "y" : y});
    this.screen.drawScreenItem({"character" : ":", "color" : "red", "x" : x+7, "y" : y});
    this.screen.drawScreenItem({"character" : ".", "color" : "red", "x" : x+8, "y" : y});

    // :::::::::
    for (var offset = 0; offset < 9; offset++) {
      this.screen.drawScreenItem({"character" : ":", "color" : "red", "x" : x + offset, "y" : y+1});
    }

    // ':::::::'
    this.screen.drawScreenItem({"character" : "'", "color" : "red", "x" : x, "y" : y+2});
    for (offset = 1; offset < 7; offset++) {
      this.screen.drawScreenItem({"character" : ":", "color" : "red", "x" : x + offset, "y" : y+2});
    }
    this.screen.drawScreenItem({"character" : "'", "color" : "red", "x" : x + 7, "y" : y+2});

    //   ':::'
    this.screen.drawScreenItem({"character" : "'", "color" : "red", "x" : x+2, "y" : y+3});
    this.screen.drawScreenItem({"character" : ":", "color" : "red", "x" : x+3, "y" : y+3});
    this.screen.drawScreenItem({"character" : ":", "color" : "red", "x" : x+4, "y" : y+3});
    this.screen.drawScreenItem({"character" : ":", "color" : "red", "x" : x+5, "y" : y+3});
    this.screen.drawScreenItem({"character" : "'", "color" : "red", "x" : x+6, "y" : y+3});
  };

  return Heart;

})(com.robotfindskitten || {}, this);

com.robotfindskitten.Game = (function(rfk, global) {

  var NKI_COUNT = 20;

  var Game;

  Game = function init(canvas, nkiElement) {
     this.screen = new rfk.Screen(canvas);
     this.nkiElement = nkiElement;

     this.robot = new rfk.Robot(this.screen);
     this.nkis = new rfk.NonKittenItems(this.screen);
     this.heart = new rfk.Heart(this.screen);

     this.startGameListeners = [];
     this.kittenFoundListeners = [];

     var self = this;

     global.addEventListener("keyup", function(e) { self.handleKeyup(e); }, false);
     global.addEventListener("keydown", function(e) { self.handleKeydown(e); }, false);

     canvas.addEventListener("touchstart", function(e) { self.handleTouchStart(e); }, false);
     canvas.addEventListener("touchmove", function(e) { self.handleTouchMove(e); }, false);
     canvas.addEventListener("touchend", function(e) { self.handleTouchEnd(e); }, false);
     canvas.addEventListener("touchcancel", function(e) { self.handleTouchEnd(e); }, false);
  };

  Game.prototype.startGame = function startGame() {
     this.screen.clearScreen();
     this.nkis.initialize(NKI_COUNT);
     this.nkis.draw();

     this.initializeRobotLocation();
     this.robot.draw();

     this.initializeKitten();
     this.kitten.draw();

     for (var i = 0; i < this.startGameListeners.length; i++) {
       this.startGameListeners[i]();
     }
  };

  Game.prototype.addStartGameListener = function addStartGameListener(startGameListener) {
    if (startGameListener && (typeof(startGameListener) === "function")) {
      this.startGameListeners.push(startGameListener);
    }
  };

  Game.prototype.addKittenFoundListener = function addKittenFoundListener(kittenFoundListener) {
    if (kittenFoundListener && (typeof(kittenFoundListener) === "function")) {
      this.kittenFoundListeners.push(kittenFoundListener);
    }
  };

  Game.prototype.initializeRobotLocation = function initializeRobotLocation() {
    var x = this.screen.randomX();
    var y = this.screen.randomY();

    while (this.nkis.isNkiAtLocation(x, y))
    {
        x = this.screen.randomX();
        y = this.screen.randomY();
    }

    this.robot.move(x, y);
  };

  Game.prototype.initializeKitten = function initializeKitten() {
    var x = this.screen.randomX();
    var y = this.screen.randomY();

    while (this.nkis.isNkiAtLocation(x, y) ||
           (this.robot.x === x && this.robot.y === y))
    {
      x = this.screen.randomX();
      y = this.screen.randomY();
    }

    this.kitten = new rfk.Kitten(this.screen, x, y);
  };

  Game.prototype.displayNki = function displayNki(nki, color) {
    this.nkiElement.innerHTML = nki;
    color = color || "white";
    this.nkiElement.style.color = color;
  };

  Game.prototype.handleKeydown = function handleKeydown(event) {

    if (this.animating) {
      return;
    }

    switch (event.keyCode) {
      case 38:  // Up arrow
      case 87:  // W
      case 75:  // K (vi)
        this.moveRobot(0, -1);
        event.preventDefault();
        break;

      case 40:  // Down arrow
      case 83:  // S
      case 74:  // J (vi)
        this.moveRobot(0, 1);
        event.preventDefault();
        break;

      case 37:  // Left arrow
      case 65:  // A
      case 72:  // H (vi)
        this.moveRobot(-1, 0);
        event.preventDefault();
        break;

      case 39:  // Right arrow
      case 68:  // D
      case 76:  // L (vi)
        this.moveRobot(1, 0);
        event.preventDefault();
        break;
    }
  };

  Game.prototype.handleKeyup = function handleKeyup(event) {
    if (event.keyCode === 27 && !this.animating) {
        this.startGame();
    }
  };

  Game.prototype.handleTouchStart = function handleTouchStart(event) {
    if (event.touches.length === 1)
    {
      this.firstX = event.touches[0].pageX;
      this.firstY = event.touches[0].pageY;
    }
  };

  Game.prototype.handleTouchMove = function handleTouchMove(event) {
    if (event.changedTouches.length === 1)
    {
      this.lastX = event.changedTouches[0].pageX;
      this.lastY = event.changedTouches[0].pageY;
      event.preventDefault();
    }
  };

  Game.prototype.handleTouchEnd = function handleTouchEnd(event) {

    var MIN_TRAVEL_DISTANCE = 10;

    var diffX = this.lastX - this.firstX;
    var diffY = this.lastY - this.firstY;

    if (Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX > MIN_TRAVEL_DISTANCE) {
        this.moveRobot(1, 0);
      }
      else if (diffX < -MIN_TRAVEL_DISTANCE) {
        this.moveRobot(-1, 0);
      }
    }
    else
    {
      if (diffY > MIN_TRAVEL_DISTANCE) {
        this.moveRobot(0, 1);
      }
      else if (diffY < -MIN_TRAVEL_DISTANCE) {
        this.moveRobot(0, -1);
      }
    }
  };

  Game.prototype.moveRobot = function moveRobot(deltaX, deltaY) {
    var newRobotX = this.robot.x + deltaX;
    var newRobotY = this.robot.y + deltaY;

    if (((newRobotX >= 0) && (newRobotX <= this.screen.getMaxX())) &&
       ((newRobotY >= 0) && (newRobotY < this.screen.getMaxY())))
    {
      if (this.nkis.isNkiAtLocation(newRobotX, newRobotY))
      {
        var nki = this.nkis.getNkiAtLocation(newRobotX, newRobotY);
        this.displayNki(nki.text, nki.color);
      }
      else if ((this.kitten.x === newRobotX) && (this.kitten.y === newRobotY))
      {
          this.foundKitten();
      }
      else
      {
        this.robot.erase();
        this.robot.move(newRobotX, newRobotY);
        this.robot.draw();
      }
    }
  };

  Game.prototype.foundKitten = function foundKitten() {
    this.displayNki("You found kitten!!!!! Press [ESC] or 'New Game' to play again.");

    for (var i = 0; i < this.kittenFoundListeners.length; i++) {
      this.kittenFoundListeners[i]();
    }

    this.playAnimation(0);
  };

  Game.prototype.playAnimation = function playAnimation(offset) {
    if (offset !== 15) {
      this.animating = true;
      this.screen.clearScreen();

      var top = (this.screen.getMaxY() / 2) - 2;
      var self = this;

      this.robot.drawGraphic(6 + offset, top);
      this.heart.drawGraphic(this.screen.getMaxX() / 2 - 6, top);
      this.kitten.drawGraphic(this.screen.getMaxX() - 15 - offset, top);

      setTimeout(function() { self.playAnimation(offset + 1); }, 250);
    }
    else
    {
      this.animating = false;
    }
  };

  return Game;

})(com.robotfindskitten || {}, this);