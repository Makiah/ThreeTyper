// Reading text files from client side seems janky
var documents = {
    "loremipsum": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \nExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
    "gettysburgaddress": "Four score and seven years ago our fathers brought forth on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal. \nNow we are engaged in a great civil war, testing whether that nation, or any nation so conceived and dedicated, can long endure. \nWe are met on a great battle-field of that war. \nWe have come to dedicate a portion of that field, as a final resting place for those who here gave their lives that that nation might live. \nIt is altogether fitting and proper that we should do this. \nBut, in a larger sense, we can not dedicate — we can not consecrate — we can not hallow — this ground. \nThe brave men, living and dead, who struggled here, have consecrated it, far above our poor power to add or detract. \nThe world will little note, nor long remember what we say here, but it can never forget what they did here. \nIt is for us the living, rather, to be dedicated here to the unfinished work which they who fought here have thus far so nobly advanced. \nIt is rather for us to be here dedicated to the great task remaining before us — that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion — that we here highly resolve that these dead shall not have died in vain — that this nation, under God, shall have a new birth of freedom — and that government of the people, by the people, for the people, shall not perish from the earth.", 
    "beemovie": `According to all known laws of aviation, there is no way a bee should be able to fly. \nIts wings are too small to get its fat little body off the ground. \nThe bee, of course, flies anyway because bees don't care what humans think is impossible. \nYellow, black. \nYellow, black. \nYellow, black. \nYellow, black. \nOoh, black and yellow! Let's shake it up a little. \nBarry! Breakfast is ready! Ooming! Hang on a second. \nHello? - Barry? - Adam? - Oan you believe this is happening? - I can't. \nI'll pick you up. \nLooking sharp. \nUse the stairs. \nYour father paid good money for those. \nSorry. \nI'm excited. \nHere's the graduate. \nWe're very proud of you, son. \nA perfect report card, all B's. \nVery proud. \nMa! I got a thing going here. \n- You got lint on your fuzz. \n- Ow! That's me! - Wave to us! We'll be in row 118,000. \n- Bye! Barry, I told you, stop flying in the house! - Hey, Adam. \n- Hey, Barry. \n- Is that fuzz gel? - A little. \nSpecial day, graduation. \nNever thought I'd make it. \nThree days grade school, three days high school. \nThose were awkward. \nThree days college. \nI'm glad I took a day and hitchhiked around the hive. \nYou did come back different. \n- Hi, Barry. \n- Artie, growing a mustache? Looks good. \n- Hear about Frankie? - Yeah. \n- You going to the funeral? - No, I'm not going. \nEverybody knows, sting someone, you die. \nDon't waste it on a squirrel. \nSuch a hothead. \nI guess he could have just gotten out of the way. \nI love this incorporating an amusement park into our day. \nThat's why we don't need vacations. \nBoy, quite a bit of pomp... \nunder the circumstances. \n- Well, Adam, today we are men. \n- We are! - Bee-men. \n- Amen! Hallelujah! Students, faculty, distinguished bees, please welcome Dean Buzzwell. \nWelcome, New Hive Oity graduating class of... \n...9:15. \nThat concludes our ceremonies. \nAnd begins your career at Honex Industries! Will we pick ourjob today? I heard it's just orientation. \nHeads up! Here we go. \nKeep your hands and antennas inside the tram at all times. \n- Wonder what it'll be like? - A little scary. \nWelcome to Honex, a division of Honesco and a part of the Hexagon Group. \nThis is it! Wow. \nWow. \nWe know that you, as a bee, have worked your whole life to get to the point where you can work for your whole life. \nHoney begins when our valiant Pollen Jocks bring the nectar to the hive. \nOur top-secret formula is automatically color-corrected, scent-adjusted and bubble-contoured into this soothing sweet syrup with its distinctive golden glow you know as... \nHoney! - That girl was hot. \n- She's my cousin! - She is? - Yes, we're all cousins. \n- Right. \nYou're right. \n- At Honex, we constantly strive to improve every aspect of bee existence. \nThese bees are stress-testing a new helmet technology. \n- What do you think he makes? - Not enough. \nHere we have our latest advancement, the Krelman. \n- What does that do? - Oatches that little strand of honey that hangs after you pour it. \nSaves us millions. \nOan anyone work on the Krelman? Of course. \nMost bee jobs are small ones. \nBut bees know that every small job, if it's done well, means a lot. \nBut choose carefully because you'll stay in the job you pick for the rest of your life. \nThe same job the rest of your life? I didn't know that. \nWhat's the difference? You'll be happy to know that bees, as a species, haven't had one day off in 27 million years. \nSo you'll just work us to death? We'll sure try. \nWow! That blew my mind! "What's the difference?" How can you say that? One job forever? That's an insane choice to have to make. \nI'm relieved. \nNow we only have to make one decision in life. \nBut, Adam, how could they never have told us that? Why would you question anything? We're bees. \nWe're the most perfectly functioning society on Earth. \nYou ever think maybe things work a little too well here? Like what? Give me one example. \nI don't know. \nBut you know what I'm talking about. \nPlease clear the gate. \nRoyal Nectar Force on approach. \nWait a second. \nOheck it out. \n- Hey, those are Pollen Jocks! - Wow. \nI've never seen them this close. \nThey know what it's like outside the hive. \nYeah, but some don't come back. \n- Hey, Jocks! - Hi, Jocks! You guys did great! You're monsters! You're sky freaks! I love it! I love it! - I wonder where they were. \n- I don't know. \nTheir day's not planned. \nOutside the hive, flying who knows where, doing who knows what. \nYou can'tjust decide to be a Pollen Jock. \nYou have to be bred for that. \nRight. \nLook. \nThat's more pollen than you and I will see in a lifetime. \nIt's just a status symbol. \nBees make too much of it. \nPerhaps. \nUnless you're wearing it and the ladies see you wearing it. \nThose ladies? Aren't they our cousins too? Distant. \nDistant. \nLook at these two. \n- Oouple of Hive Harrys. \n- Let's have fun with them. \nIt must be dangerous being a Pollen Jock. \nYeah. \nOnce a bear pinned me against a mushroom! He had a paw on my throat, and with the other, he was slapping me! - Oh, my! - I never thought I'd knock him out. \nWhat were you doing during this? Trying to alert the authorities. \nI can autograph that. \nA little gusty out there today, wasn't it, comrades? Yeah. \nGusty. \nWe're hitting a sunflower patch six miles from here tomorrow. \n- Six miles, huh? - Barry! A puddle jump for us, but maybe you're not up for it. \n- Maybe I am. \n- You are not! We're going 0900 at J-Gate. \nWhat do you think, buzzy-boy? Are you bee enough? I might be. \nIt all depends on what 0900 means. \nHey, Honex! Dad, you surprised me. \nYou decide what you're interested in? - Well, there's a lot of choices. \n- But you only get one. \nDo you ever get bored doing the same job every day? Son, let me tell you about stirring. \nYou grab that stick, and you just move it around, and you stir it around. \nYou get yourself into a rhythm. \nIt's a beautiful thing. \nYou know, Dad, the more I think about it, maybe the honey field just isn't right for me. \nYou were thinking of what, making balloon animals? That's a bad job for a guy with a stinger. \nJanet, your son's not sure he wants to go into honey! - Barry, you are so funny sometimes. \n- I'm not trying to be funny. \nYou're not funny! You're going into honey. \nOur son, the stirrer! - You're gonna be a stirrer? - No one's listening to me! Wait till you see the sticks I have. \nI could say anything right now. \nI'm gonna get an ant tattoo! Let's open some honey and celebrate! Maybe I'll pierce my thorax. \nShave my antennae. \nShack up with a grasshopper. \nGet a gold tooth and call everybody "dawg"! I'm so proud. \n- We're starting work today! - Today's the day. \nOome on! All the good jobs will be gone. \nYeah, right. \nPollen counting, stunt bee, pouring, stirrer, front desk, hair removal... \n- Is it still available? - Hang on. \nTwo left! One of them's yours! Oongratulations! Step to the side. \n- What'd you get? - Picking crud out. \nStellar! Wow! Oouple of newbies? Yes, sir! Our first day! We are ready! Make your choice. \n- You want to go first? - No, you go. \nOh, my. \nWhat's available? Restroom attendant's open, not for the reason you think. \n- Any chance of getting the Krelman? - Sure, you're on. \nI'm sorry, the Krelman just closed out. \nWax monkey's always open. \nThe Krelman opened up again. \nWhat happened? A bee died. \nMakes an opening. \nSee? He's dead. \nAnother dead one. \nDeady. \nDeadified. \nTwo more dead. \nDead from the neck up. \nDead from the neck down. \nThat's life! Oh, this is so hard! Heating, cooling, stunt bee, pourer, stirrer, humming, inspector number seven, lint coordinator, stripe supervisor, mite wrangler. \nBarry, what do you think I should... \nBarry? Barry!`
};

