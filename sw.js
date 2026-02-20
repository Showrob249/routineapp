self.addEventListener("notificationclick", function(event) {
  if (event.action === "snooze") {
    event.waitUntil(
      new Promise(resolve => {
        setTimeout(() => {
          self.registration.showNotification("⏰ Snoozed Reminder", {
            body: "Don't forget your task!",
            icon: "icon.png"
          });
          resolve();
        }, 5 * 60 * 1000);
      })
    );
  }
  event.notification.close();
});
