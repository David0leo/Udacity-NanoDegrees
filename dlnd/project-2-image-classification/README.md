# Project 2 - Image Classification

In this project, I used Tensorflow to build a convolutional neural network (CNN) which trained on images from the CIFAR-10 dataset. The network was used to classify the images from the dataset, and it ended with a testing accuracy of around 67
sdfe
## Image samples
See the [CIFAR-10 dataset at the University of Toronto's site](https://www.cs.toronto.edu/~kriz/cifar.html).
Some samples from the site are shown below:

![Bird](https://www.cs.toronto.edu/~kriz/cifar-10-sample/bird4.png "CIFAR-10 Bird") ![Red Car](https://www.cs.toronto.edu/~kriz/cifar-10-sample/automobile10.png "CIFAR-10 Automobile") ![Plane](https://www.cs.toronto.edu/~kriz/cifar-10-sample/airplane4.png "CIFAR-10 Plane") ![Dog](https://www.cs.toronto.edu/~kriz/cifar-10-sample/dog4.png "CIFAR-10 Dog") ![Deer](https://www.cs.toronto.edu/~kriz/cifar-10-sample/deer2.png "CIFAR-10 Deer") ![Boat](https://www.cs.toronto.edu/~kriz/cifar-10-sample/ship1.png "CIFAR-10 Boat") ![Horse](https://www.cs.toronto.edu/~kriz/cifar-10-sample/horse2.png "CIFAR-10 Horse") ![Frog](https://www.cs.toronto.edu/~kriz/cifar-10-sample/frog10.png "CIFAR-10 Frog") ![Cat](https://www.cs.toronto.edu/~kriz/cifar-10-sample/cat9.png "CIFAR-10 Cat")

## Predictions
As it shows in the dlnd_image_classification.ipynb file, the network settles in on a Testing prediction accuracy of around 67%. Some of the prediction results from the notebook are shown below: 
![Softmax Predictions](https://github.com/David0leo/Udacity-NanoDegrees/blob/master/dlnd/project-2-image-classification/softmax_predictions.png?raw=true)

The mediocre accuracy on this project could be improved with a few improvements:
- The network is very shallow. A deeper network architecture could show improvements in differentiating between more similar classes. For example, the network currently has a hard time with differentiating between deer and horses. A deeper architecture could help with this problem.
- The network is utilizing max pooling. We could try eliminating this.
- We could use leaky relu activation functions instead of relu functions. This may or may not improve performance, but it is worth investigating.
- The network might improve from using batch regularization on some of the layers. This is a technique learned later on in the course that proved very useful. It could lead to faster training overall.
