const constants = {
    MESSAGE_WARNING: {
        title: "Need More Information",
        message: "Please complete the message form with the required information",
        type: "warning",
        insert: "top",
        container: "top-right",
        animationIn: ["animated", "fadeIn"],
        animationOut: ["animated", "fadeOut"],
        dismiss: {
          duration: 5000,
          onScreen: true
        }
      },
    MESSAGE_SUCCESS: {
        title: "Message Sent!",
        message: "You have messaged Claudio. He'll get back to you in a few",
        type: "success",
        insert: "top",
        container: "top-right",
        animationIn: ["animated", "fadeIn"],
        animationOut: ["animated", "fadeOut"],
        dismiss: {
          duration: 5000,
          onScreen: true
        }
      }
}

export default constants;