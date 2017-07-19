# Project 4 - Language Translation

## French to English
Project 4 involved building and training a sequence to sequence model on English and corresponding French sentences. The network was fairly sucessful at translating sentences containing the 227 words used during training. Sentences with words outside of that range showed worse results, but that is to be expected. Training on a larger corpus with the same network could produce some promising results.

### Structure
The RNN built for this project used an encoder-decoder architecture. The network performed the usual sequence-to-sequence processing. The English and French vocab was mapped to integer ids for use in the network, then mapped back to words for the network's predictions. 

### Results
After some trial and error, followed by some help from a Udacity Reviewer, I got good results for the amount of data used.

As you can see in the project [notebook](https://github.com/David0leo/Udacity-NanoDegrees/blob/master/dlnd/project-4-language-translation/dlnd_language_translation.ipynb)
The graphed training loss and training/validation accuracy graphs show the results of training on text with only 227 unique words. 
![Graphs](https://github.com/David0leo/Udacity-NanoDegrees/blob/master/dlnd/project-4-language-translation/translate_graphs.png?raw=true)

Sample text with words all from the 227 word vocab is shown below with the translation prediction from the network:

___
**Input**

  Word Ids:      [171, 22, 210, 113, 34, 116, 205]
  
  English Words: ['he', 'saw', 'a', 'old', 'yellow', 'truck', '.']
  

**Prediction**

  Word Ids:      [141, 257, 264, 275, 142, 56, 61, 1]
  
  French Words: il a un vieux camion jaune . <EOS>
  

___

Here <EOS> is a token the network uses to learn when sentences should end. 
