// notifications

const notifications = document.getElementById('notification');

function closeNotification() {
 notifications.close();
}
function openNotification() {
    notifications.showModal();
   }
   

// dark mode 
const darkModeToggle = document.getElementById('dark-mode');
darkModeToggle.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode');
});
