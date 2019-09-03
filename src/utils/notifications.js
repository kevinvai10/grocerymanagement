//
function notificationSuccess(message) {
    this.notificationDOMRef.current.addNotification({
        title: "Success!",
        message,
        type: "success",
        insert: "top",
        container: "top-right",
        animationIn: ["animated", "fadeIn"],
        animationOut: ["animated", "fadeOut"],
        dismiss: { duration: 2000 },
        dismissable: { click: true }
    });
}

export {
    notificationSuccess
}