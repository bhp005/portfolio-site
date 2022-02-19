let net;
const classifier = knnClassifier.create();
const webcamElement = document.getElementById('webcam');
async function app(){
    console.log("Loading mobilenet...");
    net = await mobilenet.load();
    console.log("Loaded the model");
    const webcam = await tf.data.webcam(webcamElement);
    const addExample = async classId => {
        // Capture an image from the web camera.
        const img = await webcam.capture();
        console.log("Adding example");
        // Get the intermediate activation of MobileNet 'conv_preds' and pass that
        // to the KNN classifier.
        const activation = net.infer(img, true);
        // Pass the intermediate activation to the classifier.
        classifier.addExample(activation, classId);
        // Dispose the tensor to release the memory.
        img.dispose();
    };
    document.getElementById('class-a').addEventListener('click', () => addExample(0));
    document.getElementById('class-b').addEventListener('click', () => addExample(1));
    document.getElementById('class-c').addEventListener('click', () => addExample(2));
    while (true) {
        if (classifier.getNumClasses() > 0) {
          const img = await webcam.capture()
          // Get the activation from mobilenet from the webcam.
          const activation = net.infer(img, 'conv_preds');
          // Get the most likely class and confidence from the classifier module.
          const result = await classifier.predictClass(activation);
          const classes = ['Person', '[pencil', 'phone'];
          document.getElementById('console').innerText = `
            prediction: ${classes[result.label]}\n
            probability: ${result.confidences[result.label]}
          `;
          // Dispose the tensor to release the memory.
          img.dispose();
        }
        await tf.nextFrame();
    }
}
app();