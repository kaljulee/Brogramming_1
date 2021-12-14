# Brogramming_1
Intro To Brogramming

This is the git repository for our first programming project!  Here are some things to get started with.

## Installing a Text Editor
Life is easier when using a text editor to write code.  There are many, but I'm suggesting Atom for what we're doing.  This is because:
- It's not too big of a program
- The interface is relatively uncluttered
- It's pretty
- I'm using it, so I can try to answer any questions you have

### Step 1: Install Atom
You can download it here:
https://atom.io/

### Step 2: Install Some Atom Packages
There's some extra stuff we can install into the text editor that makes it easier to both write and fix our code.
The welcome guide panel makes it pretty easy to find the package installer button.
![open_installer_button](https://user-images.githubusercontent.com/18056305/145898635-ff00f588-3d52-48a2-bb9d-7aeca0db9087.png)

Atom comes with a bunch of packages already installed, so some of the things in this list might already be installed.  Search for these terms in the installer, and install the package that has uninstall / disable buttons in the image.  Installing these (or these versions) isn't strictly necessary, but the more similar our setups are, the more likely I can answer any questions that come up.
![beautify](https://user-images.githubusercontent.com/18056305/146071894-bad136b5-6e8d-4bc4-8e28-796125b214e4.png)
![console](https://user-images.githubusercontent.com/18056305/146071907-bb348c9a-ab5c-4897-ba05-e13dd98c6991.png)
![highlight](https://user-images.githubusercontent.com/18056305/146071922-e1567108-9654-40c5-bc27-4c02903b5e5c.png)
![preview](https://user-images.githubusercontent.com/18056305/146071936-118b01bc-45a0-4cc5-a283-a8a23e93e180.png)


That should do it for setting up Atom!

### Step 3 Set Up A File Structure
This is pretty straight-forward, I just put a folder named "atom projects" on my desktop.  It's not the most tech-savvy place to drop the folder, but It's pretty convenient.  Inside that folder, make one titled "brogramming_1".
![folders](https://user-images.githubusercontent.com/18056305/146073195-b060339d-3cda-46d1-b3f4-0b136289af6a.png)


### Step 4 Set Up Git (kinda optional)
It doesn't always feel like it, but git the easiest way for us to all work on a project together.  Figuring out git isn't necessary to determine whether or not you like programming, and we're not doing anything too complicated yet, so copy-pasting text from git files is a perfectly reasonable option at this point.  If you want to set it up, try following these steps:
-Sign up for an account at https://github.com/ .  
-Download and install the GitHub CLI (command-line interface) from https://cli.github.com/ .  

The GitHub CLI isn't strictly necessary, but I find it helpful.

Next, we'll sign into GitHub using the CLI, and (if everything works right) download this brogramming project.

Go back to the 'atom projects' folder.  Hold shift and left-click on the brogramming_1 folder, then pick 'Open PowerShell window here'. 
![open_powershell](https://user-images.githubusercontent.com/18056305/146076824-a0df64bf-693e-4c02-b42d-251d3511a802.png)

This will open a terminal window in the brogramming_1 folder.
![in_powershell](https://user-images.githubusercontent.com/18056305/146077195-a7191119-993f-4a2f-ab59-090a46fdbeb7.png)

We'll use this to set up git and download this programming project.

use the command `gh auth login`, and select the option GitHub.com
![gh_auth_login](https://user-images.githubusercontent.com/18056305/146084268-a5c3a97e-eb61-49e0-84b9-ea32bc2aa221.png)

Pick the HTTPS option
![pick_https](https://user-images.githubusercontent.com/18056305/146084662-a86372d1-fe05-4fa0-956c-26259ac384a6.png)

Reply `Y` to using github credentials
![pick_github_credentials](https://user-images.githubusercontent.com/18056305/146084814-a4122b3f-e909-4a7e-ae0d-ec2f47594c7f.png)

Pick `Login with a web browser`
![pick_browser_login](https://user-images.githubusercontent.com/18056305/146084974-d533ab80-e560-4304-b0fe-b2b945264594.png)

Press enter and enter your code in the github website that opens
![enter_code](https://user-images.githubusercontent.com/18056305/146085030-eb8baeee-42ea-4917-9f10-41f9743ed36a.png)

Hit enter again, and things should look more or less like this
![success](https://user-images.githubusercontent.com/18056305/146085069-c1e1fc5d-405a-4b24-8a77-8500afaff0fa.png)

If all that worked, you can go up to the top of the page, hit the green `Code` button, pick `GitHub CLI`, and copy the code into the terminal.  This will download the project files.
![clone](https://user-images.githubusercontent.com/18056305/146086967-2a5291b2-1344-4116-b278-3b46696eca87.png)

If all THAT worked, then you accidentally added a second brogramming_1 folder!  That is, instead of `atom projects\brogramming_1\`, we have `atom projects\brogramming_1\brogramming_1`.  This happens to me more often than I'll admit.  You can move the inner `brogramming_1` folder up a level so they're not nested, or you can just leave it like this.  

That should get you all set up!  There should be an `index.html` file that you can open in a web browser.  
If this didn't work, let me know how it didn't, and I'll see where I forgot a step.