// Get elements by id
var container = document.getElementById("typingBackground");
var staticContentWrapper = document.getElementById("computerBorder");
var textEditorWindow = document.getElementById("textEditor");
var orderedContent = document.getElementById("textEditorOL");
var currentContentBlurb;

var currentFullscreenStatuses = {'textEditor': true};
var currentOpenStatuses = {'textEditor': false};

var desktopBackground = document.getElementById("desktopBackground");
var windowTitleP = document.getElementById("windowHeaderTitleP");

var camera;
var scene;
var renderer;
var model;
var clock;

var leftHandMixer;
var rightHandMixer;

var typeDuration = .1;

var leftHandPoses = {};
var rightHandPoses = {};

var previousActionLeft;
var previousActionRight;
var activeActionLeft;
var activeActionRight;

var currentCharacterTimeout;
var currentTypeTimeout;

var punctuation = {
    " ": "Space", 
    "'": "Quote", 
    "-": "Dash", 
    ".": "Period", 
    ",": "Comma", 
    "\\": "Backslash", 
    "[": "LBracket", 
    "]": "RBracket", 
    "=": "Equals", 
    "\b": "Delete", 
    ";": "Semicolon", 
    "/": "Slash", 
    "\n": "Return", 
    '\t': "Tab", 
    '\b': "Delete", 
    "`": "Tilde" // ik this is technically the wrong name but idc
};

