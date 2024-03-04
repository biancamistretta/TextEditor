const butInstall = document.getElementById('buttonInstall');

let deferredPrompt;

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent the default behavior
  event.preventDefault();
  // Stash the event so it can be triggered later
  deferredPrompt = event;
  // Show install button
  butInstall.style.display = 'block';
});

// Click event handler for the butInstall element
butInstall.addEventListener('click', async () => {
  if (deferredPrompt) {
    // Show the install prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    const choiceResult = await deferredPrompt.userChoice;
    // Reset the deferredPrompt variable
    deferredPrompt = null;
    // Hide the install button
    butInstall.style.display = 'none';
  }
});

// Handler for the appinstalled event
window.addEventListener('appinstalled', (event) => {
  // The PWA was successfully installed
  console.log('App successfully installed');
});
