let options = document.getElementById('editOptions');
let selected = document.getElementById('selectedOption');

options.addEventListener('change', () => {
    if (options.value == "pins") {
        selected.innerHTML = `
            <h1>Create Pin</h1>
                <form>
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
                    <input type="text" id="locaArea" name="localArea">
                    <br>
                    <label for"mountain">Mountain (optional)</label> 
                    <br>
                    <input type="text" id="mountain" name="mountain">
                    <br>
                    <input type="submit" value="Submit">
                </form>
            <h1>Update Existing Pin</h1>
                <form>

                    <input type="submit" value="Submit">
                </form>
            <h1>Delete Existing Pin</h1>
                <form>

                    <input type="submit" value="Submit">
                </form>
        `
    }
    if (options.value == "people") {
        selected.innerHTML = `
            <h1>Add Person</h1>
                <form>
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
                    <input type="submit" value="Submit">
                </form>

            <h1>Update Existing Person</h1>
            <h1>Remove Person</h1>
        `
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
})