var leftHandKeys = [punctuation['`'], '1', '2', '3', '4', '5', '6', 'q', 'w', 'e', 'r', 't', 'a', 's', 'd', 'f', 'g', 'z', 'x', 'c', 'v', 'b'];
var rightHandKeys = ['7', '8', '9', '0', punctuation['-'], punctuation['='], 'y', 'u', 'i', 'o', 'p', punctuation['['], punctuation[']'], punctuation['\\'], 'h', 'j', 'k', 'l', punctuation[';'], punctuation['\''], 'n', 'm', punctuation[','], punctuation['.'], punctuation['/'], punctuation['\n'], punctuation['\b'], punctuation['\t']];

var shiftKeys = {
    "~": punctuation["`"],
    "!": "1",
    "@": "2", 
    "#": "3", 
    "$": "4", 
    "%": "5", 
    "^": "6", 
    "&": "7", 
    "*": "8", 
    "(": "9", 
    ")": "0", 
    "_": punctuation["-"], 
    "+": punctuation["="],
    ":": punctuation[";"], 
    "|": punctuation["\\"], 
    "?": punctuation["/"], 
    "{": punctuation["["], 
    "}": punctuation["]"], 
    "<": punctuation[","], 
    ">": punctuation["."], 
    "\"": punctuation["'"]
};

function newContentBlurb() {
    currentContentBlurb = document.createElement("li");
    orderedContent.appendChild(currentContentBlurb);
}

function init() {
    // Disable the static content until the model's loaded
    staticContentWrapper.style.display = "none";
    newContentBlurb();

    clock = new THREE.Clock();

    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.25, 100);
    camera.position.set(7, 7, 0);
    camera.lookAt(new THREE.Vector3(.5, 3, 0));

    scene = new THREE.Scene();
    //scene.fog = new THREE.Fog(0xe0e0e0, 20, 100);

    // lights
    var directionalLight = new THREE.DirectionalLight(0xababab);
    directionalLight.position.set(0, 10, 3);
    scene.add(directionalLight);
    var ambientLight = new THREE.AmbientLight(0xffffff);
    scene.add(ambientLight);

    // renderer
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.gammaOutput = true;
    renderer.gammaFactor = 2.2;
    container.appendChild(renderer.domElement);

    // Resizing the window means that we have to resize the canvas
    window.addEventListener('resize', onWindowResize, false);

    // model
    var loader = new THREE.GLTFLoader();
    loader.load('./keyboard.glb', function (gltf) {
        // Load model into current scene
        model = gltf.scene;
        scene.add(model);
        console.log(model);

        // Render scene
        renderer.render(scene, camera);

        // Get actions from loaded model
        leftHandMixer = new THREE.AnimationMixer(model.children[3]);
        rightHandMixer = new THREE.AnimationMixer(model.children[2]);
        gltf.animations.forEach((animJson) => {
            if (animJson.name.indexOf("L.") == 0)
                leftHandPoses[animJson.name.substring(2)] = leftHandMixer.clipAction(animJson);
            else
                rightHandPoses[animJson.name.substring(2)] = rightHandMixer.clipAction(animJson);
        });
        console.log("Left Hand Poses", leftHandPoses);
        console.log("Right Hand Poses", rightHandPoses);

        // No character means just return to idle state
        activeActionLeft = leftHandPoses["Idle"];
        activeActionRight = rightHandPoses["Idle"];
        previousActionLeft = activeActionLeft;
        previousActionRight = activeActionRight;
        activeActionLeft.play();
        activeActionRight.play();
        
        // Enable static content
        staticContentWrapper.style.display = "block";

        // Animation can only begin after mixers are constructed
        animate();
    }, 
    undefined, 
    function (e) {
        console.error(e);
    });
}

