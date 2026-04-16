import { insertPin, addPerson } from './queries.js';

let options = document.getElementById('editOptions');
let selected = document.getElementById('selectedOption');


/*
 * adds a pin to the database 
 * submit button calls this and queries DB
 * TODO: make test cases
 */
function makePinEvent() {
    const createPinSubmitButton = document.getElementById('createPinSubmit');
    createPinSubmitButton.addEventListener ('click', async () => {

        let lat = document.getElementById('lat').value;
        let long = document.getElementById('long').value;
        let state = document.getElementById('state').value;
        let local = document.getElementById('localArea').value;
        let mountain = document.getElementById('mountain').value;

        if (lat === '' || long === '' || state === '' || local === '') {
            console.log("missing information");
            return;
        }

        let result = await insertPin(lat, long, state, local, mountain);

        //clear the results if true
       
        //TODO: fix to clear after submit, this throws error
        /*
        if (result) {
            lat.innerHTML = '';
            long.innerHTML = '';
            state.innerHTML = '';
            local.innerHTML = '';
            mountain.innerHTML = '';
        }
        */
        
    });
}

/*
 * TODO: remove case sensitivity 
 * TODO: add test cases
 * adds a person to the table
 * when submit button clicked
 */
function addPersonEvent() {
    const addPersonSubmitButton = document.getElementById('addPersonSubmit'); 
    addPersonSubmitButton.addEventListener ('click', async () => {
        
        let fname  = document.getElementById('fname').value;
        let lname  = document.getElementById('lname').value;
        let handle  = document.getElementById('handle').value;
        let bio  = document.getElementById('bio').value;
        let hometown  = document.getElementById('hometown').value;
        let pinState  = document.getElementById('pinState').value;
        let pinLocal  = document.getElementById('pinLocal').value;

        let result = await addPerson(fname, lname, handle, bio, hometown, 
                                     pinState, pinLocal);

        //TODO: fix to clear after submit, this throws error
        /*
        if (result) {
            fname.innerHTML = '';
            lname.innerHTML = '';
            handle.innerHTML = '';
            bio.innerHTML = '';
            hometown.innerHTML = '';
            pinState.innerHTML = '';
            pinLocal.innerHTML = '';
        }
        */
    });
}

/*
 * TODO: make something that calls event 
 * function based on what was clicked
 * right now only works on create
 */
options.addEventListener('change', () => {
    if (options.value == "pins") {
        selected.innerHTML = `
            <h1>Create Pin</h1>

            <label for"lat">Lat: (between -90 and 90)</label> 
            <br>
            <input type="number" id="lat" name="lat" min="-90" max="90" step="any"> 
            <br>
            <label for"long">Long: (between -180 and 180)</label> 
            <br>
            <input type="number" id="long" name="long" min="-180" max="180" step="any"> 
            <br>
            <label for"state">State (abbreviation)</label> 
            <br>
            <input type="text" id="state" name="state" maxlength="2">
            <br>
            <label for"localArea">Town</label> 
            <br>
            <input type="text" id="localArea" name="localArea">
            <br>
            <label for"mountain">Mountain (optional)</label> 
            <br>
            <input type="text" id="mountain" name="mountain">
            <br>
            <button id="createPinSubmit" type="button">Submit</button>

            <h1>Update Existing Pin</h1>
                <form>

                    <input type="submit" value="Submit">
                </form>
            <h1>Delete Existing Pin</h1>
                <form>

                    <input type="submit" value="Submit">
                </form>
        `
        makePinEvent();
    }
    if (options.value == "people") {
        selected.innerHTML = `
            <h1>Add Person</h1>

            <label for"fname">First Name</label> 
            <br>
            <input type="text" id="fname" name="fname">
            <br>
            <label for"lname">Last Name</label> 
            <br>
            <input type="text" id="lname" name="lname">
            <br>
            <label for"handle">Social Media Handle</label> 
            <br>
            <input type="text" id="handle" name="handle">
            <br>
            <label for"bio">Short Bio</label> 
            <br>
            <input type="text" id="bio" name="bio">
            <br>
            <label for"hometown">Hometown</label> 
            <br>
            <input type="text" id="hometown" name="hometown">
            <br>
            <h2>Pin association info</h2>
            <label for"pinState">State abv.</label> 
            <br>
            <input type="text" id="pinState" name="pinState">
            <br>
            <label for"pinLocal">Town</label> 
            <br>
            <input type="text" id="pinLocal" name="pinLocal">
            <br>
            <button id="addPersonSubmit" type="button">Submit</button>


            <h1>Update Existing Person</h1>
            <h1>Remove Person</h1>
        `
        addPersonEvent();
    }
    if (options.value == "videos") {
        selected.innerHTML = `
            <h1>Add Video</h1>
            <h1>Update Existing Video</h1>
            <h1>Delete Video</h1>
        `
    }
    if (options.value == "other") {
        selected.innerHTML = `
            <h1>Update Existing idk if this is needed maybe for graphics</h1>

        `
    }
});