function typeCharacterSequence(characters, callback) {
    typeCharacter(characters[0]);
    if (characters.length > 1)
    {
        currentCharacterTimeout = setTimeout(() => {
            typeCharacterSequence(characters.substring(1), callback);
        }, typeDuration * 1000 + 50);
    }
    else
    {
        currentCharacterTimeout = setTimeout(() => {
            callback();
        }, typeDuration * 1000 + 50);
    }
}

// typeCharacter("q") = lowercase q, "Q" = uppercase q
function typeCharacter(character) {
    if (character.length > 1)  
    {
        console.error("typeCharacter(\"" + character + "\") is not recognized!");
        return;
    }

    var leftHandKey = "Idle";
    var rightHandKey = "Idle";

    if (character == "")
    {
        // Do nothing
    }
    else if (character in punctuation)
    {
        var actualCode = punctuation[character];
        var isLeftHandKey = leftHandKeys.includes(actualCode);
        if (isLeftHandKey)
        {
            leftHandKey = actualCode;
        }
        else
        {
            rightHandKey = actualCode;
        }
    }
    else if (character in shiftKeys)
    {
        var unshiftedCharacter = shiftKeys[character];
        var isLeftHandKey = leftHandKeys.includes(unshiftedCharacter);
        if (isLeftHandKey)
        {
            leftHandKey = unshiftedCharacter;
            rightHandKey = "Shift";
        }
        else
        {
            leftHandKey = "Shift";
            rightHandKey = unshiftedCharacter;
        }
    }
    else 
    {
        var lowercaseCharacter = character.toLowerCase();
        var isLeftHandKey = leftHandKeys.includes(lowercaseCharacter);
        if (isLeftHandKey)
            leftHandKey = lowercaseCharacter.toUpperCase();
        else
            rightHandKey = lowercaseCharacter.toUpperCase();
        
        // If character is uppercase then have to press shift with the opposite hand
        if (character != lowercaseCharacter)
        {
            if (isLeftHandKey)
                rightHandKey = "Shift";
            else 
                leftHandKey = "Shift";
        }
    }

    console.log("Left Hand Key = " + leftHandKey)
    console.log("Right hand Key = " + rightHandKey);

    // Left hand key fade
    var newActionLeft = leftHandPoses[leftHandKey];
    if (activeActionLeft !== newActionLeft)
    {
        previousActionLeft.stop();
        newActionLeft.play();
        activeActionLeft.crossFadeTo(newActionLeft, typeDuration);
        previousActionLeft = activeActionLeft;
        activeActionLeft = newActionLeft;
    }

    // Right hand key fade 
    var newActionRight = rightHandPoses[rightHandKey];
    if (activeActionRight !== newActionRight)
    {
        previousActionRight.stop();
        newActionRight.play();
        activeActionRight.crossFadeTo(newActionRight, typeDuration);
        previousActionRight = activeActionRight;
        activeActionRight = newActionRight;
    }

    // Actually append the character at some point
    currentTypeTimeout = setTimeout(() => {
        if (character == '\n')
        {
            newContentBlurb();
        }
        else
        {
            currentContentBlurb.innerHTML += character;
        }
    }, typeDuration * 1000 - 50);
}

function animate() {
    var dt = clock.getDelta();
    leftHandMixer.update(dt);
    rightHandMixer.update(dt);
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

function onWindowResize() {
    // three.js perspective updates
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function toggleResizePopup(id) {
    if (currentFullscreenStatuses[id])
        halfScreenWindow(id);
    else 
        fullscreenWindow(id);

    console.log("Toggled popup resize");
}

function fullscreenWindow(id) {
    currentFullscreenStatuses[id] = true;

    var el = document.getElementById(id);

    el.style.width = "100%";
    el.style.height = "100%";
    el.style.margin = "0px";
}

function halfScreenWindow(id) {
    currentFullscreenStatuses[id] = false;

    var el = document.getElementById(id);

    el.style.width = "50%";
    el.style.height = "50%";
    el.style.margin = "10px";
}

function closePopupWindow(id) {
    currentOpenStatuses[id] = false;
    
    document.getElementById(id).style.display = "none";

    if (id === "textEditor")
    {
        if (currentCharacterTimeout)
            clearTimeout(currentCharacterTimeout);
        if (currentTypeTimeout)
            clearTimeout(currentTypeTimeout);
        orderedContent.innerHTML = "";
        newContentBlurb();
        typeCharacter("");
    }
}

function openPopupWindow(id) {
    currentOpenStatuses[id] = true;
    document.getElementById(id).style.display = "block";   
}

function typeContentsOf(filename) {
    windowTitleP.innerHTML = "<em>" + filename + ".txt*</em>";
    typeCharacterSequence(documents[filename], () => {
        typeCharacter(""); // idle
    });
}

function openGithub() {
    window.location.href = "https://github.com/Makiah/threetyper.github.io";
}

// three.js scene setup
init();

// Reset 
closePopupWindow('textEditor');
